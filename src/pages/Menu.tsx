import { useState, useCallback, useRef, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X, MessageCircle, ChefHat } from 'lucide-react';
import { getRestaurantData } from '../hooks/useRestaurantData';
import { useCart } from '../hooks/useCart';
import { saveOrder } from '../hooks/useOrders';
import TableModal from '../components/TableModal';
import OrderStatusTracker from '../components/OrderStatusTracker';
import type { Order } from '../data/defaultData';
import './Menu.css';

interface MenuPageProps {
  scanMode?: boolean;
}

export default function Menu({ scanMode = false }: MenuPageProps) {
  const data = getRestaurantData();
  const { items: cartItems, addItem, removeItem, updateQty, clearCart, total, count, badgeAnim } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [note, setNote] = useState('');
  const [activeCategory, setActiveCategory] = useState(data.categories[0]?.id || '');
  const [tableNumber, setTableNumber] = useState<string | null>(
    scanMode ? localStorage.getItem('tableNumber_dahoe') : null
  );
  const [orderSent, setOrderSent] = useState(false);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const availableItems = data.menu.filter(item => item.available);
  const categories = data.categories.sort((a, b) => a.order - b.order);

  // Scroll spy for category nav
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observers: IntersectionObserver[] = [];
    categories.forEach(cat => {
      const el = categoryRefs.current[cat.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveCategory(cat.id); },
        { threshold: 0.3, rootMargin: '-100px 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [categories]);

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    categoryRefs.current[catId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSendWhatsApp = () => {
    const message = `Commande La Table d'Ahoé :\n${cartItems.map(i => `- ${i.name} x${i.qty} → ${i.price * i.qty} FCFA`).join('\n')}\n\nTotal : ${total} FCFA${note ? '\nNote : ' + note : ''}`;
    window.open(`https://wa.me/22891016439?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
    setDrawerOpen(false);
    setNote('');
  };

  const handleSendKitchen = useCallback(() => {
    if (!tableNumber) return;
    const order: Order = {
      id: crypto.randomUUID(),
      tableNumber,
      items: cartItems.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
      total,
      note,
      status: 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    saveOrder(order);
    clearCart();
    setDrawerOpen(false);
    setNote('');
    setOrderSent(true);
  }, [tableNumber, cartItems, total, note, clearCart]);

  const handleTableConfirm = (num: string) => setTableNumber(num);

  const handleOrderReset = useCallback(() => {
    setOrderSent(false);
    setTableNumber(null);
  }, []);

  // Scan mode: show table modal if no table number
  if (scanMode && !tableNumber) {
    return <TableModal onConfirm={handleTableConfirm} />;
  }

  return (
    <div className="menu-page">
      {/* Header */}
      <div className="menu-page__header grain">
        <div className="container">
          <h1 className="menu-page__title">LA CARTE</h1>
          <p className="menu-page__subtitle text-description">
            {scanMode ? `Table ${tableNumber} — Commande directe en cuisine` : 'Commande via WhatsApp — livraison sur place'}
          </p>
        </div>
      </div>

      {/* Category Nav */}
      <div className="category-nav">
        <div className="category-nav__scroll">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-nav__pill ${activeCategory === cat.id ? 'category-nav__pill--active' : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="menu-page__content container">
        {categories.map(cat => {
          const catItems = availableItems.filter(i => i.categoryId === cat.id);
          if (catItems.length === 0) return null;
          return (
            <div
              key={cat.id}
              ref={el => { categoryRefs.current[cat.id] = el; }}
              className="menu-section"
            >
              <h2 className="menu-section__title text-category-label">{cat.name}</h2>
              <div className="menu-section__grid">
                {catItems.map(item => {
                  const inCart = cartItems.find(c => c.id === item.id);
                  return (
                    <div key={item.id} className="menu-card">
                      <div className="menu-card__img-wrap">
                        <img src={item.image} alt={item.name} className="menu-card__img img-ember" loading="lazy" />
                      </div>
                      <div className="menu-card__body">
                        <h3 className="menu-card__name text-item-name">{item.name}</h3>
                        <p className="menu-card__desc text-description">{item.description}</p>
                        <div className="menu-card__footer">
                          <span className="text-price">{item.price.toLocaleString('fr-FR')} FCFA</span>
                          {inCart ? (
                            <div className="menu-card__qty">
                              <button onClick={() => updateQty(item.id, -1)}><Minus size={16} strokeWidth={1.5} /></button>
                              <span>{inCart.qty}</span>
                              <button onClick={() => updateQty(item.id, 1)}><Plus size={16} strokeWidth={1.5} /></button>
                            </div>
                          ) : (
                            <button
                              className="menu-card__add"
                              onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                            >
                              <Plus size={16} strokeWidth={1.5} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Status Tracker (scan mode) */}
      {scanMode && orderSent && tableNumber && (
        <OrderStatusTracker tableNumber={tableNumber} onReset={handleOrderReset} />
      )}

      {/* Cart FAB */}
      {count > 0 && (
        <button className="cart-fab" onClick={() => setDrawerOpen(true)}>
          <ShoppingCart size={24} strokeWidth={1.5} />
          <span className={`cart-fab__badge ${badgeAnim ? 'cart-fab__badge--pop' : ''}`}>{count}</span>
        </button>
      )}

      {/* Cart Drawer */}
      {drawerOpen && (
        <>
          <div className="cart-overlay" onClick={() => setDrawerOpen(false)} />
          <div className="cart-drawer">
            <div className="cart-drawer__header">
              <h2 className="cart-drawer__title">MA COMMANDE</h2>
              <button className="cart-drawer__close" onClick={() => setDrawerOpen(false)}>
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-drawer__empty">
                <ShoppingCart size={48} strokeWidth={1.5} style={{ opacity: 0.25 }} />
                <p>Votre table est vide pour l'instant.</p>
              </div>
            ) : (
              <>
                <div className="cart-drawer__items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item__info">
                        <span className="cart-item__name">{item.name}</span>
                        <span className="cart-item__price text-price">{(item.price * item.qty).toLocaleString('fr-FR')} FCFA</span>
                      </div>
                      <div className="cart-item__controls">
                        <div className="cart-item__qty">
                          <button onClick={() => updateQty(item.id, -1)}><Minus size={16} strokeWidth={1.5} /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)}><Plus size={16} strokeWidth={1.5} /></button>
                        </div>
                        <button className="cart-item__delete" onClick={() => removeItem(item.id)}>
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-drawer__footer">
                  <input
                    type="text"
                    className="cart-drawer__note"
                    placeholder="Instructions spéciales..."
                    value={note}
                    onChange={e => setNote(e.target.value)}
                  />
                  <div className="cart-drawer__total">
                    <span className="cart-drawer__total-label">TOTAL</span>
                    <span className="cart-drawer__total-value">{total.toLocaleString('fr-FR')} FCFA</span>
                  </div>

                  {scanMode ? (
                    <button className="btn-kitchen" onClick={handleSendKitchen}>
                      <ChefHat size={18} strokeWidth={1.5} />
                      ENVOYER À LA CUISINE
                    </button>
                  ) : (
                    <button className="btn-whatsapp" onClick={handleSendWhatsApp}>
                      <MessageCircle size={18} strokeWidth={1.5} />
                      ENVOYER PAR WHATSAPP
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

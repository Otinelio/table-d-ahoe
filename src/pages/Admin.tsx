import { useState, useEffect } from 'react';
import { Lock, LogOut, Save, Pencil, Trash2, ChevronUp, ChevronDown, Plus, Copy } from 'lucide-react';
import { getRestaurantData, saveRestaurantData } from '../hooks/useRestaurantData';
import type { RestaurantData, MenuItem, Category } from '../data/defaultData';
import { DEFAULT_DATA } from '../data/defaultData';
import './Admin.css';

const ADMIN_PASSWORD = 'ahoe2025';

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'menu' | 'categories' | 'settings' | 'export'>('menu');
  const [data, setData] = useState<RestaurantData>(getRestaurantData());
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [formName, setFormName] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formCat, setFormCat] = useState('');
  const [formImage, setFormImage] = useState('');

  // Settings form
  const [settings, setSettings] = useState(data.config);

  useEffect(() => {
    setSettings(data.config);
  }, [data.config]);

  const persist = (newData: RestaurantData) => {
    setData(newData);
    saveRestaurantData(newData);
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  // Menu CRUD
  const openAddForm = () => {
    setEditingItem(null);
    setFormName(''); setFormDesc(''); setFormPrice(''); setFormCat(data.categories[0]?.id || ''); setFormImage('');
    setShowForm(true);
  };

  const openEditForm = (item: MenuItem) => {
    setEditingItem(item);
    setFormName(item.name); setFormDesc(item.description); setFormPrice(String(item.price));
    setFormCat(item.categoryId); setFormImage(item.image);
    setShowForm(true);
  };

  const saveItem = () => {
    const price = parseInt(formPrice);
    if (!formName || isNaN(price)) return;
    const newItem: MenuItem = {
      id: editingItem?.id || crypto.randomUUID(),
      name: formName, description: formDesc, price, categoryId: formCat,
      image: formImage || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      available: editingItem?.available ?? true,
    };
    const menu = editingItem
      ? data.menu.map(m => m.id === editingItem.id ? newItem : m)
      : [...data.menu, newItem];
    persist({ ...data, menu });
    setShowForm(false);
  };

  const deleteItem = (id: string) => {
    persist({ ...data, menu: data.menu.filter(m => m.id !== id) });
  };

  const toggleAvailable = (id: string) => {
    persist({ ...data, menu: data.menu.map(m => m.id === id ? { ...m, available: !m.available } : m) });
  };

  // Categories
  const addCategory = () => {
    const name = prompt('Nom de la catégorie :');
    if (!name) return;
    const cat: Category = { id: crypto.randomUUID(), name: name.toUpperCase(), order: data.categories.length };
    persist({ ...data, categories: [...data.categories, cat] });
  };

  const renameCategory = (id: string) => {
    const name = prompt('Nouveau nom :');
    if (!name) return;
    persist({ ...data, categories: data.categories.map(c => c.id === id ? { ...c, name: name.toUpperCase() } : c) });
  };

  const deleteCategory = (id: string) => {
    if (!confirm('Supprimer cette catégorie et tous ses plats ?')) return;
    persist({ ...data, categories: data.categories.filter(c => c.id !== id), menu: data.menu.filter(m => m.categoryId !== id) });
  };

  const moveCategory = (id: string, dir: -1 | 1) => {
    const cats = [...data.categories].sort((a, b) => a.order - b.order);
    const idx = cats.findIndex(c => c.id === id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= cats.length) return;
    const tmp = cats[idx].order;
    cats[idx] = { ...cats[idx], order: cats[swapIdx].order };
    cats[swapIdx] = { ...cats[swapIdx], order: tmp };
    persist({ ...data, categories: cats });
  };

  // Settings
  const saveSettings = () => {
    persist({ ...data, config: settings });
    alert('Paramètres sauvegardés');
  };

  // Export
  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    alert('JSON copié dans le presse-papier');
  };

  const resetData = () => {
    if (!confirm('Réinitialiser toutes les données ? Cette action est irréversible.')) return;
    localStorage.removeItem('restaurant_config_dahoe');
    setData(DEFAULT_DATA);
  };

  if (!authed) {
    return (
      <div className="admin-login">
        <div className="admin-login__card">
          <Lock size={24} strokeWidth={1.5} color="#C45C1A" />
          <h1 className="admin-login__logo">LA TABLE D'AHOÉ</h1>
          <p className="admin-login__sub">Accès réservé</p>
          <input
            type="password"
            className="admin-login__input"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
          />
          {error && <p className="admin-login__error">{error}</p>}
          <button className="admin-login__btn" onClick={handleLogin}>CONNEXION</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      {/* Header */}
      <header className="admin__header">
        <h1>Dashboard — La Table d'Ahoé</h1>
        <button className="admin__logout" onClick={() => setAuthed(false)}>
          <LogOut size={18} strokeWidth={1.5} /> Déconnexion
        </button>
      </header>

      {/* Tabs */}
      <div className="admin__tabs">
        {(['menu', 'categories', 'settings', 'export'] as const).map(t => (
          <button key={t} className={`admin__tab ${tab === t ? 'admin__tab--active' : ''}`} onClick={() => setTab(t)}>
            {t === 'menu' ? 'Menu' : t === 'categories' ? 'Catégories' : t === 'settings' ? 'Paramètres' : 'Export'}
          </button>
        ))}
      </div>

      <div className="admin__content">
        {/* MENU TAB */}
        {tab === 'menu' && (
          <div className="admin-menu">
            <button className="admin-btn admin-btn--primary" onClick={openAddForm}>
              <Plus size={16} strokeWidth={1.5} /> Ajouter un plat
            </button>

            {showForm && (
              <div className="admin-form">
                <h3>{editingItem ? 'Modifier' : 'Ajouter'} un plat</h3>
                <input placeholder="Nom" value={formName} onChange={e => setFormName(e.target.value)} />
                <input placeholder="Description" value={formDesc} onChange={e => setFormDesc(e.target.value)} />
                <input placeholder="Prix (FCFA)" type="number" value={formPrice} onChange={e => setFormPrice(e.target.value)} />
                <select value={formCat} onChange={e => setFormCat(e.target.value)}>
                  {data.categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <input placeholder="Image URL" value={formImage} onChange={e => setFormImage(e.target.value)} />
                <div className="admin-form__actions">
                  <button className="admin-btn admin-btn--primary" onClick={saveItem}><Save size={16} /> Enregistrer</button>
                  <button className="admin-btn" onClick={() => setShowForm(false)}>Annuler</button>
                </div>
              </div>
            )}

            {data.categories.sort((a, b) => a.order - b.order).map(cat => {
              const catItems = data.menu.filter(m => m.categoryId === cat.id);
              if (catItems.length === 0) return null;
              return (
                <div key={cat.id} className="admin-menu__group">
                  <h3>{cat.name}</h3>
                  <table className="admin-table">
                    <thead>
                      <tr><th>Plat</th><th>Prix</th><th>Dispo</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                      {catItems.map(item => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.price.toLocaleString('fr-FR')} FCFA</td>
                          <td>
                            <label className="admin-toggle">
                              <input type="checkbox" checked={item.available} onChange={() => toggleAvailable(item.id)} />
                              <span className="admin-toggle__slider" />
                            </label>
                          </td>
                          <td className="admin-table__actions">
                            <button onClick={() => openEditForm(item)}><Pencil size={18} /></button>
                            <button onClick={() => deleteItem(item.id)}><Trash2 size={18} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        )}

        {/* CATEGORIES TAB */}
        {tab === 'categories' && (
          <div className="admin-cats">
            <button className="admin-btn admin-btn--primary" onClick={addCategory}>
              <Plus size={16} /> Ajouter une catégorie
            </button>
            <ul className="admin-cats__list">
              {data.categories.sort((a, b) => a.order - b.order).map(cat => (
                <li key={cat.id}>
                  <span>{cat.name} ({data.menu.filter(m => m.categoryId === cat.id).length} plats)</span>
                  <div className="admin-cats__actions">
                    <button onClick={() => moveCategory(cat.id, -1)}><ChevronUp size={18} /></button>
                    <button onClick={() => moveCategory(cat.id, 1)}><ChevronDown size={18} /></button>
                    <button onClick={() => renameCategory(cat.id)}><Pencil size={18} /></button>
                    <button onClick={() => deleteCategory(cat.id)}><Trash2 size={18} /></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SETTINGS TAB */}
        {tab === 'settings' && (
          <div className="admin-settings">
            {([
              ['name', 'Nom du restaurant'],
              ['tagline', 'Tagline'],
              ['whatsapp', 'WhatsApp'],
              ['address', 'Adresse'],
              ['hours', 'Horaires'],
              ['instagramUrl', 'Instagram URL'],
              ['facebookUrl', 'Facebook URL'],
            ] as const).map(([key, label]) => (
              <div key={key} className="admin-field">
                <label>{label}</label>
                <input
                  value={settings[key]}
                  onChange={e => setSettings({ ...settings, [key]: e.target.value })}
                />
              </div>
            ))}
            <button className="admin-btn admin-btn--primary" onClick={saveSettings}>
              <Save size={16} /> Sauvegarder
            </button>
          </div>
        )}

        {/* EXPORT TAB */}
        {tab === 'export' && (
          <div className="admin-export">
            <p className="admin-export__note">
              Les modifications admin ne sont visibles que sur ce navigateur.
              Pour déployer : exportez le JSON et partagez-le avec votre développeur.
            </p>
            <div className="admin-export__actions">
              <button className="admin-btn admin-btn--primary" onClick={copyJson}>
                <Copy size={16} /> Copier la config JSON
              </button>
              <button className="admin-btn admin-btn--danger" onClick={resetData}>
                Réinitialiser
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

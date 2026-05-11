import { useState, useEffect, useRef, useCallback } from 'react';
import { ChefHat, BellRing, CheckCircle, AlertCircle, Volume2, VolumeX, UtensilsCrossed } from 'lucide-react';
import { getOrders, saveOrder } from '../hooks/useOrders';
import type { Order } from '../data/defaultData';
import './Kitchen.css';

function playBeep() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.frequency.value = 880;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.4);
  } catch { /* AudioContext not available */ }
}

function formatTime(timestamp: number): string {
  const d = new Date(timestamp);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export default function Kitchen() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem('cuisine_sound') !== 'off');
  const [audioReady, setAudioReady] = useState(false);
  const [exitingIds, setExitingIds] = useState<Set<string>>(new Set());
  const beepIntervals = useRef<Map<string, ReturnType<typeof setInterval>>>(new Map());

  const refresh = useCallback(() => {
    const all = getOrders().filter(o => o.status !== 'done' || (Date.now() - o.updatedAt < 3000));
    setOrders(all);
  }, []);

  // BroadcastChannel + polling
  useEffect(() => {
    let ch: BroadcastChannel | null = null;
    try {
      ch = new BroadcastChannel('dahoe_orders');
      ch.onmessage = (e) => {
        refresh();
        if (e.data?.type === 'NEW_ORDER' && soundOn && audioReady) {
          playBeep();
        }
      };
    } catch { /* */ }
    const interval = setInterval(refresh, 3000);
    refresh();
    return () => {
      if (ch) ch.close();
      clearInterval(interval);
    };
  }, [refresh, soundOn, audioReady]);

  // Beep loop for pending orders
  useEffect(() => {
    const pendingOrders = orders.filter(o => o.status === 'pending');
    // Start beeps for new pending
    pendingOrders.forEach(o => {
      if (!beepIntervals.current.has(o.id) && soundOn && audioReady) {
        const iv = setInterval(() => playBeep(), 3000);
        beepIntervals.current.set(o.id, iv);
        playBeep();
      }
    });
    // Clear beeps for no-longer-pending
    beepIntervals.current.forEach((iv, id) => {
      if (!pendingOrders.find(o => o.id === id)) {
        clearInterval(iv);
        beepIntervals.current.delete(id);
      }
    });
    return () => {
      beepIntervals.current.forEach(iv => clearInterval(iv));
    };
  }, [orders, soundOn, audioReady]);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    localStorage.setItem('cuisine_sound', next ? 'on' : 'off');
    if (next) {
      setAudioReady(true);
    }
  };

  const activateAudio = () => {
    playBeep();
    setAudioReady(true);
  };

  const updateStatus = (order: Order, newStatus: Order['status']) => {
    if (newStatus === 'done') {
      setExitingIds(prev => new Set(prev).add(order.id));
      setTimeout(() => {
        const updated = { ...order, status: newStatus, updatedAt: Date.now() };
        saveOrder(updated);
        refresh();
        setExitingIds(prev => { const s = new Set(prev); s.delete(order.id); return s; });
      }, 300);
    } else {
      const updated = { ...order, status: newStatus, updatedAt: Date.now() };
      saveOrder(updated);
      refresh();
    }
  };

  const pendingOrders = orders.filter(o => o.status === 'pending');
  const preparingOrders = orders.filter(o => o.status === 'preparing');
  const readyOrders = orders.filter(o => o.status === 'ready');
  const activeCount = pendingOrders.length + preparingOrders.length;

  const renderCard = (order: Order) => {
    const isOld = order.status === 'pending' && (Date.now() - order.createdAt > 5 * 60 * 1000);
    const isExiting = exitingIds.has(order.id);

    return (
      <div key={order.id} className={`k-card ${isExiting ? 'k-card--exit' : ''}`}>
        <div className="k-card__header">
          <span className="k-card__table">TABLE {order.tableNumber}</span>
          <span className={`k-card__time ${isOld ? 'k-card__time--late' : ''}`}>
            {isOld && <AlertCircle size={14} strokeWidth={1.5} />}
            {formatTime(order.createdAt)}
          </span>
        </div>
        <ul className="k-card__items">
          {order.items.map((item, i) => (
            <li key={i}>{item.qty}x {item.name}</li>
          ))}
        </ul>
        {order.note && <div className="k-card__note">{order.note}</div>}
        <div className="k-card__footer">
          <span className="k-card__total">{order.total.toLocaleString('fr-FR')} FCFA</span>
        </div>

        {order.status === 'pending' && (
          <button className="k-card__btn k-card__btn--take" onClick={() => updateStatus(order, 'preparing')}>
            <ChefHat size={16} strokeWidth={1.5} /> PRENDRE EN CHARGE
          </button>
        )}
        {order.status === 'preparing' && (
          <button className="k-card__btn k-card__btn--ready" onClick={() => updateStatus(order, 'ready')}>
            <BellRing size={16} strokeWidth={1.5} /> MARQUER PRÊTE
          </button>
        )}
        {order.status === 'ready' && (
          <button className="k-card__btn k-card__btn--done" onClick={() => updateStatus(order, 'done')}>
            <CheckCircle size={16} strokeWidth={1.5} /> COMMANDE SERVIE
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="kitchen">
      {/* Audio activation banner */}
      {!audioReady && (
        <div className="kitchen__audio-banner" onClick={activateAudio}>
          Toucher l'écran pour activer le son
        </div>
      )}

      {/* Header */}
      <header className="kitchen__header">
        <h1>CUISINE — LA TABLE D'AHOÉ</h1>
        <div className="kitchen__header-right">
          {activeCount > 0 && (
            <span className="kitchen__badge">{activeCount} commande{activeCount > 1 ? 's' : ''}</span>
          )}
          <button className="kitchen__sound-btn" onClick={toggleSound}>
            {soundOn ? <Volume2 size={20} strokeWidth={1.5} /> : <VolumeX size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Columns */}
      {pendingOrders.length === 0 && preparingOrders.length === 0 && readyOrders.length === 0 ? (
        <div className="kitchen__empty">
          <UtensilsCrossed size={64} strokeWidth={1.5} style={{ opacity: 0.2 }} />
          <h2>AUCUNE COMMANDE EN COURS</h2>
          <p>Les commandes apparaîtront ici automatiquement.</p>
        </div>
      ) : (
        <div className="kitchen__columns">
          <div className="kitchen__col kitchen__col--pending">
            <h2>EN ATTENTE <span>({pendingOrders.length})</span></h2>
            {pendingOrders.map(renderCard)}
          </div>
          <div className="kitchen__col kitchen__col--preparing">
            <h2>EN PRÉPARATION <span>({preparingOrders.length})</span></h2>
            {preparingOrders.map(renderCard)}
          </div>
          <div className="kitchen__col kitchen__col--ready">
            <h2>PRÊTE <span>({readyOrders.length})</span></h2>
            {readyOrders.map(renderCard)}
          </div>
        </div>
      )}
    </div>
  );
}

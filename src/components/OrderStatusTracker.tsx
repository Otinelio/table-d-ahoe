import { useEffect, useState } from 'react';
import { Clock, Flame, BellRing, CheckCircle } from 'lucide-react';
import { getOrders, clearTableOrders } from '../hooks/useOrders';
import type { Order } from '../data/defaultData';
import './OrderStatusTracker.css';

const STEPS = [
  { key: 'pending', label: 'Reçue', Icon: Clock },
  { key: 'preparing', label: 'En cours', Icon: Flame },
  { key: 'ready', label: 'Prête', Icon: BellRing },
  { key: 'done', label: 'Servie', Icon: CheckCircle },
] as const;

interface Props {
  tableNumber: string;
  onReset: () => void;
}

export default function OrderStatusTracker({ tableNumber, onReset }: Props) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [showBonAppetit, setShowBonAppetit] = useState(false);

  useEffect(() => {
    const refresh = () => {
      const all = getOrders().filter(o => o.tableNumber === tableNumber && o.status !== 'done');
      setOrders(all);
    };
    refresh();

    let ch: BroadcastChannel | null = null;
    try {
      ch = new BroadcastChannel('dahoe_orders');
      ch.onmessage = () => refresh();
    } catch { /* */ }

    const interval = setInterval(refresh, 2000);
    return () => {
      if (ch) ch.close();
      clearInterval(interval);
    };
  }, [tableNumber]);

  // Check for all done
  useEffect(() => {
    const allOrders = getOrders().filter(o => o.tableNumber === tableNumber);
    const allDone = allOrders.length > 0 && allOrders.every(o => o.status === 'done');
    if (allDone && !showBonAppetit) {
      setShowBonAppetit(true);
      setTimeout(() => {
        clearTableOrders(tableNumber);
        onReset();
      }, 3000);
    }
  }, [orders, tableNumber, onReset, showBonAppetit]);

  if (showBonAppetit) {
    return (
      <div className="bon-appetit">
        <CheckCircle size={64} strokeWidth={1.5} color="#C45C1A" />
        <h2 className="bon-appetit__title">BON APPÉTIT !</h2>
        <p className="bon-appetit__text">Votre commande a été servie.</p>
      </div>
    );
  }

  if (orders.length === 0) return null;

  return (
    <div className="order-tracker">
      {orders.map(order => {
        const stepIdx = STEPS.findIndex(s => s.key === order.status);
        const statusColor = ['#FF8C00', '#2E7D32', '#1565C0', '#C45C1A'][stepIdx] || '#C45C1A';

        return (
          <div key={order.id} className="order-tracker__card" style={{ borderLeftColor: statusColor }}>
            <h3 className="order-tracker__title">
              VOTRE COMMANDE <span style={{ color: '#C45C1A' }}>— Table {order.tableNumber}</span>
            </h3>
            <div className="order-tracker__timeline">
              {STEPS.map((step, i) => {
                const Icon = step.Icon;
                const isPast = i < stepIdx;
                const isActive = i === stepIdx;
                return (
                  <div key={step.key} className="order-tracker__step">
                    {i > 0 && (
                      <div className={`order-tracker__connector ${isPast ? 'past' : ''}`} />
                    )}
                    <div className={`order-tracker__pill ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className={`order-tracker__label ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

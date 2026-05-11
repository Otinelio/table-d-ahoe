import { useState, useEffect, useCallback } from 'react';
import type { Order } from '../data/defaultData';

const STORAGE_KEY = 'orders_dahoe';
const CHANNEL_NAME = 'dahoe_orders';

function readOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function writeOrders(orders: Order[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function getOrders(): Order[] {
  return readOrders();
}

export function saveOrder(order: Order) {
  const orders = readOrders();
  const idx = orders.findIndex(o => o.id === order.id);
  if (idx >= 0) {
    orders[idx] = order;
  } else {
    orders.push(order);
  }
  writeOrders(orders);
  try {
    const ch = new BroadcastChannel(CHANNEL_NAME);
    ch.postMessage({ type: idx >= 0 ? 'STATUS_UPDATE' : 'NEW_ORDER', order });
    ch.close();
  } catch { /* BroadcastChannel not supported */ }
}

export function clearTableOrders(tableNumber: string) {
  const orders = readOrders().filter(o => !(o.tableNumber === tableNumber && o.status === 'done'));
  writeOrders(orders);
  localStorage.removeItem('tableNumber_dahoe');
  localStorage.removeItem('cart_dahoe');
  try {
    const ch = new BroadcastChannel(CHANNEL_NAME);
    ch.postMessage({ type: 'TABLE_CLEARED', tableNumber });
    ch.close();
  } catch { /* */ }
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(readOrders);

  const refresh = useCallback(() => {
    setOrders(readOrders());
  }, []);

  useEffect(() => {
    let ch: BroadcastChannel | null = null;
    try {
      ch = new BroadcastChannel(CHANNEL_NAME);
      ch.onmessage = () => refresh();
    } catch { /* */ }

    const interval = setInterval(refresh, 2000);

    return () => {
      if (ch) ch.close();
      clearInterval(interval);
    };
  }, [refresh]);

  return { orders, refresh };
}

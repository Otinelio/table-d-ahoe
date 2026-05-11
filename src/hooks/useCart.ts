import { useState, useCallback, useEffect } from 'react';
import type { CartItem } from '../data/defaultData';

const STORAGE_KEY = 'cart_dahoe';

function readCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function writeCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(readCart);
  const [badgeAnim, setBadgeAnim] = useState(false);

  useEffect(() => {
    writeCart(items);
  }, [items]);

  const addItem = useCallback((item: { id: string; name: string; price: number }) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setBadgeAnim(true);
    setTimeout(() => setBadgeAnim(false), 350);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, delta: number) => {
    setItems(prev => {
      return prev.map(i => {
        if (i.id !== id) return i;
        const newQty = i.qty + delta;
        return newQty <= 0 ? null : { ...i, qty: newQty };
      }).filter(Boolean) as CartItem[];
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return { items, addItem, removeItem, updateQty, clearCart, total, count, badgeAnim };
}

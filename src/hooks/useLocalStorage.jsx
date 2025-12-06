import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue = []) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  const addItem = (item, qty = 1) => {
    setValue(prev => {
      const found = prev.find(i => i.id === item.id);
      if (found) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id) => setValue(prev => prev.filter(i => i.id !== id));
  const clear = () => setValue([]);
  const updateQty = (id, qty) => setValue(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  const total = value.reduce((s, i) => s + i.price * (i.qty || 1), 0);

  return { value, addItem, removeItem, clear, updateQty, total };
}

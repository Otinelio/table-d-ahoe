import { DEFAULT_DATA } from '../data/defaultData';
import type { RestaurantData } from '../data/defaultData';

const STORAGE_KEY = 'restaurant_config_dahoe';

export function getRestaurantData(): RestaurantData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch { /* fall through */ }
  return DEFAULT_DATA;
}

export function saveRestaurantData(data: RestaurantData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

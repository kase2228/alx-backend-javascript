/* eslint-disable no-unused-vars */
import groceriesList from './9-groceries_list';

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

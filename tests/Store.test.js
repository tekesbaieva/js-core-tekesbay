import { describe, it, expect } from 'vitest';
import { Store, SortedStore } from '../src/Store.js';

describe('Part 2: Store Classes', () => {
  it('9. Store adds items and computes total', () => {
    const store = new Store();
    store.add({ name: 'Apple', price: 10, qty: 3 });
    expect(store.total()).toBe(30);
  });

  it('10. Store throws error for invalid items', () => {
    const store = new Store();
    expect(() => store.add({})).toThrow('Invalid item structure');
  });

  it('11. Static method creates default store', () => {
    const store = Store.createDefaultStore();
    expect(store.count).toBe(2);
  });

  it('12. SortedStore sorts items using super', () => {
    const s = new SortedStore([
      { name: 'B', price: 20, qty: 1 },
      { name: 'A', price: 5, qty: 1 }
    ]);
    expect(s.getItems()[0].name).toBe('A');
  });
});

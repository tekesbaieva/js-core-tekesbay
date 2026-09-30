export class Store {
  #items = [];

  constructor(initialItems = []) {
    if (Array.isArray(initialItems)) {
      this.#items = initialItems.map(item => ({ ...item }));
    }
  }

  get count() {
    return this.#items.length;
  }

  add(item) {
    if (!item || !item.name || typeof item.price !== 'number' || typeof item.qty !== 'number') {
      throw new Error('Invalid item structure');
    }
    this.#items.push({ ...item });
  }

  remove(name) {
    this.#items = this.#items.filter(item => item.name !== name);
  }

  find(name) {
    return this.#items.find(item => item.name === name) || null;
  }

  total() {
    return this.#items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  getItems() {
    return [...this.#items];
  }

  static createDefaultStore() {
    return new Store([
      { name: 'Book', price: 10, qty: 2 },
      { name: 'Pen', price: 2, qty: 5 }
    ]);
  }
}

export class SortedStore extends Store {
  getItems() {
    const items = super.getItems();
    return items.sort((a, b) => a.price - b.price);
  }
}

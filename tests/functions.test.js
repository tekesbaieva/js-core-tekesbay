import { describe, it, expect, vi } from 'vitest';
import { unique, groupBy, chunk, deepClone, memoize, counter } from '../src/functions.js';

describe('Part 1: Functions', () => {
  it('1. unique removes duplicates', () => {
    expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('2. unique handles non-array input', () => {
    expect(unique(null)).toEqual([]);
  });

  it('3. groupBy groups items correctly', () => {
    const data = [{ role: 'admin' }, { role: 'user' }, { role: 'admin' }];
    const res = groupBy(data, i => i.role);
    expect(res.admin.length).toBe(2);
  });

  it('4. chunk splits array correctly', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  it('5. chunk handles edge cases', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2], 0)).toEqual([]);
  });

  it('6. deepClone clones nested objects and Date', () => {
    const obj = { d: new Date(), a: { b: 1 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.a).not.toBe(obj.a);
  });

  it('7. memoize caches results', () => {
    const fn = vi.fn(x => x * 2);
    const m = memoize(fn);
    expect(m(2)).toBe(4);
    expect(m(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('8. counter closure works', () => {
    const c = counter(5);
    expect(c.value()).toBe(5);
    expect(c.inc()).toBe(6);
    expect(c.dec()).toBe(5);
  });
});

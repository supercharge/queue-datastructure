'use strict'

export class QueueIterator<T> implements IterableIterator<T> {
  /**
   * Stores the queue items.
   */
  private readonly items: T[]

  /**
   * The next item’s index.
   */
  private pointer: number = 0

  /**
   * Create a new iterator for the given `items`.
   *
   * @param items
   */
  constructor (items: T[]) {
    this.items = items
  }

  /**
   * Returns iteself to allow reusing iterators when exiting a loop early (via break, return, etc.).
   *
   * @returns {IterableIterator}
   */
  [Symbol.iterator] (): IterableIterator<T> {
    return this
  }

  /**
   * Returns the iterator result containing the next item if there’s
   * one available. Returns `undefined` if all items are iterated.
   *
   * @returns {IteratorResult}
   */
  next (): IteratorResult<T> {
    return this.pointer < this.items.length
      ? { done: false, value: this.items[this.pointer++] }
      : { done: true, value: undefined }
  }
}

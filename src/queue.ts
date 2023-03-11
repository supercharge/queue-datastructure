'use strict'

import { QueueIterator } from './iterator'

export class Queue<T> implements Iterable<T> {
  /**
   * An internal list keeping the queued items.
   */
  private queue: T[]

  /**
   * Creates a new Queue instance and
   * enqueues the given `items`.
   *
   * @param  {*} items
   */
  constructor (...items: T[]) {
    this.queue = ([] as T[]).concat(...items)
  }

  /**
   * Returns an iterator for the queue values.
   *
   * @returns {IterableIterator}
   */
  [Symbol.iterator] (): IterableIterator<T> {
    return new QueueIterator(this.queue)
  }

  /**
   * Pushes new `items` into the queue.
   *
   * @param  {*} items
   *
   * @returns {Queue}
   */
  enqueue (...items: T[]): this {
    this.queue = this.queue.concat(
      ([] as T[]).concat(...items)
    )

    return this
  }

  /**
   * Removes and returns the item which is up for processing.
   * Returns `undefined` if the queue is empty.
   *
   * @returns {*}
   */
  dequeue (): T | undefined {
    return this.queue.shift()
  }

  /**
   * Returns the front item without removing it from the queue.
   * Returns `undefined` if the queue is empty.
   *
   * @returns {*}
   */
  peek (): T | undefined {
    return this.queue[0]
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns {Integer}
   */
  size (): number {
    return this.queue.length
  }

  /**
   * Returns all items in the queue.
   *
   * @returns {Array}
   */
  items (): T[] {
    return this.queue.slice(0)
  }

  /**
   * Returns `true` if there are no items in the queue, `false` otherwise.
   *
   * @returns {Boolean}
   */
  isEmpty (): boolean {
    return this.size() === 0
  }

  /**
   * Returns `true` if there are items in the queue,
   * `false` when the queue is empty.
   *
   * @returns {Boolean}
   */
  isNotEmpty (): boolean {
    return !this.isEmpty()
  }

  /**
   * Removes all items from the queue.
   *
   * @returns {Queue}
   */
  clear (): this {
    this.queue = []

    return this
  }
}

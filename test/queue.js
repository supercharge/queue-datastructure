
import { test } from 'uvu'
import { expect } from 'expect'
import { Queue } from '../dist/index.js'

test('creates an empty new Queue', () => {
  const queue = new Queue()

  expect(queue.size()).toEqual(0)
  expect(queue.peek()).toBeUndefined()
})

test('creates a new Queue() from an array', () => {
  const queue = new Queue([1, 2])

  expect(queue.size()).toEqual(2)
  expect(queue.dequeue()).toEqual(1)
})

test('enqueue', () => {
  const queue = new Queue(1, 2)
  queue.enqueue(3)
  expect(queue.size()).toEqual(3)

  queue.enqueue(4, 5)
  expect(queue.size()).toEqual(5)
  expect(queue.peek()).toEqual(1)

  queue.enqueue(...[6, 7])
  expect(queue.size()).toEqual(7)
})

test('dequeue', () => {
  const queue = new Queue(1)
  expect(queue.dequeue()).toEqual(1)
  expect(queue.size()).toEqual(0)
  expect(queue.dequeue()).toBeUndefined()
})

test('peek', () => {
  const queue = new Queue(1, 2, 3)
  const item = queue.peek()
  expect(item).toEqual(1)
  expect(queue.size()).toEqual(3)
})

test('size', () => {
  expect(
    new Queue(1, 2).size()
  ).toEqual(2)
})

test('items', () => {
  expect(
    new Queue(1, 2, 3).items()
  ).toEqual([1, 2, 3])

  expect(
    new Queue([1, 2, 3]).items()
  ).toEqual([1, 2, 3])

  expect(
    new Queue()
      .enqueue(1, 2)
      .enqueue(3)
      .enqueue(...[4, 5, 6])
      .items()
  ).toEqual([1, 2, 3, 4, 5, 6])
})

test('isEmpty', () => {
  const queue = new Queue(1)
  expect(queue.isEmpty()).toBe(false)

  queue.dequeue()
  expect(queue.isEmpty()).toBe(true)
})

test('isNotEmpty', () => {
  const queue = new Queue(1)
  expect(queue.isNotEmpty()).toBe(true)
  expect(queue.isEmpty()).toBe(false)

  queue.dequeue()
  expect(queue.isNotEmpty()).toBe(false)
  expect(queue.isEmpty()).toBe(true)
})

test('clear', () => {
  const queue = new Queue(1)
  expect(queue.isEmpty()).toBe(false)

  queue.clear()
  expect(queue.isEmpty()).toBe(true)
})

test('for..of', () => {
  const queue = new Queue(1, 2, 3)
  const items = []

  for (const item of queue) {
    items.push(item)
  }

  expect(items).toEqual([1, 2, 3])
})

test('Symbol.iterator', () => {
  const queue = new Queue(1, 2, 3)

  const iterable = queue[Symbol.iterator]()
  expect(iterable.next).toBeInstanceOf(Function)

  const items = []

  for (const item of iterable) {
    items.push(item)
  }

  expect(items).toEqual([1, 2, 3])
})

test('Symbol.iterator is iterable', () => {
  const queue = new Queue(1, 2, 3)

  const iterable = queue[Symbol.iterator]()
  expect(iterable.next).toBeInstanceOf(Function)

  const items = []

  items.push(iterable.next().value)
  expect(items).toEqual([1])

  // Continue with same iterable
  for (const item of iterable) {
    items.push(item)
  }

  expect(items).toEqual([1, 2, 3])
})

test.run()

'use strict'

import Queue from '../src'
import * as Lab from '@hapi/lab'
import { expect } from '@hapi/code'

const lab = Lab.script()
const { describe, it } = lab
export { lab }

describe('Queue', () => {
  it('creates an empty new Queue()', () => {
    const queue = new Queue()

    expect(queue.size()).to.equal(0)
    expect(queue.peek()).to.be.undefined()
  })

  it('creates a new Queue() from an array', () => {
    const queue = new Queue([1, 2])

    expect(queue.size()).to.equal(2)
    expect(queue.dequeue()).to.equal(1)
  })

  it('.enqueue()', () => {
    const queue = new Queue(1, 2)
    queue.enqueue(3)
    expect(queue.size()).to.equal(3)

    queue.enqueue(4, 5)
    expect(queue.size()).to.equal(5)
    expect(queue.peek()).to.equal(1)

    queue.enqueue([6, 7])
    expect(queue.size()).to.equal(7)
  })

  it('.dequeue()', () => {
    const queue = new Queue(1)
    expect(queue.dequeue()).to.equal(1)
    expect(queue.size()).to.equal(0)
    expect(queue.dequeue()).to.be.undefined()
  })

  it('.peek()', () => {
    const queue = new Queue(1, 2, 3)
    const item = queue.peek()
    expect(item).to.equal(1)
    expect(queue.size()).to.equal(3)
  })

  it('.size()', () => {
    expect(
      new Queue(1, 2).size()
    ).to.equal(2)
  })

  it('.items()', () => {
    expect(
      new Queue(1, 2, 3).items()
    ).to.equal([1, 2, 3])

    expect(
      new Queue([1, 2, 3]).items()
    ).to.equal([1, 2, 3])

    expect(
      new Queue([])
        .enqueue(1, 2)
        .enqueue(3)
        .enqueue([4, 5, 6])
        .items()
    ).to.equal([1, 2, 3, 4, 5, 6])
  })

  it('.isEmpty()', () => {
    const queue = new Queue(1)
    expect(queue.isEmpty()).to.be.false()

    queue.dequeue()
    expect(queue.isEmpty()).to.be.true()
  })

  it('.isNotEmpty()', () => {
    const queue = new Queue(1)
    expect(queue.isNotEmpty()).to.be.true()
    expect(queue.isEmpty()).to.be.false()

    queue.dequeue()
    expect(queue.isNotEmpty()).to.be.false()
    expect(queue.isEmpty()).to.be.true()
  })

  it('.clear()', () => {
    const queue = new Queue(1)
    expect(queue.isEmpty()).to.be.false()

    queue.clear()
    expect(queue.isEmpty()).to.be.true()
  })
})

'use strict'

const Queue = require('..')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const { describe, it } = (exports.lab = Lab.script())

describe('Queue', () => {
  it('creates an empty new Queue()', async () => {
    const queue = new Queue()

    expect(queue.size()).to.equal(0)
    expect(queue.peek()).to.be.undefined()
  })

  it('creates a new Queue() from an array', async () => {
    const queue = new Queue([1, 2])

    expect(queue.size()).to.equal(2)
    expect(queue.dequeue()).to.equal(1)
  })

  it('.enqueue()', async () => {
    const queue = new Queue(1, 2)
    queue.enqueue(3)
    expect(queue.size()).to.equal(3)

    queue.enqueue(4, 5)
    expect(queue.size()).to.equal(5)
    expect(queue.peek()).to.equal(1)

    queue.enqueue([6, 7])
    expect(queue.size()).to.equal(7)
  })

  it('.dequeue()', async () => {
    const queue = new Queue(1)
    expect(queue.dequeue()).to.equal(1)
    expect(queue.size()).to.equal(0)
    expect(queue.dequeue()).to.be.undefined()
  })

  it('.peek()', async () => {
    const queue = new Queue(1, 2, 3)
    const item = queue.peek()
    expect(item).to.equal(1)
    expect(queue.size()).to.equal(3)
  })

  it('.size()', async () => {
    expect(
      new Queue(1, 2).size()
    ).to.equal(2)
  })

  it('.items()', async () => {
    expect(
      new Queue(1, 2, 3).items()
    ).to.equal([1, 2, 3])

    expect(
      new Queue([1, 2, 3]).items()
    ).to.equal([1, 2, 3])
  })

  it('.isEmpty()', async () => {
    const queue = new Queue(1)
    expect(queue.isEmpty()).to.be.false()

    queue.dequeue()
    expect(queue.isEmpty()).to.be.true()
  })

  it('.isNotEmpty()', async () => {
    const queue = new Queue(1)
    expect(queue.isNotEmpty()).to.be.true()
    expect(queue.isEmpty()).to.be.false()

    queue.dequeue()
    expect(queue.isNotEmpty()).to.be.false()
    expect(queue.isEmpty()).to.be.true()
  })

  it('.clear()', async () => {
    const queue = new Queue(1)
    expect(queue.isEmpty()).to.be.false()

    queue.clear()
    expect(queue.isEmpty()).to.be.true()
  })
})

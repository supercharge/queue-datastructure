<div align="center">
  <a href="https://superchargejs.com">
    <img width="471" style="max-width:100%;" src="https://superchargejs.com/images/supercharge-text.svg" />
  </a>
  <br/>
  <br/>
  <p>
    <h3>Queue Datastructure</h3>
  </p>
  <p>
    A queue data structure for Node.js and JavaScript.
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a> ·
    <a href="#api"><strong>API</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://www.npmjs.com/package/@supercharge/queue-datastructure"><img src="https://img.shields.io/npm/v/@supercharge/queue-datastructure.svg" alt="Latest Version"></a>
    <a href="https://www.npmjs.com/package/@supercharge/queue-datastructure"><img src="https://img.shields.io/npm/dm/@supercharge/queue-datastructure.svg" alt="Monthly downloads"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> and <a href="http://twitter.com/superchargejs">@superchargejs</a> for updates!</em>
  </p>
</div>

---

## Installation

```
npm i @supercharge/queue-datastructure
```


## Notice
This package is ESM-only.


## Usage
Using the queue data structure is pretty straightforward. The library exposes a `Queue` class that you can use to create a queue instance. You can create a queue from existing data or an empty one:

```js
import { Queue } from '@supercharge/queue-datastructure'

// create a queue from an existing array
const queue = new Queue([ 1, 2, 3 ])

// or, create a queue from individual items
const queue = new Queue(1, 2, 3)

// or, create an empty queue
const queue = new Queue()
```


## API

#### `.enqueue(items)`
Push new `items` to the end of the queue.

```js
queue
  .enqueue(1)
  .enqueue(2, 3)
  .enqueue([ 4, 5, 6])

// Queue: 1, 2, 3, 4, 5, 6
```


#### `.dequeue()`
Remove and return the item which is up for processing. Returns `undefined` if the queue is empty.

```js
queue.enqueue(1, 2, 3)
queue.size() // 3

queue.dequeue() // 1
queue.size() // 2
```


#### `.peek()`
Returns the first item without removing it from the queue. Returns `undefined` if the queue is empty.

```js
queue.enqueue(1, 2, 3)
queue.peek() // 1
```


#### `.size()`
Returns the number of items in the queue.

```js
queue.size() // 0
queue.enqueue(1, 2)
queue.size() // 2
```


#### `.isEmpty()`
Returns `true` if there are no items in the queue, `false` otherwise.

```js
queue.isEmpty() // true
queue.enqueue(1)
queue.isEmpty() // false
```


#### `.isNotEmpty()`
Returns `true` if there are items in the queue, `false` when the queue is empty.

```js
queue.isNotEmpty() // false
queue.enqueue(1)
queue.isNotEmpty() // true
```


#### `.clear()`
Removes all items from the queue.

```js
queue.clear()
queue.size() // 0
```


## Contributing

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License
MIT © [Supercharge](https://superchargejs.com)

---

> [superchargejs.com](https://superchargejs.com) &nbsp;&middot;&nbsp;
> GitHub [@supercharge](https://github.com/supercharge) &nbsp;&middot;&nbsp;
> Twitter [@superchargejs](https://twitter.com/superchargejs)

<div align="center">
  <a href="https://superchargejs.com">
    <img width="471" style="max-width:100%;" src="https://superchargejs.com/images/supercharge-text.svg" />
  </a>
  <br/>
  <br/>
  <p>
    A queue data structure for Node.js.
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
    <a href="https://travis-ci.com/superchargejs/datastructure-queue"><img src="https://travis-ci.com/superchargejs/datastructure-queue.svg?branch=master" alt="Build Status" data-canonical-src="https://travis-ci.com/superchargejs/datastructure-queue.svg?branch=master" style="max-width:100%;"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> and <a href="http://twitter.com/superchargejs">@superchargejs</a> for updates!</em>
  </p>
</div>

---

## Installation

```
npm install @supercharge/queue-datastructure
```


## Usage
Using the queue data structure is pretty straightforward. The library exposes a `Queue` class and you need to create a queue instance. You can create a queue from existing data or an empty one:

```js
const Queue = require('@supercharge/queue-datastructure')

// create a queue from an existing array
const queue = new Queue([ 1, 2, 3 ])

// or, create a queue from individual items
const queue = new Queue(1, 2, 3)

// or, create an empty queue
const queue = new Queue()
```


## API

#### `.enqueue(items)`
Pushes new `items` to the end of the queue.


#### `.dequeue()`
Removes and returns the item which is up for processing. Returns `undefined` if the queue is empty.


#### `.peek()`
Returns the front item without removing it from the queue. Returns `undefined` if the queue is empty.


#### `.size()`
Returns the number of items in the queue.


#### `.isEmpty()`
Returns `true` if there are no items in the queue, `false` otherwise.


#### `.isNotEmpty()`
Returns `true` if there are items in the queue, `false` when the queue is empty.

#### `.clear()`
Removes all items from the queue.


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
> GitHub [@superchargejs](https://github.com/superchargejs/) &nbsp;&middot;&nbsp;
> Twitter [@superchargejs](https://twitter.com/superchargejs)

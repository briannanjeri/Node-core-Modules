const EventEmitter=require('events')
//create class
class MyEmitter extends EventEmitter{}
//init object
const myEmitter=new MyEmitter();
//event listener
myEmitter.on('events', ()=>console.log('event fired'));
//init event
myEmitter.emit('events');
// Eventloop is the mechanism which uses predefined api's of JS to give us nonblocking system of execution
// EventLoop : all those calls which are expected to have delays due to
// transactions taking time like settimeout, setinterval, server calls (XHR) or file read (async) 
// or any registered callback using Promises
// server - (XHR) XMLHttpRequest api used to make server call

console.log("Starts");

// whenever execution stack sees setTimeout, it is moved out from stack to it's own api zone.
setTimeout(function() {
    console.log("First - Call back")
    setTimeout(function(){
        console.log("Inner - Call back - 0 secs")
    }, 0);    
}, 1000); //1000

setTimeout(function() {
    console.log("Second - Call back")
}, 2000); //2000

setTimeout(function() {
    console.log("Third - Call back")
}, 3000); // At least should be waiting for 3 secs, not at most

console.log("Execution Ends"); // stack now empty after this

// when setTimeout functions are done in their api zone, they are moved to event queue
// when stack is empty, Event Loop brings them back to stack from event queue
// Order:
// Starts, Execution Ends, First, Inner, Second, Third

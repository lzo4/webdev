const delayMessageFactory = (dispFn,time)=> msg => setTimeout(()=>dispFn(msg),ms);

const dialog = delayMessageFactory(alert,2000);
dialog("hello");

const log = delayMessageFactory(console.log,2000);
log("hi");
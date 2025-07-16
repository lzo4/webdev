function delayMessageFactory(dispFn,time) {
    return function(msg){
        setTimeout(()=>dispFn(msg),ms);
    };
    }


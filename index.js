function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const result = function(){};

    return result;
}

function returnsAnAnonymousFunction(){
    return ()=>{}
}
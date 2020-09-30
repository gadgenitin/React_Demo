class Fib{
    constructor(){
        var fibonacci={
            [Symbol.iterator](){
                var previous=0, current=1;
                return{
                    next(){
                        previous=current;
                        current=previous+current;
                        return { done: false, value: current }
                    }
                };
            }
        }
         
        for(var i of fibonacci){
          if(i>10){
            break;
          }
          console.log(i);
        }
    }
    

}

var e=new Fib();
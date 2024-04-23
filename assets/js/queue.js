(function(){if(typeof module==="undefined")self.queue=queue;else module.exports=queue;queue.version="1.0.4";var slice=[].slice;function queue(parallelism){var q,tasks=[],started=0,active=0,remaining=0,popping,error=null,await=noop,all;if(!parallelism)parallelism=Infinity;function pop(){while(popping=started<tasks.length&&active<parallelism){var i=started++,t=tasks[i],a=slice.call(t,1);a.push(callback(i));++active;t[0].apply(null,a);}}function callback(i){return function(e,r){--active;if(error!=null)return;if(e!=null){error=e;started=remaining=NaN;notify();}else{tasks[i]=r;if(--remaining)popping||pop();else notify();}};}function notify(){if(error!=null)await(error);else if(all)await(error,tasks);else await.apply(null,[error].concat(tasks));}return q={defer:function(){if(!error){tasks.push(arguments);++remaining;pop();}return q;},await:function(f){await=f;all=false;if(!remaining)notify();return q;},awaitAll:function(f){await=f;all=true;if(!remaining)notify();return q;}};}function noop(){}})();
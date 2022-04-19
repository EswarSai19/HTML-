// function Queue(){
//     this.queue = []
//     this.front = 0;
//     this.rear = 0;
// }
// Queue.prototype.enque = function(x){
//     this.queue[this.front] = x;
//     this.front++
// }
// Queue.prototype.deque = function(){
//     if(this.rear !== this.front){
//         this.rear++
//     }
// }

// let myQueue = new Queue()
// // console.log(myQueue)

// myQueue.enque(2)
// myQueue.deque()
// console.log(myQueue);

var obj = {n:1,a:2,m:3,e:4}
for(let k in obj){
    if(obj[k] > 0){
        display(k)
    }
}
function display(x){
    let status = 'open'
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(status === 'open'){
                resolve(x)
            }else{
                reject()
            }
        },3000)
    })
    myPromise.then(function(res){
        console.log(res);
    })
}
function process(response){
    return new Promise( function(resolve,reject){
        console.log(response)
        resolve(`finally completed`)
    })
}
async function doWork(){
    const response = await display(1)
    // console.log('recieved')
    const processed = await process(response)
    console.log('ok')
}
doWork()
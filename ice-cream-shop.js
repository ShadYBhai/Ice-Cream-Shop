let stocks = {
    Fruit:["strawberry","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    topping:["chocolate","penauts"]
};
let is_shop_open = true;

let order = (time,work) => {
    
    return new Promise( (resolve,reject)=>{
        if(is_shop_open){

            setTimeout(()=>{
                resolve( work() )
            },time)
        }
        else{
            reject(console.log('our shop is closed'))
        }
    })
}

order(2000,()=>console.log(`${stocks.Fruit[0]} was selected`))

.then(()=>{
    return order(0000,()=>console.log('production was started'))
})

.then(()=>{
    return order(2000,()=>console.log('fruit was chopped'))
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[3]} and ${stocks.liquid[1]} was selected`))
})

.then(()=>{
    return order(1000,()=>console.log('start the machine'))
})

.then(()=>{
    return order(2000,()=>{
        console.log(`ice cream placed on ${stocks.holder[0]}`)
    })
})

.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.topping[0]} was selected`)
    })
})

.then(()=>{
    return order(2000,()=>{
        console.log("Ice cream was served")
    })
})

.catch(()=>{
    console.log('customer left')
})

.finally(()=>{
    console.log("day ended, shop is closed")
})
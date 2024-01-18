
let count = 1
const getDouble = n => n*2
let double = getDouble(count)
let obj = {}
let proxy = new Proxy(obj,{
    get: function(target,prop) {
        return target[prop]
    },
    set:function(target,prop,value) {
        target[prop] = value;
        if(prop == 'count') {
            double = getDouble(value)
        }
    },
    deleteProperty(target,prop) {
        delete target[prop]
        if (prop === 'count') {
            double = NaN
        }
    }
})

console.log(obj.count,double)
proxy.count = 2
console.log(obj.count,double)
delete proxy.count
console.log(obj.count,double)
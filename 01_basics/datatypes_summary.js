const a = 100
const b = "100"
const c = [1, 2, 3, 4]
const d = {
    "d1" : true,
    "d2" : 150,
    "d3" : "300" 
}

let e = function(){
    console.log("e function");
}

const f = null

const g = false
// const h = true
console.table([typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g])

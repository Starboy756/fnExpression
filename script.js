setTimeout(function(){
    console.log(`Hello`)
},3000)

let number = [1,2,3,4,5,6,7,8,9]

let newArray = number.map(function(element){
    return Math.pow(element,2)
})

console.log(newArray)
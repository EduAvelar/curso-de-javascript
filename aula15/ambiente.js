let num = [ 5, 8 , 2 , 9, 3 ]

num.push(1)
num.sort()
console.log(num)
console.log(` o vetor tem ${num.length} posições `)
console.log(` o primeiro valor do vetor é ${num[0]}`)

/*for(let pos = 0; pos<num.length; pos++){
    console.log(num[pos])
}*/

let pos = num.indexOf(3)
if(pos == -1){
    console.log(' o valor não foi encontrado')
}else{
    console.log(` O valor 9 esta na posição ${pos} `)
}

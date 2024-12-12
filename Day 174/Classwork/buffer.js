//1

const bufferAlloc = Buffer.alloc(15,'b')

//2

const buffer1 = Buffer.from('hello')
const buffer2 = Buffer.from('world')

//3

const bufferArray = [buffer1,buffer2]
const bufferConcat = Buffer.concat(bufferArray)

//4

const bufferString = bufferConcat.toString()


console.log(bufferAlloc);
console.log(bufferConcat);
console.log(bufferString);
console.log('Buffer N1: ', buffer1, 'Buffer N2:', buffer2);
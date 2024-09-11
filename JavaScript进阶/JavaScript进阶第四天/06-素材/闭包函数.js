//闭包： 内层函数 加上 外部变量
function counter () {
  let count = 0
  return {
    increment: function () {
      count++
      console.log(count)
      return count
    },
    decrement: function () {
      count--
      console.log(count)
      return count
    },
  }
}

let count1 = counter()
count1.increment()
count1.increment()
count1.increment()
console.log(count1.increment())
let count2 = counter()
count2.increment()
console.log(count2)

// 闭包: 实现方式二
// function counter () {
//   let i = 0
//
//   function fn () {
//     i++
//     console.log(i)
//   }
//
//   return fn
// }
//
// let counter1 = counter()
// counter1()
// counter1()
// let counter2 = counter()
// counter2()

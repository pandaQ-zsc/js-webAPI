// function outer () {
//   let a = 100
//   return function () {
//     console.log(a)
//   }
// }
//
// const fun = outer()
// fun()
//
// function outer2 () {
//   let a = 200
//
//   function fn () {
//     console.log(a)
//   }
//
//   return fn
// }
//
// const fun2 = outer2()
// fun2()

function outer () {
  let a = 200

  function fn () {
    console.log(a)
  }

  return fn
}

const fun = outer()
fun()

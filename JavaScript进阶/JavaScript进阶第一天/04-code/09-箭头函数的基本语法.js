const fn = () => {
  console.log('adD')
}
fn(2)

const fn2 = x => {
  console.log(x)
}

fn2(3)

const fn3 = (uname) => ({ name: uname })
console.log(fn3('xxx'))

// 利用箭头函数来求和

const getSum = (...arr) => {
  let sum = 0
  arr.forEach(item => {
    sum += item
  })
  return sum
}

console.log(getSum(1, 2, 3))
const getSum2 = (...arr) => arr.reduce((prev, cur) => prev + cur, 0)


function Pig (name, age) {
  this.uname = name
  this.uage = age
  this.ttt = 'ttttt'
}

const pig = new Pig('12xxxx', 19)
const pig2 = new Pig('12xxxx', 19)
console.log(pig)
console.log(pig2)

function Goods (name, price, count) {
  this.name = name
  this.price = price
  this.count = count
}

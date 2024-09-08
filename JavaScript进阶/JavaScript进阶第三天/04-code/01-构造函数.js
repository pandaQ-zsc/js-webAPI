function Star (uname, age) {
  this.uname = uname
  this.age = age
  // this.sing = function () {
  //   console.log(uname + ' --- ' + age)
  // }
}

const l = new Star('刘德华', 55)
const z = new Star('张雪媛', 21)

//原型对象就解决了 所有对象共享同一个方法
Star.prototype.sing = function () {
  // console.log('唱歌')
  console.log(this.uname + ' --- ' + this.age)

}
l.sing()
z.sing()
console.log(l.sing === z.sing)

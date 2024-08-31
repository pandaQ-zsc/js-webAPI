function foo () {
  let out = 'aaaaaaaaa'

  function bar () {
    console.log(out)
  }

  return bar
}

const closure = foo()
closure()

console.log(Date.now())

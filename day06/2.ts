import { solve, bitsToInt, lodash } from './helper.ts'

let result = 0
solve((lines) => {
  const stream = lines[0].split('')
  let i = 0
  while (i < stream.length) {
    const set = new Set()
    for (let j = 0; j < 14; j++) {
      set.add(stream[i + j])
    }
    if (set.size === 14) {
      break
    }
    i++
  }
  return i + 14
})

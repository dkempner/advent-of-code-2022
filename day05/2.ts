import { solve, bitsToInt, lodash } from './helper.ts'

solve((lines) => {
  let result = ''
  let stacks: string[][] = []
  const stackLines: string[] = []
  const instructionLines: string[] = []

  let mode: 'stack' | 'instruction' = 'stack'

  lines.forEach((line) => {
    if (line === '') {
      mode = 'instruction'
      return
    }
    if (mode === 'stack') {
      if (line.includes('[')) {
        stackLines.push(line)
      } else {
        stacks = line
          .split('  ')
          .map((stack) => stack.replace(' ', ''))
          .map(() => [])
      }
    }
    if (mode === 'instruction') {
      instructionLines.push(line)
    }
  })

  stackLines.reverse().forEach((line) => {
    const charArray = line.split('')
    let stackCounter = 0
    charArray.forEach((char, index) => {
      if ((index - 1) % 4 === 0) {
        if (char !== ' ') {
          stacks[stackCounter].push(char)
        }
        stackCounter++
      }
    })
  })

  instructionLines.forEach((line) => {
    const charArray = line
      .replace('move', '')
      .replace('from', '')
      .replace('to', '')
      .split(' ')

    const numbers = charArray
      .filter((char) => Number.isNaN(Number(char)) === false)
      .map(Number)
      .filter((num) => num > 0)

    const amount = numbers[0]
    const to = numbers[2] - 1
    const from = numbers[1] - 1

    let movingStack = []
    for (let i = 0; i < amount; i++) {
      movingStack.push(stacks[from].pop()!)
    }

    movingStack.reverse().forEach((char) => {
      stacks[to].push(char)
    })
  })

  stacks.forEach((stack) => {
    const top = stack.pop()
    result = result + top
  })

  return result
})

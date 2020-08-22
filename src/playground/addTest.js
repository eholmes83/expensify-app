const add = (a, b) => a + b

const generateGreeting = (name = 'Anonmyous') => `Hello, ${name}!`

test('should add two numbers', () => {
  const result = add(3,4)
  expect(result).toBe(7)
})

test('should return a greeting with name Chuck', () => {
  const result = generateGreeting('Chuck')
  expect(result).toBe(`Hello, Chuck!`)
})

test('should generate greeting with no name', () => {
  const result = generateGreeting()
  expect(result).toBe(`Hello, Anonmyous!`)
})
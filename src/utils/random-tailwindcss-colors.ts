export const randomColor = (options: {
  colors: Array<string>,
  range: Array<number>,
  prefix: string
}) => {
  const { prefix, colors, range } = options
  const randomColors = Math.floor(Math.random() * 4)
  const randomRange = Math.floor((Math.random() * 10) + 1)
  console.log('\x1b[32m%s\x1b[0m', randomColors, randomRange)
  const data = `${prefix}-${colors[randomColors]}-${randomRange}00`
  return data
}

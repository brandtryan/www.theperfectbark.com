export function lineReadingTime(numberOfWords) {
  const time = numberOfWords / 225 * 60;
  return Math.round(time * 100) / 100 * 1000;
}

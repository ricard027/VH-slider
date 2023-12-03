export function formatPrice(number: number): string {
  const numberString = number.toString()

  const formattedNumber = numberString.slice(0, 2) + ',' + numberString.slice(2)

  return formattedNumber
}

export function monthlyPayments(amountBorrowed, rate, months = 300) {
  return Math.round((amountBorrowed * rate / 12 * Math.pow(1 + rate / 12, months)) / (Math.pow(1 + rate / 12, months) - 1));
}


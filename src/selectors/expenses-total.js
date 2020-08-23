export default (expenses) => {
  return expenses
      .map(expense => expense.amount)
      .reduce((acc, curr) => acc + curr, 0)
}
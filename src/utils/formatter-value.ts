export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

interface Transactions {
  id?: string
  name: string
  type: 'income' | 'outcome'
  value: number
}

const transactions: Transactions[] = [
  {
    id: '9a7c7195-a47e-45eb-8871-93796159bfd4',
    name: 'pateta',
    type: 'income',
    value: 1000
  },
  {
    id: 'a465a837-a394-4c5f-88d2-ea8dd02ef176',
    name: 'minie',
    type: 'outcome',
    value: 500
  }
]

const summary = transactions.reduce(
  (acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.value
      acc.total += transaction.value
    } else {
      acc.outcome += transaction.value
      acc.total -= transaction.value
    }
    return acc
  },
  { income: 0, outcome: 0, total: 0 }
)

priceFormatter.format(summary.income)
priceFormatter.format(summary.outcome)
priceFormatter.format(summary.total)

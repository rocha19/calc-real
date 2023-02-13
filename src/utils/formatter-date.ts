export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const dateFormatterLong = (date: string) => {
  const formatDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  return formatDate
}

export const formatColors = (color: string) => {
  const colors = {
    Bege: '#FFEBB4',
    Marrom: '#D59B4C',
    Rosa: '#D62475',
    Azul: '#0EA9C1',
    Laranja: '#ED7E15',
    Roxa: '#802E6C',
    Vermelho: '#D5181C',
    Unico: '#D8DDF1'
  }

  return colors[color as keyof typeof colors]
}

export const getDetailsProduct = async (id: string) => {
  try {
    const response = await fetch(`https://desafio.xlow.com.br/search/${id}`)
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

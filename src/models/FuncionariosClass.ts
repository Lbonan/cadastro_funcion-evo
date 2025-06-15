class FuncionariosClass {
  nome: string
  email: string
  telefone: string
  cidade: string
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    cidade: string,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.cidade = cidade
    this.id = id
  }
}

export default FuncionariosClass

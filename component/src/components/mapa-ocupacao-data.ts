export interface IMapaOcupacao {
  key?: string,
  descricao: string,
  ocupado: boolean,
  capacidadeMaxima: number,
  clientesId?: Array<string>
}

export interface ICliente {
  key?: string,
  nome: string
}
export const mapaOcupadaData: Array<IMapaOcupacao> = [
  {
    descricao: "Quarto 1 - Com duas camas de solteiros",
    ocupado: true,
    capacidadeMaxima: 2,
    clientesId: [
      'mariaId',
      'joseId'
    ]
  },
  {
    descricao: "Quarto 2 - Com quatro camas de solteiros",
    ocupado: false,
    capacidadeMaxima: 4,
  },
  {
    descricao: "Quarto 3 - Com 1 cama de casal",
    ocupado: false,
    capacidadeMaxima: 2,
  },
  {
    descricao: "Quarto 4 - Com 2 camas de casais",
    ocupado: false,
    capacidadeMaxima: 4,
  },
]

export const clientesData: Array<ICliente> = [
  {
    key: 'mariaId',
    nome: 'Maria do Santos Viera'
  },
  {
    key: 'joseId',
    nome: 'José Paulo Perreira'
  },
];
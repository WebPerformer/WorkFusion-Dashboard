import americanas from '../../public/images/logoAmericanas.png'
import nubank from '../../public/images/logoNubank.jpg'
import ifood from '../../public/images/logoIfood.jpeg'
import magalu from '../../public/images/logoMagalu.png'
import totvs from '../../public/images/logoTotvs.png'
import vale from '../../public/images/logoVale.png'
import gol from '../../public/images/logoGol.jpg'
import ambev from '../../public/images/logoAmbev.png'
import bb from '../../public/images/logoBancodoBrasil.png'

import member_1 from '../../public/members/1.svg'
import member_2 from '../../public/members/2.svg'
import member_3 from '../../public/members/3.svg'
import member_4 from '../../public/members/4.svg'
import member_5 from '../../public/members/5.svg'
import member_6 from '../../public/members/6.svg'
import member_7 from '../../public/members/7.svg'
import member_8 from '../../public/members/8.svg'
import member_9 from '../../public/members/9.svg'
import member_10 from '../../public/members/10.svg'

export const companies = [
  {
    name: 'Americanas S.A.',
    desc: 'Uma das maiores empresas de varejo online do Brasil, oferece uma ampla variedade de produtos e serviços.',
    image: americanas,
    tasks: {
      done: '8',
      total: '15',
    },
    members: [
      member_5,
      member_2,
      member_1,
      member_4,
      member_3,
      member_7,
      member_8,
    ],
  },
  {
    name: 'Nubank',
    desc: 'Uma fintech brasileira conhecida por sua inovação e facilidade de uso em serviços financeiros, como cartões de crédito e contas digitais.',
    image: nubank,
    tasks: {
      done: '5',
      total: '12',
    },
    members: [
      member_6,
      member_3,
      member_2,
      member_5,
      member_4,
      member_1,
      member_9,
    ],
  },
  {
    name: 'iFood',
    desc: 'Uma plataforma de entrega de comida líder no Brasil, conectando restaurantes e consumidores através de uma interface intuitiva e conveniente.',
    image: ifood,
    tasks: {
      done: '11',
      total: '20',
    },
    members: [member_4, member_5, member_2, member_1, member_3, member_10],
  },
  {
    name: 'Magazine Luiza',
    desc: 'Uma das maiores redes varejistas do Brasil, oferece uma ampla variedade de produtos e serviços, tanto online quanto em lojas físicas.',
    image: magalu,
    tasks: {
      done: '5',
      total: '5',
    },
    members: [member_1, member_4, member_3, member_5, member_2, member_7],
  },
  {
    name: 'Totvs',
    desc: 'Uma empresa brasileira de tecnologia especializada no desenvolvimento de software de gestão empresarial, atendendo a uma variedade de setores e indústrias.',
    image: totvs,
    tasks: {
      done: '4',
      total: '4',
    },
    members: [member_3, member_2, member_1, member_7],
  },
  {
    name: 'Vale',
    desc: 'Uma das maiores empresas de mineração do mundo, líder na produção de minério de ferro e metais preciosos, com operações globais.',
    image: vale,
    tasks: {
      done: '18',
      total: '18',
    },
    members: [member_4, member_2, member_1, member_3, member_8],
  },
  {
    name: 'Gol Linhas Aéreas',
    desc: 'Uma das principais companhias aéreas do Brasil, oferecendo voos nacionais e internacionais para uma variedade de destinos.',
    image: gol,
    tasks: {
      done: '10',
      total: '10',
    },
    members: [member_2, member_1, member_4, member_5, member_3, member_9],
  },
  {
    name: 'Ambev',
    desc: 'Uma das maiores empresas de bebidas do mundo, com uma ampla gama de marcas de cerveja, refrigerantes e outras bebidas alcoólicas e não alcoólicas.',
    image: ambev,
    tasks: {
      done: '9',
      total: '16',
    },
    members: [member_3, member_2, member_1, member_10],
  },
  {
    name: 'Banco do Brasil',
    desc: 'Um dos maiores bancos do Brasil, oferece uma variedade de serviços financeiros, incluindo contas bancárias, empréstimos, investimentos e seguros.',
    image: bb,
    tasks: {
      done: '6',
      total: '13',
    },
    members: [member_1, member_2, member_3, member_4, member_7],
  },
]

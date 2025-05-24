import { TbDiscount } from "react-icons/tb";
import { JSX } from "react";
import { FaCheck } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi2";




type Item = {
  icon: JSX.Element,
  content: string
}

type plan= {
  name:'basic' | 'pro' | 'premium',
  title:string,
  caption:string,
  benefits:Item[]
}

export const plans:plan[] = [
  {
    name:"basic",
    title: "Plano Básico",
    caption: "R$49,99/mês",
    benefits: [
      { icon: <FaCheck />, content: "Assinatura simples: apenas uma" },
      { icon: <HiInformationCircle />, content: "Nesse plano voce podera cobrar apenas um valor fixo por assinatura." },
      { icon: <FaCheck />, content: "Acesso a relatorios" },
      { icon: <TbDiscount />, content: "Cobrança com taxa de 3,99% + R$0,39 por transação." }
    ]
  },
  {
     name:"pro",
    title: "Plano Pro",
    caption: "R$99,99/mês",
    benefits: [
      { icon: <FaCheck />, content: "Assinaturas multi-planos: apenas uma" },
      { icon: <HiInformationCircle />, content: "Neste plano podera ser criado mais de uma assinatura. Ex: Plano Basico, Pro e Premium (Limite de 3 variações.)" },
      { icon: <FaCheck />, content: "Acesso a relatorios" },
      { icon: <TbDiscount />, content: "Cobrança com taxa de 3,99% + R$0,39 por transação." }
    ]
  },
  {
     name:"premium",
    title: "Plano Avançado",
    caption: "R$149,99/mês",
    benefits: [
       { icon: <FaCheck />, content: "Assinaturas multi-plano ilimitadas e sem limite de categorias." },
      { icon: <FaCheck />, content: "O garanta o acesso a novas funcionalidades que serão lançadas." },
      { icon: <FaCheck />, content: "Acesso a relatorios" },
      { icon: <TbDiscount />, content: "Cobrança com taxa de 3,99% + R$0,39 por transação." }
    ]
  }
];


export type fetchData = {
  sessionID: string,
  sessionURL: string,
  plan: string
}
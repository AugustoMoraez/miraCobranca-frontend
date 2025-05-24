import { FiHome } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { MdCreditCard } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { JSX } from "react";

type menuItem = {
    MenuText:string,
    icon:JSX.Element,
    link:string
}

export const AsideData:menuItem[] = [
    {
        MenuText:"Dashboard",
        icon:<FiHome size={20} />,
        link:"/dashboard"
    },
    {
        MenuText:"Clientes",
        icon:<IoPerson size={20} />,
        link:"/clientes"
    },
    {
        MenuText:"Assinaturas",
        icon:<MdCreditCard size={20} />,
        link:"/assinaturas"
    },
    {
        MenuText:"Configurações",
        icon:<GrConfigure size={20} />,
        link:"/configuracoes"
    },
]
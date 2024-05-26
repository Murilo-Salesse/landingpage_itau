import Image from "next/image";
import arrow from '../assets/arrow-down.svg'

type PropsItemMenu = {
  name: string
}

export function ItemMenu({name}: PropsItemMenu) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={arrow} alt="Seta apontando para baixo"/>
    </button>
  )
}
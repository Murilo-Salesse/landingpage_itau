import { Container } from "./Container";
import Image from "next/image";

import phoneIcon from '../assets/icon-phone.svg'
import optionsIcon from '../assets/icon-options.svg'
import cardIcon from '../assets/icon-card.svg'
import solutionsIcon from '../assets/icon-solutions.svg'

import imagePhone from '../assets/phone.png'

export function SectionServices() {
  return (
    <section className="relative w-full h-[965px] pt-32">
      <Container>
        <div className="flex-1 max-w-[594px]">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto de sua casa</p>

          <ul className="flex flex-col gap-9 items-start">
            <li className="flex items-center gap-4 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={phoneIcon} alt='icone phone'/>
              </div>
              <p className="flex-1 text-text-gray pr-4">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
            </li>

            <li className="flex items-center gap-4 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={optionsIcon} alt='icone options'/>
              </div>
              <p className="flex-1 text-text-gray pr-4">Soluções de empréstimos e renegociação para organizar suas finanças</p>
            </li>

            <li className="flex items-center gap-4 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={solutionsIcon} alt='solutions phone'/>
              </div>
              <p className="flex-1 text-text-gray pr-4">Diversas opções de investimentos, de acordo com o seu perfil de investidor</p>
            </li>

            <li className="flex items-center gap-4 ">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={cardIcon} alt='icone card'/>
              </div>
              <p className="flex-1 text-text-gray pr-4">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
            </li>
          </ul>
        </div>
      </Container>

      <div className="absolute top-0 flex items-center right-0 h-full w-[32%]  bg-gray-phone">
        <Image src={imagePhone} alt="celular" className="translate-x-[-50%]"/>
      </div>
    </section>
  )
}
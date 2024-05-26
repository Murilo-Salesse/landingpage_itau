import Image from 'next/image'
import iconSearch from '../assets/icon-search.svg'

export function Search() {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src={iconSearch}
        alt='search icon'
      />
      <input type="text"  className='bg-transparent outline-none text-white pr-5 placeholder:text-white' placeholder='Buscar' />
    </div>
  )
}
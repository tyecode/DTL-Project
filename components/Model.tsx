import Image from 'next/image'
import { useState } from 'react'

const Model = () => {
  const [onState, setState] = useState(false)

  return (
    <div className='relative -ml-[200px] w-full pt-[600px]'>
      <div className='absolute left-[50%] top-[50%] h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%]'>
        <Image
          src={'/images/HomeSection/orange_leaf.svg'}
          fill={true}
          className='h-full w-full object-contain'
          alt='...'
        />
      </div>
      <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Image
          src={'/images/HomeSection/orange_can.svg'}
          width={220}
          height={220}
          alt='...'
        />
      </div>
    </div>
  )
}

export default Model

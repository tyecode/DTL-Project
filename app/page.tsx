'use client'

import OrangeSection from '@/components/OrangeSection'
import { Button } from '@/components/ui/button'
import { useOnClickStore } from '@/store/useOnClick'
import { useState } from 'react'

const btnMenu = [
  {
    id: '1',
    title: 'Orange juice',
  },
  {
    id: '2',
    title: 'Apple juice',
  },
  {
    id: '3',
    title: 'Peach juice',
  },
]

export default function Home() {
  const [isClicked, setIsClick] = useState(false)
  const active = useOnClickStore((state) => state.isClicked)
  const setActive = useOnClickStore((state) => state.setIsClick)

  const onClick = () => {
    setIsClick(true)
    setActive(isClicked)
  }

  return (
    <main className='relative h-full flex-shrink flex-row bg-[#fff7e9]'>
      <div className='container flex'>
        <div
          className={
            !active
              ? 'basis-1/2 duration-1000'
              : '-mt-[1000px] basis-1/2 duration-1000'
          }
        >
          <OrangeSection />
        </div>
        <div
          className={
            !active
              ? 'flex-center my-32 basis-1/2 flex-col items-start duration-1000'
              : 'flex-center my-32 -mr-[500px] -mt-[1000px] basis-1/2 flex-col items-start duration-1000'
          }
        >
          <div className='flex-center'>
            <h1 className='headline-1 absolute -mb-1 -mr-1 text-slate-300'>
              LAILAOLAB Brand
            </h1>
            <h1 className='headline-1 z-10'>LAILAOLAB Brand</h1>
          </div>
          <p className='text-style'>
            "Our fresh fruit juice is made with only the finest ingredients and
            packed with vitamins and minerals. It's perfect day to start your
            day or to refuel after a workout"
          </p>
          <div className='my-6 flex flex-row'>
            {btnMenu.map((list) => (
              <Button variant={'ghost'} className='rounded-full' key={list.id}>
                <span className='text-style'>{list.title}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          !active
            ? 'absolute bottom-[-1250px] left-[50%] aspect-square w-[1600px] translate-x-[-50%] rounded-full bg-[#FAAF35] duration-1000'
            : 'absolute left-[50%] top-[50%] aspect-square w-[1300px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#FAAF35] duration-1000'
        }
      ></div>

      <div
        onClick={onClick}
        className={
          !active
            ? 'duration-1500 font-lilita flex-center absolute bottom-[120px] left-[50%] translate-x-[-50%] flex-col text-[56px] font-normal text-[#FFF7EB] hover:cursor-pointer'
            : 'duration-1500 font-lilita flex-center absolute bottom-[1000px] left-[50%] translate-x-[-50%] flex-col text-[56px] font-normal text-[#FFF7EB] hover:cursor-pointer'
        }
      >
        <div className='mb-12 flex animate-bounce flex-col gap-[12px]'>
          <div className='relative animate-bounce duration-700'>
            <div className='h-[6px] w-[26px] rotate-45 rounded-2xl bg-white'></div>
            <div className='-ml-[15px] -mt-[6px] h-[6px] w-[26px] -rotate-45 rounded-2xl bg-white'></div>
          </div>
          <div className='relative animate-bounce duration-1000'>
            <div className='h-[6px] w-[26px] rotate-45 rounded-2xl bg-white'></div>
            <div className='-ml-[15px] -mt-[6px] h-[6px] w-[26px] -rotate-45 rounded-2xl bg-white'></div>
          </div>
        </div>
        let's try
      </div>
    </main>
  )
}

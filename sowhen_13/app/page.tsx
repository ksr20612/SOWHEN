import Button from '@/components/atoms/Button';
import Canvas from '@/components/molecules/Canvas';
import SoWhen from '@/components/SoWhen';
// import { Button } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 text-[40px]">
      <span className='absolute top-0 left-0 w-full h-full z-1'>
        <Canvas />
      </span>
      <h1 className="relative self-start z-2">
        모두가 동의하는 <br/>
        약속을 만들다. <br/>
        <SoWhen size="40px" />
      </h1>
      <Button className='relative z-2'>
        <Link href={'/schedule'}>10초만에 스케줄 만들기 📅</Link>
      </Button>
    </main>
  )
}

'use client';
import Button from '@/components/Button';
import SoWhen from '@/components/SoWhen';
// import { Button } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-[40px]">
      <h1 className="self-start">
        모두가 동의하는 <br/>
        약속을 만들다. <br/>
        <SoWhen size="40px" />
      </h1>
      <Button onClick={()=>{}}>
        <Link href={'/schedule'}>10초만에 스케줄 만들기 📅</Link>
      </Button>
    </main>
  )
}

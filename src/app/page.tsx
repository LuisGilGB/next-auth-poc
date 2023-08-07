import Image from 'next/image'
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div className="relative flex flex-col gap-2 place-items-center">
        <LoginButton />
      </div>
    </main>
  )
}

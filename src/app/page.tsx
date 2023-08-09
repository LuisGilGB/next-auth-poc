import LoginButton from "@/components/LoginButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div className="relative flex flex-col gap-2 place-items-center">
        <LoginButton />
      </div>
      <div className="space-y-4">
        <Link href="/private-page" className="block text-blue-500 underline" >This page has restricted access</Link>
        <Link href="/check-session" className="block text-blue-500 underline" >Check session</Link>
        <Link href="/auth/signin" className="block text-blue-500 underline" >Sign in</Link>
      </div>
    </main>
  )
}

import { SignIn } from "@clerk/nextjs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
 
export default function Page() {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 relative">
      <Link href={`/`} className="absolute top-8 left-8 bg-white shadow-xl rounded-lg p-2 ">
        <ArrowLeftIcon className="w-5 h-5 " />
      </Link>
      <SignIn afterSignInUrl={'/deashbord'} />
    </div>
    </>
  )
}
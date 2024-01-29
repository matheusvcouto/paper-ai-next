import { SlideBar } from "@/app/deashbord/_components/SlideBar/SlideBar"
import { Logo } from "@/components/logo"

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex h-full w-full">
      <div className="w-72 h-full bg-white border-r-2 border-zinc-400/30 py-4">
        <SlideBar />
      </div>
      <div className="w-full h-full bg-zinc-100 px-6 py-4">
        {children}
      </div>
    </section>
  )
}
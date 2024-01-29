import Link from "next/link"

type propsLogo = {
  link: 'home' | 'deashbord' | 'disabled'

}

export function Logo({ link }: propsLogo) {
  return (
    <>
      {
        link === 'disabled' && (
          <h1 className="font-semibold font-baiJamjuree text-2xl">Paper <span className="text-blue-500">IA</span> </h1>
        )
      }
      {
        link !== 'disabled' && (
          <Link href={`${link === 'home' && '/' || link === 'deashbord' && '/deashbord'}`}>
            <h1 className="font-semibold font-baiJamjuree text-2xl">Paper <span className="text-blue-500">IA</span> </h1>
          </Link>
        )
      }
      
    </>
  )
}
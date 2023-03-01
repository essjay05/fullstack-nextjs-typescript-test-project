import Link from "next/link"

export default function Home() {
  return (
    <main className='py-8 px-48'>
      <Link
        className='bg-teal-500 text-black font-medium px-4 py-2 rounded-md'
        href={'/dashboard'}>Go to the Dashboard</Link>
    </main>
  )
}

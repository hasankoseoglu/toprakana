import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Head>
        <title>Toprakana Restaurant</title>
        <meta name="description" content="Toprakana Restaurant, Ortaca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper flex-1">
        <section className='bg home-page'>
          <div className='overlay'></div>
          <div className='relative z-50 content md:ml-80 w-4/12 md:text-left text-center'>
            <h1 className='text-white font-[Playfair]'>TOPRAKANA RESTAURANT <br /> HOŞGELDİNİZ...</h1>
            <p className='text-white mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <Link href="/iletisim" className="w-full">
              <a className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 text-white border border-transparent rounded-lg focus:outline-none">İletişim</a>
            </Link>


          </div>
        </section>
      </div>
    </>
  )
}

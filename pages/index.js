import Head from 'next/head'
import About from '../components/About'
import Slider from '../components/Slider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Toprakana Restaurant</title>
        <meta name="description" content="Toprakana Restaurant, Ortaca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="-mt-24 relative w-full">
        <div className="home-page relative z-10 justify-center md:justify-start">
          <div className='overlay'></div>
          <div className='relative z-50 content md:ml-52 md:w-4/12 md:text-left text-center'>
            <h1 className='text-white font-playfair md:text-7xl text-5xl font-extrabold mb-10'>
              <span> TOPRAKANA RESTAURANT <br /> HOŞGELDİNİZ...</span>
            </h1>
          


            <a href="tel:05423034888">
              <button className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 w-3/6 rounded justify-center inline-flex items-center">
                Rezervasyon No : 0542 303 48 88
              </button>
            </a>
          </div>
        </div>
         <div className='about-page bg-neutral-100 py-5  mt-20 mb-20 relative container mx-auto grid grid-cols-1 items-center text-3xl'>
           <div className='flex gap-5'>
           <Slider className='flex-1 items-center self-center'></Slider>
           <About className='flex-2'></About>
           </div>
        </div> 
      </div>
    </>

  )
}

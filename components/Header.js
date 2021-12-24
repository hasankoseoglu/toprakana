import Link from "next/link";
import { MdPhone } from "react-icons/md";


export default function Header() {
        return (
                <div className='h-24 z-50 relative container mx-auto px-6 grid grid-cols-2 items-center text-3xl'>
                        <div>
                                <Link href="/">
                                        <a><img src="/images/logo.png" alt="" width={400} /></a>
                                </Link>
                        </div>
                        <div className="">
                                <Link href="tel:05423034888">
                                        <a className="contact-phone flex items-center justify-end ">
                                                <MdPhone className="icon text-yellow-700" />
                                                <span className='phone text-xl pl-3 text-white'>0542 303 48 88</span>
                                        </a>
                                </Link>
                        </div>
                </div>
        )
}

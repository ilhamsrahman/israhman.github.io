import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src="/images/hair-man.svg" className="w-8 h-8" alt="Logo" />
            </Link>  
          </div>


          <a href="/" style={{ fontFamily: 'Newsreader' }} className="text-2xl text-black px-4 py-3 flex items-center ">
          Ilham Rahman
          </a>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link
                  href="/education"
                  className="font-medium text-black hover:text-themecol-400 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-black hover:text-themecol-400 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-black hover:text-themecol-400 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Personal
                </Link>
              </li>
              {/* <li>
                <Link href="/signup" className="btn-sm text-white bg-blue-950 hover:bg-purple-700 ml-3 rounded-md">
                  Contact
                </Link>
              </li> */}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}

import Link from 'next/link'
import ThemeToggle from '../atoms/ThemeToggleAtom'
import Button from '../atoms/ButtomAtom'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full justify-between bg-white px-3 py-5 shadow-md">
      <h1>Jiyoon Bak</h1>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Experience</Link>
          </li>
          <li>
            <Link href="/about">Projects</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
      <Button>Contact</Button>
    </header>
  )
}

export default Header

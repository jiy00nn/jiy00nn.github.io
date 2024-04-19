import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex fixed w-full h-16 top-0 z-50 shadow-md px-3 py-5 justify-between">
      <h1>Jiyoon Bak</h1>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

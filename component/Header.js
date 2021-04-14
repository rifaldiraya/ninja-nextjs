import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Image src="/logo.png" width={100} height={57} />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja Listing</a>
        </Link>
      </nav>
    </>
  );
};

export default Header;

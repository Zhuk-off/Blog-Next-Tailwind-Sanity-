import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center gap-5">
        <Link href={'/'}>
          <Image
            className="duration-600 w-44 cursor-pointer object-contain transition-all hover:scale-[102%]"
            src={'/logo.svg'}
            alt="blog image"
            width={150}
            height={50}
            objectFit="cover"
          />
        </Link>
        <div className="hidden items-center gap-5 md:inline-flex">
          <button className="px-4 py-1 transition-all duration-300 hover:rounded-full hover:bg-black hover:text-white">
            About
          </button>
          <button className="px-4 py-1 transition-all duration-300 hover:rounded-full hover:bg-black hover:text-white">
            Contact
          </button>
          <button
            className="rounded-full  border-2 border-black px-4 py-1
          transition-all duration-300 hover:bg-black hover:text-white "
          >
            Follow
          </button>
        </div>
        <div className=""></div>
      </div>
      <div className="flex items-center gap-5 text-green-600 ">
        <button className="px-4 py-1 transition-all duration-300 hover:rounded-full hover:bg-green-600 hover:text-white">
          Sing In
        </button>
        <button
          className="rounded-full border-2 border-green-600 py-1 px-4 transition-all duration-300
       hover:bg-green-600 hover:text-white"
        >
          Get Started
        </button>
      </div>
      
    </header>
  );
}

export default Header;

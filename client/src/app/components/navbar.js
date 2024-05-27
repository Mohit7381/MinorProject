import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-3 backdrop-blur-xl text-white bg-gray-900">
      <div>
        <a href="/" className="">
          <span className="font-bold md:text-2xl text-yellow-500">Adapt</span>
          <span className="font-thin md:text-2xl">Ed</span>
        </a>
      </div>
      <div className="flex items-center gap-5 md:text-xl">
        <a href="/profile" className="mx-2">
          <Image
            src="/img/user.png"
            alt="Profile"
            className="rounded-full w-10 h-10 border-4 border-yellow-400"
            width={500}
            height={300}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

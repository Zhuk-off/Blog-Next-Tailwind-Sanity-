function BannerTop() {
  return (
    <div className="m-auto flex max-w-7xl items-center justify-between bg-green-300 lg:gap-20 lg:p-7 ">
      <div className="flex flex-col gap-5 pl-7 md:py-7">
        <h2 className="font-serif text-4xl md:text-6xl ">
          <span className="underline decoration-black decoration-4">Lorem</span>{' '}
          ipsum dolor sit amet consectetur adipisicing elit. Aut, corrupti!
        </h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ducimus
          velit at, tempore explicabo itaque.
        </h3>
      </div>
      <div className="pr-7 text-[200px] font-bold lg:p-5">L</div>
    </div>
  );
}

export default BannerTop;

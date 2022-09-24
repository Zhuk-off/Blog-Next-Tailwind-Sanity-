function BannerTop() {
  return (
    <div className="m-auto flex max-w-7xl items-center justify-between bg-green-300 lg:gap-20 lg:p-7 ">
      <div className="flex flex-col gap-5 pl-7 md:py-7">
        <h2 className="font-serif text-4xl md:text-6xl ">
          <span className="underline decoration-black decoration-4">Nevermore</span>{' - '}
          простые статьи от людей для людей.
        </h2>
        <h3>
          О наболевшем и не только...
        </h3>
      </div>
      <div className="pr-7 text-[200px] font-bold lg:p-5">N</div>
    </div>
  );
}

export default BannerTop;

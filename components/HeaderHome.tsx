const HeaderHome = () => {
  return (
    <header className="mx-auto flex w-full justify-center md:w-3/5">
      <div className="flex w-full flex-col justify-between gap-1 rounded-sm bg-white/5 p-3 shadow-sm backdrop-blur-md md:flex-row">
        <div>
          <h1 className="text-lg">
            History of <span className="line-through">Conflicts</span>
          </h1>
          <p>There are wisdoms on every conflicts.</p>
        </div>
        <div>
          <p className="italic">Spread love, not war.</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;

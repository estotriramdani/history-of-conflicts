interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function HeaderContainer(props: Props) {
  return (
    <header className="mx-auto flex w-full justify-center md:w-3/5">
      <div
        className={`flex w-full flex-col justify-between gap-1 rounded-sm bg-white/5 p-3 shadow-sm backdrop-blur-md md:flex-row ${props.className}`}
      >
        {props.children}
      </div>
    </header>
  );
}

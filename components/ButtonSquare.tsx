interface Props {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonSquare(props: Props) {
  const { children, isActive, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`flex h-12 w-12 items-center justify-center rounded-sm text-white outline-none ring-violet-700/50 ring-offset-2 ring-offset-violet-800 hover:ring-2 focus:ring-2  ${
        isActive ? 'bg-violet-500' : 'bg-violet-700'
      }`}
    >
      {children}
    </button>
  );
}

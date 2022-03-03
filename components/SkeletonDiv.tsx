interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function SkeletonDiv(props: Props) {
  return (
    <div
      className={`w-full animate-pulse bg-gray-100/50 duration-200 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

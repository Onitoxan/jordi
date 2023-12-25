interface Props {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: Props) => {
  return (
    <h1 className={`text-xl md:text-2xl xl:text-3xl 2xl:text-4xl ${className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: Props) => {
  return (
    <h2 className={`text-lg md:text-xl xl:text-2xl 2xl:text-3xl ${className}`}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: Props) => {
  return (
    <h3 className={`text-base md:text-lg xl:text-xl 2xl:text-2xl ${className}`}>
      {children}
    </h3>
  );
};

export const P = ({ children, className }: Props) => {
  return (
    <p className={`text-xs md:text-sm xl:text-base 2xl:text-lg ${className}`}>
      {children}
    </p>
  );
};

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="max-w-6xl mx-auto">{children}</main>;
};

export default Container;

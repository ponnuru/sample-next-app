type ContainerProp = {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProp) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
export const Card = ({ children }: { children: Array<JSX.Element> }) => {
  return (
    <div
      className="bg-gray-200 p-4 flex border-zinc-300 border-[1px] border-solid
            flex-col items-center justify-center w-[200px] h-[200px] z-50 shadow-2xl"
    >
      {children}
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex flex-row p-2 font-bold text-black bg-white items-center shadow-md">
      <span className="ml-4 cursor-pointer text-xl">3S</span>
      <div className="flex flex-row ml-16 font-bold cursor-pointer gap-6">
        <span>Personagens</span>
        <span>Recursos</span>
      </div>
    </div>
  );
};

export default Menu;

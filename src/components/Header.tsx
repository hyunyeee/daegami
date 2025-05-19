export const Header = () => {
  return (
    <div className="w-full flex items-center bg-beige-header p-4 top-0 fixed z-10">
      <img
        className="w-12 h-12 rounded-full"
        src="/location_icon.svg"
        alt="icon"
      />
      <span className="font-extrabold text-2xl">터줏대감</span>
    </div>
  );
};

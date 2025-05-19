export const DaegamiChatBubble = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-2">
        <img
          className="w-12 h-12 rounded-full"
          src="/daegami-beige.svg"
          alt="Daegami image"
        />
        <span className="text-md font-bold text-gray-900">대감이</span>
      </div>
      <div className="max-w-[50%] p-4 border-6 border-beige-stroke bg-white rounded text-sm font-normal py-2.5 text-gray-900">
        {children}
      </div>
    </div>
  );
};

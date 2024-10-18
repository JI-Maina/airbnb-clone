type MenuProps = {
  label: string;
  onClick: () => void;
};

export const MenuLink = ({ label, onClick }: MenuProps) => {
  return (
    <button
      onClick={onClick}
      className="py-4 px-6 hover:bg-gray-100 transition text-start"
    >
      {label}
    </button>
  );
};

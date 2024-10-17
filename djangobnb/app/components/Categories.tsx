import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="pt-3 pb-6 cursor-pointer flex items-center space-x-12">
      <CategoryTile img={"/cabin.jpg"} category={"Cabins"} />
      <CategoryTile img={"/cabin.jpg"} category={"Beach"} />
      <CategoryTile img={"/cabin.jpg"} category={"Villas"} />
      <CategoryTile img={"/cabin.jpg"} category={"Tiny house"} />
      <CategoryTile img={"/cabin.jpg"} category={"Mansions"} />
    </div>
  );
};

export default Categories;

type TileProps = {
  img: string;
  category: string;
};

const CategoryTile = ({ img, category }: TileProps) => {
  return (
    <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
      <Image src={img} alt="Cabin" width={20} height={20} />
      <span className="text-xs">{category}</span>
    </div>
  );
};

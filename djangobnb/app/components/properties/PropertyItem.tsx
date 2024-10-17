import Image from "next/image";
import React from "react";

const PropertyItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={"/lion.jpeg"}
          alt="beach"
          sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
          className="hover:scale-110 transition object-cover h-full w-full"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>$200</strong> per night
        </p>
      </div>
    </div>
  );
};

export default PropertyItem;

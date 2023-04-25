import Image from "next/image";
import React from "react";

interface CardProps {
  fullName: string;
  avatar: string;
  location: {
    city: string;
    country: string;
  };
}

const Card = ({ fullName, avatar, location }: CardProps) => {
  return (
    <div className="flex flex-col  items-center justify-center space-x-3 rounded-lg bg-white p-4 shadow md:flex-wrap">
      <div className="md:w-1/3">
        <Image
          src={avatar}
          alt=""
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="font-bold">{fullName}</h2>
        <p>
          {location.city}
          {", "}
          {location.country}
        </p>
      </div>
    </div>
  );
};

export default Card;

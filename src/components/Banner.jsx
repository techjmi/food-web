import React from "react";
import bannerImage from "../assets/banner.jpg"; // Make sure the path is correct
import { Button } from "flowbite-react";
const Banner = () => {
  return (
    <div
      className="min-h-80 bg-cover bg-center md:w-4/5 mx-auto p-5 flex flex-col justify-between items-center mt-2"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="flex flex-col justify-between"> */}
        <div className="flex flex-col justify-center animate-pulse">
          <h1 className="text-white text-3xl font-bold text-center">
            Welcome to Our Site
          </h1>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            hic veritatis possimus, est tenetur quod perspiciatis atque incidunt
            expedita dicta nobis alias ab beatae cum reprehenderit nostrum nisi
            dolores obcaecati?
          </p>
        </div>
        <div className="button text-center">
          <Button gradientDuoTone="purpleToPink">View Menu</Button>
        </div>
      </div>
    // </div>
  );
};

export default Banner;

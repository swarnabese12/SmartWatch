// components/MainLanding.tsx
import Image from "next/image";
import watchImg from "./smart-watch-image.jpg";

const MainLanding = () => {
  return (
    <div className="flex items-center justify-between container">
      {/* Left Part: Text with 60% width */}
      <div className="w-3/5 p-12">
        <h2 className="text-2xl">New Arrivals</h2>
        <h1 className="text-5xl font-bold text-green mt-4">Smart Watch</h1>

        <p className="mt-4 text-base">
          The perfect blend of fashion and functionality. Stay connected and
          stylish with our latest smartwatch. With advanced health monitoring
          features, including heart rate tracking, sleep analysis, and fitness
          coaching, the SmartStyle Watch empowers you to take control of your
          wellness. Enjoy seamless notifications, music control, and GPS
          navigation, all right on your wrist.
        </p>

        <button className="btn btn-active btn-accent mt-10 bg-green">
          Pre-Order Now
        </button>
      </div>

      {/* Right Part: Image with 40% width */}
      <div className="w-2/5 flex justify-start p-8y">
        <div className="bg-light-grey p-4">
          <Image
            src={watchImg}
            alt="Smartwatch"
            width={520} // Adjust width as needed
            height={630} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default MainLanding;

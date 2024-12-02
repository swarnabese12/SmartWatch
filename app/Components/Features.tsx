import Image from "next/image";
import { FaGlobe, FaBatteryHalf, FaMusic } from "react-icons/fa";
import { FaApple, FaCog, FaEnvelope } from "react-icons/fa";
import watchFeatureImg from "./watch-imggg.jpeg"; // Adjust the path as necessary

export default function FeaturesComponent() {
  return (
    <div>
      <div className="justify-center items-center w-[700px] mx-auto mb-12">
        <h3 className="text-center text-lightwhite">
          The smartwatch is designed to elevate your daily life with a range of
          innovative features. It offers seamless Internet Services for staying
          connected, Battery Labs, Music, Apple Version, Settings, and Messages.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* First Div: Icons with Text on the Left */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <div className="flex flex-col items-center mb-12 hover:text-green">
            {" "}
            <FaGlobe size={26} />
            <span className="mt-2 text-sm">Internet Services</span>
          </div>
          <div className="flex flex-col items-center mb-12 hover:text-green">
            {" "}
            <FaBatteryHalf size={26} />
            <span className="mt-2 text-sm">Battery Labs</span>
          </div>
          <div className="flex flex-col items-center hover:text-green">
            <FaMusic size={26} />
            <span className="mt-2 text-sm">Music</span>
          </div>
        </div>

        {/* Second Div: Image in the Center */}
        <div className="mb-4">
          {" "}
          <Image
            src={watchFeatureImg}
            alt="Smartwatch"
            width={420} // Adjust width as needed
            height={500} // Adjust height as needed
            className="w-full max-w-lg" // Optional: additional styling
          />
        </div>

        <div className="flex flex-col items-center w-full max-w-xs">
          <div className="flex flex-col items-center mb-12 hover:text-green">
            {" "}
            <FaApple size={26} />
            <span className="mt-2 text-sm">Apple Version</span>
          </div>
          <div className="flex flex-col items-center mb-12 hover:text-green">
            {" "}
            <FaCog size={26} />
            <span className="mt-2 text-sm">Settings</span>
          </div>
          <div className="flex flex-col items-center hover:text-green">
            <FaEnvelope size={26} />
            <span className="mt-2 text-sm">Messages</span>
          </div>
        </div>
      </div>
    </div>
  );
}

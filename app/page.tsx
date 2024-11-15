// import Head from 'next/head';
import NavBar from "../app/Components/NavBar";
import MainLanding from "./Components/MainLanding";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      <div className="h-full pt-12 px-32 pb-32">
        <MainLanding />
      </div>

      <div className="h-full">
        <Features />
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
      <div>
         <Contact></Contact>
      </div>
    </div>
  );
}

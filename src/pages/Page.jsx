// import React from "react";
import Testimonials from "../components/coments";
import Events from "../components/events";
import Footer from "../components/footer";
import Header from "../head";

function Page() {
  return <>
  <Header />
    <section className="max-w-7xl mx-auto flex flex-col sm:space-x-5 md:flex-row items-center p-6 md:p-12">
      
      {/* Left Text */}
      <div className="flex-1 space-y-4 ">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Website
        </h1>
        <p className="text-gray-600 ">
       I am a passionate and creative individual who works as both a web developer and a graphic designer. I specialize in building responsive, user-friendly, and visually appealing websites, while also creating stunning designs for logos, branding, and digital content. Currently, I am a university student, expanding my knowledge in technology, creativity, and problem-solving, and keeping up with the latest trends in design and development. My goal is to combine my skills in web development and graphic design to create digital solutions that are both beautiful and functional, while continuously learning, growing, and taking on new challenges.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-6 md:mt-0">
        <img
          src="https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png/@@images/image.png"
          alt="Example"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

    </section>
     <Events />
      <Testimonials />
     <Footer />
</>
  
}

export default Page;

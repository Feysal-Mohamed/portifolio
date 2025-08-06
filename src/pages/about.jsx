import Footer from "../components/footer";
import Header from "../head";
import React from "react";

function About(){


  return  <>
    <Header />
    <section id="about" className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
      
      {/* Left - Text */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hello! My name is <span className="border-b-2 border-black"> Feysal Apdirizak Mohamed</span>, and I am passionate about creating
          modern, responsive websites using the latest web technologies such as
          React, Tailwind CSS, and JavaScript. I love designing clean and
          user-friendly interfaces that provide a great experience.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This website is a space where I share my projects, events, and ways to
          connect with me. Feel free to explore and reach out through the
          contact form.
        </p>
      </div>

      {/* Right - Image */}
      <div className="flex-1">
        <img
                    src="https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png/@@images/image.png"

          alt="About Me"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

    </section>
    <Footer />
  </>

}
export default About
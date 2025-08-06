// import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import Eventspage from "./eventspage";

function Events() {
       
           
        
  const events = [
    {
      id: 1,
      title: "Music Festival",
      description: "Join us for an unforgettable night of music and fun.",
      img: "https://images.pexels.com/photos/5280935/pexels-photo-5280935.jpeg",
    },
    {
      id: 2,
      title: "Art Exhibition",
      description: "Explore stunning artworks from talented artists.",
      img: "https://images.pexels.com/photos/8828674/pexels-photo-8828674.jpeg",
    },
    {
      id: 3,
      title: "Tech Conference",
      description: "Learn the latest trends in the world of technology.",
      img: "https://images.pexels.com/photos/28976231/pexels-photo-28976231.jpeg",
    },
    {
      id: 4,
      title: "Food Fair",
      description: "Taste delicious dishes from around the world.",
      img: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg",
    },
    {
      id: 5,
      title: "Charity Run",
      description: "Run for a cause and make a difference.",
      img: "https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg",
    },
    {
      id: 6,
      title: "Book Fair",
      description: "Find your next favorite book at our fair.",
      img: "https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg",
    },
    {
      id: 7,
      title: "Startup Meetup",
      description: "Network with entrepreneurs and innovators.",
      img: "https://images.pexels.com/photos/28976231/pexels-photo-28976231.jpeg",
    },
    {
      id: 8,
      title: "Photography Workshop",
      description: "Improve your photography skills with experts.",
      img: "https://images.pexels.com/photos/2253831/pexels-photo-2253831.jpeg",
    },
    {
      id: 9,
      title: "Dance Show",
      description: "Experience stunning dance performances live.",
      img: "https://images.pexels.com/photos/2253831/pexels-photo-2253831.jpeg",
    },
    {
      id: 10,
      title: "Science Fair",
      description: "Discover exciting science projects and inventions.",
      img: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg",
    },
     {
      id: 11,
      title: "Science Fair",
      description: "Discover exciting science projects and inventions.",
      img: "https://images.pexels.com/photos/5280935/pexels-photo-5280935.jpeg",
    },
  ];

  return (<>

    <section  style={{height: "360px" , overflow:"hidden"}} className= "  max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Events</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img src={event.img}  className="w-full h-40 object-cover" />

            {/* Text */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

     
    </section>
     <div className="text-center mt-3 font-bold">
        <NavLink to="events">

        <h1   className="text-3xl">Vew all <i class="fa-solid fa-chevron-down"></i></h1>
        </NavLink>
        
        {/* <h1  style={{display:isopen===true ? "none":"block"}} onClick={handleisopen} className="text-3xl">Vew all <i class="fa-solid fa-chevron-up"></i></h1> */}
      </div>

    </>
  );
}

export default Events;

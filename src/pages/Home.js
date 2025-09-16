import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?dam,construction')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to M/S HBAS & CO</h2>
          <p className="text-xl">Leading Civil Contractors for Government Projects</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-6 text-center">Who We Are</h3>
        <p className="text-lg mb-4">
          M/S HBAS & CO is a premier civil construction company specializing in irrigation, water management, and infrastructure development. Founded in 1990, we are committed to delivering high-quality projects with excellence and integrity.
        </p>
        {/* Embed a Video */}
        <div className="flex justify-center">
          <video className="w-full max-w-2xl" controls>
            <source src="https://example.com/construction-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Home;
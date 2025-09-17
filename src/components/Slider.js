import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const AIVoiceAgentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const agents = [
    {
      id: 1,
      name: "Alex",
      department: "Customer Support",
      image: "/api/placeholder/400/400",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      name: "Maya",
      department: "Healthcare Department", 
      image: "/api/placeholder/400/400",
      bgColor: "bg-red-500"
    },
    {
      id: 3,
      name: "Jordan",
      department: "Sales Team",
      image: "/api/placeholder/400/400", 
      bgColor: "bg-green-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % agents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + agents.length) % agents.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-[50px] font-bold mb-6 text-gray-900">
          Meet Our{' '}
          <span 
            className="gradient-text font-black"
            style={{
              background: 'linear-gradient(152.63deg, #2775EA 14.86%, #77DCBC 97.16%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            AI Voice
          </span>{' '}
          Agent
        </h2>
        <p className="text-md max-w-3xl mx-auto leading-relaxed">
          Our AI Voice Agent handles calls with speed and accuracy, ensuring every customer gets instant 
          support. Designed to reduce workload, it frees your team to focus on what matters most.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center">
          {/* Left Tilted Card */}
          <div 
            className="absolute left-8 lg:left-32 transform scale-75 opacity-70 transition-all duration-500 cursor-pointer hover:opacity-90 z-10"
            style={{
              transform: 'scale(0.75) rotateY(-25deg) rotateX(5deg)',
              transformStyle: 'preserve-3d'
            }}
            onClick={prevSlide}
          >
            <AgentCard 
              agent={agents[(currentSlide - 1 + agents.length) % agents.length]} 
              isActive={false}
            />
          </div>

          {/* Center Active Card */}
          <div className="transform scale-100 transition-all duration-500 z-20 relative">
            <AgentCard 
              agent={agents[currentSlide]} 
              isActive={true}
            />
          </div>

          {/* Right Tilted Card */}
          <div 
            className="absolute right-8 lg:right-32 transform scale-75 opacity-70 transition-all duration-500 cursor-pointer hover:opacity-90 z-10"
            style={{
              transform: 'scale(0.75) rotateY(25deg) rotateX(5deg)',
              transformStyle: 'preserve-3d'
            }}
            onClick={nextSlide}
          >
            <AgentCard 
              agent={agents[(currentSlide + 1) % agents.length]} 
              isActive={false}
            />
          </div>
        </div>

        {/* Optional Navigation Arrows (smaller, less prominent) */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30 lg:hidden"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30 lg:hidden"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-12 space-x-3">
        {agents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AgentCard = ({ agent, isActive }) => {
  return (
    <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
      isActive ? 'w-80 h-96' : 'w-72 h-80'
    }`}>
      {/* Play Button */}
      {isActive && (
        <button className="absolute top-6 left-6 z-10 bg-blue-500 rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors duration-300">
          <Play className="w-5 h-5 text-white fill-white" />
        </button>
      )}

      {/* Background with headphones visual */}
      <div className={`absolute inset-0 ${agent.bgColor} opacity-10`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Decorative circles */}
          <div className="absolute w-32 h-32 rounded-full bg-white opacity-20 top-10 -left-10"></div>
          <div className="absolute w-24 h-24 rounded-full bg-white opacity-30 bottom-10 -right-8"></div>
        </div>
      </div>

      {/* Agent Image */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="absolute inset-x-6 top-16 bottom-20 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Placeholder for agent image with headphones */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">
                {agent.name[0]}
              </div>
            </div>
          </div>
          
          {/* Headphones overlay effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-8 border-4 border-gray-400 rounded-full opacity-60"></div>
        </div>

        {/* Agent Info */}
        <div className="bg-white rounded-xl p-4 shadow-lg relative z-10">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
          <p className="text-gray-600 text-sm">{agent.department}</p>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceAgentSlider;
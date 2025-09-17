import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import bgImage from "../assets/images/videos/hero-1.png"
import bgImage2 from "../assets/images/containers.png"
import AIVoiceAgentSlider from '../components/Slider';

const Home = () => {
  return (

    <section className='font-telegraf'>
      {/* HERO SECTION */}
      <section className='bg-black pt-[200px]'>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-[55px] font-normal mb-6 px-6 md:leading-[70px]"> Reinvent Business Communication with <br /> Next-Generation <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>AI Voice Agents</span></h2>
          <p className="text-sm md:text-xl font-normal px-6 md:leading-[32px] text-center mb-6">Revolutionize customer support, automate queries, and streamline communication  <br /> with next-gen AI voice agents tailored for your industry.</p>
          <button
            type="submit"
            className="inline-flex gap-3 mb-8 items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#2775EA] to-[#77DCBC]  text-white font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowUpRight size={24} />
          </button>

          <div>
            <div style={{ backgroundImage: `url(${bgImage})` }} className='w-[90%] md:w-[70%] mx-auto h-[400px] bg-cover bg-center rounded-t-[20px] relative'>
              <img className='md:w-[200px] w-[150px] absolute right-0 bottom-0' src='./hero-2.png' />
              <img className='w-[326px]  md:block hidden absolute left-[-15%] top-[-15%]' src='./float-1.png' />
              <img className='w-[326px]  md:block hidden absolute right-[-15%] top-[-15%]' src='./float-2.png' />
              <img className='w-[326px]  md:block hidden absolute left-[-15%] bottom-20' src='./float-3.png' />
            </div>
          </div>
        </div>
      </section>
      {/* TRUSTED SECTION */}
      <section className='py-10 md:py-20 bg-white'>
        <div className='px-6 max-w-7xl mx-auto'>
          <p className="text-xl font-normal px-6 md:leading-[32px] text-center mb-6">Trusted by Leading Logistics Innovators</p>
          <div className="flex justify-center gap-4 items-center-center mb-4 flex-wrap">
            <img className="w-[220px]" src="./t-1.png" />
            <img className="w-[220px]" src="./t-2.png" />
            <img className="w-[220px]" src="./t-3.png" />
            <img className="w-[220px]" src="./t-3.png" />
          </div>
          <div className="flex justify-center gap-4 items-center-center mb-6 flex-wrap">
            <img className="w-[220px]" src="./t-4.png" />
            <img className="w-[220px]" src="./t-5.png" />
            <img className="w-[220px]" src="./t-6.png" />
            <img className="w-[220px]" src="./t-7.png" />
          </div>
          <div className='flex justify-center mt-4'>
            <button
              type="submit"
              className="inline-flex gap-3 mx-auto items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#2775EA] to-[#77DCBC]  text-white font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Read Their Stories
              <ArrowUpRight size={24} />
            </button>
          </div>

        </div>
      </section>

      {/* ENTERPRICE */}
      <section className='py-10 md:py-20 bg-black'>
        <div className='px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-center'>
          <div className='lg:w-[55%]'>
            <h2 className="text-4xl md:text-[40px] text-white font-normal mb-6 md:leading-[65px] text-left font-telegraf"> Enterprise-Grade <span className='font-black ml-2 bg-custom-gradient py-0.5 bg-clip-text text-transparent'>AI Call </span>Handling for Modern Workflows</h2>
            <p className="text-sm text-white text-left  font-normal md:leading-[25px] mb-6">Our AI voice agents eliminate repetitive call handling, freeing teams to focus on strategy and growth.</p>

            <div>
              <div className='flex p-4 gap-3 items-center bg-[#181818] rounded-[20px] mb-4'>
                <div>
                  <img className='w-[60px]' src='./phone-c.png' />
                </div>
                <div>
                  <p className="text-[24px] text-white text-left  font-normal md:leading-[24px] mb-2">Reception & Routing</p>
                  <p className="text-sm text-white text-left  font-normal md:leading-[24px] ">Every call answered, instantly directed, and logged into your systems</p>

                </div>

              </div>
              <div className='flex p-4 gap-3 items-center bg-[#181818] rounded-[20px] mb-4'>
                <div>
                  <img className='w-[60px]' src='./phone-c.png' />
                </div>
                <div>
                  <p className="text-[24px] text-white text-left  font-normal md:leading-[24px] mb-2">Appointment Scheduling</p>
                  <p className="text-sm text-white text-left  font-normal md:leading-[24px] ">Automated, accurate, and always synced with your calendar</p>

                </div>

              </div>
              <div className='flex p-4 gap-3 items-center bg-[#181818] rounded-[20px]'>
                <div>
                  <img className='w-[60px]' src='./phone-c.png' />
                </div>
                <div>
                  <p className="text-[24px] text-white text-left  font-normal md:leading-[24px] mb-2">Customer Support & Onboarding</p>
                  <p className="text-sm text-white text-left  font-normal md:leading-[24px] ">Resolve FAQs, qualify leads, and create support tickets in real time</p>

                </div>

              </div>
            </div>
            <p className="text-sm text-white text-left  font-normal md:leading-[25px] mt-6">Empower your team to focus on revenue, clients, and innovation, while AI handles the rest</p>

          </div>
          <div className='lg:w-[45%] bg-custom-gradient rounded-[20px] p-[50px] h-fit'>
            <img src='./maya.png' />
          </div>

        </div>
      </section>

      {/* ENTERPRICE RESULTS */}
      <section className='py-10 md:py-20 bg-white'>
        <div className='px-6 max-w-7xl mx-auto '>
          <div className='mx-auto'>
            <h2 className="text-4xl md:text-[55px] font-normal mb-3 px-6 md:leading-[65px] text-center"> Enterprise Results You Can <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>Measure</span></h2>
            <p className="text-md  font-normal px-6 md:leading-[24px] text-center mb-6">Unlock tangible ROI with reduced costs, faster workflows, and improved customer satisfaction.<br /> Track performance with clear metrics that highlight growth, efficiency, and long-term impact.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <img src='./result-1.png' />
              <p className="text-[32px]  font-normal md:leading-[32px] text-left mb-3 mt-5">Regional Healthcare Network</p>
              <p className="text-[16px]  font-normal md:leading-[24px] text-left ">Reduced no-shows by 42% and saved $15K per month with AI scheduling, while boosting customer satisfaction and operational efficiency.</p>
            </div>

            <div>
              <img src='./result-2.png' />
              <p className="text-[32px]  font-normal md:leading-[32px] text-left mb-3 mt-5">Solar Energy Installer</p>
              <p className="text-[16px]  font-normal md:leading-[24px] text-left ">Increased qualified appointments by 65%, achieved ROI in just 60 days, driving faster growth and maximizing sales team productivity.</p>
            </div>

          </div>
        </div>
      </section >

      {/* AVAILABLITY */}
      < section className='py-5 md:py-10 bg-black' >
        <div className='px-6 max-w-7xl mx-auto '>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <h2 className='font-normal bg-custom-gradient py-0.5 bg-clip-text text-transparent text-4xl md:text-[50px] mb-4 text-center'>24/7</h2>
              <p className="text-sm md:text-medium text-white font-normal px-6 md:leading-[32px] text-center ">Availablity</p>
            </div>

            <div>
              <h2 className='font-normal bg-custom-gradient py-0.5 bg-clip-text text-transparent text-4xl md:text-[50px] mb-4 text-center'>100%</h2>
              <p className="text-sm md:text-medium text-white font-normal px-6 md:leading-[32px] text-center ">GDPR & HIPAA compliant</p>
            </div>

            <div>
              <h2 className='font-normal bg-custom-gradient py-0.5 bg-clip-text text-transparent text-4xl md:text-[50px] mb-4 text-center'>99.9%</h2>
              <p className="text-sm md:text-medium text-white font-normal px-6 md:leading-[32px] text-center ">uptime</p>
            </div>
          </div>
        </div>
      </section >

      {/* ENTERPRICE DEPLOYMENT */}
      <section className='py-10 md:py-20 bg-white'>
        <div className='px-6 max-w-7xl mx-auto '>
          <div className='mx-auto mb-6'>
            <h2 className="text-4xl md:text-[55px] font-normal mb-3 px-6 md:leading-[65px] text-center"> Enterprise <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>Deployment</span> Made Simple </h2>
            <p className="text-md  font-normal px-6 md:leading-[24px] text-center mb-6">Get up and running quickly with a guided setup designed for minimal disruption.<br /> Scale effortlessly with ongoing optimization and integrations tailored to your needs.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6'>
            <div className='bg-black rounded-[16px] py-8 md:py-10 px-7 mb-4'>
              <div className='p-3 rounded-[16px] bg-custom-gradient mb-2'>
                <p className="text-sm  font-normal  text-left mb-2 text-white">Step 01</p>
                <p className="text-[20px] lg:text-[28px]  font-normal text-white flex gap-1">Setup <p className='font-telegraflight'>{` (Week 1)`}</p></p>
              </div>
              <div className='p-3 rounded-[16px] bg-[#181818] mb-2'>
                <p className="text-sm  font-normal  text-left mb-2 text-white">Step 02</p>
                <p className="text-[20px] lg:text-[28px]  font-normal text-white flex gap-1">Launch  <span className='font-telegraflight'>{` (Weeks 2–3)`}</span></p>
              </div>
              <div className='p-3 rounded-[16px] bg-[#181818] mb-2'>
                <p className="text-sm  font-normal  text-left mb-2 text-white">Step 03</p>
                <p className="text-[20px] lg:text-[28px]  font-normal text-white flex gap-1">Scale  <p className='font-telegraflight'>{` (Ongoing)`}</p></p>
              </div>
            </div>

            <div className='col-span-2 flex flex-col justify-center items-center'>
              <img src='./deploy-bg.jpg' className='rounded-[20px] md:w-[631px]' />
              <p className="text-[20px]  font-normal md:leading-[32px] text-center mb-3 mt-5">Assess existing workflows, identify bottlenecks, and configure the <br />AI platform to align with your business needs.</p>
            </div>

          </div>
        </div>
      </section >

      {/* INDUSTRY SOLUTIONS */}
      <section
        style={{ backgroundImage: `url(${bgImage2})` }}
        className="relative text-white h-[900px] bg-cover bg-center flex items-end"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full flex md:flex-row flex-col">
          {/* Main heading */}
          <div className="md:text-center text-left lg:text-left mb-12 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Industry Solutions Tailored for Enterprise Needs
            </h2>
            <p className="mt-4 text-sm sm:text-md ">
              Our AI adapts to your industry’s unique workflows, from patient care to fleet
              management, with enterprise precision and compliance.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className=" rounded-2xl p-4 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-normal">Healthcare & Clinics</h3>
              <p className="mt-2 text-sm">
                Reduce no-shows, optimize scheduling, maintain HIPAA compliance.
              </p>
            </div>

            <div className=" rounded-2xl p-4 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-normal">Logistics & Transportation</h3>
              <p className="mt-2 text-sm">
                Book drivers, track shipments, and update customers in real time.
              </p>
            </div>

            <div className=" rounded-2xl p-4 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-normal">Professional Services</h3>
              <p className="mt-2 text-sm">
                Automate scheduling, confirmations, and client updates at scale.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Slider Section */}
      < AIVoiceAgentSlider />


      {/* Introduction Section */}
      < section className="py-12 container mx-auto px-4" >
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
      </section >


    </section >

  );
};

export default Home;
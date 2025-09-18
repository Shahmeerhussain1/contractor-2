import { ArrowUpRight, Quote } from 'lucide-react';
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
            <div className=" rounded-2xl p-4 shadow-md hover:shadow-xl transition backdrop-blur-sm">
              <h3 className="text-xl font-normal">Healthcare & Clinics</h3>
              <p className="mt-2 text-sm">
                Reduce no-shows, optimize scheduling, maintain HIPAA compliance.
              </p>
            </div>

            <div className=" rounded-2xl p-4 shadow-md hover:shadow-xl transition backdrop-blur-sm">
              <h3 className="text-xl font-normal">Logistics & Transportation</h3>
              <p className="mt-2 text-sm">
                Book drivers, track shipments, and update customers in real time.
              </p>
            </div>

            <div className=" rounded-2xl p-4 shadow-md hover:shadow-xl transition backdrop-blur-sm">
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
      <section className='py-10 md:py-20 bg-[#F9F9F9]'>
        <div className='px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-center'>
          <div className='w-full lg:w-[50%]'>
            {/* <h2 className="text-4xl md:text-[40px] font-normal mb-2 md:leading-[65px] text-left font-telegraf w-full white-spaces"> Why<span className='font-black mx-2 bg-custom-gradient py-0.5 bg-clip-text text-transparent'>Enterprises</span>Choose Us</h2> */}
            <h2 class="text-3xl sm:text-4xl md:text-[40px] font-normal mb-2 leading-snug md:leading-[65px] text-left font-telegraf w-full break-words">
              Why
              <span class="font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent mx-2">
                Enterprises
              </span>
              Choose Us
            </h2>

            <p className="text-sm  text-left  font-normal md:leading-[25px] mb-4">Trusted by leading organizations for our proven scalability, reliability, and innovation. We deliver measurable business outcomes with faster adoption and continuous optimization.</p>

            <div>
              <div className='flex p-4 gap-3 items-center bg-[#FFFFFF] rounded-[20px] mb-3'>
                <div>
                  <img className='w-[60px]' src='./chat.png' />
                </div>
                <div>
                  <p className="text-[24px] text-left  font-normal md:leading-[24px] mb-2">Human-like Conversations</p>
                  <p className="text-sm text-left  font-normal md:leading-[24px] ">Multilingual, contextual, and indistinguishable from live agents</p>

                </div>

              </div>
              <div className='flex p-4 gap-3 items-center bg-[#FFFFFF] rounded-[20px] mb-3'>
                <div>
                  <img className='w-[60px]' src='./chat.png' />
                </div>
                <div>
                  <p className="text-[24px]  text-left  font-normal md:leading-[24px] mb-2">Seamless Integrations</p>
                  <p className="text-sm  text-left  font-normal md:leading-[24px] ">Works with Salesforce, HubSpot, calendars, and major telephony platforms</p>

                </div>

              </div>
              <div className='flex p-4 gap-3 items-center bg-[#FFFFFF] rounded-[20px] mb-3'>
                <div>
                  <img className='w-[60px]' src='./chat.png' />
                </div>
                <div>
                  <p className="text-[24px]  text-left  font-normal md:leading-[24px] mb-2">Smart Analytics</p>
                  <p className="text-sm  text-left  font-normal md:leading-[24px] ">Real-time dashboards for call quality, customer satisfaction, and ROI</p>
                </div>

              </div>
              <div className='flex p-4 gap-3 items-center bg-[#FFFFFF] rounded-[20px]'>
                <div>
                  <img className='w-[60px]' src='./chat.png' />
                </div>
                <div>
                  <p className="text-[24px]  text-left  font-normal md:leading-[24px] mb-2">Proven ROI</p>
                  <p className="text-sm  text-left  font-normal md:leading-[24px] ">Documented savings, faster response times, and measurable CX improvements</p>
                </div>

              </div>
            </div>
          </div>
          <div className='lg:w-[50%] w-full  rounded-[20px] h-fit'>
            <img src='./gentelmen.png' />
          </div>

        </div>
      </section>

      <section className='py-130 md:py-20 bg-[#FFFFFF]'>
        <section className="bg-black text-white max-w-7xl mx-auto xl:rounded-[30px] py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-6">
                Our Clients Say
              </h2>
              <p className="text-white leading-relaxed">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                archivos de texto. Lorem Ipsum ha sido el texto de relleno.
              </p>
            </div>

            {/* Right Side */}
            <div className="relative bg-transparent">
              <div className="flex flex-col items-start text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-black"
                />
                <p className="text-white text-left mb-4">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                  de las industrias desde el año 1500, cuando un impresor
                  desconocido.
                </p>
                <h4 className="font-normal text-2xl">John Doe</h4>
              </div>

              {/* Quote Icon */}
              <Quote
                className="absolute -top-4 right-0 text-white opacity-80 w-10 h-10"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </section>
      </section>

      {/* CLOUDS */}

      <section className="relative w-full min-h-[450px] flex items-center justify-center text-center bg-blue-500 overflow-hidden">
        {/* Clouds at the bottom */}
        <img
          src="/clouds.png" // replace with your cloud image path
          alt="Clouds"
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
        />

        {/* Plane */}
        <img
          src="/plane.png" // replace with your plane image path
          alt="Plane"
          className="absolute top-10 md:left-0 w-40 md:w-64 animate-float scale-x-[-1]"
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-[50px] text-white font-normal mb-6 px-6 md:leading-[65px]">
            Ready to Transform <span className="font-bold">Enterprise</span>{" "}
            Communication?
          </h1>
          <p className="text-sm md:text-xl text-white font-normal px-6 md:leading-[32px] text-center mb-6">
            Experience a risk-free pilot, launch AI voice automation in your business with zero upfront risk.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="submit"
              className="inline-flex gap-3 md:mb-8 items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#2775EA] to-[#77DCBC]  text-white font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Demo
              <ArrowUpRight size={24} />
            </button>
            <button
              type="submit"
              className="inline-flex gap-3 md:mb-8 items-center justify-center px-10 py-3.5 bg-white text-blue-600 font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Launch Free Pilot
              <ArrowUpRight size={24} />
            </button>

          </div>
        </div>
      </section>


    </section >

  );
};

export default Home;
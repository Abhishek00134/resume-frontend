import React from 'react'
import {Zap} from 'lucide-react'
import Title from './Title';
const Features = () => {
    const [isHover, setIsHover] = React.useState(false);
  return (
     <div id='features' className=' flex flex-col items-center my-10 scroll-mt-16 mt-30 mb-30'>

         <div className="relative mx-auto max-w-5xl px-4">
                <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-[#A6FF5D] blur-3xl"></div>
                <p className="text-slate-800 text-lg text-left max-w-3xl">This helps you build faster by transforming your skills, experience, and achievements into a professional resume that stands out.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <div className="md:col-span-2">
                        <img alt="features showcase" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-4.png" /></div>
                    <div className="md:col-span-1">
                        <img alt="features showcase" className="hover:-translate-y-0.5 transition duration-300" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" />
                        <h3 className="text-[24px]/7.5 text-slate-800 font-medium mt-6">ATS-optimized and visually stunning resumes</h3>
                        <p className="text-slate-600 mt-2">ATS keywords, tailored templates, and professional layouts designed to get you noticed.</p>
                        <a href="https://prebuiltui.com" className="group flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700 transition">
                            Learn more about this App
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-5 group-hover:translate-x-0.5 transition duration-300" aria-hidden="true">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
  )
}

export default Features

import React from 'react'
import { MyProjects } from '../assets/assets'


const Projects = () => {
  return (
    <div className='mt-10'>
      <h2 className="text-customDarkBlue text-4xl font-bold mb-4">Projects</h2>
      <p className="text-customGray text-sm font-base">Things I’ve built so far</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10">
     {
      MyProjects.map((item,index)=>(
       (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="path-to-your-image1" alt="Project Image" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {item.desc}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech stack: <span className="text-blue-500">{item.techstack}</span>
            </p>
            <div className="flex items-center justify-between">
              <a href={item.livelink} className="text-sm flex items-center text-blue-500 hover:text-blue-600 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M..." />
                </svg>
                Live Preview
              </a>
              <a href={item.code} className="text-sm flex items-center text-blue-500 hover:text-blue-600 font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M..." />
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
        )
      ))
     }
        
      
      </div>
    </div>
  );
}

export default Projects;

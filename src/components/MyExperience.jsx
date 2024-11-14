import React from 'react'
import { workExperience } from '../assets/assets'

const MyExperience = () => {
  return (
    <div className='mt-10' >
     <h2 className='text-customDarkBlue text-4xl font-bold mb-4' >Work Experience</h2>
     <div>
       {
        workExperience.map((item,index)=>(
        <div key={index}> 
          
          <div className='flex justify-between' >
            <h3 className='text-xl text-customGray font-medium ' >{item.jobTitle}</h3>
            <p className='text-xs bg-green-200 rounded-3xl p-2 text-green-800' >{item.type}</p>
          </div>

          <div className='flex justify-between text-xs mt-4 text-customGray' >
            <p>{item.location}</p>
            <p>{item.date}</p>
          </div>

          <p className='my-2 text-sm text-customGray' >{item.desc}</p>
          <hr  className='mb-6' />


            </div>
        ))
       }
     </div>

    </div>
  )
}

export default MyExperience

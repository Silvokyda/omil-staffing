import React from 'react';

const Founder = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 lg:p-2 bg-black">
      <div className="flex-shrink-0 w-full h-full lg:mb-0 lg:w-1/3 order-2 lg:order-2">
        <img src="./omil.png" alt="Image" className="w-full" style={{ width: '50%', height: '50%', marginLeft: '25%', marginRight: '25%' }} />
      </div>
      <div className="flex-1 order-2 lg:order-1 p-8">
        <h2 className="text-3xl font-bold mb-10 text-white ">Meet the founder</h2>
        <p className="text-white mb-4">Leah Awiti Omil, Founder of Omil Staffing Services and Partner at Voices of Africa is an accomplished Human Resource Manager, Career Strategist, author, and expert in writing high-impact, optimized, and bespoke resumes, cover letters, LinkedIn profiles, and business blogs.

She holds a Bachelor’s Degree in Business Administration from St. Paul’s University and a Diploma in Business Management from the University of Nairobi. She also holds an Associate’s Degree in HRM, Associates Degree in Career Coaching. Currently, she is studying for her Associate degree in Project Management from Riziki Learning. 

Leah has amassed a wealth of experience and expertise in the human resource industry, having served in different roles in various organizations. A passionate and visionary leader and master strategist, she currently serves as the CEO of Omil Staffing Solutions where she provides overall leadership, directs and coordinates the growth of the company. </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">Read More</button>
        
      </div>
    </div>
  );
};

export default Founder;

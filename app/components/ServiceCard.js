import React from 'react';

const ServiceCard = ({ icon: Icon, title }) => {
  return (
    <div className='inline-block p-8 text-center shadow-xl'>
      <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50'>
        <Icon className='w-10 h-10 text-[#ff0000]' />
      </div>
      <p className='font-bold tracking-wide text-gray-800'>{title}</p>
    </div>
  );
};

export default ServiceCard;

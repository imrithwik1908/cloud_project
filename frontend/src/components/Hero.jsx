import { Link } from 'react-router-dom';

import collegeImage from '../assets/images/illustration-intro.png';

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Course registration made easy
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Get course information easily with a few clicks. Add, delete, update courses using IIIT Dharwad's course registration platform
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2 '>
          <img className='rounded-3xl' src={collegeImage} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

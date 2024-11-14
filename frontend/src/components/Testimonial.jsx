import { Link } from 'react-router-dom';


import githubLogo from '../assets/images/githubLogo.png';
import avatarAli from '../assets/images/avatar-ali.png';
import avatarRichard from '../assets/images/avatar-richard.png';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      {/* Container to heading and testm blocks */}
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-center'>
          Our team
        </h2>
        {/* Testimonials Container */}
        
        <div className='flex flex-col mt-24 md:flex-row md:space-x-4'>
          {/* Testimonial 1 */}
          
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
          <Link to="https://github.com/chaytalij">
          
          <img src={githubLogo} className='w-16 -mt-14 rounded-3xl' alt='' />
          </Link>
            <h5 className='text-lg font-bold'>Chaytali Jawalekar</h5>
            <p className='text-sm font-bold'>
             21BCS026
            </p>
          </div>

          {/* Testimonial 2 */}
          
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
          <Link to="https://github.com/adij003">
          
          <img src={githubLogo} className='w-16 -mt-14 rounded-3xl' alt='' />
          </Link>

            <h5 className='text-lg font-bold'>Adi Jain</h5>
            <p className='text-sm font-bold'>
             21BCS003
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
          <Link to="https://github.com/imrithwik1908">
          
          <img src={githubLogo} className='w-16 -mt-14 rounded-3xl' alt='' />
          </Link>

            <h5 className='text-lg font-bold'>C. Sai Rithwik Reddy</h5>
            <p className='text-sm font-bold'>
             21BCS028
            </p>
          </div>
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
          <Link to="https://github.com/adij003">
          
          <img src={githubLogo} className='w-16 -mt-14 rounded-3xl' alt='' />
          </Link>

            <h5 className='text-lg font-bold'>Ashish Jadhawar</h5>
            <p className='text-sm font-bold'>
             21BCS015
            </p>
          </div>
        
        </div>
        {/* Button */}
        <div className='my-16'>
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

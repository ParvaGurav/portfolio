// import React from 'react';

// const Hero = () => {
//   return (
//     <div>
//       <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
//         <h1 className="text-4xl font-semibold">
//           Hey, I'm Parva Gurav. <br />{' '}
//         </h1>
//         <h2 className="text-3xl">
//         I design and implement robust backend solutions using Java and Spring framework. I specialize in developing RESTful APIs, working with databases (SQL/NoSQL), and integrating third-party services.
//         </h2>
//         <p className="text-xl">
//           I'm a Backend Engineer, and a problem-solver. <br /> Find me on{' '}
//           <a
//             href="https://github.com/ParvaGurav"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             GitHub
//           </a>
//           ,{' '}
//           <a
//             href="https://www.linkedin.com/in/parva-gurav/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             LinkedIn
//           </a>
//           ,{' '}
//           and{' '}
//           <a
//             href="https://leetcode.com/u/parvagurav/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             Leet Code,
//           </a>{' '}
//         </p>
//         <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
//           <a
//             href="https://drive.google.com/file/d/1jy3jRrBG7Y1k6eXUdKorwKk-eDsb_eWi/view?usp=sharing"
//             className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
//           >
//             Hire Me
//           </a>
//           <a
//             href="https://github.com/ParvaGurav?tab=repositories"
//             className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3"
//           >
//             Projects
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import HeroPic from './HeroPic.jpg'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start mt-20 md:mt-32 space-y-5 md:space-y-0 md:space-x-30">
      {/* Left Side - Text Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-semibold">
          Hey, I'm Parva Gurav. <br />{' '}
        </h1>
        <h2 className="text-3xl mt-4">
          I design and implement robust backend solutions using Spring framework and NodeJs.
        </h2>
        {/* I specialize in developing RESTful APIs, working with databases (SQL/NoSQL), and integrating third-party services */}
        <p className="text-xl mt-4">
          I'm a Backend Engineer, and a problem-solver. <br /> Find me on{' '}
          <a
            href="https://github.com/ParvaGurav"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/parva-gurav/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          ,{' '}
          and{' '}
          <a
            href="https://leetcode.com/u/parvagurav/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Leet Code
          </a>
          .
        </p>
        <div className="flex mt-5 space-x-5">
          <a
            href="https://drive.google.com/file/d/1jy3jRrBG7Y1k6eXUdKorwKk-eDsb_eWi/view?usp=sharing"
            className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/ParvaGurav?tab=repositories"
            className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full"
          >
            Projects
          </a>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={HeroPic} // Replace with the path to your image
          alt="Parva Gurav"
          className="w-80 h-80 md:w-100 md:h-100 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;

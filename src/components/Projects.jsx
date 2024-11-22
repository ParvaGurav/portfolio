import React from 'react';
import goCuts from '../assets/images/goCuts.png';
import foodDay from '../assets/images/FoodDayy.png';

const Projects = () => {
  const works = [
    {
      title: 'goCuts',
      description:
        'goCuts is a cutting-edge backend solution designed for an innovative hairstyling platform that empowers barbers to showcase their services and compete either globally or within their local regions. The app bridges the gap between barbers and customers by offering seamless access to essential features such as service rates, real-time availability, and personalized booking options. By enabling customers to select specific barbers based on their preferences, goCuts redefines convenience and elevates the hairstyling experience to new heights.',
      code: 'https://github.com/ParvaGurav',
      live: '',
      stack: 'Java, Spring Boot, MySQL',
      thumbnail: goCuts,
    },
    {
      title: 'FoodDayy!!',
      description:
        'Food Delivery Admin App is a robust backend solution built using Node.js, Express.js, and MongoDB, tailored to streamline restaurant operations. This application allows restaurant owners to efficiently manage their menus by adding products with accompanying images to enhance customer engagement. With seamless cart integration and delivery management features, the app ensures a smooth and user-friendly food ordering experience.',
      code: 'https://github.com/ParvaGurav/fooddayy',
      live: '',
      stack: 'JavaScript, NodeJs, ExpressJs, MongoDB',
      thumbnail: foodDay,
    }
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-start mt-12 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="flex flex-col gap-6 mt-0">
        {works.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 space-y-4 border border-white group rounded-lg hover:border-zinc-200 w-full md:w-[5%] lg:w-[100%] mx-auto"
          >
            <img
              alt={work.title}
              loading="lazy"
              className="object-cover w-full rounded-lg max-h-[250px]"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-lg font-semibold">{work.title}</h2>
              <p className="text-sm text-gray-600">{work.description}</p>
              <div className="flex flex-row items-center w-full space-x-3">
                {/* <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-sm transition duration-500 ease-in-out border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Live
                </a> */}
                <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-sm transition duration-500 ease-in-out border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

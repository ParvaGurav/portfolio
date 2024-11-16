import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "University of Guelph",
      position: "Research Assistant - Data Science",
      dates: "September 2023 - December 2023",
      description: [
        "Collected and pre-processed both tabular and image data to optimize the production rate for a materials of manufacturing-based company in Guelph.",
        "Applied unsupervised machine learning algorithms to image data and used ensemble learning techniques, including Random Forest, XGBoost, and Neural Nets to improve the performance of tabular data.",
        "Leveraged the SDLC process by documenting the code in a way that ensures it is understandable for both software developers and machine learning engineers, facilitating future updates and maintenance."
      ],
      tags: ["Python", "Machine Learning", "Data Processing", "Image Augmentation", "Supervised Learning", "Unsupervised Learning"]
    },
    {
      company: "Agami Tech Pvt Ltd",
      position: "Java Developer - Trainee",
      dates: "June 2022 - October 2022",
      description: [
        "Developed and hosted dynamic Ticket Management database-integrated applications using Java - Spring Boot and ReactJS, enhancing software functionality and database connectivity.",
        "Led key phases of SDLC by writing, testing, and debugging code in collaboration with development teams to deliver high-quality, client-ready solutions.",
        "Enhanced application efficiency, reducing API calls by 50% and boosting performance by 25%, using advanced code and resource optimization techniques.",
        "Worked closely with product teams, streamlining project timelines and driving a 30% increase in timely feature and bug-fix releases."
      ],
      tags: ["Java", "Spring Boot", "ReactJs", "JavaScript", "ReactJs", "NodeJs & ExpressJs", "OAuth 2.0", "Micro-services", "Manual Testing", "Deployment", "Client-Support" ],
    },
    {
        company: "Agami Tech Pvt Ltd",
        position: "Java Developer - Intern",
        dates: "Jan 2022 - May 2022",
        description: [
          "Collaboratively worked with a cross-functional team to design, develop, and deploy quality solutions in line with client requirements and project objectives.",
          "Implemented OAuth 2.0 for secure authentication, later upgraded to AWS IAM for enhanced security and simplified management of user access across services.",
          "Contributed to the development of post-call analysis features using Natural Language Processing (NLP) models, improving client understanding and satisfaction.",
          "Assisted in requirement gathering, documentation, and deployment of solutions, ensuring smooth project delivery and post-project knowledge transfer. ",
          "Participated in after-hours on-call support, ensuring immediate resolution of any urgent system issues, contributing to system availability and user satisfaction. "
        ],
        tags: ["Java", "Spring Boot", "Python", "FastAPI", "JavaScript", "ReactJs", "Machine Learning", "Natural Language Processing", "Audio Analysis", "Amazon Web Services", "Google Cloud Platform", "Deployment"],
      }
  ];

  return (
    <div className="flex flex-col items-start mt-20 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
      <h1 className="text-3xl font-bold">Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md mb-5 w-full">
          <h2 className="text-xl font-semibold">{experience.position}</h2>
          <h3 className="text-md">{experience.company}</h3>
          <p className="text-gray-500">{experience.dates}</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
          {experience.description && experience.description.length > 0 && (
            <ul className="list-disc pl-5 mt-2 space-y-2">
              {experience.description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          )}
          </ul>
          <div className="flex flex-wrap mt-3 space-x-1 gap-2">
            {experience.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

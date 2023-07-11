import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "Python" },
  { skill: "PHP" },
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "API" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "ChatGPT" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pt-52 mb-12 pb-12 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <br />
            <p>
              I graduated from SMK Dharma Maitreya and i am currently continuing
              my studies as a college student majoring in information system at
              Institute Business and Technology Pelita Indonesia.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, watching movies, and playing video games, I am
              always seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p>
              I am committed to continuous growth, firmly believing that one
              should never cease to learn. I am excited to see where my career
              takes me and am always open to new opportunities.
            </p>
          </div>
          <div className=" md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

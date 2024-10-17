import React from 'react'

const skills = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Node" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "OpenCV" },
  { skill: "SQL" },
  { skill: "Bash" },
  { skill: "Git" },
]

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className='md:w-1/2'>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jonathan Lam and I am a second-year {" "}
              <span className='font-semibold text-teal-600'>
                Computer Science and Data Science student {" "}
              </span>
              at the University of Virginia.
            </p>
            <br />
            <p>
              I have a deep passion for computer programming and developing technical solutions for real-world problems.
            </p>
            <br />
            <p>
              In my spare time, I enjoy playing & watching basketball, rock climbing, going to the gym, and gardening.
            </p>
            <br />
            <p>
              I'm always looking for new opportunities to learn and grow within the software development field. Please feel free to contact me at jonhaolam@gmail.com.
            </p>
          </div>
          <div className='md:w-1/2'>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return <p 
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
                        >
                          {item.skill}
                        </p>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
import React from 'react'

const programming = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "C" },
  { skill: "Django" },
  { skill: "Flask" },
  { skill: "React" },
  { skill: "Node" },
  { skill: "Tailwind CSS" },
  { skill: "Material UI" },
  { skill: "Bash" },
  { skill: "SQL" },
  { skill: "OpenCV" },
  { skill: "NumPy" },  
]

const tools = [
  { skill: "Git" },
  { skill: "Visual Studio Code" },
  { skill: "Pycharm" },
  { skill: "IntelliJ" },
  { skill: "Figma" },
  { skill: "Jira" },
]

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className='md:w-1/2'>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className='text-xl'>
              <p>
                I'm a second-year student at the University of Virginia studying Computer Science, with a minor in Data Science.
                My interest in Computer Science stems from a passion for problem-solving and being able to make a positive impact on others through innovation and automation.
                
              </p>
              <br />
              <p>
                In my spare time, I enjoy playing & watching basketball, rock climbing, going to the gym, and gardening.
              </p>
              <br />
              <p>
                I'm always looking for new opportunities to learn and grow within the field. Please feel free to contact me at <a href="mailto:jonhaolam@gmail.com" className="text-blue-500 underline"> jonhaolam@gmail.com</a>.
              </p>
            </div>
          </div>
          <div className='md:w-1/2'>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              What I Use 💻
            </h1>
            <h2 className="text-center text-xl font-bold mb-2 md:text-left">Programming</h2>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {programming.map((item, idx) => {
                return <p 
                        key={idx}
                        className="bg-gray-200 px-3 py-2 mr-2 mt-2 text-black rounded font-semibold"
                        >
                          {item.skill}
                        </p>
              })}
            </div>
            <h2 className="text-center text-xl font-bold mt-6 mb-2 md:text-left">Development Tools</h2>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {tools.map((item, idx) => {
                return <p 
                        key={idx}
                        className="bg-gray-200 px-3 py-2 mr-2 mt-2 text-black rounded font-semibold"
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
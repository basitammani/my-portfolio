import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const skills = [
    { name: 'React', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'Bootstrap', percentage: 88 },
    { name: 'Ant Design', percentage: 85 }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-red-400">Frontend Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I design and build modern, responsive user interfaces that deliver seamless digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/portfolio" 
              className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a frontend developer focused on building modern, responsive, and user-friendly web interfaces.
                I enjoy turning business ideas into clean, functional, and visually polished experiences using React and modern frontend tools.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My core strengths are in JavaScript, React, Tailwind CSS, Bootstrap, and Ant Design, where I create interfaces that are fast, reliable, and easy to use.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Ant Design'].map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-red-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-red-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-400">Building clean, efficient, and scalable web interfaces with modern frontend practices.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Responsive Interfaces</h3>
              <p className="text-gray-400">Creating interfaces that look great and work smoothly across desktop, tablet, and mobile.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">React UI Components</h3>
              <p className="text-gray-400">Developing reusable, maintainable UI components with clean structure and solid functionality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
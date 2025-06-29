import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, School, Users, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";

const About = () => {
  const skills = [
    "Data Structures & Algorithms", "Web Development", 
    "C++", "Next.js", "React.js", "TypeScript", "JavaScript",
    "Node.js", "MongoDB", "PostgreSQL", "Git", "Docker",
    "Tailwind CSS", "HTML/CSS", "Flexibility", "Organization"
  ];

  const techStack = {
    "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    "Languages": ["C++", "JavaScript", "TypeScript", "Python"],
    "Tools": ["Git", "Docker", "VS Code", "Figma"]
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start order-1 md:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/profile.png" 
                      alt="Ankit Kumar Profile" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="text-center md:text-left space-y-4 sm:space-y-6 order-2 md:order-2">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 leading-tight">
                    Ankit Kumar
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                    Full Stack Developer & Electrical Engineer
                  </p>
                  <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mt-2">
                    Passionate about creating innovative web solutions
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start text-sm sm:text-base">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">New Delhi, India - 110044</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start text-sm sm:text-base">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">+91 7217734805</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start text-sm sm:text-base">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 break-all sm:break-normal">ankit_kumar.ag22@nsut.ac.in</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <a 
                    href="/Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                  <button className="group border-2 border-gradient-to-r from-blue-600 to-purple-600 text-blue-600 dark:text-purple-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                About Me
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  I'm a curious tech enthusiast passionate about web development and electrical engineering. 
                  With a strong foundation in <strong>Data Structures & Algorithms</strong> and modern web technologies, 
                  I specialize in creating scalable, user-friendly applications that solve real-world problems.
                </p>
                <p>
                  Currently pursuing my <strong>B.Tech in Electrical Engineering</strong> at NSUT, I combine my 
                  technical knowledge with creative problem-solving to deliver innovative solutions. I enjoy 
                  staying up-to-date with industry trends, attending tech events, and continuously learning 
                  new technologies.
                </p>
                <p className="hidden sm:block">
                  When I'm not coding, you'll find me exploring the latest developments in web development, 
                  contributing to open-source projects, or mentoring fellow developers in their tech journey.
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200/50 dark:border-blue-800/50">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-blue-800 dark:text-blue-300">Quick Stats</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
                  <span className="font-bold text-blue-600">15+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Years Experience</span>
                  <span className="font-bold text-purple-600">2+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                  <span className="font-bold text-pink-600">10+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Current CGPA</span>
                  <span className="font-bold text-green-600">6+</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-200/50 dark:border-purple-800/50">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-purple-800 dark:text-purple-300">Currently</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">Available for freelance</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">Learning Next.js 14</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-400">Building Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 to-blue-600"></div>
            
            <div className="relative ml-8 sm:ml-12 pb-6 sm:pb-8">
              <div className="absolute -left-6 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900"></div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200/50 dark:border-green-800/30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-green-800 dark:text-green-300">Full Stack Web Developer</h3>
                  <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full mt-1 md:mt-0 self-start">
                    Present
                  </span>
                </div>
                <p className="text-green-700 dark:text-green-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Freelance</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Developed diverse web projects leveraging strong skills in Data Structures and Algorithms (DSA) 
                  and modern technologies like Next.js, React.js, and Node.js. Collaborated with clients to 
                  understand their goals, deliver effective solutions, and maintain long-term relationships.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                  {["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript"].map((tech) => (
                    <span key={tech} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <School className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            Education
          </h2>
          
          <div className="relative">
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-orange-600"></div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="relative ml-8 sm:ml-12">
                <div className="absolute -left-5 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900"></div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-200/50 dark:border-purple-800/30">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-800 dark:text-purple-300">B.Tech in Electrical Engineering</h3>
                    <span className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 sm:px-3 py-1 rounded-full mt-1 md:mt-0 self-start">
                      2022 - 2026
                    </span>
                  </div>
                  <p className="text-purple-700 dark:text-purple-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Netaji Subhas University of Technology (NSUT)</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                    Bachelor of Technology in Electrical Engineering with a strong foundation in electrical theory, 
                    circuit analysis, and engineering principles. Actively involved in coding clubs and technical societies.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="font-medium text-purple-700 dark:text-purple-300">Current CGPA:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">6+</span>
                    </div>
                    <div>
                      <span className="font-medium text-purple-700 dark:text-purple-300">Expected:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">2026</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative ml-8 sm:ml-12">
                <div className="absolute -left-5 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900"></div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-pink-200/50 dark:border-pink-800/30">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-pink-800 dark:text-pink-300">12th Grade (Science)</h3>
                    <span className="text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-2 sm:px-3 py-1 rounded-full mt-1 md:mt-0 self-start">
                      2021
                    </span>
                  </div>
                  <p className="text-pink-700 dark:text-pink-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Sarvodaya Bal Vidyalaya</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    Completed 12th grade with a comprehensive understanding of core science principles including 
                    Physics, Chemistry, and Mathematics, which laid the foundation for my engineering journey.
                  </p>
                </div>
              </div>
              
              <div className="relative ml-8 sm:ml-12">
                <div className="absolute -left-5 sm:-left-10 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900"></div>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-orange-200/50 dark:border-orange-800/30">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-orange-800 dark:text-orange-300">10th Grade (Science)</h3>
                    <span className="text-xs sm:text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 sm:px-3 py-1 rounded-full mt-1 md:mt-0 self-start">
                      2019
                    </span>
                  </div>
                  <p className="text-orange-700 dark:text-orange-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Sarvodaya Bal Vidyalaya</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    Completed 10th grade with a comprehensive understanding of core science principles including Physics, Chemistry, and Mathematics, which laid the foundation for my engineering journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills and Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Skills Section */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 hover:scale-105 transition-transform duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              Tech Stack
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base">{category}</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-800 dark:text-cyan-300 px-2 sm:px-3 py-1 rounded-full border border-cyan-200/50 dark:border-cyan-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            Activities & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-teal-800 dark:text-teal-300 text-base sm:text-lg">Professional Development</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                  Attending industry events and tech conferences
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                  Contributing to open-source projects
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                  Continuous learning of new technologies
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                  Building personal projects and portfolio
                </li>
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-green-800 dark:text-green-300 text-base sm:text-lg">Personal Interests</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  Mentoring fellow developers
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  Reading tech blogs and research papers
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  Exploring electrical engineering innovations
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  Problem-solving and algorithm challenges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

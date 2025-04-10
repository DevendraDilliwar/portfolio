import { useState } from "react";
import {
  Briefcase,
  BookOpen,
  GraduationCap,
  Building,
  Award,
  Users,
  PanelTop,
  ChevronRight
} from "lucide-react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Career paths and opportunities data
  const higherStudies = [
    "Master of Technology (M.Tech) in CSE",
    "Master of Science (M.S) in CSE in Abroad",
    "MBA in IT",
    "PH.D in CSE"
  ];
  
  const governmentSector = [
    "Center for Development of Advance Computing (CDAC)",
    "Steel Authority of India (SAIL)",
    "Coal India Limited (CIL)",
    "National Informatics Centre (NIC)",
    "Defense Research & Development Organization (DRDO)"
  ];
  
  const privateSector = [
    "Amazon",
    "HCL",
    "INFOSYS",
    "DELL",
    "IBM",
    "WIPRO",
    "TCS",
    "COGNIZANT"
  ];
  
  const jobTitles = [
    "Software Developer",
    "Database Administrator",
    "Computer Hardware Engineer",
    "Computer Systems Analyst",
    "Computer Network Architect",
    "Web Developer",
    "Project Manager",
    "Content Developer",
    "Web Designer",
    "Professors of programming language",
    "Software Tester"
  ];
  
  return (
    <div className="space-y-8">
      {/* Overview section */}
      <section>
        <p className="text-gray-700 leading-relaxed mb-6">
          Computer Science Engineering (CSE) is an engineering discipline that covers several topics related to 
          <span className="font-semibold"> computation, programming languages, program design, computer hardware and software</span> and integrates 
          several fields of computer science. It is one of the trending subjects which students pursue after completing Class 12.
        </p>
        
        
      </section>
      
      {/* Career paths navigation */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "overview", name: "Overview", icon: <Briefcase className="h-5 w-5" /> },
          { id: "higher-studies", name: "Higher Studies", icon: <GraduationCap className="h-5 w-5" /> },
          { id: "govt-sector", name: "Government Sector", icon: <Building className="h-5 w-5" /> },
          { id: "private-sector", name: "Private Sector", icon: <Building className="h-5 w-5" /> },
          { id: "job-titles", name: "Job Titles", icon: <Award className="h-5 w-5" /> }
        ].map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === section.id 
                ? "bg-rose-500 text-white shadow-md" 
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            {section.name}
          </button>
        ))}
      </div>
      
      {/* Career content sections */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6">
          {activeSection === "overview" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Briefcase className="h-6 w-6 text-rose-500 mr-2" />
                Future for Computer Science Engineers
              </h3>
              
              <div className="bg-gradient-to-r from-rose-50 to-white p-5 rounded-xl border border-rose-100">
                <p className="text-gray-700">
                  Computer Science offers diverse career paths across education, government, and private sectors. Graduates can pursue advanced degrees, work in prestigious tech companies, or take on specialized technical roles that leverage their engineering skills.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                    Higher Education
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Government Jobs
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Private Sector
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Specialized Roles
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                Select a category above to explore specific opportunities in each area.
              </p>
            </div>
          )}
          
          {activeSection === "higher-studies" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-indigo-500 mr-2" />
                Higher Studies Options
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {higherStudies.map((study, index) => (
                  <div key={index} className="bg-indigo-50 rounded-lg p-4 flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-800">{study}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Advanced Degrees</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Specialization in cutting-edge technologies and research areas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Higher salary potential and advanced career opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Access to academic and research positions</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "govt-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Building className="h-6 w-6 text-blue-500 mr-2" />
                Government Sector Opportunities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {governmentSector.map((org, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <PanelTop className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-800">{org}</span>
                  </div>
                ))}
                <div className="bg-blue-50 rounded-lg p-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-800">And many more...</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Government Jobs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Job stability and security</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Work on national-level technological infrastructure and defense systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Excellent benefits and pension plans</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "private-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Building className="h-6 w-6 text-green-500 mr-2" />
                Private Sector Companies
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {privateSector.map((company, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-gray-800 font-medium">{company}</span>
                  </div>
                ))}
                <div className="bg-green-50 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-gray-800 font-medium">And many more...</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Private Sector Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Competitive salary packages and performance bonuses</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Opportunity to work with cutting-edge technologies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Career advancement and global exposure</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "job-titles" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Award className="h-6 w-6 text-purple-500 mr-2" />
                Job Titles for Computer Science Engineers
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobTitles.map((title, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="bg-purple-100 h-6 w-6 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-700 text-xs font-medium">{index + 1}</span>
                      </div>
                      <span className="text-gray-800">{title}</span>
                    </div>
                  </div>
                ))}
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 h-6 w-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-700 text-xs font-medium">+</span>
                    </div>
                    <span className="text-gray-800">And many more...</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-purple-100 shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">Emerging Job Roles</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">AI Engineer</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Machine Learning Specialist</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Cloud Architect</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Data Scientist</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Blockchain Developer</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">DevOps Engineer</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunity;
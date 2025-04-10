import { useState } from "react";
import {
  ChevronRight,
  LayoutGrid,
  BookOpen,
  Briefcase,
  Users,
  Beaker,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Target
} from "lucide-react";
import cse from "../../../assets/cse.jpeg";
import Co from '../CSE/CourceOutcome.jsx';
import CareerOpportunity from '../CSE/carrer.jsx';
import Faculty from '../CSE/facuilty.jsx';
import AimContent from '../CSE/Aim.jsx'; // Import the AimContent component
import LaboratoriesContent from '../CSE/LaboratoriesContent.jsx'; // Import the LaboratoriesContent component

export default function ModernDepartmentPage() {
  const [activeTab, setActiveTab] = useState("aim");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content data for tabs
  const tabContent = {
    aim: {
      title: "Our Aim",
      icon: <Target className="text-indigo-500" />,
      content: <AimContent />, // Use the imported AimContent component
    },
    laboratories: {
      title: "Laboratories",
      icon: <Beaker className="text-emerald-500" />,
      content: <LaboratoriesContent />, // Use the imported LaboratoriesContent component
    },
    outcomes: {
      title: "Course Outcomes",
      icon: <BookOpen className="text-amber-500" />,
      content: <Co />,
       
    },
    careers: {
      title: "Career Opportunity",
      icon: <Briefcase className="text-rose-500" />,
      content: <CareerOpportunity />,
        
    },
    faculty: {
      title: "Faculty Members",
      icon: <Users className="text-blue-500" />,
      content: <Faculty />,
       
    },
  };

  const stats = [
    { value: "25+", label: "Faculty Members" },
    { value: "800+", label: "Students" },
    { value: "95%", label: "Placement Rate" },
    { value: "12", label: "Research Labs" },
  ];

  const contactInfo = [
    { icon: <Mail size={20} />, text: "cs-department@csit.com" },
    { icon: <Phone size={20} />, text: "(123) 456-7890" },
    { icon: <MapPin size={20} />, text: "Technology Building, Room 301" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 opacity-90"></div>
        <img
          src={cse}
          alt="Computer Science Background"
          className="absolute w-full h-full object-cover object-center mix-blend-overlay transform scale-105 motion-safe:animate-subtle-zoom"
        />

        {/* Animated particles overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-4 h-4 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/3 animate-pulse delay-300"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full top-3/4 left-1/2 animate-pulse delay-500"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-1/3 left-2/3 animate-pulse delay-700"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full top-2/3 left-3/4 animate-pulse delay-1000"></div>
        </div>

        {/* Department title and tagline */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-lg">
              <span className="inline-block transform transition-transform hover:scale-105 duration-300">
                Computer Science
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-indigo-100 drop-shadow">
              <span className="inline-block">&amp; Information Systems</span>
            </p>
            <p className="mt-4 text-indigo-200 max-w-lg mx-auto text-sm sm:text-base">
              Empowering innovations through technology and education since 1985
            </p>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-16">
        {/* Department card */}
        <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden mb-8 transition-all duration-300 hover:shadow-2xl">
          {/* Logo and department info */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center border-b border-gray-100">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 md:p-5 rounded-xl text-white shadow-lg transform transition-transform hover:scale-105 duration-300">
                <div className="text-2xl md:text-3xl font-bold">CSE</div>
                <div className="text-base md:text-lg font-semibold mt-1">
                  CS & IS
                </div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                Department of Computer Science
              </h2>
              <p className="text-indigo-600 font-medium">
                School of Engineering & Technology
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                Fostering innovation, research excellence, and technological
                advancement
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center space-x-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-600 text-sm"
                >
                  <span className="text-indigo-500 mr-2">{item.icon}</span>
                  <span className="hidden lg:inline">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Department stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile tab selector */}
          <div className="block md:hidden border-t border-gray-100">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700"
            >
              <div className="flex items-center">
                <span className="mr-3">{tabContent[activeTab].icon}</span>
                <span>{tabContent[activeTab].title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  mobileMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="border-t border-gray-100 bg-gray-50">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full p-3 text-left ${
                      activeTab === tab
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-3">{tabContent[tab].icon}</span>
                    <span>{tabContent[tab].title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop tab navigation */}
          <div className="hidden md:flex border-t border-b border-gray-100">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-500 text-indigo-700 bg-indigo-50 font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0">{tabContent[tab].icon}</span>
                  <span className="text-sm lg:text-base">
                    {tabContent[tab].title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg mr-4 shadow-sm">
                <span className="block w-6 h-6">
                  {tabContent[activeTab].icon}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {tabContent[activeTab].title}
              </h2>
            </div>

            <div className="prose prose-indigo max-w-none">
              {typeof tabContent[activeTab].content === "string" ? (
                <p className="text-gray-700 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
              ) : (
                tabContent[activeTab].content
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
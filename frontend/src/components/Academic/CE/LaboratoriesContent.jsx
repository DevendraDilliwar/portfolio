import {
    Shield,
    Brain,
    Database,
    Cpu,
    WifiIcon,
    Code,
    Image,
    Monitor
  } from "lucide-react";
  
  const LaboratoriesContent = () => {
    const labs = [
      {
        id: "soft-dev",
        name: "Software Development Lab",
        icon: <Code className="h-6 w-6 text-indigo-600" />
      },
      {
        id: "network-security",
        name: "Network Security Lab",
        icon: <Shield className="h-6 w-6 text-red-600" />
      },
      {
        id: "ai-ml",
        name: "AI & Machine Learning Lab",
        icon: <Brain className="h-6 w-6 text-purple-600" />
      },
      {
        id: "database",
        name: "Database Systems Lab",
        icon: <Database className="h-6 w-6 text-blue-600" />
      },
      {
        id: "iot-embedded",
        name: "IoT & Embedded Systems Lab",
        icon: <Cpu className="h-6 w-6 text-green-600" />
      },
      {
        id: "cloud",
        name: "Cloud Computing Lab",
        icon: <Monitor className="h-6 w-6 text-cyan-600" />
      },
      {
        id: "graphics",
        name: "Computer Graphics & Multimedia Lab",
        icon: <Image className="h-6 w-6 text-amber-600" />
      },
      {
        id: "networking",
        name: "Computer Networks Lab",
        icon: <WifiIcon className="h-6 w-6 text-emerald-600" />
      }
    ];
  
    return (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed mb-6">
          Our department maintains state-of-the-art laboratories that support hands-on learning and research activities. These facilities are equipped with the latest technologies, software tools, and hardware resources needed for advanced coursework and innovative projects.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {labs.map((lab) => (
            <div 
              key={lab.id}
              className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center`}
            >
              <div className={`flex-shrink-0 p-3 rounded-lg mr-4 ${
                lab.id === "network-security" ? "bg-red-100" : 
                lab.id === "ai-ml" ? "bg-purple-100" : 
                lab.id === "database" ? "bg-blue-100" : 
                lab.id === "iot-embedded" ? "bg-green-100" : 
                lab.id === "cloud" ? "bg-cyan-100" : 
                lab.id === "graphics" ? "bg-amber-100" : 
                lab.id === "networking" ? "bg-emerald-100" : 
                "bg-indigo-100"
              }`}>
                {lab.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{lab.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LaboratoriesContent;
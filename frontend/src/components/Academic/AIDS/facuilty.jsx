import { Users } from "lucide-react";

const FacultyMembersContent = () => {
  const facultyList = [
    { id: 1, name: "Dr. Ravi Mishara", designation: "Head of Department" },
    { id: 2, name: "Mr. Shashikant Agrawal", designation: "Assistant Professor" },
    { id: 3, name: "Mrs. Deepty Dubey", designation: "Associate Professor" },
    { id: 4, name: "Mr. Kranti Kumar Jain", designation: "Assistant Professor" },
    { id: 5, name: "Ms. Tanushri Chandraker", designation: "Assistant Professor" },
    { id: 6, name: "Ms. Ayushi Pillay", designation: "Assistant Professor" },
    { id: 7, name: "Mrs. Panch Kirti Bharti", designation: "Assistant Professor" },
    { id: 8, name: "Mr. Shirish Sahu", designation: "Assistant Professor" },
    { id: 9, name: "Mr. Vishal Tamrakar", designation: "Assistant Professor" },
    { id: 10, name: "Mr. Nitin Kumar Vishwkarma", designation: "Assistant Professor" },
    { id: 11, name: "Ms. Jaya Dewangan", designation: "Assistant Professor" },
    { id: 12, name: "Ms. Tripti Gautam", designation: "Assistant Professor" },
    { id: 13, name: "Miss. Rashi Chandrakar", designation: "Assistant Professor" },
    { id: 14, name: "Miss. Nalesh", designation: "Assistant Professor" },
    { id: 15, name: "Mr. Nagarjuna E", designation: "Assistant Professor" },
    { id: 16, name: "Mr. Krishna", designation: "Assistant Professor" },
    { id: 17, name: "Dr. K. Venkata Ramana", designation: "Assistant Professor" },
    { id: 19, name: "Mr. M Rajesh Kumar", designation: "Assistant Professor" },
    { id: 20, name: "Mr. Praveen Kumar", designation: "Assistant Professor" },
    { id: 21, name: "Ms. Purnima Dutta", designation: "Assistant Professor" },
    { id: 22, name: "Mr. S.K. Moulali", designation: "Assistant Professor" },
    { id: 23, name: "Mrs. Mangala Devi Sao", designation: "Assistant Professor" },
    { id: 24, name: "Dr. Adarsh Ravi Mishra", designation: "Assistant Professor" },
    { id: 25, name: "Mr. Neeraj Kharya", designation: "Assistant Professor" },
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed mb-6">
        Our department boasts {facultyList.length} dedicated faculty members, including  experts from prestigious institutions. They bring diverse expertise and industry experience to their research and teaching, specializing in areas such as artificial intelligence, cloud computing, cybersecurity, big data analytics, and human-computer interaction.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyList.map((faculty) => (
          <div 
            key={faculty.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4"
          >
            <div className="flex items-center">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{faculty.name}</h3>
                <p className={`text-sm ${faculty.designation === "Head of Department" ? "text-indigo-600 font-medium" : "text-gray-500"}`}>
                  {faculty.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
     
    </div>
  );
};

export default FacultyMembersContent;
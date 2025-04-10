import { useState } from "react";
import { BookOpen, FileText } from "lucide-react";
import thred from "../../../assets/cse3rdsem.pdf";
import fourth from "../../../assets/cse4thsem.pdf";
import fifth from "../../../assets/cse5thsem.pdf";
import sixth from "../../../assets/cse6thsem.pdf";
import seventh from "../../../assets/cse7thsem.pdf";
import eighth from "../../../assets/cse8thsem.pdf";

const CourseOutcomesContent = () => {
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (id) => {
    setExpandedSemester(expandedSemester === id ? null : id);
  };

  // Function to open the syllabus PDF
  const viewSyllabus = (pdfPath) => {
    window.open(pdfPath, "_blank"); // Opens the PDF in a new tab
  };

  // Data for semesters with syllabus paths
  const semesters = [
    {
      id: "sem3",
      name: "3rd Semester",
      color: "indigo",
      syllabus: thred, // Path to the 3rd semester PDF
    },
    {
      id: "sem4",
      name: "4th Semester",
      color: "purple",
      syllabus: fourth, // Path to the 4th semester PDF
    },
    {
      id: "sem5",
      name: "5th Semester",
      color: "blue",
      syllabus: fifth, // Path to the 5th semester PDF
    },
    {
      id: "sem6",
      name: "6th Semester",
      color: "emerald",
      syllabus: sixth, // Path to the 6th semester PDF
    },
    {
      id: "sem7",
      name: "7th Semester",
      color: "amber",
      syllabus: seventh, // Path to the 7th semester PDF
    },
    {
      id: "sem8",
      name: "8th Semester",
      color: "rose",
      syllabus: eighth, // Path to the 8th semester PDF
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl border border-amber-100 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
          <div className="bg-amber-100 p-3 rounded-full mr-4 mb-3 sm:mb-0">
            <BookOpen className="h-6 w-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-amber-700">
            Course Outcomes Overview
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Our curriculum is designed to provide a comprehensive education in
          computer science fundamentals and advanced topics. Each semester
          contains courses with specific learning outcomes that align with
          program educational objectives and industry requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {semesters.map((semester) => (
          <div
            key={semester.id}
            className={`bg-white rounded-xl border border-${semester.color}-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className={`bg-${semester.color}-100 p-2 rounded-lg mr-3`}
                  >
                    <BookOpen
                      className={`h-5 w-5 text-${semester.color}-600`}
                    />
                  </div>
                  <h3 className={`font-semibold text-${semester.color}-800`}>
                    {semester.name}
                  </h3>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => viewSyllabus(semester.syllabus)}
                    className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-${semester.color}-600 hover:bg-${semester.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${semester.color}-500`}
                  >
                    View Syllabus
                    <FileText className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutcomesContent;
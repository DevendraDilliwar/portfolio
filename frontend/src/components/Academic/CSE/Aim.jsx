import { Compass, Award, LayoutGrid } from "lucide-react";

// Structured data for aim content
const aimData = {
  sections: [
    {
      id: "vision",
      title: "The Vision",
      icon: <Compass className="h-6 w-6 text-indigo-600" />,
      bgColor: "from-indigo-50",
      iconBgColor: "bg-indigo-100",
      textColor: "text-indigo-700",
      content:
        "To create academically strong and ethically sound engineers who shall have potentials to cater to the emerging needs of industries and technical advancements",
      emoji: "💫",
    },
    {
      id: "mission",
      title: "The Mission",
      icon: <Award className="h-6 w-6 text-amber-500" />,
      bgColor: "from-purple-50",
      iconBgColor: "bg-purple-100",
      textColor: "text-purple-700",
      listItems: [
        "Provide excellent quality education to the students through effective teaching-learning, Co-curricular and Extracurricular activities.",
        "Enhance strong relationship with industries to help learners to remain in touch with latest technologies.",
        "Become a center of excellence with technical facilities for academics and research."
      ],
    },
    {
      id: "mission",
      title: "Program Educational Objectives (PEOs)",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      bgColor: "from-purple-50",
      iconBgColor: "bg-purple-100",
      textColor: "text-purple-700",
      listItems: [
        " Graduates will be employable and achieve success in their chosen areas of Computer Science and engineering.",
        " Graduates learn and adapt themselves to the constantly evolving technology by pursuing higher studies or research.",
        " Graduates shall be good leaders and managers and effectively communicate at both technical and interpersonal levels.",
        "Graduates will use their understanding of professional, ethical and social responsibilities, the nature and background of diverse cultures, and the importance of life-long learning in the conduct of their professional careers.",
      ],
    },
   
    {
      id: "peos",
      title: "PROGRAM OUTCOMES (POs)",
      icon: <LayoutGrid className="h-6 w-6 text-blue-600" />,
      bgColor: "from-blue-50",
      iconBgColor: "bg-blue-100",
      textColor: "text-blue-700",
      gridItems: [
        {
          title: " Engineering Knowledge",
          content:
            " Apply knowledge of mathematics and science, with fundamentals of Computer Science & Engineering to be able to solve complex engineering problems related to CSE.",
        },
        {
          title: "Problem Analysis",
          content:
            "Identify, Formulate, review research literature and analyze complex engineering problems related to CSE and reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.",
        },
        {
          title: "Design/Development of solutions",
          content:
            " Design solutions for complex engineering problems related to CSE and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety and the cultural societal and environmental considerations.",
        },
        {
          title: "Conduct Investigations of Complex problems",
          content:
            "Use research based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
        },
        {
          title: "Modern Tool Usage",
          content:
            " Create, Select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to computer science related complex engineering activities with an understanding of the limitations.",
        },
        {
          title: "The Engineer and Societ",
          content:
            "Apply Reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the CSE professional engineering practice.",
        },
        {
          title: "Environment and Sustainability",
          content:
            " Understand the impact of the CSE professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of, and need for sustainable development.",
        },
        {
          title: "Ethics",
          content:
            "Apply Ethical Principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
        },
        {
          title: "Individual and Team Work",
          content:
            " Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary Settings.",
        },
        {
          title: "Communication",
          content:
            "Communicate effectively on complex engineering activities with the engineering community and with society at large such as able to comprehend and with write effective reports and design documentation, make effective presentations and give and receive clear instructions.",
        },
        {
          title: "Project Management and Finance",
          content:
            "  Demonstrate knowledge and understanding of the engineering management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multi disciplinary environments.",
        },
        {
          title: ".Life-Long Learning",
          content:
            " Recognize the need for and have the preparation and ability to engage in independent and life-long learning the broadest context of technological change.",
        },
      ],
    },
    {
      id: "pos",
      title: "Program Specific Outcomes (PSOs)",
      icon: <LayoutGrid className="h-6 w-6 text-amber-500" />,
      bgColor: "from-blue-50",
      iconBgColor: "bg-blue-100",
      textColor: "text-blue-700",
      gridItems: [
        {
          title: "Professional Skills",
          content:
            "Have abilities to, analyze, design, develop and evaluate computer software in areas related to web based applications, data security, databases, algorithms, multimedia, networking and data communication.",
        },
        {
          title: "Product Development Skills",
          content:
            "Have abilities to apply standard practices and strategies in software project development using open-ended programming environments to deliver innovative quality products for business and societal requirement",
        },
        {
          title: "Entrepreneurship and Career",
          content:
            "Have ability to apply computational platforms, programming and logic development as computer professionals for higher studies and entrepreneurship.",
        },
      ],
    },
  ],
};

// Component to render the aim content
const AimContent = () => {
  return (
    <div className="space-y-8">
      {aimData.sections.map((section) => (
        <div
          key={section.id}
          className={`bg-gradient-to-r ${
            section.bgColor
          } to-white p-6 rounded-xl border border-${
            section.bgColor.split("-")[1]
          }-100 shadow-sm transform transition-all hover:shadow-md`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
            <div
              className={`${section.iconBgColor} p-3 rounded-full mr-4 mb-3 sm:mb-0`}
            >
              {section.icon}
            </div>
            <h3 className={`text-xl font-bold ${section.textColor}`}>
              {section.title}
            </h3>
          </div>

          {section.content && (
            <p className="text-gray-700 leading-relaxed">
              {section.content}
              {section.emoji && (
                <span className="inline-block ml-1 text-indigo-500 text-lg">
                  {section.emoji}
                </span>
              )}
            </p>
          )}

          {section.listItems && (
            <ul className="space-y-3">
              {section.listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div
                    className={`flex-shrink-0 h-6 w-6 ${section.iconBgColor} rounded-full flex items-center justify-center mt-0.5 mr-3`}
                  >
                    <span
                      className={`${section.textColor.replace(
                        "700",
                        "600"
                      )} font-medium text-sm`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          )}

          {section.gridItems && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.gridItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      {index + 1}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AimContent;
import React, { useState } from "react";

const Ask = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  const questionsAnswers = [
    {
      question: "WHAT IS YOUR SERVICE AREA?",
      answer:
        "We service the entirety of the GTA, including Toronto, Vaughan, Thornhill, Richmond Hill, Markham, Etobicoke, Mississauga, Brampton, Newmarket, Hamilton, Oakville, Pickering, Milton, etc. Ask us about a specific location in Ontario, and we’ll let you know what delivery options there are.",
    },
    {
      question: "WHAT SERVICES DO YOU OFFER?",
      answer:
        "Onyxa Canada offers retail sales, corporate/industrial sales, as well as installation and fabrication through a variety of contractors. For example, bathroom vanities, kitchen countertops, bathroom floors, fireplaces, etc.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 p-32 rounded-lg transition-transform transform">
      <h2 className="text-4xl font-bold text-center mb-16">
        YOU ASKED, WE ANSWER
      </h2>
      {questionsAnswers.map((item, index) => (
        <div key={index} className="mb-8">
          <p
            className="text-2xl font-semibold cursor-pointer relative group"
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
            <span className="block h-1 w-full bg-indigo-600 rounded mt-2 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
          </p>
          {openQuestion === index && (
            <p className="mt-2 text-lg text-gray-700 transition-all duration-300 ease-in-out">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ask;

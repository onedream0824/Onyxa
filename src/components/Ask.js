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
    <div className="bg-gradient-luxury relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      <div className="relative max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-32 lg:px-10 md:px-6 sm:px-1 px-4 rounded-lg transition-transform transform">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
            YOU ASKED, WE ANSWER
          </span>
        </h2>
        {questionsAnswers.map((item, index) => (
          <div key={index} className="mb-8 glass-dark backdrop-blur-sm p-6 rounded-xl border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-luxury-lg">
            <p
              className="text-2xl font-display font-bold cursor-pointer relative group text-white hover:text-luxury-gold transition-colors duration-300"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span className="block h-1 w-full bg-gradient-gold rounded mt-3 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
            </p>
            {openQuestion === index && (
              <p className="mt-4 text-lg text-gray-300 leading-relaxed transition-all duration-300 ease-in-out animate-fadeIn">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ask;

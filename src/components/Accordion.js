import React from "react";
import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="border-b border-gray-200">
            <button
               className="accordButton w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
               onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <div className="px-6 pb-4 text-gray-600">{content}</div>}
        </div>
    );
};

export default Accordion;

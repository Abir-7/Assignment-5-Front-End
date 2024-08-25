import React from "react";

const SectionHeder = ({ text }: { text: string }) => {
  return (
    <div className="text-2xl my-4 md:text-3xl font-bold text-center">
      {text}
    </div>
  );
};

export default SectionHeder;

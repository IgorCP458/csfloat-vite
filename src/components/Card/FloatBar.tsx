import React from "react";

interface FloatBarProps {
  floatValue: number;
}

const FloatBar: React.FC<FloatBarProps> = ({ floatValue }) => {
  // Define a posição do marcador em % com base no floatValue (0 a 1)
  const markerPosition = `${floatValue * 100}%`;

  return (
    <div className="w-[95%] mx-auto relative mt-2">
      {/* Barra colorida com 4 segmentos */}
      <div className="w-full h-3 flex rounded-md overflow-hidden border border-gray-700">
        <div className="bg-green-500 w-[7%]"></div>
        <div className="bg-green-300 w-[8%]"></div>
        <div className="bg-yellow-500 w-[22%]"></div>
        <div className="bg-orange-500 w-[7%]"></div>
        <div className="bg-red-500 w-[56%]"></div>
      </div>

      {/* Marcador que se move conforme o floatValue */}
      <div
        className="absolute top-1/2 left-0 h-5 w-[2px] bg-white rounded-md shadow-md transform -translate-y-1/2"
        style={{ left: markerPosition }}
      ></div>
    </div>
  );
};

export default FloatBar;
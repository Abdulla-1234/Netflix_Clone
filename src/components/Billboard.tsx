import React from 'react';
import { Play, Info } from 'lucide-react';

export const Billboard = () => {
  return (
    <div className="relative h-[56.25vw]">
      <img 
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
        className="w-full h-full object-cover brightness-[60%]"
        alt="Featured content"
      />
      
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          Stranger Things
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
            <Play className="w-4 h-4 md:w-7 md:h-7 mr-1" />
            Play
          </button>
          <button className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
            <Info className="w-4 h-4 md:w-7 md:h-7 mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="group bg-zinc-900 relative h-[12vw] min-w-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/watch/${movie.id}`)}
    >
      <img 
        src={movie.thumbnailUrl} 
        alt={movie.title}
        className="
          cursor-pointer
          object-cover
          transition
          duration-300
          shadow-xl
          rounded-md
          group-hover:opacity-90
          sm:group-hover:opacity-0
          delay-300
          w-full
          h-[12vw]
          min-h-[170px]
        "
      />
      
      <div className={`
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:opacity-100
      `}>
        <img 
          src={movie.thumbnailUrl} 
          alt={movie.title}
          className="
            cursor-pointer
            object-cover
            transition
            duration-300
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
            min-h-[170px]
          "
        />
        <div className="
          absolute
          bottom-0
          p-2
          lg:p-4
          bg-zinc-800
          w-full
          transition
          shadow-md
          rounded-b-md
        ">
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center hover:bg-neutral-300">
              <Play className="w-4 h-4 lg:w-6 lg:h-6 text-black" />
            </div>
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center hover:border-neutral-300">
              <Plus className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center hover:border-neutral-300">
              <ThumbsUp className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="cursor-pointer ml-auto w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center hover:border-neutral-300">
              <ChevronDown className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{movie.duration}</p>
            <p className="text-white text-[10px] lg:text-sm">{movie.genre.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
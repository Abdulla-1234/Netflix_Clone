import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { Movie, Episode } from '../types';
import { mockMovies } from '../data/mockData';

export const DetailPage = () => {
  const { id } = useParams();
  const content = mockMovies.find(item => item.id === id);

  if (!content) {
    return <div className="text-white">Content not found</div>;
  }

  return (
    <div className="h-full w-full bg-zinc-900">
      <div className="relative h-[56.25vw]">
        <img 
          src={content.bannerUrl}
          className="w-full h-full object-cover brightness-[60%]"
          alt={content.title}
        />
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          <h1 className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
            {content.title}
          </h1>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
            {content.description}
          </p>
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <button className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
              <Play className="w-4 h-4 md:w-7 md:h-7 mr-1" />
              Play
            </button>
            <button className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
              <Plus className="w-4 h-4 md:w-7 md:h-7 mr-1" />
              My List
            </button>
            <button className="bg-gray-500 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition">
              <ThumbsUp className="w-4 h-4 md:w-7 md:h-7 mr-1" />
              Rate
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 pb-20">
        <div className="flex flex-col gap-8 mt-8">
          <div>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4">About {content.title}</p>
            <div className="flex flex-col gap-2 text-white">
              <p><span className="text-gray-400">Cast:</span> {content.cast.join(', ')}</p>
              <p><span className="text-gray-400">Genres:</span> {content.genre.join(', ')}</p>
              <p><span className="text-gray-400">Rating:</span> {content.rating}</p>
              <p><span className="text-gray-400">Duration:</span> {content.duration}</p>
              <p><span className="text-gray-400">Year:</span> {content.year}</p>
            </div>
          </div>

          {content.type === 'tv' && content.episodes && (
            <div>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4">Episodes</p>
              <div className="grid grid-cols-1 gap-4">
                {content.episodes.map((episode: Episode) => (
                  <div key={episode.id} className="flex flex-col md:flex-row gap-4 bg-zinc-800 rounded-md overflow-hidden">
                    <img 
                      src={episode.thumbnailUrl}
                      alt={episode.title}
                      className="w-full md:w-[256px] h-[144px] object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-white font-semibold">{episode.title}</h3>
                        <span className="text-gray-400 text-sm">{episode.duration}</span>
                      </div>
                      <p className="text-gray-400 mt-2">{episode.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4">More Like This</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {mockMovies
                .filter(item => item.id !== content.id && item.genre.some(g => content.genre.includes(g)))
                .map(similar => (
                  <div key={similar.id} className="relative h-[12vw] min-h-[170px]">
                    <img 
                      src={similar.thumbnailUrl}
                      alt={similar.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { mockProfile } from '../data/mockData';

export const ProfilePage = () => {
  const [profile, setProfile] = useState(mockProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, this would update the profile in the backend
  };

  return (
    <div className="pt-32 pb-40 px-4 md:px-16">
      <div className="max-w-3xl mx-auto bg-zinc-800 rounded-lg p-8">
        <div className="flex items-center gap-8 mb-8">
          <div className="relative">
            <img 
              src={profile.avatarUrl} 
              alt="Profile" 
              className="w-24 h-24 rounded-lg object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-white text-black text-sm px-2 py-1 rounded">
                Change
              </button>
            )}
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">{profile.name}</h1>
            <p className="text-gray-400">{profile.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Language</label>
              <select 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded"
                value={profile.language}
                onChange={(e) => setProfile({...profile, language: e.target.value})}
                disabled={!isEditing}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Maturity Level</label>
              <select 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded"
                value={profile.maturityLevel}
                onChange={(e) => setProfile({...profile, maturityLevel: e.target.value})}
                disabled={!isEditing}
              >
                <option value="Kids">Kids</option>
                <option value="Teen">Teen</option>
                <option value="Adult">Adult</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-gray-400">Autoplay Controls</label>
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  checked={profile.autoplayNextEpisode}
                  onChange={(e) => setProfile({...profile, autoplayNextEpisode: e.target.checked})}
                  disabled={!isEditing}
                  className="mr-3"
                />
                <span className="text-white">Autoplay next episode</span>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  checked={profile.autoplayPreviews}
                  onChange={(e) => setProfile({...profile, autoplayPreviews: e.target.checked})}
                  disabled={!isEditing}
                  className="mr-3"
                />
                <span className="text-white">Autoplay previews</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {isEditing ? (
              <>
                <button 
                  type="submit"
                  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                >
                  Save Changes
                </button>
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
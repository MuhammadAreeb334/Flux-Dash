import React, { useState } from "react";
import { Camera, Pencil, Edit2, Save } from "lucide-react";
import profileImg from "../Assets/Profile.jpg";
import coverImg from "../Assets/Cover.jpg";

const ViewUser = () => {
  const [editing, setEditing] = useState({
    about: false,
    skills: false,
    goals: false,
  });

  const [profileData, setProfileData] = useState({
    coverPhoto: coverImg,
    profilePhoto: profileImg,
    name: "Jennifer Alex",
    title: "Engineer",
    about:
      "Salaam all... I am an entrepreneur at heart that has built, sold and lost companies over the years and have had the pleasure of speaking on stages in over 12 countries. Today I am helping build Islamic Digital Infrastructure and technology platforms to help resolve what i believe to be the biggest problem in our community.",
    skills: "Project Management, Strategy, Startups, Marketing, Design",
    goals: "Project Management, Strategy, Startups, Marketing, Design",
  });

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileData({ ...profileData, [type]: url });
    }
  };

  const handleChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const toggleEdit = (field) => {
    setEditing({ ...editing, [field]: !editing[field] });
  };

  return (
    <div className="text-white">
      <div className="bg-[#1d1d29] rounded-2xl overflow-hidden shadow-lg">
        <div className="relative h-48 sm:h-64 bg-[#2a2a3a]">
          <img
            src={profileData.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <label className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer">
            <Camera size={20} className="text-white" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, "coverPhoto")}
            />
          </label>
        </div>

        <div className="relative flex flex-col items-stretch -mt-16 sm:-mt-20 px-2 sm:px-6">
          <div className="relative group w-32 h-32 rounded-full overflow-hidden border-4 border-[#1d1d29] bg-[#2a2a3a]">
            <img
              src={profileData.profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover transition-all group-hover:brightness-75"
            />
            <label className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
              <div className="bg-black/50 p-2 rounded-full shadow-lg">
                <Camera size={20} />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, "profilePhoto")}
              />
            </label>
          </div>

          <h2 className="text-2xl font-semibold">{profileData.name}</h2>
          <p className="text-gray-400">{profileData.title}</p>

          <div className="flex gap-3 mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap">
              Connect
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap">
              Message
            </button>
          </div>

          <div className="px-1 py-6 space-y-6">
            <div className="bg-[#252533] p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">About</h3>
                <button
                  onClick={() => toggleEdit("about")}
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  {editing.about ? <Save size={18} /> : <Edit2 size={18} />}
                </button>
              </div>
              {editing.about ? (
                <textarea
                  value={profileData.about}
                  onChange={(e) => handleChange("about", e.target.value)}
                  className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition resize-none"
                  rows={5}
                />
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed">
                  {profileData.about}
                </p>
              )}
            </div>

            <div className="bg-[#252533] p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">My Skills</h3>
                <button
                  className="text-gray-400 hover:text-indigo-400 transition"
                  onClick={() => toggleEdit("skills")}
                >
                  {editing.skills ? <Save size={18} /> : <Edit2 size={18} />}
                </button>
              </div>
              {editing.skills ? (
                <input
                  type="text"
                  value={profileData.skills}
                  onChange={(e) => handleChange("skills", e.target.value)}
                  placeholder="Enter skills separated by commas"
                  className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition"
                />
              ) : (
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.skills.split(",").map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full text-sm font-medium bg-[#2a2a3a] border border-indigo-500/40 text-yellow-100"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-[#252533] p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">My Goals</h3>
                <button
                  className="text-gray-400 hover:text-indigo-400 transition"
                  onClick={() => toggleEdit("goals")}
                >
                  {editing.goals ? <Save size={18} /> : <Edit2 size={18} />}
                </button>
              </div>
              {editing.goals ? (
                <input
                  type="text"
                  value={profileData.goals}
                  onChange={(e) => handleChange("goals", e.target.value)}
                  placeholder="Enter goals separated by commas"
                  className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition"
                />
              ) : (
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.goals.split(",").map((goal, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full text-sm font-medium bg-[#2a2a3a] border border-indigo-500/40 text-yellow-100"
                    >
                      {goal.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;

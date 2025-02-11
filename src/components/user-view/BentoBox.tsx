import React from 'react';
import { Search } from 'lucide-react';

interface PrayerBentoProps {
  prayerOfDay?: string;
  verseOfDay?: string;
}

const PrayerBento: React.FC<PrayerBentoProps> = ({
  prayerOfDay = "Lord, grant me strength and wisdom today...",
  verseOfDay = "For I know the plans I have for you, declares the Lord... - Jeremiah 29:11"
}) => {
  return (
    <div className="mx-auto lg:p-5 h-auto">
      <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-4 lg:grid-rows-6 gap-4 md:gap-4 lg:gap-6">

        {/* Prayer of the Day - Top Section */}
        <div className="col-span-1 row-span-1 lg:col-span-4 lg:row-span-1 bg-[#d9c5db] rounded-2xl p-2 lg:p-6 hover:scale-[1.02] transition-transform">
          <h2 className="text-[#1b1619] lg:text-xl font-bold font-['Playfair_Display']">Prayer of the Day</h2>
          <p className="mt-2 text-[#434143] font-['Open_Sans'] text-sm lg:text-base">{prayerOfDay}</p>
        </div>

        {/* Verse of the Day - Left Side */}
        <div className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-2 bg-[#d9c5db] rounded-2xl p-2 lg:p-6 hover:scale-[1.02] transition-transform">
          <h2 className="text-[#1b1619] lg:text-xl font-bold font-['Playfair_Display']">Inspirational Verse</h2>
          <p className="mt-2 text-[#434143] italic font-['Open_Sans'] text-sm lg:text-base">{verseOfDay}</p>
        </div>

        {/* Journal - Center Emphasis */}
        <div className="col-span-1 row-span-2 lg:col-span-2 lg:row-span-3 bg-[#c3aed0] rounded-2xl p-2 lg:p-6 hover:scale-[1.02] transition-transform shadow-lg">
          <h2 className="text-[#1b1619] lg:text-2xl font-bold font-['Playfair_Display'] mb-2">How are you feeling today?</h2>
          <textarea 
            className="w-full mt-2 p-4 rounded-lg border-2 border-[#643a71] focus:outline-none focus:ring-2 focus:ring-[#e98aa5] bg-[#f6f4f0] font-['Oooh_Baby'] lg:text-lg text-sm"
            placeholder="Write your thoughts..."
            rows={6}
          />
        </div>

        {/* Action Buttons - Three Equal Sections */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-3 gap-6 sm:gap-4 justify-items-center">
          <button className="bg-[#643a71] text-[#f6f4f0] rounded-xl p-2 sm:p-10 lg:p-6 xl:p-12 hover:bg-[#e98aa5] transition-colors font-['Familjen_Grotesk'] font-medium text-sm lg:text-base">
            Prayer Library  
          </button>
          <button className="bg-[#643a71] text-[#f6f4f0] rounded-xl p-2 sm:p-10 lg:p-6 xl:p-12 hover:bg-[#e98aa5] transition-colors font-['Familjen_Grotesk'] font-medium text-sm lg:text-base">
            Devotionals
          </button>
          <button className="bg-[#643a71] text-[#f6f4f0] rounded-xl p-2 sm:p-10 lg:p-6 xl:p-12 hover:bg-[#e98aa5] transition-colors font-['Familjen_Grotesk'] font-medium text-sm lg:text-base">
            Prayer Requests
          </button>
        </div>

        {/* Search Bar - Bottom Section */}
        <div className="col-span-1 lg:col-span-4 relative">
          <input 
            type="text"
            placeholder="Search prayers, verses, or devotionals..."
            className="w-full p-4 pl-12 rounded-xl border-2 border-[#643a71] focus:outline-none focus:ring-2 focus:ring-[#e98aa5] bg-[#f6f4f0] font-['Open_Sans'] text-sm lg:text-base"
          />
          <Search className="absolute left-4 top-[29%] lg:top-[20%] transform -translate-y-1/2 text-[#643a71]" size={20} />
        </div>
      </div>
    </div>
  );
};

export default PrayerBento;
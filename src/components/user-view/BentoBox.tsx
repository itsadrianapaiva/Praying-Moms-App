import React from 'react'
import { Search } from 'lucide-react'
import { ScrollArea } from '../../components/ui/scroll-area'

interface BentoBoxProps {
    prayerOfDay?: string
    verseOfDay?: string
}

const BentoBox: React.FC<BentoBoxProps> = ({
    prayerOfDay = 'Lord, grant me strength and wisdom today...',
    verseOfDay = 'For I know the plans I have for you, declares the Lord... - Jeremiah 29:11',
}) => {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div className="mx-auto lg:p-2 h-full">
            <ScrollArea className="scroll-area max-h-[90vh] overflow-y-auto lg:overflow-y-hidden overflow-x-hidden -mr-3 pr-2 md:-mr-6 md:pr-6 lg:-mr-14 lg:pr-10">
                {/* Welcome Message - Top Section */}
                <div className="flex justify-between items-center">
                    <h1 className="text-lg flex-nowrap sm:text-2xl lg:text-3xl font-bold mb-2 font-['Oooh_Baby']">
                        Welcome, Mama!
                    </h1>
                    <span className="text-sm sm:text-lg text-[#434143]">{today}</span>
                </div>

                <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-6 gap-4 md:gap-4 lg:gap-4 p-2 pb-30 xl:pb-10">
                    {/* Prayer of the Day - Top Section */}
                    <div className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-[#f6f4f0] to-[#d9c5db] rounded-3xl p-4 lg:p-6 hover:scale-[1.01] transition-transform">
                        <h2 className="lg:text-xl font-bold uppercase tracking-thin ">
                            Prayer of the Day
                        </h2>
                        <p className="mt-2 text-[#434143] font-['Open_Sans'] text-sm lg:text-base">
                            {prayerOfDay}
                        </p>
                    </div>

                    {/* Prayer Requests */}
                    <div className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 border-2 border-[#643a71]/80 rounded-3xl p-4 lg:p-6 hover:scale-[1.01] transition-transform backdrop-blur-sm hover:backdrop-blur-none">
                        <h2 className="lg:text-xl font-bold uppercase tracking-thin">
                            Prayer Requests
                        </h2>
                        <ul className="mt-2 space-y-2 text-[#434143] font-['Open_Sans'] text-sm">
                            <li className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-[#643a71]"
                                />{' '}
                                Pray for my family
                            </li>
                            <li className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-[#643a71]"
                                />{' '}
                                Strength in difficult times
                            </li>
                            <li className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-[#643a71]"
                                />{' '}
                                Guidance for decisions
                            </li>
                            <li className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-[#643a71]"
                                />
                                <input
                                    type="text"
                                    className="border-b-2 border-[#c3aed0] outline-none bg-transparent w-[90%] px-2"
                                    placeholder="Add your prayer request..."
                                />
                            </li>
                        </ul>
                    </div>

                    {/* Journal - Center Emphasis */}
                    <div className="col-span-1 row-span-2 lg:col-span-2 lg:row-span-2 bg-[#c3aed0]/50 rounded-3xl p-4 lg:p-6 hover:scale-[1.01] transition-transform shadow-lg hover:backdrop-blur-none">
                        <h2 className="lg:text-xl font-bold uppercase tracking-thin mb-2">
                            How are you feeling today?
                        </h2>
                        <textarea
                            className="w-full mt-2 p-4 rounded-lg border-2 border-[#643a71] focus:outline-none focus:ring-2 focus:ring-[#e98aa5]/60 bg-[#f6f4f0] font-['Oooh_Baby'] lg:text-lg text-sm"
                            placeholder="Write your thoughts..."
                            rows={6}
                        />
                        <button className="mt-2 bg-[#643a71] text-[#f6f4f0] rounded-4xl p-2 hover:bg-[#e98aa5]/50 transition-colors font-medium text-sm lg:text-base w-full">
                            Save
                        </button>
                        <div className="mt-4">
                            <h3 className="lg:text-lg font-thin">
                                Previous entries
                            </h3>
                            <ul className="mt-2 space-y-2">
                                <li className="text-[#434143] bg-[#f6f4f0]/40 p-2 rounded-lg border border-[#643a71]">
                                    Feb 10, 2025 - Feeling grateful today...
                                </li>
                                <li className="text-[#434143] bg-[#f6f4f0]/40 p-2 rounded-lg border border-[#643a71]">
                                    Feb 9, 2025 - Had a tough day but staying
                                    strong...
                                </li>
                                <li className="text-[#434143] bg-[#f6f4f0]/40 p-2 rounded-lg border border-[#643a71]">
                                    Feb 8, 2025 - Reflecting on kindness and
                                    patience...
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Verse of the Day - Left Side */}
                    <div className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 border-2 border-[#d9c5db] rounded-3xl p-4 lg:p-6 hover:scale-[1.01] transition-transform backdrop-blur-sm hover:backdrop-blur-none">
                        <h2 className="lg:text-xl font-bold uppercase tracking-thin">
                            Inspirational Verse
                        </h2>
                        <p className="mt-2 text-[#434143] italic font-['Open_Sans'] text-sm lg:text-base">
                            {verseOfDay}
                        </p>
                    </div>

                    {/* Action Buttons - Three Equal Sections */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-6 sm:gap-4 items-center">
                        <button className="bg-[#643a71]/60 text-[#f6f4f0] rounded-xl p-2 sm:p-10 lg:p-6 xl:p-12 hover:bg-[#e98aa5]/50 transition-colors font-medium text-sm lg:text-base w-full">
                            Prayer Library
                        </button>
                        <button className="bg-[#643a71]/60 text-[#f6f4f0] rounded-xl p-2 sm:p-10 lg:p-6 xl:p-12 hover:bg-[#e98aa5]/50 transition-colors font-medium text-sm lg:text-base w-full">
                            Devotionals
                        </button>
                    </div>

                    {/* Search Bar - Bottom Section */}
                    <div className="col-span-1 lg:col-span-4 relative">
                        <input
                            type="text"
                            placeholder="Search prayers, verses, or devotionals..."
                            className="w-full p-4 pl-12 rounded-xl border-2 border-[#643a71] focus:outline-none focus:ring-2 focus:ring-[#e98aa5]/60 bg-[#f6f4f0] font-['Open_Sans'] text-sm lg:text-base"
                        />
                        <Search
                            className="absolute left-4 top-[48%] lg:top-[12%] transform -translate-y-1/2 text-[#643a71]"
                            size={20}
                        />
                    </div>

                    {/* Read the Bible & Find Help- Bottom Section */}
                    <div className="col-span-1">
                        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#643a71] to-[#e98aa5]">
                            <button className="w-full p-4 text-[#643a71] bg-[#f6f4f0] rounded-xl font-medium text-sm lg:text-base transition-all hover:bg-[#d9c5db]/10 hover:text-[#f6f4f0]">
                                Read the Bible
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#643a71] to-[#e98aa5]">
                            <button className="w-full p-4 text-[#643a71] bg-[#f6f4f0] rounded-xl font-medium text-sm lg:text-base transition-all hover:bg-[#d9c5db]/10 hover:text-[#f6f4f0]">
                                Find help
                            </button>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default BentoBox

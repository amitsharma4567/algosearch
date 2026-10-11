import DarkMode from "@/components/DarkMode";
import CustomHead from "@/components/customHead";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
export default function index() {
    const [isNavOpen, setIsNavOpen] = React.useState(true);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    return (
        <>
            <CustomHead title="About AlgoSearch"/>
            <main className="w-screen min-h-screen">
                <div className="flex justify-between items-center w-[95vw] mx-auto mt-4" >
                    <div className="flex justify-start items-center gap-2 ">
                        <Link href={"/"}>
                            <h1 className="monu text-sm md:text-2xl tracking-wider caret-transparent cursor-pointer"><span className='text-blue-600'>Algo</span>Search</h1></Link>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <DarkMode />
                        <IconButton
                            size="sm"
                            color="blue-gray"
                            variant="text"
                            onClick={toggleIsNavOpen}
                        >
                            <Bars2Icon className="h-6 w-6 cursor-pointer" />
                        </IconButton>
                    </div>
                    {/* Slider */}
                    <div className={`w-48 text-gray-900 bg-white border border-gray-500 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white absolute top-[4rem] right-0  transition-transform ease-in-out ${isNavOpen ? "translate-x-full" : "translate-x-0 z-50"} `}>
                        <Link href={"/about"}>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                About
                            </button>
                        </Link>
                        <Link href={"/howtw"}>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                                How it Works
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-[90vw] h-full bg-[#eaeaeaec] dark:bg-[#232327]  mx-auto rounded-md my-10 p-4 flex justify-start items-center flex-col gap-5 comfort">
                    <p>
                        <span className="monu">AlgoSearch</span> helps you find LeetCode problems by describing a topic or idea in your own words. It is a lightweight search tool for people practicing data structures, algorithms, and competitive programming.
                    </p>
                    <p>
                        Instead of browsing problem lists one by one, enter a few keywords and review matching problems ranked by relevance. Each result includes its title, difficulty, and a link to the problem.
                        Use it to find interview practice, revisit a data structures topic, or look for problems involving a technique you want to study.
                    </p>
                    <p>

                        Search is powered by a preprocessed LeetCode dataset and TF-IDF-based keyword ranking, with problem-title matches included as well. The data is bundled with the project; searches do not scrape live websites.
                    </p>
                    <p>
                        Results depend on words in the saved problem data. Search is keyword-based rather than conversational, so try alternate terms if the first results are not a good fit.
                    </p>
                </div>
                <div className="my-10 w-[90vw] mx-auto">
                    <h1 className="monu text-3xl text-blue-600 my-10">Features</h1>

                    <div>
                        <h1 class="mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600">Light and Dark Themes</h1>
                        <p class="mb-4 py-0 flex flex-col comfort">Switch themes from the interface; your choice is saved in the browser.</p>

                        <h1 class="mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600">Problem Difficulty</h1>
                        <p class="mb-4 py-0 flex flex-col comfort">See the available Easy, Medium, or Hard label on each problem card.</p>
                        <h1 class="mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600">Keyword-Based Ranking</h1>
                        <p class="mb-4 py-0 flex flex-col comfort">Results are ranked using keyword relevance from the prepared problem data and title matches.</p>

                        <h1 class="mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600">Problem and Solution Links</h1>
                        <p class="mb-4 py-0 flex flex-col comfort">Open a problem or its LeetCode solution page directly from a result card.</p>

                        <h1 class="mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600">Search from Prepared Data</h1>
                        <p class="mb-4 py-0 flex flex-col comfort">The included problem data makes search available without scraping a website for each query.</p>

                        <h1 class="mb-4 py-0 flex flex-col text-xl monu font-bold border-l-[8px] pl-3 border-blue-600">Simple and User-Friendly UI</h1>
                        <p class="mb-4 py-0 flex flex-col comfort">A compact layout keeps the search box and matching problems easy to find.</p>




                    </div>
                </div>
            </main>
        </>
    )
}

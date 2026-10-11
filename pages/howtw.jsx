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
            <CustomHead title="How AlgoSearch Works"/>
            <main className="w-screen min-h-screen">
                <div className="flex justify-between items-center w-[95vw] mx-auto mt-4" >
                    <div className="flex justify-start items-center gap-2 ">
                        <Link href={"/"}>
                        <h1 className="monu text-sm md:text-2xl tracking-wider caret-transparent cursor-pointer"><span className='text-blue-600'>Algo</span>Search</h1>
                        </Link>
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
                    <div className="w-full">
                        <h1 className="monu text-xl text-blue-600">
                            Prepared Problem Data
                        </h1>
                        <p>
                            AlgoSearch searches a prepared collection of LeetCode problem descriptions, titles, links, and difficulty labels. The data is stored with the project and is not scraped from LeetCode each time someone searches.
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="monu text-xl text-blue-600">Ranking Keyword Matches</h1>
                        <p>
                            When you submit a query, the app splits it into words and compares them with the prepared search index. TF-IDF scores help rank problems whose descriptions contain relevant terms; title matches are also included. The ranking is a guide, so trying different keywords can surface different results.
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="monu text-xl text-blue-600">Handling a Search Request</h1>
                        <p>
                            The search page sends the query to the local Next.js API route. That route calls the JavaScript search code and returns matching problem records to the page; the frontend and API run in the same Next.js app.
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="monu text-xl text-blue-600">Frontend</h1>
                        <p>
                            Results appear as cards showing the problem title and difficulty. From a card, you can open the LeetCode problem or its solution page.
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="monu text-xl text-blue-600">Writing a Useful Query</h1>
                        <p>
                            Start with a few specific terms that describe the topic or technique you have in mind. If results are too broad or miss what you expected, try alternate wording or add another relevant term. Search matches words in the prepared data; it does not interpret a query like a conversational assistant.
                        </p>
                    </div>
                    <div className="w-full">
                        <h1 className="monu text-xl text-blue-600">Dataset and Result Limits</h1>
                        <p>
                            The app searches its bundled dataset, so newly added LeetCode problems will not appear until that data is updated. Ranking uses keyword relevance and title matches, so results are suggestions rather than a guarantee that a problem fits your intent.
                        </p>
                    </div>
                </div>

            </main>
        </>
    )
}

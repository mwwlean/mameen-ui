import React from "react";

export function ButtonOutline(){
  return (
    <div className="bg-transparent border border-gray-300 dark:border-zinc-800 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center">
      <button className="border border-zinc-200 text-xs text-black font-semibold py-2 px-6 rounded-md hover:bg-zinc-200 transition duration-300 ease-out cursor-pointer dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-600 w-full sm:w-auto">
          Outline
      </button>
      <button className="border border-zinc-200 text-sm text-black font-semibold py-2 px-6 rounded-md hover:bg-zinc-200 transition duration-300 ease-out cursor-pointer dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-600 w-full sm:w-auto">
          Outline
      </button>
      <button className="border border-zinc-200 text-base text-black font-semibold py-2 px-6 rounded-md hover:bg-zinc-200 transition duration-300 ease-out cursor-pointer dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-600 w-full sm:w-auto">
          Outline
      </button>
      <button className="border border-zinc-200 text-lg text-black font-semibold py-2 px-6 rounded-md hover:bg-zinc-200 transition duration-300 ease-out cursor-pointer dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-600 w-full sm:w-auto">
          Outline
      </button>
      <button className="border border-zinc-200 text-xl text-black font-semibold py-2 px-6 rounded-md hover:bg-zinc-200 transition duration-300 ease-out cursor-pointer dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-600 w-full sm:w-auto">
          Outline
      </button>
    </div>
  );
}


export default function ButtonPreview(){
  return (
    <div className="bg-transparent border border-gray-300 dark:border-zinc-800 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center">
      <button className="bg-blue-700 text-xs text-white font-semibold py-1.5 px-6 rounded-md hover:bg-blue-900 transition duration-300 ease-out w-full sm:w-auto">
        Default
      </button>
      <button className="bg-blue-700 text-sm text-white font-semibold py-1.5 px-6 rounded-md hover:bg-blue-900 transition duration-300 ease-out w-full sm:w-auto">
        Default
      </button>
      <button className="bg-blue-700 text-base text-white font-semibold py-1.5 px-6 rounded-md hover:bg-blue-900 transition duration-300 ease-out w-full sm:w-auto">
        Default
      </button>
      <button className="bg-blue-700 text-lg text-white font-semibold py-1.5 px-6 rounded-md hover:bg-blue-900 transition duration-300 ease-out w-full sm:w-auto">
        Default
      </button>
      <button className="bg-blue-700 text-2xl text-white font-semibold py-1.5 px-6 rounded-md hover:bg-blue-900 transition duration-300 ease-out w-full sm:w-auto">
        Default
      </button>
    </div>
  );
};


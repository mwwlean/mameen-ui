import React from "react";

export function BadgesPill() {
    return (
        <div className=" border border-gray-300 dark:border-zinc-800 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center">
            <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-500/10 rounded-full border border-gray-500">Gray</span>
            <span className="px-2 py-1 text-xs font-semibold text-red-500 bg-red-500/10 rounded-full border border-red-500">Red</span>
            <span className="px-2 py-1 text-xs font-semibold text-yellow-500 bg-yellow-500/10 rounded-full border border-yellow-500">Yellow</span>
            <span className="px-2 py-1 text-xs font-semibold text-green-500 bg-green-500/10 rounded-full border border-green-500">Green</span>
            <span className="px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-500/10 rounded-full border border-blue-500">Blue</span>
            <span className="px-2 py-1 text-xs font-semibold text-indigo-500 bg-indigo-500/10 rounded-full border border-indigo-500">Indigo</span>
            <span className="px-2 py-1 text-xs font-semibold text-purple-500 bg-purple-500/10 rounded-full border border-purple-500">Purple</span>
            <span className="px-2 py-1 text-xs font-semibold text-pink-500 bg-pink-500/10 rounded-full border border-pink-500">Pink</span>
        </div>
    );
}

export function BadgesDark(){
    return (
        <div className="border border-gray-300 dark:border-zinc-800 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center">
            <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-500/10 rounded-sm border border-gray-500">Gray</span>
            <span className="px-2 py-1 text-xs font-semibold text-red-500 bg-red-400/10 rounded-sm border border-red-500">Red</span>
            <span className="px-2 py-1 text-xs font-semibold text-yellow-500 bg-yellow-500/10 rounded-sm border border-yellow-500">Yellow</span>
            <span className="px-2 py-1 text-xs font-semibold text-green-500 bg-green-500/10 rounded-sm border border-green-500">Green</span>
            <span className="px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-500/10 rounded-sm border border-blue-500">Blue</span>
            <span className="px-2 py-1 text-xs font-semibold text-indigo-500 bg-indigo-500/10 rounded-sm border border-indigo-500">Indigo</span>
            <span className="px-2 py-1 text-xs font-semibold text-purple-500 bg-purple-500/10 rounded-sm border border-purple-500">Purple</span>
            <span className="px-2 py-1 text-xs font-semibold text-pink-500 bg-pink-500/10 rounded-sm border border-pink-500">Pink</span>
        </div>
    );
}

export function DefaultPill(){
    return (
        <div className="bg-transparent border border-gray-300 dark:border-zinc-800 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center">
            <span className="px-2 py-1 text-xs font-medium bg-blue-900 rounded-full text-blue-300">Default</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-900 rounded-full text-gray-300">Dark</span>
            <span className="px-2 py-1 text-xs font-medium bg-red-900 rounded-full text-red-300">Red</span>
            <span className="px-2 py-1 text-xs font-medium bg-green-900 rounded-full text-green-300">Green</span>
            <span className="px-2 py-1 text-xs font-medium bg-yellow-900 rounded-full text-yellow-300">Yellow</span>
            <span className="px-2 py-1 text-xs font-medium bg-indigo-900 rounded-full text-indigo-300">Indigo</span>
            <span className="px-2 py-1 text-xs font-medium bg-purple-900 rounded-full text-purple-300">Purple</span>
            <span className="px-2 py-1 text-xs font-medium bg-pink-900 rounded-full text-pink-300">Pink</span>
        </div>
    );
}

export default function BadgesDefault(){
    return (
        <div className="bg-transparent border border-gray-300 dark:border-zinc-800 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center">
            <span className="px-2 py-1 text-xs font-medium bg-blue-900 rounded-sm text-blue-300">Default</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-900 rounded-sm text-gray-300">Dark</span>
            <span className="px-2 py-1 text-xs font-medium bg-red-900 rounded-sm text-red-300">Red</span>
            <span className="px-2 py-1 text-xs font-medium bg-green-900 rounded-sm text-green-300">Green</span>
            <span className="px-2 py-1 text-xs font-medium bg-yellow-900 rounded-sm text-yellow-300">Yellow</span>
            <span className="px-2 py-1 text-xs font-medium bg-indigo-900 rounded-sm text-indigo-300">Indigo</span>
            <span className="px-2 py-1 text-xs font-medium bg-purple-900 rounded-sm text-purple-300">Purple</span>
            <span className="px-2 py-1 text-xs font-medium bg-pink-900 rounded-sm text-pink-300">Pink</span>
        </div>
    );
};


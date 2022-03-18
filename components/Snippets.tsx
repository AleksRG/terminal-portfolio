import React from 'react'
import Profil from './Profil'
import Login from './Login'
import JobCard from './JobCard'
import Tasks from './Tasks'
import TaskCard from './TaskCard'
import Keyboard from './Keyboard'
import secondNumbers from '../secondNumbers.json'
import firstNumbers from '../firstNumbers.json'

function Projects() {
  return (
    <div className="flex h-full w-full flex-row justify-around overflow-y-scroll pl-2 text-lg scrollbar-hide">
      {/* Left */}
      <div>
        <div className="border-r border-gray-700/50 pr-2">
          <div className="cursor-default text-white/70">
            <p className="transform text-white/10 transition duration-100 hover:scale-110 hover:text-sky-700/10">
              65
            </p>
            <p className="transform text-white/25 transition duration-100 hover:scale-110 hover:text-sky-700/25">
              66
            </p>
            <p className="transform text-white/50 transition duration-100 hover:scale-110 hover:text-sky-700/50">
              67
            </p>
            {firstNumbers.map((num) => (
              <p className="transform transition duration-100 hover:scale-110 hover:text-sky-700">
                {num}
              </p>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-spin text-pink-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {secondNumbers.map((num) => (
              <p className="transform transition duration-100 hover:scale-110 hover:text-sky-700">
                {num}
              </p>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-pink-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <p className="transform transition duration-100 hover:scale-110 hover:text-sky-700">
              67{' '}
            </p>
            {firstNumbers.map((num) => (
              <p className="transform transition duration-100 hover:scale-110 hover:text-sky-700">
                {num}
              </p>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
            <p className="transform text-white/50 transition duration-100 hover:scale-110 hover:text-sky-700/50">
              {' '}
              01{' '}
            </p>
            <p className="transform text-white/25 transition duration-100 hover:scale-110 hover:text-sky-700/25">
              {' '}
              02{' '}
            </p>
            <p className="transform text-white/10 transition duration-100 hover:scale-110 hover:text-sky-700/10">
              {' '}
              03{' '}
            </p>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="my-auto w-[90%] space-y-4 md:w-[97%]">
        <Profil />
        <Login />
        <JobCard />
        <Tasks />
        <TaskCard />
        <Keyboard />
      </div>
    </div>
  )
}

export default Projects

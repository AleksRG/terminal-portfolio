import React from 'react'
import Profil from './Profil'
import Login from './Jogin'
import JobCard from './JobCard'
import Tasks from './Tasks'
import TaskCard from './TaskCard'
import Keyboard from './Keyboard'

function Projects() {
  return (
    <div className="flex h-full w-full flex-row justify-around overflow-y-scroll  pl-2 text-lg scrollbar-hide">
      {/* Left */}
      <div className=" ">
        <div className="border-r border-gray-700/50 pr-2">
          <text className="text-white/70">
            <a className="text-white/10">65</a> <br />
            <a className="text-white/25">66</a> <br />
            <a className="text-white/50">67</a> <br />
            68 <br />
            69 <br />
            70 <br />
            71 <br />
            72 <br />
            73 <br />
            74 <br />
            75 <br />
            76 <br />
            77 <br />
            78 <br />
            79 <br />
            80 <br />
            81 <br />
            82 <br />
            83 <br />
            84 <br />
            85 <br />
            86 <br />
            87 <br />
            88 <br />
            89 <br />
            90 <br />
            91 <br />
            92 <br />
            93 <br />
            94 <br />
            95 <br />
            96 <br />
            97 <br />
            98 <br />
            99 <br />
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
            01 <br />
            02 <br />
            03 <br />
            04 <br />
            05 <br />
            06 <br />
            07 <br />
            08 <br />
            09 <br />
            10 <br />
            11 <br />
            12 <br />
            13 <br />
            14 <br />
            15 <br />
            16 <br />
            17 <br />
            18 <br />
            19 <br />
            20 <br />
            21 <br />
            22 <br />
            23 <br />
            24 <br />
            25 <br />
            26 <br />
            27 <br />
            28 <br />
            29 <br />
            30 <br />
            31 <br />
            32 <br />
            33 <br />
            34 <br />
            35 <br />
            36 <br />
            37 <br />
            38 <br />
            39 <br />
            40 <br />
            41 <br />
            42 <br />
            43 <br />
            44 <br />
            45 <br />
            46 <br />
            47 <br />
            48 <br />
            49 <br />
            50 <br />
            51 <br />
            52 <br />
            53 <br />
            54 <br />
            55 <br />
            56 <br />
            57 <br />
            58 <br />
            59 <br />
            60 <br />
            61 <br />
            62 <br />
            63 <br />
            64 <br />
            65 <br />
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
            67 <br />
            68 <br />
            69 <br />
            70 <br />
            71 <br />
            72 <br />
            73 <br />
            74 <br />
            75 <br />
            76 <br />
            77 <br />
            78 <br />
            79 <br />
            80 <br />
            81 <br />
            82 <br />
            83 <br />
            84 <br />
            85 <br />
            86 <br />
            87 <br />
            88 <br />
            89 <br />
            90 <br />
            91 <br />
            92 <br />
            93 <br />
            94 <br />
            95 <br />
            96 <br />
            97 <br />
            98 <br />
            99 <br />
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
            <a className="text-white/50"> 01 </a> <br />
            <a className="text-white/25"> 02 </a> <br />
            <a className="text-white/10"> 03 </a>
            <br />
          </text>
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

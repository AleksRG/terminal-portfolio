import React from 'react'
import Link from 'next/link'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si'

function AboutMe() {
  return (
    <div className="h-full w-full items-center justify-around overflow-y-scroll pl-3 text-lg  scrollbar-hide md:flex md:flex-row">
      {/* Left */}
      <div className="flex space-x-6">
        <div className="border-r border-gray-700/50  pr-4">
          <text className="text-white/70">
            <a className="text-white/10">38</a> <br />
            <a className="text-white/25">39</a> <br />
            <a className="text-white/50">40</a> <br />
            41 <br />
            42 <br />
            43 <br />
            44 <br />
            45 <br />
            46 <br />
            47 <br />
            48 <br />
            <a className="md:text-white/50"> 50 </a> <br />
            <a className="md:text-white/25"> 51 </a> <br />
            <a className="md:text-white/10"> 52 </a>
            <br />
          </text>
        </div>
        <div className="my-auto pl-2">
          <a className="text-white/50">/**</a>
          <div className="h-74 border-l border-gray-700/50 pl-4">
            <text className="text-center text-white/50">
              {' '}
              <a className="">
                * Education: <br />
              </a>
              * 2020 - 2021 <a className="text-[#ffa000]">SoftUni </a>
              <br />
              <a className="text-sm text-sky-700 md:pl-8">Java Fundamentals</a>
              <br />* 2021 <a className="text-[#a435f0]">Udemy</a>
              <br />
              <Link href="https://www.udemy.com/course/the-complete-javascript-course/">
                <a className="text-sm text-sky-700 md:pl-8">
                  The Complete JavaScript Course: From Zero to Expert!
                </a>
              </Link>
              <br />{' '}
              <Link href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                <a className="text-sm text-sky-700  md:pl-8">
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </a>
              </Link>
              <br />* 2021{' '}
              <a className="text-amber-600">Zero to Full Stack Hero</a>
              <br />
              <Link href="https://www.papareact.com/">
                <a className="text-left text-sm text-sky-700 md:pl-8">
                  www.papareact.com
                </a>
              </Link>
              <br />
              */ <br />
            </text>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex space-x-6">
        <div className="border-r border-gray-700/50  pr-4">
          <text className="text-white/70">
            <a className="md:text-white/10">53</a> <br />
            <a className="md:text-white/25">54</a> <br />
            <a className="md:text-white/50">55</a> <br />
            56 <br />
            57 <br />
            58 <br />
            59 <br />
            60 <br />
            <a className="text-white/50"> 61 </a> <br />
            <a className="text-white/25"> 62 </a> <br />
            <a className="text-white/10"> 63 </a>
            <br />
            <a className="text-white/5"> 64 </a>
            <br />
          </text>
        </div>
        <div className="my-auto pl-2">
          <a className="text-white/50">/**</a>
          <div className="h-74 border-l border-gray-700/50 pl-4">
            <text className="text-center text-white/50">
              {' '}
              <a className="">
                * Skills: <br />
              </a>
              <a className="flex items-center space-x-2 ">
                <SiJavascript className="text-yellow-500" />{' '}
                <p className="px-2 text-white/80">JavaScript</p>
              </a>
              <a className="flex items-center space-x-2">
                <SiTypescript className="text-sky-400" />{' '}
                <p className="flex px-2 text-white/80">
                  TypeScript{' '}
                  <p className="animate-pulse pl-1 text-xs text-red-500">
                    loading...
                  </p>{' '}
                </p>
              </a>
              <a className="flex items-center space-x-2">
                <SiReact className="text-sky-600" />{' '}
                <p className="px-2 text-white/80">ReactJS</p>
              </a>
              <a className="flex items-center space-x-2">
                <SiNextdotjs className="text-white/70" />{' '}
                <p className="px-2 text-white/80">NextJS</p>
              </a>
              <a className="flex items-center space-x-2">
                <SiTailwindcss className="text-sky-400" />{' '}
                <p className="px-2 text-white/80">TailwindCss</p>
              </a>{' '}
              <a className="flex items-center space-x-2">
                <SiFirebase className="text-orange-400" />{' '}
                <p className="px-2 text-white/80">Firebase</p>
              </a>{' '}
              <a className="flex items-center space-x-2">
                <SiNodedotjs className="text-green-500" />{' '}
                <p className="px-2 text-white/80">NodeJS</p>
              </a>
              */
            </text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

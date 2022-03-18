import React from 'react'
import Hello from './Hello'
import ProjectBox from './ProjectBox'

function Banner() {
  return (
    <div className="relative m-auto flex w-full flex-1 flex-col items-center justify-center  scrollbar-hide">
      <div className="mt-4 flex flex-wrap justify-around space-y-8 p-4 sm:w-full md:space-y-0 lg:space-x-20">
        <div className="mt-2 items-center">
          <div className="space-y-2 text-white/80">
            <p>Hello! I&apos;am</p>
            <h1 className="text-5xl">Aleks Georgiev</h1>
            <h2 className="text-2xl text-sky-700">
              Junior JavaScript Developer
            </h2>
            <Hello />
          </div>
        </div>
        <ProjectBox />
      </div>
    </div>
  )
}

export default Banner

import React, { useState } from 'react'
import Code from './Code'

function Tasks() {
  const [see, setSee] = useState('demo')
  const code = `<div className="m-auto mt-4 max-w-sm rounded-xl p-4 shadow-lg shadow-slate-900">
  <a href="#" className="block h-full w-full">
    <div className="w-full">
      <p className="mb-2 text-xl font-medium text-white/70">
        Improve css design of the carousel
      </p>
      <p className="mb-2 text-xs font-medium text-gray-200">
        Monday 21 February
      </p>
      <p className="mb-4 text-sm text-gray-600 ">
        You’ve been coding for a while now and know your way around a
        CSS file. You’re certainly no master, but with enough fiddling
        you can get where you want to go.
      </p>
      <div className="flex items-center justify-between text-white/70">
        <p>Task progress</p>
        <p>75%</p>
      </div>
      <div className="mt-3 mb-6 h-2 w-full rounded-full bg-gray-500">
        <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-sky-700 via-purple-500 to-pink-500 text-center text-xs text-slate-900"></div>
      </div>
      <div className="flex items-center ">
        <div className="flex -space-x-2">
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              src="https://images.pexels.com/photos/1464695/pexels-photo-1464695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              src="https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
          <a href="#" className="">
            <img
              className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </a>
        </div>
        <span className="ml-2 text-sm text-white/70">+ 900 more</span>
      </div>
    </div>
  </a>
</div>`
  return (
    <div>
      <div className="flex border-b border-slate-900 px-2 text-sm tracking-tight">
        <button
          className="cursor-pointer rounded-md px-4 py-1 text-sky-700"
          onClick={() => setSee('demo')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
        <p
          className="cursor-pointer px-4 py-1 text-amber-500"
          onClick={() => setSee('code')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </p>
      </div>
      {see === 'demo' ? (
        <div className="m-auto mt-4 max-w-sm rounded-xl p-4 shadow-lg shadow-slate-900">
          <a href="#" className="block h-full w-full">
            <div className="w-full">
              <p className="mb-2 text-xl font-medium text-white/70">
                Improve css design of the carousel
              </p>
              <p className="mb-2 text-xs font-medium text-gray-200">
                Monday 21 February
              </p>
              <p className="mb-4 text-sm text-gray-600 ">
                You’ve been coding for a while now and know your way around a
                CSS file. You’re certainly no master, but with enough fiddling
                you can get where you want to go.
              </p>
              <div className="flex items-center justify-between text-white/70">
                <p>Task progress</p>
                <p>75%</p>
              </div>
              <div className="mt-3 mb-6 h-2 w-full rounded-full bg-gray-500">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-sky-700 via-purple-500 to-pink-500 text-center text-xs text-slate-900"></div>
              </div>
              <div className="flex items-center ">
                <div className="flex -space-x-2">
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
                      src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
                      src="https://images.pexels.com/photos/1464695/pexels-photo-1464695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
                      src="https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
                      src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
                      src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                </div>
                <span className="ml-2 text-sm text-white/70">+ 900 more</span>
              </div>
            </div>
          </a>
        </div>
      ) : (
        <Code code={code} language={'javascript'} />
      )}
    </div>
  )
}

export default Tasks

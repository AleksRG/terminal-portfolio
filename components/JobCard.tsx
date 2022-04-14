import React, { useState } from 'react'
import Code from './Code'

function Profile() {
  const [see, setSee] = useState('demo')
  const code = `<div className="mx-auto mt-4 w-full max-w-sm overflow-hidden rounded-xl p-6 shadow-lg shadow-slate-900">
  <div className="flex items-center justify-between md:flex-row">
    <div className="flex w-full flex-grow items-center justify-start">
      <a href="#" className="relative block">
        <img
          alt="profil"
          src="/KHABY.webp"
          className="mx-auto h-10 w-10 rounded-full object-cover"
        />
      </a>
      <div className="ml-4 flex flex-col items-start">
        <span className="text-gray-500">Khaby Lame</span>
        <span className="text-sm font-light text-gray-400 ">
          Updated 3 min ago
        </span>
      </div>
    </div>
    <div>
      <span className="w-full rounded-full bg-sky-700 px-3 py-1 text-sm text-white/70">
        Design
      </span>
    </div>
  </div>
  <p className="mt-4 mb-2 text-lg text-gray-500">
    Need a designer to form branding for my business.
  </p>
  <p className="text-sm font-normal text-gray-400">
    Looking for a talented brand designer to create all the branding
    materials for my new startup. This should be a long term project and
    my hope I hight on the person whom I would like to hire.
  </p>
  <div className="my-6 flex items-center justify-between rounded bg-gray-800 p-2">
    <div className="flex w-full items-start justify-between">
      <p className="w-full flex-grow text-2xl text-gray-700">
        <span className="text-md font-light text-gray-400">$</span>
        4,500
        <span className="text-sm font-light text-gray-400">/Month</span>
      </p>
      <span className="flex-none rounded-full border border-slate-500 px-3 py-1 text-sm font-light text-gray-400">
        Full time
      </span>
    </div>
  </div>
  <button
    type="button"
    className="w-full rounded-lg bg-sky-700 py-2 px-4 text-center text-base font-semibold text-white/70 shadow-md transition duration-200 ease-in hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800"
  >
    Apply for this Job
  </button>
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
        <div className="mx-auto mt-4 w-full max-w-md overflow-hidden rounded-xl p-6 shadow-lg shadow-slate-900">
          <div className="flex items-center justify-between md:flex-row">
            <div className="flex w-full flex-grow items-center justify-start">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="/KHABY.webp"
                  className="mx-auto h-10 w-10 rounded-full object-cover"
                />
              </a>
              <div className="ml-4 flex flex-col items-start">
                <span className="text-gray-500">Khaby Lame</span>
                <span className="text-sm font-light text-gray-400">
                  Updated 3 min ago
                </span>
              </div>
            </div>
            <div>
              <span className="w-full rounded-full bg-sky-700 px-3 py-1 text-sm text-white/70">
                Design
              </span>
            </div>
          </div>
          <p className="mt-4 mb-2 text-lg text-gray-500">
            Need a designer to form branding for my business.
          </p>
          <p className="text-sm font-normal text-gray-400">
            Looking for a talented brand designer to create all the branding
            materials for my new startup. This should be a long term project and
            my hope I hight on the person whom I would like to hire.
          </p>
          <div className="my-6 flex items-center justify-between rounded bg-gray-800 p-2">
            <div className="flex w-full items-start justify-between">
              <p className="w-full flex-grow text-2xl text-gray-700">
                <span className="text-md font-light text-gray-400">$</span>
                4,500
                <span className="text-sm font-light text-gray-400">/Month</span>
              </p>
              <span className="flex-none rounded-full border border-slate-500 px-3 py-1 text-sm font-light text-gray-400">
                Full time
              </span>
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-sky-700 py-2 px-4 text-center text-base font-semibold text-white/70 shadow-md transition duration-200 ease-in hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800"
          >
            Apply for this Job
          </button>
        </div>
      ) : (
        <Code code={code} language={'javascript'} />
      )}
    </div>
  )
}

export default Profile

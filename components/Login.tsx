import React, { useState } from 'react'
import Code from './Code'

function Login() {
  const [see, setSee] = useState('demo')
  const code = `<div className="m-auto mt-6 max-w-xl shadow-md shadow-slate-900">
  <div className="rounded-t-lg border-b border-slate-900 p-8">
    <p className="text-center text-sm font-light text-gray-500">
      Sign in with
    </p>
    <div>
      <div className="mt-3 flex items-center justify-center space-x-4">
      <button className="flex transform items-center rounded border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium uppercase text-white/70 shadow-md shadow-slate-900 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gray-800/50 hover:shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="mr-3 h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          Github
        </button>
        <button className="flex transform items-center rounded border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium uppercase text-white/70 shadow-md shadow-slate-900 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gray-800/50 hover:shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 h-6 w-6"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#e53935"
              d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4caf50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1565c0"
              d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          Google
        </button>
      </div>
    </div>
  </div>
  <div className="rounded-b-lg  py-12 px-4 lg:px-24">
    <p className="text-center text-sm font-light text-gray-500">
      Or sign in with credentials
    </p>
    <form className="mt-6">
      <div className="relative">
        <input
          className="focus:shadow-outline w-full appearance-none rounded-md border border-slate-900 bg-gray-800 py-3  pl-12 leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-700 focus:shadow-md focus:outline-none focus:ring-gray-600"
          id="username"
          type="text"
          placeholder="Email"
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 h-7 w-7 p-1 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
      </div>
      <div className="relative mt-3">
        <input
          className="focus:shadow-outline w-full appearance-none rounded-md border border-slate-900 bg-gray-800 py-3  pl-12 leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-700 focus:shadow-md focus:outline-none focus:ring-gray-600"
          id="password"
          type="text"
          placeholder="Password"
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 h-7 w-7 p-1 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
          </svg>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center text-sm  text-gray-600">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="mr-3"
        />
        <label htmlFor="remember">Remember me</label>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button className="transform rounded bg-sky-700 py-2 px-4 font-medium uppercase text-white/70 shadow transition hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-lg">
          Sign in
        </button>
      </div>
    </form>
  </div>
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
        <div className="m-auto mt-6 max-w-xl shadow-md shadow-slate-900">
          <div className="rounded-t-lg border-b border-slate-900 p-8">
            <p className="text-center text-sm font-light text-gray-500">
              Sign in with
            </p>
            <div>
              <div className="mt-3 flex items-center justify-center space-x-4">
                <button className="flex transform items-center rounded border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium uppercase text-white/70 shadow-md shadow-slate-900 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gray-800/50 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="mr-3 h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                  Github
                </button>
                <button className="flex transform items-center rounded border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium uppercase text-white/70 shadow-md shadow-slate-900 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gray-800/50 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-6 w-6"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#e53935"
                      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-b-lg  py-12 px-4 lg:px-24">
            <p className="text-center text-sm font-light text-gray-500">
              Or sign in with credentials
            </p>
            <form className="mt-6">
              <div className="relative">
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-md border border-slate-900 bg-gray-800 py-3  pl-12 leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-700 focus:shadow-md focus:outline-none focus:ring-gray-600"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-7 w-7 p-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-md border border-slate-900 bg-gray-800 py-3  pl-12 leading-tight text-gray-600 shadow-sm transition focus:placeholder-gray-700 focus:shadow-md focus:outline-none focus:ring-gray-600"
                  id="password"
                  type="text"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-7 w-7 p-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-3"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <button className="transform rounded bg-sky-700 py-2 px-4 text-sm font-medium text-white/70 shadow transition hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-lg">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Code code={code} language={'javascript'} />
      )}
    </div>
  )
}

export default Login

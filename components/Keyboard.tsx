import React from 'react'
import Button from './ButtonKeyboard'

function Keyboard() {
  return (
    <div className="hidden lg:block">
      <div className="flex border-b border-slate-900 px-2 text-sm tracking-tight">
        <button className="cursor-pointer rounded-md px-4 py-1 text-sky-700">
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
      </div>
      <div className="mt-20 flex h-full w-full select-none items-center justify-center py-10 text-xs text-white/75">
        <div className="overflow-hidden rounded-lg border border-slate-800 p-5 text-sm shadow-xl shadow-slate-900">
          <div className="-mx-1 flex justify-between">
            <div className="mb-2  w-12 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75  focus:outline-none">
                ESC
              </button>
            </div>
            <div className="flex text-xs">
              <div className="w-8"></div>
              <Button symbol="F1" />
              <Button symbol="F2" />
              <Button symbol="F3" />
              <Button symbol="F4" />
              <div className="w-5"></div>
              <Button symbol="F5" />
              <Button symbol="F6" />
              <Button symbol="F7" />
              <Button symbol="F8" />
              <div className="w-5"></div>
              <Button symbol="F9" />
              <Button symbol="F10" />
              <Button symbol="F11" />
              <Button symbol="F12" />
              <div className="flex w-44 items-center justify-around pl-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-sky-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-sky-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-sky-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="-mx-1 flex">
            <div className="flex flex-1 ">
              <div className="mb-2 w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  ~
                </button>
              </div>
              <Button symbol="1" />
              <Button symbol="2" />
              <Button symbol="3" />
              <Button symbol="4" />
              <Button symbol="5" />
              <Button symbol="6" />
              <Button symbol="7" />
              <Button symbol="8" />
              <Button symbol="9" />
              <Button symbol="0" />
              <Button symbol="-" />
              <Button symbol="+" />
            </div>
            <div className="mb-2 w-20 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>{' '}
            <div className="flex pl-8 text-xs">
              <Button symbol="INS" />
              <Button symbol="HOME" />
              <div className="w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="-mx-1 flex">
            <div className="mb-2 w-20 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                TAB
              </button>
            </div>
            <div className="flex flex-1 justify-center">
              <Button symbol="Q" />
              <Button symbol="W" />
              <Button symbol="E" />
              <Button symbol="R" />
              <Button symbol="T" />
              <Button symbol="Y" />
              <Button symbol="U" />
              <Button symbol="I" />
              <Button symbol="O" />
              <Button symbol="P" />
              <Button symbol="[" />
              <Button symbol="]" />
              <Button symbol="\" />
            </div>

            <div className="flex pl-8 text-xs">
              <Button symbol="DEL" />
              <Button symbol="END" />
              <div className="w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="-mx-1 flex">
            <div className="mb-2 w-24 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                CAPS
              </button>
            </div>
            <div className="flex flex-1 justify-center">
              <Button symbol="A" />
              <Button symbol="S" />
              <Button symbol="D" />
              <Button symbol="F" />
              <Button symbol="G" />
              <Button symbol="H" />
              <Button symbol="J" />
              <Button symbol="K" />
              <Button symbol="L" />
              <Button symbol=";" />
              <Button symbol="'" />
              {/* <Button symbol="\" /> */}
            </div>

            <div className="mb-2 w-20 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                ENTER
              </button>
            </div>
            {/* <div className="mb-2 w-12 px-1">
              <p className="block h-10 w-full rounded border-t border-slate-800 text-center leading-none shadow-md shadow-slate-700 focus:outline-none"></p>
            </div> */}
            <p className="flex w-44 pl-8"></p>
          </div>
          <div className="-mx-1 flex">
            <div className="mb-2 w-28 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75  focus:outline-none">
                SHIFT
              </button>
            </div>
            <div className="flex flex-1 justify-center">
              <Button symbol="Z" />
              <Button symbol="X" />
              <Button symbol="C" />
              <Button symbol="V" />
              <Button symbol="B" />
              <Button symbol="N" />
              <Button symbol="M" />
              <Button symbol="," />
              <Button symbol="." />
              <Button symbol="/" />
            </div>
            <div className="mb-2 w-28 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75  focus:outline-none">
                SHIFT
              </button>
            </div>
            <p className="flex w-44 justify-center pl-8">
              <div className="w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </p>
          </div>
          <div className="-mx-1 flex">
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                CTRL
              </button>
            </div>
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                ALT
              </button>
            </div>
            <div className="flex-1 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  />
                </svg>
              </button>
            </div>
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                ALT
              </button>
            </div>
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                FN
              </button>
            </div>
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="w-14 px-1">
              <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                CTRL
              </button>
            </div>
            <p className="flex pl-8">
              <div className="w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-12 px-1">
                <button className="block h-10 w-full rounded border-t border-slate-800 text-center text-xs leading-none shadow-md shadow-slate-700 hover:bg-gray-900/75 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keyboard

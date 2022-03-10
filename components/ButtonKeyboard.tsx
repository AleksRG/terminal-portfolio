import React, { FC } from 'react'

interface Button {
  symbol: string
}

const Button: FC<Button> = ({ symbol }) => {
  return (
    <div className="mb-2 w-12 px-1">
      <button className="block h-10 w-full rounded border-t border-slate-800 text-center leading-none shadow-md shadow-cyan-600 hover:bg-gray-900/75 hover:shadow-lime-600 focus:outline-none">
        {symbol}
      </button>
    </div>
  )
}
export default Button

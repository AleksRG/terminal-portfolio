import React from 'react'
import Typist from 'react-typist'

function Hello() {
  return (
    <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
      <Typist>
        <span className="text-xl text-slate-600">
          <a className="text-2xl">{'>'}</a>{' '}
          <a className="text-sky-700"> Location:</a> Sofia, Bulgaria
          <br />
          <a className="text-2xl">{'>'}</a>{' '}
          <a className="text-sky-700"> Email: </a>
          AleksRDev@gmail.com
          <br />
          <a className="text-2xl">{'>'}</a>{' '}
          <a className="text-sky-700"> Phone: </a>
          <a className="text-md">+359 895 629 829</a>
        </span>
      </Typist>
    </div>
  )
}

export default Hello

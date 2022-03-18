import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-slate-900 p-2 text-slate-600">
      <div className="flex items-center space-x-4">
        <p>find me in:</p>
        <Link href="https://www.linkedin.com/in/aleksrgeorgiev/">
          <a>
            <BsLinkedin className="hover:text-sky-700" />
          </a>
        </Link>
        <Link href="https://github.com/AleksRG">
          <a>
            <BsGithub className="hover:text-sky-700" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/_aleksandar.georgiev_/?hl=bg">
          <a>
            <BsInstagram className="hover:text-sky-700" />
          </a>
        </Link>
      </div>
      <a>{new Date().toDateString()}</a>
    </div>
  )
}

export default Footer

import React, { FC, useEffect } from 'react'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-atom-dark.css'

interface Code {
  code: string
  language: string
}

const Code: FC<Code> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <pre className={`language-${language} max-h-[540px] scrollbar-hide`}>
      <code className="language-js code-highlight text-sm">{code}</code>
    </pre>
  )
}
export default Code

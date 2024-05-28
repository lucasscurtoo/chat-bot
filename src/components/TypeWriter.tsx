'use client'

import { Typewriter } from 'react-simple-typewriter'

const CustomTypeWriter = ({ words }: { words: string[] }) => {
  return (
    <Typewriter
      words={words}
      loop={5}
      cursor
      cursorStyle='|'
      typeSpeed={70}
      delaySpeed={1000}
    />
  )
}
export default CustomTypeWriter

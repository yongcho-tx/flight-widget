import React, { useState } from "react"

const TableLetter = ({ letter, index }) => {
  const [flip, setFlip] = useState(false)
  const flipping = flip ? "flip" : null

  setTimeout(() => {
    setFlip(true)
  }, 100 * index)

  return (
    <div
      className={`flex items-center justify-center float-left h-[40px] min-w-[20px] bg-black border-4 border-solid border-[#1a1a1a] ${flipping}`}
    >
      {flip ? letter : null}
    </div>
  )
}

export default TableLetter

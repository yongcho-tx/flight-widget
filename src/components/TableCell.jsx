import React from "react"

const TableCell = ({ word }) => {
  return (
    <td className='float-left h-[40px] min-w-[20px] bg-black border-4 border-solid'>
      {Array.from(word).map((letter, _index) => (
        <div className=''>{letter}</div>
      ))}
    </td>
  )
}

export default TableCell

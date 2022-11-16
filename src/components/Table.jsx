import React from "react"
import TableBody from "./TableBody"
import TableHead from "./TableHead"

const Table = () => {
  return (
    <table className='bg-[#2e2e2d] text-left'>
      <TableHead />
      <TableBody />
    </table>
  )
}

export default Table

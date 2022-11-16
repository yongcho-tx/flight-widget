import React from "react"

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th className='w-[160px]'>TIME</th>
        <th className='w-[700px]'>DESTINATION</th>
        <th className='w-[205px]'>FLIGHT</th>
        <th className='w-[135px]'>GATE</th>
        <th className='w-[260px]'>REMARKS</th>
      </tr>
    </thead>
  )
}

export default TableHead

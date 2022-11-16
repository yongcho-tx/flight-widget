import TableLetter from "./TableLetter"

const TableCell = ({ word }) => {
  // const flipping = flip ? "flip" : ""

  return (
    <td>
      {Array.from(word).map((letter, index) => (
        <TableLetter key={index} letter={letter} index={index} />
      ))}
    </td>
  )
}

export default TableCell

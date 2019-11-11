import React from 'react'
import './Rank.css';




const Rank = ({ name, entries }) => {
  return (
    <div>
      <div style={{textShadow: "1px 1px 1px black"}} className="white f3 entry">
        {`${name}, your current entry count is...`}
      </div>

      <div style={{textShadow: "1px 1px 1px black"}} className="white f3">
        {entries}
      </div>
    </div>
  )
}

export default Rank;

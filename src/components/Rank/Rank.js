import React from 'react'




const Rank = ({ name, entries }) => {
  return (
    <div>
      <div style={{textShadow: "2px 2px 2px black"}} className="white f2">
        {`${name}, your current entry count is...`}
      </div>

      <div style={{textShadow: "2px 1px 2px black"}} className="white f1">
        {entries}
      </div>
    </div>
  )
}

export default Rank;

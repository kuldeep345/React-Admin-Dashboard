import { KeyboardArrowDown, MoreVert } from '@mui/icons-material'
import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert/>
      </div>
      <div className="bottom">
          <div className="featuredChart">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">Previous transactions processng. Last payments may not be included</p>
          <div className="summary">

            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <KeyboardArrowDown fontSize='small'/>
                  <div className="resultAmount">$12.4</div>
              </div>
              
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <KeyboardArrowDown fontSize='small'/>
                  <div className="resultAmount">$12.4</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowDown fontSize='small'/>
                  <div className="resultAmount">$12.4</div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Featured
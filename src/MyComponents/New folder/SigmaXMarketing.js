import React from 'react'
import {SigmaXItems} from "./SigmaXItems";


export const SigmaXMarketing = (props) => {
  return (
    <div className="container">
      <h3>SigmaXMarketing List</h3>
      {/* {props.sigmaxmarketing} */}
      <SigmaXItems sigmaxitems={props.sigmaxmarketing[0]}/>
      

    </div>
  )
}

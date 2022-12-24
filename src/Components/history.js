import React from 'react'
import './history.css'

import { FaTrash} from 'react-icons/fa';

const History = (props) => {
   
  const {arr,setarr} = props;

  const delettask = (id) =>{
    arr.splice(id,1);
    const b = [...arr];
    setarr(b);
    console.log(arr);
  }


  return (
    <div className='dv'>
      <h2>Transaction History</h2>
        <div>
          {
      arr.map(
        (e,i) =>
         {
        return (

         e.opt===0? <div className="expe" style={{backgroundColor: "red"}}>
            <FaTrash onClick={()=>{delettask(i)}}></FaTrash>
            <span>{e.data}  </span>
            <span>&#8377;{e.Amt}</span>
          </div>:<div className="expe gr">
          <FaTrash onClick={()=>{delettask(i)}}></FaTrash>
            <span>{e.data}  </span>
            <span>&#8377;+{e.Amt}</span>
          </div>
        )
         }
      )
        }
      </div>
    </div>
  )
}

export default History

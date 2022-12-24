// import React from 'react'
import './balance.css'
// const Balance = () => {
//   return (
//     <div className='Bal'>
//       <div className='lo'>
//       <div>Balance <span>&#8377;</span>20000</div>
//        <div className='Income'>
//         <div className='sp gr'>
//              <div className='lol'>Income</div>
//              <div className='lol2'>+<span>&#8377;</span>20000</div> 
//         </div>
//         <div className='sp rd'>
//             <div className='lol'>Expense</div>
//              <div className='lol2'>-<span>&#8377;</span>20000</div> 
//         </div>
//       </div> 
//       </div>
//     </div>
//   )
// }

// export default Balance
import React from 'react'

const Balance = (prop) => {
  return (
    <div className='Bal'>
      <div className='lo'>
      <div>Balance <span>&#8377;</span>{prop.sm}</div>
       <div className='Income'>
        <div className='sp gr'>
             <div className='lol'>Income</div>
             <div className='lol2'><span>&#8377;</span>+{prop.pos}</div> 
        </div>
        <div className='sp rd'>
            <div className='lol'>Expense</div>
             <div className='lol2'><span>&#8377;</span>{prop.nos}</div> 
        </div>
      </div> 
      </div>
    </div>
  )
}

export default Balance

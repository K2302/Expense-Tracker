import { useState } from 'react';
import './App.css';
import History from './Components/history';
import Balance from './Components/balance';
function App() {
  const [data, setdata] = useState();
  const [numb, setnumb] = useState();
  const [opt, setopt] = useState(0);//true means income false means expense
  const [arr, setarr] = useState([])//change the array
  const [sum, setSum] = useState(0);
  const [psum, setpsum] = useState(0);
  const [nsum, setnsum] = useState(0);
  const func = (e) => {
    setnumb(e.target.value)
    if (e.target.value >= 0) {
      setopt(1);
    } else {
      setopt(0);
    }
  }
   const Sum = ()=>{
    let kk =0;
    let ps =0;
    let ns =0;
    for (let i = 0; i < arr.length; i++) {
      kk += parseFloat(arr[i].Amt);
      if(arr[i].Amt>0){
       ps += parseFloat(arr[i].Amt);
      }else{
       ns += parseFloat(arr[i].Amt);
      }
   }
    setpsum(ps);
    setnsum(ns);
    setSum(kk);
   }
  const Cll = (e)=>{
    if(data===' ' && numb===''){
      alert("give the info about this task")
    }
    else if(numb===''){
      alert("please provide amount")
    }else if(data===' '){
      alert("Please provide task detail")
    }
    else{
      let obj ={
        data:data,
        Amt:numb,
        opt:opt,
      }
      const b = [obj, ...arr];//creating an array (prevarray+obj)
      b.map((e,index)=>{
         return e.id = index;//we are also storing the index now;
      })

     setarr(b);
     let kk =0;
     let ps =0;
     let ns =0;
     for (let i = 0; i < b.length; i++) {
       kk += parseFloat(b[i].Amt);
       if(b[i].Amt>0){
        ps += parseFloat(b[i].Amt);
       }else{
        ns += parseFloat(b[i].Amt);
       }
    }
     setpsum(ps);
     setnsum(ns);
     setSum(kk);
     setdata('');
     setnumb('')
    }
  }
  return (
    <div className="App">

<div className='root'>
<section className="wrapper">
  <div class="top">Expense Tracker</div>
  <div class="bottom" aria-hidden="true">Expense Tracker</div>
</section>
</div>
    
      <div className='col'>
        <div>
          <Balance sm={sum} pos={psum} nos={nsum}></Balance>
          <div className='New_tran'>
            <h2 id="tr">New Transaction</h2>
            <input type="text" placeholder='Enter Expense details' className='input' value={data} onChange={(e) => { setdata(e.target.value) }}></input>
            <input type="number" placeholder='Enter Amount(-ve for expense & +ve for income)' className='input' value={numb} onChange={func}></input>
            <button type='submit' className='button-81' onClick={Cll}>ADD TRANSACTION</button>
            <button type='submit' className='button-81' onClick= 
             {Sum}>UPDATE BALANCE</button>
          </div>
        </div>
        <History arr={arr} setarr={setarr}></History>
      </div>
    </div>
  );
}

export default App;

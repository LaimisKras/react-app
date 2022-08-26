import './PVM.css';
import React, { useState } from 'react';
import { ToWords } from 'to-words';


const PVM = () => {

  const [count, setCount] = useState(0);
  const [pvm, setPvm] = useState('21');
  let sum = count;
  let pvmSum = ((count / 100) * pvm).toFixed(2);
  let totalSum = ((count / 100) * pvm + count).toFixed(2);

  const toWords = new ToWords();
  let words = toWords.convert(totalSum);

  const deleteSum = (event) => {
    event.preventDefault ();
    if (!sum === '') {
      return
    }

    setCount(0);

  }

  return (
    <div className="container">
      <div className="PVM">
        <div className="header">
          <h2>VAT CALCULATOR</h2>
        </div>
        <div className="box">
          <form className="form">
          <label className="form-label name"> VAT rate </label>
            <select className="form-select" id="specificSizeSelect" onChange={(e) => setPvm(+e.target.value)}>
              <option value= {21}>21%</option>
              <option value= {9}>9%</option>
              <option value= {5}>5%</option>
            </select>
            <label className="form-label"> Amount (excluding VAT) </label>
            <input type="text" className="form-control" id="formGroupExampleInput" value={sum} onChange={(e) => setCount (+e.target.value)}></input>

            <label className="form-label"> VAT amount </label>
            <input type="text" className="form-control" id="formGroupExampleInput" value={pvmSum} readOnly></input>
            
            <label className="form-label"> Total amount (incl. VAT) </label>
            <input type="text" className="form-control" id="formGroupExampleInput" value={totalSum} readOnly></input>
            
            <label className="form-label"><br/> Total in words: <strong> {words} </strong>  </label> <br/>

            <button className="btn btn-dark btn-sm" onClick={deleteSum}>
              Delete
            </button>
                  
          </form>        
        </div>
      </div>
    </div>
  );
}

export default PVM;
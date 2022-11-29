import React from "react";
import { MdSend } from "react-icons/md";

const Form = ({ charge, amount, handleSubmit, handleCharge, handleAmount }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            onChange={handleCharge}
            value={charge}/>
        </div>

        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            onChange={handleAmount}
            value={amount}/>
        </div>
      </div>
      <button type="submit" className="btn">
        submit
        <MdSend className="btn-icon"/>
      </button>
    </form>
  );
};

export default Form;

import React from "react";
import styles from '../styles/Home.module.scss';
import { useDispatch, useSelector } from "react-redux";


import {
  setFirstName,
  setErrorMsg,
  setMonthlyIncome,
} from '../store/slices/appSlice'
function HomePage() {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });


  const firstName = useSelector((state) => state.appSlice.firstName)

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div>
        <span>Welcome </span>
        <span>{firstName}</span>
        </div>
        
        <div>
          <span>Set up your income and monthly budget for</span>
          <span>{currentMonth}</span>
        </div>


        <div>
          <span>Income <input type="number"  min="1" step="any" /></span>
          <button
            onClick={() => {
              dispatch(setMonthlyIncome)
            }}
          >Add income</button>
        </div>

        <div>
          <p>Expenses</p>
        </div>
     
      </div>
    </React.Fragment>
   
  )

}

export default HomePage;
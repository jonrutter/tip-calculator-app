import React, { useState, useEffect } from 'react';

// styles
import s from './ResultSection.module.css';

// takes a number, returns it in dollar format
const formatValue = (value) => {
  console.log(value);
  return value.toFixed(2);
};

const ResultSection = ({
  bill: rawBill,
  tip: rawTip,
  split: rawSplit,
  resetForm,
}) => {
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const [grandTotal, setGrandTotal] = useState('0.00');
  const [cannotReset, setCannotReset] = useState(true);

  // sets the result fields to default of '0.00', when there is an error, or the result would be 'NaN' or 'Infinity'
  const setDefaultFields = () => {
    setTipAmount('0.00');
    setTotal('0.00');
    setGrandTotal('0.00');
  };

  // calculating the totals
  useEffect(() => {
    // checking whether the user can click the reset button
    if (rawBill || rawSplit) {
      setCannotReset(false);
    } else {
      setCannotReset(true);
    }

    // checking whether the form is empty
    if (
      !rawTip ||
      !rawBill ||
      !rawSplit ||
      rawTip === '0' ||
      rawBill === '0' ||
      rawSplit === '0'
    ) {
      setDefaultFields();
      return;
    }

    // converting arguments to numbers
    const bill = parseFloat(rawBill);
    const tip = parseFloat(rawTip);
    const split = parseFloat(rawSplit);

    // calculating the values
    const workingTipAmount = (bill * tip) / split;
    const workingTotal = bill / split + workingTipAmount;
    const workingGrandTotal = workingTotal * split;

    // checking for errors
    if (
      Number.isNaN(workingTipAmount) ||
      Number.isNaN(workingTotal) ||
      Number.isNaN(workingGrandTotal)
    ) {
      setDefaultFields();
    } else {
      // if no errors, update the state with the formatted values
      setTipAmount(formatValue(workingTipAmount));
      setTotal(formatValue(workingTotal));
      setGrandTotal(formatValue(workingGrandTotal));
    }
  }, [rawBill, rawTip, rawSplit]);

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Tip Amount</h2>
            <p className={s.subtitle}>/ person</p>
          </div>
          <div className={s.col}>
            <span className={s.price}>${tipAmount}</span>
          </div>
        </section>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Total</h2>
            <p className={s.subtitle}>/ person</p>
          </div>
          <div className={s.col}>
            <span className={s.price}>${total}</span>
          </div>
        </section>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Grand Total</h2>
          </div>
          <div className={s.col}>
            <span className={s.price}>${grandTotal}</span>
          </div>
        </section>

        <button
          onClick={resetForm}
          className={cannotReset ? `${s.resetBtn} ${s.disabled}` : s.resetBtn}
          disabled={cannotReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ResultSection;

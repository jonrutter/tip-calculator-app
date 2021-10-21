export const initialState = {
  bill: 0,
  tip: 0.2,
  split: 1,
  personTip: '0.00',
  personTotal: '0.00',
  grandTotal: '0.00',
  canReset: false,
};

const formatPrice = (value) =>
  value === 0
    ? '0.00'
    : (Math.ceil((value + Number.EPSILON) * 100) / 100)
        .toFixed(2)
        .toString()
        .padStart(2, '0');

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BILL':
      const newBill = parseFloat(action.payload);
      return { ...state, bill: newBill, canReset: true };
    case 'UPDATE_TIP':
      const newTip = parseFloat(action.payload);
      return { ...state, tip: newTip, canReset: true };
    case 'UPDATE_SPLIT':
      const newSplit = parseFloat(action.payload);
      return { ...state, split: newSplit, canReset: true };
    case 'CALCULATE_TOTAL':
      const tempTip = (state.bill * state.tip) / state.split;
      const tempTotal = state.bill / state.split + tempTip;
      const tempGrandTotal = tempTotal * state.split;

      return {
        ...state,
        personTip: formatPrice(tempTip),
        personTotal: formatPrice(tempTotal),
        grandTotal: formatPrice(tempGrandTotal),
      };
    case 'RESET_FORM':
      return initialState;
    default:
      throw new Error('Reducer: unknown action type');
  }
};

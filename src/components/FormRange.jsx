/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { formatPrice } from '../util';
const FormRange = ({ label, name, price, isReset, setIsReset }) => {
  const step = 1000;
  const maxPrice = 100000;
  console.log(price, maxPrice);
  // const [selectedPrice, setSelectedPrice] = useState(
  //   price !== undefined ? price : maxPrice
  // );
  const [value, setValue] = useState(price || maxPrice);
  useEffect(() => {
    if (isReset) {
      setValue(maxPrice);
    }
  }, [isReset]);
  const onChangeHandler = (e) => {
    if (isReset) {
      setIsReset(false);
    }
    setValue(e.target.value);
  };
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(value)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={value}
        onChange={onChangeHandler}
        className={`range range-primary range-sm`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
export default FormRange;

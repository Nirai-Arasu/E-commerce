import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */

const FormInput = ({
  label,
  type,
  name,
  defaultValue,
  size,
  isReset,
  setIsReset,
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    if (isReset) {
      setValue('');
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
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <input
        className={`input input-bordered ${size}`}
        type={type}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default FormInput;

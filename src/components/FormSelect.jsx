import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
useEffect;
const FormSelect = ({
  label,
  name,
  list,
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
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        value={value}
        onChange={onChangeHandler}
        defaultValue={defaultValue}>
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;

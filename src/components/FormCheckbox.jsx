/* eslint-disable react/prop-types */

import { useState } from 'react';

const FormCheckbox = ({ name, label, defaultValue }) => {
  const [isFreeShipping, setIsFreeShipping] = useState(defaultValue);
  return (
    <label htmlFor={name} className="label form-control cursor-pointer">
      <span className="label-text mb-2">{label}</span>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="checkbox checkbox-primary checkbox-sm"
        checked={isFreeShipping}
        onChange={() => setIsFreeShipping(!isFreeShipping)}
      />
    </label>
  );
};

export default FormCheckbox;

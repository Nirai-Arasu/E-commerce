/* eslint-disable react/prop-types */

const FormCheckbox = ({ name, label, defaultValue }) => {
  console.log(defaultValue, 'nirai');
  return (
    <label htmlFor={name} className="label form-control cursor-pointer">
      <span className="label-text mb-2">{label}</span>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="checkbox checkbox-primary checkbox-sm"
        defaultChecked={defaultValue}
      />
    </label>
  );
};

export default FormCheckbox;

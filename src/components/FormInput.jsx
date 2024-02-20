/* eslint-disable react/prop-types */
const FormInput = ({ label, type, name, defaultValue, size }) => {
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
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;

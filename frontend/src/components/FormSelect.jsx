import "../styles/components/FormInput.css"; 

function FormSelect({ label, name, value, onChange, options, required }) {
  return (
    <div className="form-input">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="custom-select"
      >
        <option value="">Seleccione una opción</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;

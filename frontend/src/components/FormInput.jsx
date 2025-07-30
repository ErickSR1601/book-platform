import "../styles/components/FormInput.css";

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  autoComplete = "off",
  error = "",
  disabled = false,
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className={error ? "input-error" : ""}
      />

      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default FormInput;

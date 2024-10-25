function CustomInputField({
  type = "text",
  placeholder = "",
  name,
  value,
  onChange = () => {},
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}
export default CustomInputField;

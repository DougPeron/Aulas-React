function CheckboxInput({
  labelDecription = "Descrição do Checkbox",
  inputValue = "Valor do input",
  onCheckboxChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }
  return (
    <div className="flex flex-row items-center my-4">
      <input
        autoFocus
        id="inputName"
        className="border p-1 m-2"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />
      <label className="text-sm mb-1" htmlFor="inputName">
        {labelDecription}
      </label>
    </div>
  );
}

export default CheckboxInput;

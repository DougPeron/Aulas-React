function DateInput({
  labelDecription = "Descrição do label",
  inputValue = "2022-01-01",
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newDate = currentTarget.value;
      onInputChange(newDate);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor="inputName">
        {labelDecription}
      </label>
      <input
        autoFocus
        id="inputName"
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default DateInput;

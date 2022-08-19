import { allInformation } from "../data/allInformation";
function TextInput({
  labelDecription = "Descrição do label",
  inputValue = "Valor do input",
  onInputChange = null,
  autoFocus = true,
}) {
  function handlerCountrie({ currentTarget }) {
    if (onInputChange) {
      const newName = currentTarget.value;
      onInputChange(newName);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor="inputName">
        {labelDecription}
      </label>
      <select
        autoFocus
        id="inputName"
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handlerCountrie}
      >
        {allInformation.cities.map((city) => {
          return <option>{city.name}</option>;
        })}
      </select>
    </div>
  );
}

export default TextInput;

import { allInformation } from "../data/allInformation";
function TextInput({
  id = null,
  labelDecription = "Descrição do label",
  inputValue = "Valor do input",
  onInputChange = null,
  autoFocus = true,
}) {
  function handlerCityChanges({ currentTarget }) {
    if (onInputChange) {
      const newCity = currentTarget.value;
      onInputChange(newCity);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor="inputName">
        {labelDecription}
      </label>
      <select
        id={handlerCityChanges}
        autoFocus
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handlerCityChanges}
      >
        {allInformation.cities.map((city) => {
          return <option id={city.id}>{city.name}</option>;
        })}
      </select>
    </div>
  );
}

export default TextInput;

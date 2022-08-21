function Button({
  children: description = "botão",
  onButtonClick = null,
  id = null,
  value = "city",
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick(id, value);
    }
  }
  return (
    <button>
      <button
        className="bg-yellow-300 p-2 m-1 rounded-md shadow-md hover:bg-yellow-400"
        onClick={handleButtonClick}
      >
        {description}
      </button>
    </button>
  );
}

export default Button;

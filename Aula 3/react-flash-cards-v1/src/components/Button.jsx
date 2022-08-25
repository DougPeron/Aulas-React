export default function Button({
  children: description = "Descrição do botão",
  onButtonClick = null,
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button
      className="bg-blue-200 p-2 m-1 rounded-md shadow-md hover:bg-blue-400"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
}

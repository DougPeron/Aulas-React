import { useState } from "react";

function Flashcard({
  title = "Titulo card",
  description = "Descrição do card",
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  function handleCardClick() {
    // setShowTitle(!showTitle);
    setShowTitle(currentShowTitle => !currentShowTitle);
  }
  const fontSizeClassName = showTitle ? "text-xl" : "text-sm";

  function handleCardClick() {
    //setShowTitle(!showTitle);
    setShowTitle((currentShowTitle) => !currentShowTitle);
  }
  return (
    <div
      className={`bg-blue-50 shadow-lg p-4 w-64 h-32 flex flex-row cursor-pointer m-2 items-center justify-center font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}

export default Flashcard;

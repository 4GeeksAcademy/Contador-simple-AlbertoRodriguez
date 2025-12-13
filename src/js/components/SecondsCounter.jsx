const SecondsCounter = () => {
  const digits = [0, 0, 0, 0, 0, 4];

  const containerStyle = {
    display: "flex",
    gap: "8px",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  };

  const digitBoxStyle = {
    backgroundColor: "#222",
    color: "white",
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "2rem",
    width: "40px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    userSelect: "none",
  };

  const iconBoxStyle = {
    backgroundColor: "#222",
    width: "40px",
    height: "60px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={iconBoxStyle} aria-label="Reloj">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm.5-12h-1v6l5.25 3.15.5-.86-4.75-2.79Z" />
        </svg>
      </div>
      {digits.map((digit, index) => (
        <div key={index} style={digitBoxStyle}>
          {digit}
        </div>
      ))}
    </div>
  )
}

export default SecondsCounter;
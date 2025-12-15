const SecondsCounter = ({ digits }) => {      //El componete que dicen las instruciones que creemos
  

  const containerStyle = {
    display: "flex",          //Las propiedades de las cartitas
    gap: "8px",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  };

  const digitBoxStyle = {                       //Los estilos de las cartas de los digitos
    backgroundColor: "#222",
    color: "white",
    fontFamily: "'Courier New', Courier, monospace",   
    fontSize: "2rem",
    width: "60px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    userSelect: "none",
  };

  const iconBoxStyle = {                  //Los estilos de la carta del reloj
    backgroundColor: "#222",
    width: "60px",
    height: "100px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  return (
     
    <div style={containerStyle}>
      <div style={iconBoxStyle} aria-label="Reloj">
        <svg                                //Esta tab es para dibujar el reloj,se usa para dibujar gráficos vectoriales
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm.5-12h-1v6l5.25 3.15.5-.86-4.75-2.79Z" />
        </svg>
      </div>
      {
      digits.map((digit, index) => (
        <div key={index} style={digitBoxStyle}>
          {digit}
          
        </div>
      ))}
    </div>
  )
}

export default SecondsCounter;      //Finalizado
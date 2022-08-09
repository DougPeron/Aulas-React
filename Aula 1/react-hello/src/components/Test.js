function Test(props) {
  console.log(props);
  return <div>Teste</div>;
}

export default Test;

// exemplo de uso de props

/* <Test
        number={31}
        string="Teste"
        visible
        data={{ a: 1, b: 2 }}
        onClick={() => {
          console.log("click");
        }}
      ></Test> */

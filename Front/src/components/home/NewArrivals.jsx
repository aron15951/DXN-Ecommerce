import styled from "styled-components";
import Card from "../home/ui/Card";

export default function NewArrivals() {
  return (
    <Cards>
      <h2>New Arrivals</h2>
      <ContainerArrivals>
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerArrivals>;
      <button>View All</button>
    </Cards>
  );
}

const ContainerArrivals = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1500px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  border: 1px solid transparent;

  h2 {
    margin-top: 3rem;
    font-family: "IntegralCF";
  }

  button {
    font-family: "Satoshi";
    font-size: 16px;
    margin-bottom: 3rem;
    padding: 1rem 4rem;
    background-color: #ffffff;
    color:  #000000;
    border: solid 1px #E4E4E4;
    border-radius: 5rem;
    cursor: pointer;
  }
`


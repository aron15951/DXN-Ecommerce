import styled from "styled-components";
import tshirt from "../../../assets/images/shirt.png"

export default function Card() {
  return (
    <CardContainer>
      <img src={tshirt} alt='' />
      <h3>T-shirt with Tape Details</h3>
      <div>
        <span>★★★★☆</span> {/* Example: 4 out of 5 stars */}
      </div>
      <p>$99.99</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 400px;
  width: 300px;

  h3 {
    font-family: "Satoshi";
    font-size: 20px;
    margin-top: 10px;
  }

  span {
    font-family: "Satoshi";
    font-size: 25px;
    color: #FCC535;
    margin-top: 5px;
  }

  p {
    font-family: "Satoshi";
    font-size: 24px;
    font-weight: 700;
  }
`;

import styled from "styled-components";
import brand1 from "../../assets/images/versace.png";
import brand2 from "../../assets/images/zara.png";
import brand3 from "../../assets/images/gucci.png";
import brand4 from "../../assets/images/prada.png";
import brand5 from "../../assets/images/calvinclain.png";

export default function BrandList() {
  return (
    <BrandContainer>
      <div>
        <img src={brand1} alt='brand1' />
      </div>
      <div>
        <img src={brand2} alt='brand1' />
      </div>
      <div>
        <img src={brand3} alt='brand1' />
      </div>
      <div>
        <img src={brand4} alt='brand1' />
      </div>
      <div>
        <img src={brand5} alt='brand1' />
      </div>
    </BrandContainer>
  );
}

const BrandContainer = styled.div`
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 122px;
  background-color: #000000;
  gap: 60px;
  border: 1px solid red;
`;

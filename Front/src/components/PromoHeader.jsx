import styled from "styled-components";



export default function PromoHeader() {
  return (
    <StyledHeader>
      <h2>Sign up and get 20% off to your first order. Sign Up Now</h2>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
    background-color: #000000;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Satoshi';
    font-size: 8px;
`;



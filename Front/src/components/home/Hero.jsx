import styled from "styled-components";
import heroImg from "../../assets/images/heroImg.png";

export default function Hero() {
  return (
    <HeroContainer>
      <div>
        <section>
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button type='button'>Shop Now</button>
        </section>
        <InfoContainer>
          <div>
            <h3>200+</h3>
            <p>International Brands</p>
          </div>
          <div>
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </InfoContainer>
      </div>
      <div>
        <img src={heroImg} alt='hero-img' />
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0 auto;
  height: 80vh;
  background-color: #f0eeef;
  gap: 60px;

  section {
    max-width: 700px;
  }

  h2 {
    font-size: 64px;
    font-family: "IntegralCF";
    margin-bottom: 1rem;
  }
  p {
    font-size: 16px;
    font-family: "Satoshi";
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    padding: 10px 50px;
    background-color: #000000;
    color: #ffffff;
    font-family: "Satoshi";
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  h3 {
    font-size: 40px;
    font-family:'Satoshi';}
`;


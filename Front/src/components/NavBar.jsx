import styled from "styled-components";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

// Componente de barra de navegación
export default function NavBar() {
  return (
    <Container>
      <ContainerIcon>
        <h1 className="text__icon">SHOP.CO</h1>
      </ContainerIcon>
      <NavList>
        <li>
          <NavItem href="#">Shop</NavItem>
        </li>
        <li>
          <NavItem href="#">On Sale</NavItem>
        </li>
        <li>
          <NavItem href="#">New Arrivals</NavItem>
        </li>
        <li>
          <NavItem href="#">Brands</NavItem>
        </li>
      </NavList>
      <SearchForm>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <input type="text" placeholder="Search" />
      </SearchForm>
      <Icons>
        <FiShoppingCart size={20} />
        <FaRegCircleUser size={20} />
      </Icons>
    </Container>
  );
};

// Estilos de los componentes
const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 4rem;
`;

const ContainerIcon = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 3rem;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`;

const NavItem = styled.a`
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-family: "satoshi", sans-serif;
  font-size: 16px;

  &:hover {
    color: #666;
  }
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 20rem;
    padding: 0.5rem 2rem; 
    border: 1px solid #ccc;
    border-radius: 1rem;
    margin-right: 0.5rem;
    font-family: "satoshi", sans-serif;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #666;
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  svg {
    color: #333;
    &:hover {
      color: #666;
    }
  }
`;


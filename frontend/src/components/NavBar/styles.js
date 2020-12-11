import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 64px;
  position: fixed;
  background-color: rgba(255, 252, 240, 0.95);  
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`; 

export const Container = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1300px;
`;

export const Logo = styled.div`
  font-family: 'Amita', cursive;
  color: #372623;
  font-size: 28px;
  line-height: 64px;
  text-decoration: none;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.a`
  color: #372623;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;

  margin: 8px;
  padding: 16px;

  :hover {
    color: #7B4608
  }
`;
import styled from 'styled-components';

export const Container =  styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px;

  /* :not(:first-of-type) {
    margin-top: 32px;
  } */
`;

export const Title = styled.h2`
  color: #372623;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  text-align: center;
  margin: 8px 0;
`;

export const Subtitle = styled.p`
  color: #372623;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  background: #372623;
  font-family: 'Roboto';
  height: 56px;
  border: 0;
  border-radius: 5px;
  margin: 40px auto 24px auto;
  display: block;
  width: 200px;
  cursor: pointer;
  will-change: background;
  transition: background 0.3s ease;
  
  :hover {
    background: #4B3B38;
  }
`;


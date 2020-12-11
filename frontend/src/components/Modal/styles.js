import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    background: #00000000;
  }

  to: {
    opacity: rgba(0, 0, 0, 0.6);
  }
`;

const slideDown = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to: {
    transform: scale(1);
    opacity: 1;
  }
`;


export const Overlay = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 20000;
  justify-content: center;
  align-items: center;
  display: ${props => (props.show ? 'flex' : 'none')};

  animation: ${fadeIn} 0.5s linear;
`;

export const Modal = styled.form`
  width: 500px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  padding: 24px 32px;
  position: relative;
  top: -0px;

  animation: ${slideDown} 1s cubic-bezier(0.67, 0.03, 0.53, 1.24);

  @media (min-width: 320px) and (max-width: 768px){
    height: auto;
    min-height: 250px;
    width: 90%;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  height: 46px;
  margin-bottom: 15px;
  padding: 12px 20px;
  color: #777;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;

  &::placeholder {
    color: #999;
  }
`;

export const Body = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #212121;
`;

export const ButtonsLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  position: absolute;
  right: 32px;
  bottom: 24px;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  background: #372623;
  font-family: 'Roboto';
  height: 56px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  will-change: background;
  transition: background 0.3s ease;
  
  :hover {
    background: #4B3B38;
  }
`;

export const ButtonWhite = styled.button`
  color: #372623;
  font-size: 16px;
  background: #fff;
  font-family: 'Roboto';
  height: 56px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  will-change: background;
  transition: background 0.3s ease;
  
  :hover {
    background: #eee;
  }
`;

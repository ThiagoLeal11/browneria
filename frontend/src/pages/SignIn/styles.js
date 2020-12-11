import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Logo = styled.div`
  font-family: 'Amita', cursive;
  color: #372623;
  font-size: 28px;
  line-height: 64px;
`;

export const Form = styled.form`
  width: 400px;
  background: #FFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;

  img {
    width: 100px;
    margin: 10px 0 40px;
  }

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  input {
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
  }

  button {
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
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #C3BCB3;
    width: 100%;
  }

  a {
    font-size: 16;
    font-family: 'Roboto';
    padding: 8px;
    color: #372623;
    text-decoration: none;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 64px auto 0 auto;
`;

export const Item = styled.div`
   position: relative;
   border-radius: 8px;
   cursor: pointer;
`;

export const Close = styled.div`
  background-color: red;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  top: -4px;
  right: -4px;
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 75%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
`;

export const Title = styled.h4`
  color: #372623;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 0px;

  will-change: margin;
  transition: margin 0.3s ease;

  ${Item}:hover & {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
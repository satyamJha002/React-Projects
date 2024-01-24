import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #00a8ff;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  min-width: 220px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #00a8ff;
    transition: all 0.3s ease-in-out;
    background-color: #00a8ff;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
  }
`;

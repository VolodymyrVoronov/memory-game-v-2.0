import styled from "styled-components";

interface ButtonContainerProps {
  mt?: number;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;

  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "100px")};

  padding: 15px 50px;

  font-size: 44px;
  line-height: 48px;
  font-family: inherit;
  text-shadow: 5px 5px #000000;

  color: #ffffff;

  box-shadow: -10px 0 0 0 #433f40, 10px 0 0 0 #433f40, 0 -10px 0 0 #433f40,
    0 10px 0 0 #433f40;

  background: #f5a81d;

  border: none;
  outline: none;

  transition: 0.25s ease;

  &:hover {
    cursor: pointer;

    background: #e59400;

    transition: 0.25s ease;

    transform: translateY(-5px);
  }
`;

export { ButtonContainer };

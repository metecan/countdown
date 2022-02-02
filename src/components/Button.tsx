import React from 'react';
import styled from 'styled-components';

type ColorType = 'primary' | 'secondary';

interface ButtonProps {
  onClick: () => void;
  label: string;
  color?: ColorType;
  disabled?: boolean;
}

const StyledButton = styled.button<{ color: ColorType; disabled?: boolean }>`
  padding: 10px 20px;
  border: none;
  font-size: 1.2rem;
  border-radius: 4px;
  color: #f4f4f4;
  background: transparent;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  border: 4px solid ${({ color }) => (color === 'primary' ? '#205530' : '#3b3b3b')};
  cursor: ${({ disabled }) => (disabled === true ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled === true ? '0.3' : '1')};

  &:hover {
    background: ${({ color, disabled }) => (color === 'primary' ? '#205530' : '#3b3b3b')};
    color: #f4f4f4;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'primary', disabled }) => {
  return (
    <StyledButton onClick={onClick} color={color} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;

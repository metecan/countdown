import React from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  minValue?: string;
  maxValue?: string;
  width?: string;
}

const StyledInput = styled.input<{ width?: string }>`
  border: none;
  background: transparent;
  border-bottom: 4px solid #205530;
  border-radius: 4px;
  color: white;
  width: ${({ width }) => width};
  padding: 0 16px;
  font-size: 2.4rem;
  margin-bottom: 10px;
  outline: none;
`;

const Input: React.FC<InputProps> = ({ value, setValue, placeholder, type, minValue, maxValue, width = '80px' }) => {
  const symbolsArr = ['e', 'E', '+', '-', '.'];

  const checkValueLimits = (value: string) => {
    if (Number(value) >= Number(minValue) && Number(value) <= Number(maxValue)) {
      if (value.length > 2) return value.substring(1);
      if (value.length === 1) return '0' + value;
      if (Number(value) > Number(maxValue)) return maxValue;
    } else {
      return minValue;
    }
    return '00';
  };

  return (
    <StyledInput
      width={width}
      value={checkValueLimits(value)}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
      type={type}
      min={minValue}
      max={maxValue}
      onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
    />
  );
};

export default Input;

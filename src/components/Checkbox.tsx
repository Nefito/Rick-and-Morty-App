import React from 'react';

import { styled } from 'theme';

type CheckboxProps = {
  checked: boolean;
};

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckboxWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  border-color: white;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? ({ theme }) => theme.colors.secondary : ({ theme }) => theme.colors.main};
  border-radius: 3px;
  transition: all 150ms;
  
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }

  &:hover {
    cursor: pointer;
  }
`;

interface ICheckbox {
  outerClassName?: string;
  innerClassName?: string;
  checked: boolean;
  onChange: any;
  labelText: string;
}

export const Checkbox: React.FC<ICheckbox> = ({ outerClassName, innerClassName, checked, onChange, labelText }) => (
  <CheckboxWrapper className={outerClassName}>
    <label>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} className={innerClassName}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <span>{labelText}</span>
    </label>
  </CheckboxWrapper>
);

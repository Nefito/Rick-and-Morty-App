import React from 'react';

import { styled } from 'theme';

export const CardBodyItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;

  .card-text-gray {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

interface ICardBodyItem {
  value: string;
  title: string;
  className?: string;
}

export const CardBodyItem: React.FC<ICardBodyItem> = (props) => {
  const { value, title, className } = props;

  return (
    <CardBodyItemWrapper className={className}>
      <span className="card-text-gray">{title}</span>
      <span>{value}</span>
    </CardBodyItemWrapper>
  );
};

import Pagination from 'rc-pagination';
import React from 'react';

import { styled } from 'theme';

import { arrowPath, doublePath } from 'commonUtil/svgs';

export const Pages = styled(Pagination)`
  position: relative;
  margin-top: auto;
  list-style-type: none;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.text};

  text-align: center;

  .rc-pagination-item-active {
    a {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  li {
    position: relative;
    display: inline;
    margin: 0 30px;//adjust styles !!!!
    top: 6px;
    bottom: 10px;

    text-align: center;
    a {
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 8px;
      padding: 4px;

      &:hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
      } 
    }

    button {
      display: inline;
      position: static;
      padding: 5px;
    }
  }
`;

const getSvgIcon = (path: any, reverse: any, type: any) => {
  const paths = Array.isArray(path) ? path : [path];
  const renderPaths = paths.map((p, i) => {
    return <path key={i} d={p} />;
  });
  return (
    <i
      className={`custom-icon-${type}`}
      style={{
        fontSize: '16px',
      }}
    >
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: '-.125em',
          transform: `rotate(${(reverse && 180) || 0}deg)`,
        }}
      >
        {renderPaths}
      </svg>
    </i>
  );
};

const nextIcon = getSvgIcon(arrowPath, false, 'next');
const prevIcon = getSvgIcon(arrowPath, true, 'prev');
const jumpNextIcon = () => getSvgIcon(doublePath, false, 'jump-next');
const jumpPrevIcon = () => getSvgIcon(doublePath, true, 'jump-prev');

export const iconsProps = { prevIcon, nextIcon, jumpPrevIcon, jumpNextIcon };

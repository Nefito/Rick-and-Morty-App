import React from 'react';
import { QueryStatus } from 'react-query';

export const errorOrLoadingStatusMsg = (status: QueryStatus) => {
  switch (status) {
    case QueryStatus.Loading:
      return <span>Loading...</span>;

    case QueryStatus.Error:
      return <span>Some error has ocurred</span>;

    default:
      return null;
  }
};

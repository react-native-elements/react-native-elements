import React from 'react';
import { Header } from '../../components/header';
import ListContent from './content';

type ListComponentProps = {};

const Lists: React.FunctionComponent<ListComponentProps> = () => {
  return (
    <>
      <Header title="Lists" view="listitem" />
      <ListContent />
    </>
  );
};

export default Lists;

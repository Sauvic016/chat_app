import React from 'react';
import { Button, Drawer, Icon } from 'rsuite';
import DashBoard from '.';
import { useModalState } from '../../misc/custom-hooks';

const DashBoardToggle = () => {
  const { isOpen, close, open } = useModalState();
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> DashBoard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <DashBoard />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;

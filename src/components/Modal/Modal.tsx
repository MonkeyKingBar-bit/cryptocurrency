import React from 'react';
import { commonActions } from '../../store/reducers/common';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalProps } from '../../models/interface_type';

const Modal : React.FC<ModalProps> = (props: ModalProps) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const modalSelector = useAppSelector((state) => state.common.isModalActive);

  return (
    <div className={modalSelector ? 'modal active' : 'modal'} onClick={() => dispatch(commonActions.setModalActive())} aria-hidden="true">
      <div className={modalSelector ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default Modal;

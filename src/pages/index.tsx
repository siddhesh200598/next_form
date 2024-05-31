import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@/components/button/button';
import Modal from '@/components/modal/modal';
import Form from '@/components/form/form';
import Table from '@/components/table/table';
import { openModal, closeModal } from '../store/slices/modalSlice';
import { updateDataObject } from "../store/slices/formSlice";
import { RootState } from '../store/index'

export default function Home() {
  const dispatch = useDispatch();

  const modalBehaviour = useSelector((state: RootState) => {
    return state.modalAction;
  });

  const formData = useSelector((state: RootState) => {
    return state.formData;
  });

  const onClickToOpenModal = () => {
    if (modalBehaviour) {
      dispatch(closeModal(!modalBehaviour));
    } else {
      dispatch(openModal(modalBehaviour));
    }
  };

  const deleteTable = (e: Event): void => {
    e.preventDefault();
    dispatch(updateDataObject((e.target as HTMLElement).dataset.indexNumber));
  };

  const editTable = (e: Event): void => {
    e.preventDefault();
    localStorage.setItem("index", (e.target as HTMLElement).dataset.indexNumber || '');
    dispatch(openModal(true));
  };

  const index = typeof window !== "undefined" && localStorage.getItem("index") ? parseInt(localStorage.getItem("index") as string) as Number : '';

  return (
    <main
      className={`flex h-screen flex-col items-center pt-20 pb-20 pl-10 pr-10`}
    >
      <Button onclickBtn={onClickToOpenModal} />
      {modalBehaviour &&
        <Modal>
          <Form firstName={formData[index as number]?.firstName} lastName={formData[index as number]?.lastName} mobileNumber={formData[index as number]?.mobileNumber} email={formData[index as number]?.email}/>
        </Modal>
      }
      <div className='mt-5 w-full'>
        <Table deleteTable={deleteTable as () => void} editTable={editTable as () => void} />
      </div>
    </main>
  );
}

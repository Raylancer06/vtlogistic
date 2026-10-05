'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import RequestVehicleModal from './RequestVehicleModal';
import FloatingWhatsApp from './FloatingWhatsApp';

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useRequestModal = () => useContext(ModalContext);

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <div className="min-h-screen flex flex-col justify-between relative">
        <Header onRequestVehicle={openModal} />
        <main className="flex-1 w-full">{children}</main>
        <Footer onRequestVehicle={openModal} />
        <RequestVehicleModal isOpen={modalOpen} onClose={closeModal} />
        <FloatingWhatsApp />
      </div>
    </ModalContext.Provider>
  );
}

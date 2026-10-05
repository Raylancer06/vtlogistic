'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import RequestVehicleModal from './RequestVehicleModal';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileBottomNav from './MobileBottomNav';

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
      <div className="min-h-screen flex flex-col justify-between relative pb-16 md:pb-0">
        <Header onRequestVehicle={openModal} />
        <main className="flex-1 w-full">{children}</main>
        <Footer onRequestVehicle={openModal} />
        <RequestVehicleModal isOpen={modalOpen} onClose={closeModal} />
        <FloatingWhatsApp />
        <MobileBottomNav onRequestVehicle={openModal} />
      </div>
    </ModalContext.Provider>
  );
}

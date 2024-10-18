"use client";

import React, { useCallback, useEffect, useState } from "react";

type ModalProps = {
  label: string;
  isOpen: boolean;
  close: () => void;
  content: React.ReactElement;
};

export const Modal = ({ isOpen, close, label, content }: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);

    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] h-auto my-6">
        <div
          className={`translate duration-700 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-10"
          }`}
        >
          <div className="w-full h-auto relative rounded-xl fllex flex-col bg-white">
            <header className="h-[60px] flex items-center justify-center p-6 rounded-t relative border-b">
              <button
                onClick={handleClose}
                className="p-3 absolute left-3 hover:bg-gray-300 rounded-full"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-lg font-bold">{label}</h2>
            </header>

            <section className="p-6">{content}</section>
          </div>
        </div>
      </div>
    </div>
  );
};

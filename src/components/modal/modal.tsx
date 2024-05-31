import React from 'react';

interface ModalProps {
    children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
    return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="bg-[rgba(0,0,0,0.4)] w-full flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {props.children}
            </div>
        </div>
    );
}
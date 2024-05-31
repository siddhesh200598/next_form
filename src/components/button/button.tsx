import React from 'react';

interface ButtonProps {
    onclickBtn: () => void;
}

export default function Button(props: ButtonProps) {
    const { onclickBtn } = props;

    return (
        <button type="button" onClick={onclickBtn} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add Details</button>
    );
}
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FormProps } from '../form/form';
import { RootState } from '../../store/index'

interface tableProps {
    editTable: () => void;
    deleteTable: () => void;
}

export default function Table(props: tableProps) {
    const dispatch = useDispatch();
    const { editTable, deleteTable } = props;
    const formDataList = useSelector((state: RootState) => {
        return state.formData;
    });

    const formListElement = (formDataList: FormProps[]): JSX.Element => {
        let formDataListEle =
            formDataList.map(
                (element: FormProps, index: number): JSX.Element => (
                    <>
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4">
                                {element.firstName}
                            </td>
                            <td className="px-6 py-4">
                                {element.lastName}
                            </td>
                            <td className="px-6 py-4">
                                {element.email}
                            </td>
                            <td className="px-6 py-4">
                                {element.mobileNumber}
                            </td>
                            <td className="px-6 py-4">
                                <p data-index-number={index} className="cursor-[pointer] font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={editTable}>Edit</p>
                            </td>
                            <td className="px-6 py-4">
                                <p data-index-number={index} className="cursor-[pointer] font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={deleteTable}>Delete</p>
                            </td>
                        </tr>
                    </>
                ),
            );

        return formDataListEle as unknown as JSX.Element;
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-[10px]">
            {formDataList.length > 0 && (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formListElement(formDataList ?? [])}
                    </tbody>
                </table>)
            }
        </div>
    );
}
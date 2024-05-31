import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { addDataObject, addNewDataObject } from '../../store/slices/formSlice';
import { closeModal } from '../../store/slices/modalSlice';

export interface FormProps {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
}

export default function Form(props: FormProps) {
    const dispatch = useDispatch();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormProps>();

    const onSubmit = (data: FormProps) => {
        if (Object.keys(data).length !== 0 && !(localStorage.getItem('index'))) {
            dispatch(addDataObject(data));
            dispatch(closeModal(false));
        }else{
            dispatch(addNewDataObject(data));
            dispatch(closeModal(false));
        }
    };

    useEffect(() => {
        setValue('firstName', props.firstName ?? '');
        setValue('lastName', props.lastName ?? '');
        setValue('mobileNumber', props.mobileNumber ?? '');
        setValue('email', props.email ?? '');
    }, [])

    return (
        <div className='w-full p-5 rounded-[7px] bg-white'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2 mt-5'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black dark:text-white">First name</label>
                    <input type="text" id="first_name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="First name" {...register("firstName", { required: true, maxLength: 40, min: 1 })} />
                    {errors.firstName && <p className="text-red-500">Please enter a first name</p>}
                </div>
                <div className='mb-2'>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black dark:text-white">Last name</label>
                    <input type="text" id="last_name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Last name" {...register("lastName", { required: true, maxLength: 40, min: 1 })} />
                    {errors.lastName && <p className="text-red-500">Please enter a last name</p>}
                </div>
                <div className='mb-2'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">Email</label>
                    <input type="text" id="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })} />
                    {errors.email && <p className="text-red-500">Please enter a valid email</p>}
                </div>
                <div className='mb-2'>
                    <label htmlFor="mobile_number" className="block mb-2 text-sm font-medium text-black dark:text-white">Mobile number</label>
                    <input type="tel" maxLength={10} id="mobile_number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]*$/i })} />
                    {errors.mobileNumber && <p className="text-red-500">Please enter a mobile number</p>}
                </div>
                <div className='mb-5 mt-5'>
                    <input type="submit" className='w-full border p-[9px] rounded-[10px] border-solid border-[black] bg-yellow-400' />
                </div>
            </form>
        </div>
    );
}
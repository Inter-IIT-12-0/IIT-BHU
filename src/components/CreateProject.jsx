import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Form1 = () => {
    const [progress, setProgress] = useState(33);

    const [formData, setFormData] = useState({
        title: '',
        from: '',
        to: '',
        description: '',
        industry: '',
        skills: '',
        files: [],
        location: 'Remote',
        workdays: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prevData) => ({
            ...prevData,
            files: files
        }));
    };


    const handleSubmit = (e) => {
        if (progress != 99) {
            setProgress(progress + 33);
        }
        else
            setProgress(0);
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can send the form data to your backend or perform other actions
    };

    const handleWorkdays = e => {
        if (e.target.value) {
            formData.workdays.push(e.target.name)
        }
    }

    return (
        <>
            {/* Modal toggle */}
            {/* <div className="flex justify-center m-5">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="block text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="button"
                >
                    Create product
                </button>
            </div> */}

            {/* Main modal */}
            <div
                tabIndex="-1"
                aria-hidden="true"
                className="inset-0 overflow-y-auto overflow-x-hidden flex items-center justify-center w-full"
            >

                <div className=" p-4 w-full">
                    {/* Modal content */}
                    <div className=" p-4 bg-white rounded-lg shadow sm:p-5 w-full">
                        {/* Modal header */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                            <h3 className="text-lg font-semibold text-sky-700">
                                Create a Project
                            </h3>
                            {/* <button
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-black"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button> */}

                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-sky-600 h-2.5 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className='justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5'>
                            <div
                                id="defaultModal"
                                tabIndex="-1"
                                aria-hidden="true"
                                className=" overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full"
                            >
                                <div className={classNames({ "hidden": progress !== 0 }, "relative p-4 w-full h-full md:h-auto")}>
                                    <div className="relative p-4 bg-indigo-100 rounded-lg shadow sm:p-5 w-full">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                                <div>
                                                    <label
                                                        htmlFor="title"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Project Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        value={formData.title}
                                                        name='title'
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="duration"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Expected Project Duration
                                                    </label>
                                                    <div className='flex items-center'>
                                                        <input
                                                            type="date"
                                                            id="duration"
                                                            name='from'
                                                            value={formData.from}
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        />
                                                        <span className='mx-3'>To</span>
                                                        <input
                                                            type="date"
                                                            value={formData.to}
                                                            name='to'
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label
                                                        htmlFor="description"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Brief Project Description
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        rows="4"
                                                        value={formData.description}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor='file'
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Upload Required Documents
                                                    </label>
                                                    <label htmlFor="file">
                                                        <div className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg  p-2.5 outline-none h-5/6 w-full flex justify-center items-center text-lg">
                                                            {formData.files.map((file, index) => (
                                                                <div key={index} >
                                                                    {file.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id='file'
                                                        name='files'
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                        required
                                                    />
                                                </div>
                                                <div className='flex flex-col justify-between'>
                                                    <div>
                                                        <label
                                                            htmlFor="industry"
                                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            Industry of Project
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="industry"
                                                            name='industry'
                                                            value={formData.industry}
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="skills"
                                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            Top Skills Required
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="skills"
                                                            name='skills'
                                                            value={formData.skills}
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-sky-500 px-4 py-2 rounded-xl text-white"
                                            >
                                                Next
                                            </button>
                                        </form>
                                    </div>
                                </div>



                                <div className={classNames({ "hidden": progress !== 33 }, "relative p-4 w-full h-full md:h-auto")}>
                                    <div className="relative p-4 bg-indigo-100 rounded-lg shadow sm:p-5 w-full">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                                <div className="sm:col-span-2">
                                                    <label
                                                        htmlFor="aiDescription"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        AI enhanced Project Description
                                                    </label>
                                                    <textarea
                                                        id="aiDescription"
                                                        name="aiDescription"
                                                        rows="4"
                                                        value={formData.aiDescription}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="paymentType"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Payment Type
                                                    </label>
                                                    <select name="paymentType" id="paymentType" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none" required>
                                                        <option value="fixed">Fixed</option>
                                                        <option value="installment">Installment</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="payment"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Total Payment
                                                    </label>
                                                    <div className='flex items-center'>
                                                        <input
                                                            type="number"
                                                            id="payment"
                                                            name='payment'
                                                            value={formData.payment}
                                                            onChange={handleInputChange}
                                                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor='location'
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Location
                                                    </label>
                                                    {/* <label htmlFor="file">
                                                        <div className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg  p-2.5 outline-none h-5/6 w-full flex justify-center items-center text-lg">
                                                            {formData.files.map((file, index) => (
                                                                <div key={index} >
                                                                    {file.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </label> */}
                                                    <input
                                                        type='text'
                                                        id='location'
                                                        name='location'
                                                        value={formData.location}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg  p-2.5 outline-none w-full flex justify-center items-center"
                                                        required
                                                    />
                                                </div>
                                                <div className='flex flex-col justify-between'>
                                                    <div>
                                                        <label
                                                            htmlFor="workDays"
                                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                                        >
                                                            Work days
                                                        </label>
                                                        <div id='workDays' className='flex items-center h-full'>
                                                            <input type="checkbox" id="monday" name="Mon" value={formData.workdays.includes("Mon")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="monday">Mon</label>

                                                            <input type="checkbox" id="tuesday" name="Tue" value={formData.workdays.includes("Tue")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="tuesday">Tue</label>

                                                            <input type="checkbox" id="wednesday" name="Wed" value={formData.workdays.includes("Wed")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="wednesday">Wed</label>

                                                            <input type="checkbox" id="thursday" name="Thur" value={formData.workdays.includes("Thur")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="thursday">Thur</label>

                                                            <input type="checkbox" id="friday" name="Fri" value={formData.workdays.includes("Fri")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="friday">Fri</label>
                                                            <input type="checkbox" id="friday" name="Sat" value={formData.workdays.includes("Sat")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="saturday">Sat</label>
                                                            <input type="checkbox" id="saturday" name="Sun" value={formData.workdays.includes("Sun")} onChange={handleWorkdays} className='mx-3' />
                                                            <label for="friday">Sun</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-sky-500 px-4 py-2 rounded-xl text-white"
                                            >
                                                Next
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className={classNames({ "hidden": progress !== 66 }, "relative p-4 w-full max-w-2xl h-full md:h-auto")}>
                                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Okay
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="Type product name"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="brand"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Brand
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="brand"
                                                        id="brand"
                                                        value={formData.brand}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="Product brand"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="price"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        id="price"
                                                        value={formData.price}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="$2999"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="category"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Category
                                                    </label>
                                                    <select
                                                        id="category"
                                                        name="category"
                                                        value={formData.category}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    >
                                                        <option value="TV">TV/Monitors</option>
                                                        <option value="PC">PC</option>
                                                        <option value="GA">Gaming/Console</option>
                                                        <option value="PH">Phones</option>
                                                    </select>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label
                                                        htmlFor="description"
                                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                                    >
                                                        Description
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        rows="4"
                                                        value={formData.description}
                                                        onChange={handleInputChange}
                                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="Write product description here"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            >
                                                <svg
                                                    className="mr-1 -ml-1 w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                                Add new product
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form1;

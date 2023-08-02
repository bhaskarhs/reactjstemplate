// About.tsx

import { FC } from 'react';

const FileUpload: FC = () => {
    const handleFileUpload = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("logs");

    }
    return (
        <section>
            <div className='bg-white py-6 px-12'>
                <h1 className='font-semibold text-lg'>Upload new file:</h1>

            </div>
            <form className='my-6 mx-12 p-6 bg-white rounded-md' onClick={handleFileUpload}>
                <div className='flex flex-col mb-4'>
                    <label className='text-sm '>File alias (optional)</label>
                    <input type='text' className='border-solid py-1 px-2 my-1 rounded-sm' />
                    <small className='text-[70%] text-[#74788d]'>This will be shown instead of the file name.</small>
                </div>
                <div className='flex flex-col'>
                    <input type='file' name='csv_file' accept='.csv' className=' rounded-sm file:border file:border-none p-0 file:py-2 file:px-4 file:text-sm form-control text-sm ' required />
                    <small>File</small>
                </div>
                <div className='mt-8'>
                    <button className='bg-buttonbg_color text-white px-4 py-2 text-sm rounded-sm'>Process File</button>
                </div>
            </form>
        </section>
    )
};

export default FileUpload;

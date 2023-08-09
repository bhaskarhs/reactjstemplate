// Home.tsx

import React, { FC, useEffect, useState } from 'react';
import "../../App.scss"
import axios from 'axios';
import { apiUrlEndPoint } from '../../api/url';

export interface File {
    id: number;
    name: string | null;
    created_at: string;
    updated_at: string;
    active: boolean;
}

export interface FileListComponentProps {
    filesList: File[];
}

const Home: FC = () => {
    const [filesList, setFilesList] = useState<File[]>([])

    useEffect(() => {
        const response = axios.post(apiUrlEndPoint.fetchFileDetailsApi(), {
            "config": {
                "is_": "get_list"
            }
        })
        response.then((res) => {
            console.log(res.data.files_list);
            setFilesList(res.data.files_list)

        })
        response.catch(err => {
            console.log(err);

        })
    }, [])
    console.log(JSON.stringify(filesList));
    const formatDate = (dateString: string) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <React.Fragment>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Files Processed
                    </h2>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-sm">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">File Name</th>
                                    <th scope="col">Leads / Matches</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date Uploaded</th>
                                    <th scope="col">Processed Date</th>
                                    <th scope=''>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filesList.map((file, index) => (
                                    <tr key={file.id}>
                                        <td scope='row'>{index}</td>
                                        <td className='filename'>{file.name ? file.name : " - "}</td>
                                        <td>16/0</td>
                                        <td className='file-status'>
                                            <p className={file.active ? 'processing-status' : 'wiating-status'}>
                                                {file.active ? 'Active' : 'Inactive'}
                                            </p></td>
                                        <td>{formatDate(file.created_at)}</td>
                                        <td>{formatDate(file.updated_at)}</td>
                                        <td>
                                            <button>View</button>
                                            <button>Export</button>
                                            <button>Kill</button>
                                        </td>
                                    </tr>
                                ))}
                                {/* <td scope='row'>1</td>
                                <td className='filename'>somedata some more data</td>
                                <td>16/0</td>
                                <td className='file-status'>
                                    <p className='wiating-status'>waiting </p></td>
                                <td>jul, 10 2023</td>
                                <td>jul, 10 2023</td>
                                <td>
                                    <button>View</button>
                                    <button>Export</button>
                                    <button>Kill</button>
                                </td>
                                <tr />
                                <td scope='row'>1</td>
                                <td className='filename'>somedata some more data</td>
                                <td>16/0</td>
                                <td className='file-status'>
                                    <p className='processing-status'>processing </p></td>
                                <td>jul, 10 2023</td>
                                <td>jul, 10 2023</td>
                                <td>
                                    <button>View</button>
                                    <button>Export</button>
                                    <button>Kill</button>
                                </td> */}
                                <tr />

                            </tbody>
                        </table>

                    </div>
                    <br />
                </div>
            </main>
        </React.Fragment >
    )

};

export default Home;

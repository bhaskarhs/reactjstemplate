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
    status: string;
    leads: string | number;
    files: string
}

export interface FileListComponentProps {
    filesList: File[];
}

const Home: FC = () => {
    const [filesList, setFilesList] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [runningFileId, setRunningFileId] = useState<string | number>('')
    useEffect(() => {
        fetchFileList()
    }, [])
    const fetchFileList = () => {
        setIsLoading(true)
        const response = axios.post(apiUrlEndPoint.fetchFileDetailsApi(), {
            "config": {
                "is_": "get_list"
            }
        })
        response.then((res) => {
            console.log(res.data.files_list);
            setFilesList(res.data.files_list)
            setIsLoading(false)

        })
        response.catch(err => {
            console.log(err);

        })
    }
    const fileRunHandler = (file: File) => {
        const payload = {
            "proccess_is": file.name,
            "file_id": file.id,
            "file_path": `http://165.22.29.27:8000/media/${file.files}`
        }
        setRunningFileId(file.id)
        axios.post(apiUrlEndPoint.runFile(), payload)
            .then((res) => {
                console.log(res);
                setRunningFileId('')
                fetchFileList()
            })
            .catch(error => {
                console.log(error);
                setRunningFileId('')
            })
    }

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
                    {!isLoading ?
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-sm">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Leads </th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date Uploaded</th>
                                        <th scope="col">Processed Date</th>
                                        <th scope='col' style={{ textAlign: "center" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filesList.map((file, index) => (
                                        <tr key={file.id}>
                                            <td scope='row'>{index}</td>
                                            <td className='filename'>{file.name ? file.name : " - "}</td>
                                            <td>{file.leads}</td>
                                            <td className='file-status'>
                                                <p className={file.status !== "waiting" ? 'processing-status' : 'wiating-status'}>
                                                    {file.status}
                                                </p></td>
                                            <td>{formatDate(file.created_at)}</td>
                                            <td>{formatDate(file.updated_at)}</td>
                                            <td>
                                                {runningFileId === file.id ?
                                                    <button>Loading...</button> :
                                                    <button onClick={() => fileRunHandler(file)}>Run</button>}
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

                        </div> :

                        <div>
                            Loding...
                        </div>
                    }
                    <br />
                </div>
            </main>
        </React.Fragment >
    )

};

export default Home;

import React, { useEffect, useState } from 'react';
import { getCpus } from '../api';
import { Link } from 'react-router-dom';
import '../UIcomponents/CpuList.css'

const CpuList = () => {
    const [cpus, setCpus] = useState([]);

    useEffect(() => {
        const fetchCpus = async () => {
            try {
                const response = await getCpus();
                setCpus(response.data);
            } catch (error) {
                console.error('Error fetching CPUs:', error);
            }
        };
        fetchCpus();
    }, []);

    return (
        <div className="container"> {/* Apply the container class here */}
            <h2>CPU List</h2>
            <table>
                <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Socket</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cpus.map((cpu) => (
                    <tr key={cpu.id}>
                        <td>{cpu.brand}</td>
                        <td>{cpu.model}</td>
                        <td>{cpu.socket.name}</td>
                        <td>
                            <Link to={`/edit/${cpu.id}`}>Edit</Link>
                            <Link to={`/details/${cpu.id}`}>Details</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CpuList;

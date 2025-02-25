import React, { useState, useEffect } from 'react';
import { getCpuById } from '../api';
import { useParams } from 'react-router-dom';
import '../UIcomponents/CpuDetails.css'

const CpuDetails = () => {
    const { id } = useParams();

    const [cpu, setCpu] = useState({
        brand: '',
        model: '',
        socket: { id: '', name: '' }, // Initialize socket as an object
        clockspeed: '',
        numCores: '',
        numThreads: '',
        tdp: '',
        price: '',
    });

    useEffect(() => {
        const fetchCpuDetails = async () => {
            try {
                const response = await getCpuById(id);
                console.log("Fetched CPU Data:", response.data); // Log the response data to see the structure
                setCpu(response.data);
            } catch (error) {
                console.error('Error fetching CPU details:', error);
            }
        };
        fetchCpuDetails();
    }, [id]);

    return (
        <div className="cpu-details-container">
            <h2>CPU Details</h2>
            <div className="cpu-info">
                <div><strong>Brand:</strong> <span className="value">{cpu.brand}</span></div>
                <div><strong>Model:</strong> <span className="value">{cpu.model}</span></div>
                <div><strong>Clockspeed (GHz):</strong> <span className="value">{cpu.clockspeed}</span></div>
                <div><strong>Number of Cores:</strong> <span className="value">{cpu.numCores}</span></div>
                <div><strong>Number of Threads:</strong> <span className="value">{cpu.numThreads}</span></div>
                <div><strong>TDP (W):</strong> <span className="value">{cpu.tdp}</span></div>
                <div><strong>Price (EUR):</strong> <span className="value">{cpu.price}</span></div>
                <div><strong>Socket:</strong> <span className="value">{cpu.socket.name}</span></div>
            </div>
        </div>
    );
};

export default CpuDetails;

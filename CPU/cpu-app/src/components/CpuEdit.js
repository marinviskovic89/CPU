import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {getCpuById, getSockets, updateCpu} from "../api";
import '../UIcomponents/CpuEdit.css'
const CpuEdit = () => {
    const { id } = useParams();  // Get CPU ID from URL
    const [cpu, setCpu] = useState({
        brand: '',
        model: '',
        socket: '',
        clockspeed: '',
        numCores: '',
        numThreads: '',
        tdp: '',
        price: '',
    });
    const [sockets, setSockets] = useState([]);
    const navigate = useNavigate();

    // Fetch CPU details when component mounts
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

        const fetchSockets = async () => {
            try {
                const response = await getSockets(); // Assuming sockets are available at this endpoint
                setSockets(response.data);
            } catch (error) {
                console.error('Error fetching sockets:', error);
            }
        };

        fetchCpuDetails();
        fetchSockets();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        // If it's the socket dropdown, update the socket object based on selected id
        if (name === "socket") {
            const selectedSocket = sockets.find(socket => socket.id === parseInt(value));
            setCpu(prevState => ({
                ...prevState,
                socket: selectedSocket,  // Save the entire Socket object
            }));
        } else {
            setCpu(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Handle form submission (update CPU)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting CPU data:", cpu);
        const updatedCpu = {
            socket: cpu.socket,
            brand: cpu.brand,
            model: cpu.model,
            clockspeed: cpu.clockspeed,
            numCores: cpu.numCores,
            numThreads: cpu.numThreads,
            tdp: cpu.tdp,
            price: cpu.price
        };
        try {
            await updateCpu(id, updatedCpu);
            navigate('/');  // Redirect after updating
        } catch (error) {
            console.error('Error updating CPU:', error);
        }
    };

    return (
        <div className="cpu-edit-container">
            <h2>Edit CPU Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={cpu.brand}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Model</label>
                    <input
                        type="text"
                        name="model"
                        value={cpu.model}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Clockspeed (GHz)</label>
                    <input
                        type="number"
                        name="clockspeed"
                        value={cpu.clockspeed}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Number of Cores</label>
                    <input
                        type="number"
                        name="numCores"
                        value={cpu.numCores}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Number of Threads</label>
                    <input
                        type="number"
                        name="numThreads"
                        value={cpu.numThreads}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>TDP (W)</label>
                    <input
                        type="number"
                        name="tdp"
                        value={cpu.tdp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price (EUR)</label>
                    <input
                        type="number"
                        name="price"
                        value={cpu.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Socket</label>
                    <select
                        name="socket"
                        value={cpu.socket ? cpu.socket.id : ''}
                        onChange={handleChange}
                        required
                    >
                        {sockets.map((socket) => (
                            <option key={socket.id} value={socket.id}>
                                {socket.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Update CPU</button>
            </form>
        </div>
    );
};

export default CpuEdit;

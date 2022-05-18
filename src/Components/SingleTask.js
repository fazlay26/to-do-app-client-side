import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleTask = ({ t }) => {
    const [linethrough, setLinethrough] = useState(false)
    const Complete = () => {
        console.log('line');
        setLinethrough(true)
        toast.success('you complete this task')

    }
    const handleDelete = (id) => {

        const proceed = window.confirm("are you sure??")
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.location.reload();
                })
        }
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 style={{ textDecoration: linethrough ? 'line-through' : '' }} class="card-title">{t.name}</h2>
                <p style={{ textDecoration: linethrough ? 'line-through' : '' }}>{t.description}</p>
                <div class="card-actions justify-end">
                    <button onClick={Complete} class="btn btn-primary">Complete</button>
                    <button onClick={() => handleDelete(t._id)} class="btn bg-red-500">Delete</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleTask;
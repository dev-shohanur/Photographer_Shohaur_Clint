import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Service')
    const [service, setService] = useState([]);
    const AddServices = event => {
        event.preventDefault();
        const form = event.target;
        const thumbnailImg = form.thumbnailImg.value;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const description = form.description.value;

        const service = {
            thumbnailImg,
            serviceName,
            servicePrice,
            description
        }
        console.log(service);
        fetch('https://photographer-shohanur-server-dvsrshohan.vercel.app/service', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                const newService = [...service, data];
                setService(newService)
            })
            .catch(error => console.error(error))

        event.target.reset();
        console.log(service);
    }
    return (
        <div className='w-2/4 mx-auto my-12 shadow-2xl card p-6'>
            <form onSubmit={AddServices}>
                <div className="mb-6">
                    <label className="label">
                        <span className="label-text">Thumbnail Image URL</span>
                    </label>
                    <input type='url' name='thumbnailImg' className="input input-bordered w-full" placeholder="Thumbnail Image URL" required />
                </div>
                <div className="mb-6">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type='text' name='serviceName' className="input input-bordered w-full" placeholder="Service Name" required />
                </div>
                <div className="mb-6">
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input type='text' name='servicePrice' className="input input-bordered w-full" placeholder="Service Price" required />
                </div>
                <div className="mb-6">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type='text' name='description' className="input input-bordered w-full" placeholder="Description" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;
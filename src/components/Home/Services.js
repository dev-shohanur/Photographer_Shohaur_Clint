import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();

    // event.target.reset();
    // console.log(service);
    return (
        <div className=" bg-slate-200">
            <div className="container mx-auto py-7">
                <h2 className="text-4xl font-bold text-center py-6">My Services :{services.length}</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                    {
                        services.map(service => 
                        <div key={service._id} className="card card-compact m-2 p-2 bg-base-100 shadow-xl">
                                <figure><img src={service.thumbnailImg} className='w-full h-72' alt="Shoes" /></figure>
                            <div className="card-body">
                                    <h2 className="card-title">{service.serviceName}</h2>
                                    <p className='text-xl font-semibold text-red-500'>৳ {service.servicePrice }</p>
                                <div className="card-actions justify-end">
                                        <Link className='w-full' to={`/service/${service._id}`}>
                                            <button className="btn btn-primary w-full">Buy Now</button>
                                        </Link>
                                </div>
                            </div>
                            </div>
                        )
                    }
                </div>
                <div className="text-center my-4">
                   <button className='btn btn-primary'>Show All</button>
                </div>
           </div>
        </div>
    );
};

export default Services;
import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    // const [review, setReview] = useState([])
    const [displayReviews, setDisplayReviews] = useState([]);
    const { user } = useContext(AuthContext)
    const {
        _id,
        thumbnailImg,
        serviceName,
        servicePrice,
        description
    } = useLoaderData();
    // let updateDelete;
    // let inputEmail;
    const handelSubmitReviw = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const rating = form.rating.value;
        const reviews = form.reviews.value;
        const IsoDate = new Date().toISOString()

        const review = {
            serviceId: _id,
            email,
            rating,
            reviews,
            IsoDate,
        }
        console.log(review);
        fetch('http://localhost:5000/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                const newReviews = [...displayReviews, data];
                setDisplayReviews(newReviews)
            })
            .catch(error => console.error(error))

        // event.target.reset();
        console.log(review);
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setDisplayReviews(data))
    }
    


    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setDisplayReviews(data))
    }, [])



    // if (user?.email === displayReviews.email) {
    //     updateDelete = <>
    //         <button className='underline mr-2 hover:text-blue-600'>Edit</button>
    //         <button className='underline hover:text-blue-600'>Delete</button>
    //     </>
    // }
    // else {
    //     inputEmail = <div className="form-control">
    //         <label className="label">
    //             <span className="label-text">Email</span>
    //         </label>
    //         <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
    //     </div>
    //}
    
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-0">
                <div className="mx-5">
                    <img className='shadow-lg h-4/6	w-full' src={thumbnailImg} alt="" srcSet="" />
                </div>
                <div className="">
                    <h2 className="text-3xl mt-3 font-semibold">{serviceName}</h2>
                    <h3 className="text-xl mt-3 text-red-500">৳ {servicePrice}</h3>
                    <button className="btn mt-3 btn-success">Buy Now</button>
                    <p className=' mt-3'>{description}</p>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl">Ratings & Reviews of Star {serviceName}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="">
                        {
                            displayReviews.map(displayReview =>
                                <>
                                    <p>by: {displayReview.email}</p>
                                    <h2 className="text-2xl text-yellow-500 font-bold flex">{displayReview.rating} <FaStar /></h2>
                                    <p className='text-xl'>{displayReview.reviews}</p>
                                    {/* <p>{displayReview.IsoDate.substring(0, 10)}</p> */}

                                    {/* {updateDelete} */}
                                </>
                            )
                        }
                    </div>
                    <div className="">
                        {user?.uid ?
                            <>
                                <form onSubmit={handelSubmitReviw} className="card-body">
                                    {/* {inputEmail} */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" name='rating' placeholder="Rating 4.5" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Reviews</span>
                                        </label>
                                        <input type="text" name='reviews' placeholder="Reviews" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <button className='btn btn-primary w-full'>Add Comment</button>
                                    </div>
                                </form>
                            </>
                            :
                            <Link to='/login' className='text-2xl'>Please Sign In /Sign Up And <button className='btn btn-primary'>Add Comment</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
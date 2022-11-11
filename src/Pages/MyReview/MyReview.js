import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UpdateReview from '../../components/MyReviews/UpdateReview/UpdateReview';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])
    const handelDeleteReview = review => {
        const agree = window.confirm(`Are You Sure You Want to Delete}`);
        if (agree) {
            fetch(`http://localhost:5000/review/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Review Successfully')
                        const remainingReview = reviews.filter(rev => rev._id !== review._id);
                        setReviews(remainingReview);
                    }
                })
        }
    }
    // const handelUpdateReview = (event , reviewId) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const rating = form.rating.value;
    //     const reviews = form.reviews.value;

    //     const review = {
    //         rating,
    //         reviews,
    //     }
    //     fetch(`http://localhost:5000/review/${reviewId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('App Updated Successfully')
    //             }
    //         })
    //         .catch(error => console.error(error))

    //     event.target.reset();
    // }
    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-4'>My Reviews {reviews.length}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {
                reviews.map(review => 
                        <div className="card bg-base-100 m-4 shadow-xl flex">

                            <div className="card-body grid auto-cols-auto	">
                                <img className='mask mask-circle' src={review?.photoURL} alt="" srcSet="" />
                                <div>
                                    <h2 className="card-title">{review.email}</h2>
                                    <h2 className="text-2xl text-yellow-500 font-bold flex">{review.rating} <FaStar /></h2>
                                    <p className='text-xl'>{review.reviews}</p>
                                </div>
                                <div className="flex">
                                    <button onClick={() => handelDeleteReview(review)} className="text-2xl  mr-2">
                                        <FaTrash className='text-orange-600' />
                                    </button>
                                    <Link to={`/update-review/${review._id}`}>
                                        <button className="text-2xl  mr-2"><FaEdit /></button>
                                    </Link>
                                </div>

                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        {/* <UpdateReview key={review._id} review={review}></UpdateReview> */}

                                        <div className="modal-action">
                                            <label htmlFor="my-modal" className="btn">Yay!</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
            </div>
        </div>
    );
};

export default MyReview;
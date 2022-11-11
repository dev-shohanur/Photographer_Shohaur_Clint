import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')
    const navigate = useNavigate();
    const allReview = useLoaderData();
    const [displayReview, setDisplayReview] = useState(allReview);
    const handelUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        // const rating = form.rating.value;
        const reviews = form.reviews.value;

        const review = {
            reviews,
        }
        console.log(review);
        fetch(`https://photographer-shohanur-server-dvsrshohan.vercel.app/reviews/${allReview?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setDisplayReview(data)
                if (data.modifiedCount > 0) {
                    alert('App Updated Successfully')
                }
                navigate('/my-reviews')
            })
            .catch(error => console.error(error))

        event.target.reset();
    }
    console.log(allReview);
    return (
        <div className="bg-white shadow-lg mx-4 my-6 rounded-lg">
            <form onSubmit={handelUpdateReview} className="card-body">
                {/* {inputEmail} */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Rating 4.5" className="input input-bordered" defaultValue={displayReview.rating} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Reviews</span>
                    </label>
                    <input type="text" name='reviews' placeholder="Reviews" className="input input-bordered" defaultValue={displayReview.reviews} />
                </div>
                <div className="form-control">
                    <button className='btn btn-primary w-full'>Add Comment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;
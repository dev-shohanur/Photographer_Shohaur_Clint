import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')
    const allReview = useLoaderData();
    const [displayReview, setDisplayReview] = useState(allReview);
    const handelUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const reviews = form.reviews.value;

        const review = {
            rating,
            reviews,
        }
        console.log(review);
        fetch(`http://localhost:5000/reviews/${allReview?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('App Updated Successfully')
                }
                // setDisplayReview(data)
            })
            .catch(error => console.error(error))

        event.target.reset();
    }
    console.log(allReview);
    return (
        <div className="">
            <h2>h2 - {allReview.length}</h2>
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
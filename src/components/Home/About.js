import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const About = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 my-6'>
            <div className="mx-6">
                <PhotoProvider>
                    <PhotoView src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/279232283_121505380508263_3392659397521163168_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LSYYwcnqVCwAX9ADLRM&_nc_ht=scontent.fdac110-1.fna&oh=00_AfANYQ8NEYkEvbl5qDJDgBBMaW3BZfsLg6FpZAXP_RMgKQ&oe=6374072C" >
                        <img className='
                        w-full
                        sm:w-2/4
                        mx-auto
                         border-8
                        border-t-indigo-500
                        border-l-indigo-500
                        border-b-indigo-200
                        border-r-indigo-200
                        '
                            src="https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/279232283_121505380508263_3392659397521163168_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LSYYwcnqVCwAX9ADLRM&_nc_ht=scontent.fdac110-1.fna&oh=00_AfANYQ8NEYkEvbl5qDJDgBBMaW3BZfsLg6FpZAXP_RMgKQ&oe=6374072C" alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="">
                <h2 className="text-3xl font-bold">MD Shohanur Rahman</h2>
                <p className="text-xl text-indigo-500">Photographer</p>
                <p className='leading-7	'>
                    “As a leading photography agency of the country, valuing our
                    customers’ demands are our paramount priority. But what
                    keeps us in the leading position is not just following orders but
                    to see your demands as our dreams. And when it comes about
                    fulfilling dreams, we leave no stone unturned. Only then do we
                    give you the best creative solution that can ever be produced.
                    We understand that today’s moments are tomorrow’s memories.
                    So we assist clients to hold the most meaningful moments of their
                    lives. This is one of the fundamentals on which we are built.”


                </p>
            </div>
        </div>
    );
};

export default About;
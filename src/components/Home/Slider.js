import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL_8039-1024x522.jpg" >
                        <img className='w-full' src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL_8039-1024x522.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL08317-1024x522.jpg" >
                        <img alt='' src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL08317-1024x522.jpg" className="w-full" />
                    </PhotoView>
                </PhotoProvider>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL_0641-1024x522.jpg" >
                        <img alt='' src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL_0641-1024x522.jpg" className="w-full" />
                    </PhotoView>
                </PhotoProvider>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide4" className="carousel-item relative w-full">
                <PhotoProvider>
                    <PhotoView src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL05259-1024x522.jpg" >
                        <img alt='' src="https://www.abusufiannilove.com/wp-content/uploads/2018/05/NIL05259-1024x522.jpg" className="w-full" />
                    </PhotoView>
                </PhotoProvider>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
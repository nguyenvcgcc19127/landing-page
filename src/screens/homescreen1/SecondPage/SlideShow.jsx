import React, { useEffect, useState, useRef } from "react";
import './slideshow.css';
import H3 from '../../../assets/img/h3.png';
import H4 from '../../../assets/img/h4.png';
import H5 from '../../../assets/img/h5.png';

const sliders = [
    {
        id: "slide1",
        img: H3,
        title: "abc"
    },
    {
        id: "slide2",
        img: H4,
        title: "cba"
    },
    {
        id: "slide3",
        img: H5,
        title: "bac"
    }
];

export default function Slideshow() {
    
    const delay = 3500;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {sliders.map((e, index) => (
                    <img
                        className="slide"
                        id={e.id}
                        key={index}
                        img={e.img}
                    />
                ))}
            </div>

            <div className="slideshowDots">
                {sliders.map((_, idx) => (
                <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                    setIndex(idx);
                    }}
                ></div>
                ))}
            </div>
        </div>
    );
}
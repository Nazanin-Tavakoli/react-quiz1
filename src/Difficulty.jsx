import React, { useState, useEffect, useRef } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Difficulty.css';
import './button';

const Difficulty = () => {
    const [values, setValues] = useState([3000, 7000]);
    const [sliderDirection, setSliderDirection] = useState(null);
    const sliderHandleRef = useRef(null);
    const timerRef = useRef(null);

    const currency = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    });

    const formatter = (value) => currency.format(value);

    const stop = () => {
        setSliderDirection(null);
    };

    const slide = (newValues) => {
        const delta = newValues[0] - values[0];
        if (delta > 0) {
            setSliderDirection('up');
        } else {
            setSliderDirection('down');
        }

        setValues(newValues);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(stop, 66);
    };

    useEffect(() => {
        if (sliderHandleRef.current) {
            sliderHandleRef.current.focus();
        }
        return () => {
            clearTimeout(timerRef.current); // پاکسازی تایمر
        };
    }, []);

    return (
        <div className={`slider-container ${sliderDirection ? sliderDirection : ''}`} id="PriceGradient">
            <Slider
                range
                min={0}
                max={10000}
                value={values}
                step={200}
                onChange={slide}
                marks={{
                    0: formatter(0),
                    2000: formatter(2000),
                    4000: formatter(4000),
                    6000: formatter(6000),
                    8000: formatter(8000),
                    10000: formatter(10000)
                }}
                handleRender={(node, handleProps) => (
                    <div ref={sliderHandleRef} {...handleProps}>
                        {node}
                    </div>
                )}
            />
            <div className="slider-values">
                <span>{formatter(values[0])}</span> - <span>{formatter(values[1])}</span>
            </div>
        </div>
    );
};

export default Difficulty;

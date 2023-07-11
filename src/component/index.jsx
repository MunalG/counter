import React, { useEffect, useState } from "react";
import "./index.css";

const Index = () => {
    const [data, setData] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleClick = () => {
        setData((prevState) => prevState + 1);
    };

    const handleReset = () => {
        clearInterval(intervalId); // Clear the interval
        setIntervalId(null); // Reset the interval ID state
        setData(0); // Reset the counter value
    };

    const handleStartCounter = () => {
        const id = setInterval(() => {
            handleClick();
            console.log(data);
        }, 1000);
        setIntervalId(id);
    };

    const handleStopCounter = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <div className="indexDiv">
            <button className="clickMe" onClick={handleClick}>
                Click Me
            </button>
            <div className="displayDiv">
                <h3>Clicked {data} times</h3>
            </div>
            <div>
                {!intervalId ? (
                    <button className="clickMe" onClick={handleStartCounter}>
                        Start Counter
                    </button>
                ) : (
                    <button className="clickMe" onClick={handleStopCounter}>
                        Stop Counter
                    </button>
                )}
                <button className="clickMe" onClick={handleReset}>
                    Reset Counter
                </button>
            </div>
        </div>
    );
};

export default Index;

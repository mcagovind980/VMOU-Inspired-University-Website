
import { useState, useEffect } from "react";
import "./Pagination.css";
import Slid from "./Pagination.js"

function Pagination() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % Slid.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slid">
            <div className="slide-window">
                <div
                    className="slide-track"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {Slid.map((item) => (
                        <img
                            key={item.id}
                            src={item.image}
                            alt={`University slide ${item.id}`}
                        />
                    ))}
                </div>
            </div>

            <div className="dots">
                {Slid.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => setIndex(i)}
                        className={index === i ? "active" : ""}
                        aria-label={`Go to slide ${i + 1}`}
                    >
                        ●
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Pagination;

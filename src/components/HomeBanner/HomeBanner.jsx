import { useState, useEffect } from "react";

import "./home-banner.css";
import Banner_1 from "../../assets/nike-banner-01.jpg";
import Banner_2 from "../../assets/nike-banner-02.jpg";
import Banner_3 from "../../assets/nike-banner-03.jpg";

const images = [Banner_1, Banner_2, Banner_3];

function HomeBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <section className="banner">
            <figure className="slide">
                <img src={images[currentIndex]} alt="main page banner" loading="lazy" />
            </figure>

            <div className="dots" role="button">
                {images.map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}>
                    </span>
                ))}
            </div>
        </section>
    );
}

export default HomeBanner
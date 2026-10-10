
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p>Welcome to VMOU</p>

                <h1>
                    Learn Today,
                    <br />
                    Lead Tomorrow
                </h1>

                <h2>Vardhman Mahaveer Open University</h2>

                <p>
                    Explore flexible learning opportunities
                    and build your future with open education.
                </p>

                <div className="hero-buttons">
                    <button>Apply for Admission</button>
                    <button>Explore Courses</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;


import { Link } from "react-router-dom";
import "../css/Servicecardslid.css";
import services from "../Data/Servicecardslid.js";
function ServicesCard() {
    return (
        <section className="services-slider">
            <div className="services-track">
                {[0, 1].map((group) => (
                    <div
                        className="services-group"
                        key={group}
                        aria-hidden={group === 1}
                    >
                        {services.map((item) => (
                            <div className="service-card" key={item.id}>
                                <div className="service-icon">
                                    {item.icon}
                                </div>

                                <div className="service-content">
                                    <h2>{item.title}</h2>

                                    {group === 0 ? (
                                        <Link to={item.link}>
                                            {item.linkText}
                                        </Link>
                                    ) : (
                                        <span className="service-link-copy">
                                            {item.linkText}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesCard;

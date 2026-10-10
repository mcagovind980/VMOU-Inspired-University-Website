import Service from "../Data/ServiceCard.js"
import "../css/Services.css"
function Services() {
    return (
        <>
            <div className="service">
                <div className="card1">
                    {Service.map((data) =>
                        <div className="item1" key={data.id}>
                            <img src={data.icon} alt="image" />
                            <h1>{data.heading}</h1>
                            <p>{data.title}</p>

                            <a href={data.Link}><button >{data.button}</button></a>
                        </div>

                    )}

                </div>

            </div>

        </>
    )
}
export default Services
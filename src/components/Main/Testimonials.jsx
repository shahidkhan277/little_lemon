import "./Testimonials.css";
import Avatar from "../Assets/Images/customer1.png";

const Testimonials = () => {
    const customerReviews=[
        {
            rating:"8.2",
            image: Avatar,
            name:"John",
            comment:"The service is very good and food is also tastey.",
        },
        {
            rating:"9",
            image: Avatar,
            name:"Sarah",
            comment:"I really like the sea food and also love the lemon dessert.",
        },
        {
            rating:"8.5",
            image: Avatar,
            name:"Shahid",
            comment:"The service is really nice.I love the food and also the environment.",
        },
        {
            rating:"8.5",
            image: Avatar,
            name:"Shahid",
            comment:"The service is really nice.I love the food and also the environment.",
        },
    ];

    const Reviews = customerReviews.map(review =>{
        const rating = review.rating;
        const image = review.image;
        const name= review.name;
        const comment =review.comment;
        return (
            <>
            <div>
              <div className="testimonialContainer">
                <div className="rating">
                <h3>Rating :</h3>
                <h4 style={{color:"tomato"}}>{rating}</h4>
                </div>
                <div className="cardImg">
                    <img src={image} alt="customer" />
                    <h3>{name}</h3>
                </div>
                <div className="cardTexts">
                    <p>{comment}</p>
                </div>
              </div>
            </div>
            </>
          )
    });
        return(
            <div style={{margin:"30px 0 30px 0"}}>
            <h2 style={{textAlign:"center"}}>Customer Reviews</h2>
            <div className="testimonials">
            {Reviews}
            </div>
            </div>
        )
}

export default Testimonials

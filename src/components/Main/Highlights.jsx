import { NavLink } from "react-router-dom";
import "./Highlights.css";
import Dish1 from "../Assets/Images/bruchetta.svg";
import Dish2 from "../Assets/Images/greekSalad.jpg";
import Dish3 from "../Assets/Images/lemonDessert.jpg";
import {MdDeliveryDining} from "react-icons/md";

const Highlights = () => {
    const highLights = [
        {
            image:Dish1,
            title: "Brucehtta",
            price: "$12.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
            order: "Order for Delivery"
        },
        {
            image:Dish2,
            title: "Greet Salad",
            price: "$14.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
            order: "Order for Delivery"
        },
        {
            image:Dish3,
            title: "Lemmon Dessert",
            price: "$10.99",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            order: "Order for Delivery"
        },
    ];

    const highLightsItems =highLights.map(items => {
        const image = items.image;
        const title = items.title;
        const price = items.price;
        const description = items.description;
        const order = items.order;

  return (
    <div>
     <div id="menu" className="highlightsCardContainer">
        <div className="cardImage">
            <img src={image} alt="" />
        </div>
        <div className="cardText">
            <div className="cardTitle">
                <h3>{title}</h3>
                <h2 className="priceTag">{price}</h2>
            </div>
            <p>{description}</p>
            <NavLink to="#">
                <h4>
                   {order}
                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                </h4>
            </NavLink>
        </div>
    </div>
    </div>
  )
});

return(
    <div>
    <div className="higlights">
      {highLightsItems}
    </div>
  </div>
)
}

export default Highlights

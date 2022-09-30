import { CategoryItems } from "../../molecules/CategoryItems"
import { StyleCategories } from "./categories.style"
import burger from "../../assests/burger.jpg";
import dinning from "../../assests/dinning.jpg";
import buffet from "../../assests/buffet.jpg";
import pickup from "../../assests/pickup.jpg";

const Categories = () => {
    const categories = [
        {name: "Order online", img: burger},
        {name: "Dinning", img: dinning},
        {name: "Buffet", img: buffet},
        {name: "Pick Up", img: pickup}
    ]
  return (
    <StyleCategories>
        {categories.map(res => <CategoryItems name={res.name} img={res.img} />)}
    </StyleCategories>
  )
}

export default Categories
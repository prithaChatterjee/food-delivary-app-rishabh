import { CategoryItems } from "../../molecules/CategoryItems"
import { StyleCategories } from "./categories.style"
import { useSelector } from "react-redux";
// import burger from "../../assests/burger.jpg";
import dinning from "../../assests/dinning.jpg";
// import buffet from "../../assests/buffet.jpg";
// import pickup from "../../assests/pickup.jpg";

const Categories = () => {
  const {categoryReducer} = useSelector(state => state)
  return (
    <StyleCategories>
        {categoryReducer?.data?.map(res => <CategoryItems key={res._id} name={res.name} 
          img={dinning} route={`/resturents/${res._id}?category=${res.name}`} />)}
    </StyleCategories>
  )
}

export default Categories
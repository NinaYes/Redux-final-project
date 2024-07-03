import dataArt from "../Data/dataArt";
import Art from "./Art";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../Redux/artSlice";

const ArtItems = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            {dataArt
            .filter(art => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === art.category;
            }
            )

            .map(art => <Art art={art}/>)}
        </div>
    )
}
export default ArtItems;
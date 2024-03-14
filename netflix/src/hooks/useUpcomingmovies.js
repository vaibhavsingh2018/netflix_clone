import axios from "axios";
import {getUpcomingmovie } from "../redux/movieSlice";
import {Upcoming_movie, options } from "../utils/constant";
import {useDispatch} from "react-redux";

const useUpcomingmovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_movie, options);
        dispatch(getUpcomingmovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingmovies;
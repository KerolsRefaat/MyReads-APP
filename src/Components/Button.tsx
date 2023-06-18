import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { booksSliceActions } from "../store/slices/booksSlice";

const Button = ()=>{
    const dispatch = useDispatch();
    const addHandler=()=>{
      dispatch(booksSliceActions.searchTheBooks([]));
    }
    return(
        <div className="open-search">
             <Link to="/search">
             <button onClick={addHandler}>Add a book</button>
             </Link>
           </div>
    )
}

export default Button;
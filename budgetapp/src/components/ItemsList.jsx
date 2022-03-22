import "../assets/style.css"
import { formatAmount, formatPercentAmount } from "./helper";
import { useDispatch } from "react-redux";
import { actDeleteById } from "../stores/action";

const ItemsList = ({data, total}) => {
    const { amount, desc, id } = data
    const dispatch = useDispatch()
    function handleDeleteItems(){
        dispatch(actDeleteById(id))
        // console.log("check id", id);
        //goi den action actionDeleteById 
    }

    return ( 

        <>
        
                <div className="item clearfix">
                    <div className="item__description">{desc}</div>
                    <div className="right clearfix">
                    <div className="item__value">{formatAmount(amount)}</div>
                    {
                       amount < 0 && 
                        <div className="item__percentage">
                            {formatPercentAmount(amount, total)}
                        </div>
                    }
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={handleDeleteItems}>
                        <i className="ion-ios-close-outline" />
                        </button>
                    </div>
                    </div>
                </div>
        
        </>

     );
}
 
export default ItemsList;


// hien thi noi dung 
//props data nam ben hai component imcome va expenses duoc nhan gia tri data 
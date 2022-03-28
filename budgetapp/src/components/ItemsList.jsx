import "../assets/style.css"
import { formatAmount, formatDateString, formatPercentAmount } from "./helper";
import { useDispatch } from "react-redux";
import { actDeleteById } from "../stores/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemsList = ({data, total}) => {
    const { amount, desc, id, date } = data
    const dispatch = useDispatch()
    function handleDeleteItems(){
        alert('Bạn muốn xóa phần tử khỏi danh sách!!!')
        dispatch(actDeleteById(id))
        //goi den action actionDeleteById 
    }
    const notify = () => toast.warning("Xóa thành công!");

    return ( 
 
        <>
        
                <div className="item clearfix">
                    <div className="item__description">{desc} -  {formatDateString(date)}</div>
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
                            <i onClick={notify} className="ion-ios-close-outline" />
                            </button>
                        </div>
                        <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                    </div>
                </div>
        
        </>

     );
}
 
export default ItemsList;


// hien thi noi dung 
//props data nam ben hai component imcome va expenses duoc nhan gia tri data 
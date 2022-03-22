import '../assets/style.css'
import {useState, useRef} from 'react'
import cls from 'classnames';
import { useDispatch } from 'react-redux'
import { actAddIncome } from '../stores/action';
import DateTimePicker from 'react-datetime-picker';

const BudgetForm = () => {
    const dispatch = useDispatch()
    const refDesc = useRef(null)
    const [formData, setFormData] = useState({
        sign: '+',
        desc: '',
        amount : '', 
        date: ''
    })

    //khai bao function onchange
    function hanldeChangeData(event){
        console.log("event.target.name", event.target.name);
        let key = event.target.name
        let value = event.target.value

        //xet dieu kien co phai gia tri number hay ko 
        if(key === 'amount' && value !== ''){
            value = Number(value)// chuyen sang dang number 
            // console.log(value);
            if(value < 0){
                value = formData.amount
            }// khi nguoi dung nhap vao gia tri am thi return ve chuoi rong ban dau 
        }
        //*  khi vo tinh add  gia tri '' no se tra ve 0 

        setFormData({
            ...formData,
            // [event.target.name] : event.target.value
            [key] : value
            // [event.target.name] thay vi phai viet sign , desc , amount thi se duoc tuy bien khi nguoi dung nhap vao 
        })
    }

    //submit them moi gia tri 
    function hanldeSubmit(){
        // console.log('handle submit', formData);
        if(!formData.amount || !formData.desc){
            return
        }
        // console.log("formdata", formData);
        dispatch(actAddIncome(formData))
        setFormData({
            sign: '+',
            desc: '',
            amount: ''
        })

        refDesc.current.focus()
    }

    //keyup value ênter 
    function handleKeyUpAmount(event){
        // console.log('handle key up ',event.key);
        if(event.key === "Enter"){
            hanldeSubmit()
        }
    }

    const [value, onChange] = useState(new Date());

    const showRed = formData.sign === "-"
    // console.log('usefred', refDesc.current.focus());
    return ( 

        <>     
            <div className="add">
                <div className="add__container">

                    <select className={cls("add__type",{
                        'red-focus' : showRed
                    })}
                     value={formData.sign}
                     onChange={hanldeChangeData}
                     name="sign"
                    >

                        <option value="+">+</option>
                        <option value="-">-</option>

                    </select>

                    <input value={formData.desc}
                      type="text" 
                      className={cls("add__description",{
                          'red-focus' : showRed
                      })}
                      ref={refDesc}
                      placeholder="Add description"
                      onChange={hanldeChangeData}
                      name="desc" />

                    <input value={formData.amount}
                      type="number" 
                      className={cls("add__value",{
                        'red-focus' : showRed
                    })}
                      onKeyUp={handleKeyUpAmount}
                      placeholder="Value"
                      onChange={hanldeChangeData}
                      name="amount"
                    />
                    
                    <div>
                        <DateTimePicker name='date' onChange={onChange} value={value} />
                    </div>

                    <button onClick={hanldeSubmit} className={cls("add__btn",{
                          'red' : showRed
                      })}>
                          <i className="ion-ios-checkmark-outline" />
                    </button>
                </div>
            </div>
        </>

     );
}
export default BudgetForm;


//* value amount luon la gia tri string nen phair chuyen sang gia tri number



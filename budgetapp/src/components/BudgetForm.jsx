import '../assets/style.css'
import {useState} from 'react'
import cls from 'classnames'

const BudgetForm = () => {

    const [formData, setFormData] = useState({
        sign: '+',
        desc: '',
        amount : ''
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

    const showRed = formData.sign === "-"
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
                      placeholder="Add description"
                      onChange={hanldeChangeData}
                      name="desc" />

                    <input value={formData.amount}
                      type="number" 
                      className={cls("add__value",{
                        'red-focus' : showRed
                    })}
                      placeholder="Value"
                      onChange={hanldeChangeData}
                      name="amount"
                    />
                    <button className={cls("add__btn",{
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



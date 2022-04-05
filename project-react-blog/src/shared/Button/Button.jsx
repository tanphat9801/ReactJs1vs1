
import "./button.css"
import cls from "classnames";
import IconLoading from "../IconLoading";

const Button = (
    {
        type = 'default',
        children,
        htmlType,
        loadingPos = 'left',
        size,
        loading,
        ab,
        className,
        ...propsPamram
    }
    ) => {

    const classes = cls('btn', {
        'btn-default' : type === 'default',
        'btn-category': type === 'category',
        'btn-primary' : type === 'primary',
        'btn-size-large' : size === 'large'
    }, className)//classname props được truyền từ component


    const content = (
        <>
        {loading && loadingPos === 'left' && <IconLoading/>}
        {children}
        {loading && loadingPos === 'right' && <IconLoading/>}
        </>
    )

    const injectedProps = {
        className:classes,
        type : htmlType,
        ...propsPamram 
    }

    if(ab === 'a'){
        return ( 
            <a {...injectedProps}>
                {content}
            </a>
         );
    }
    //{...propsPamram} sẽ phân rã các thuộc tính còn lại
    return ( 
        <button {...injectedProps}>
            {content}
        </button>
        
     );
}
 
export default Button;






    // let classes = "btn";
    // if(type === 'default'){
    //     classes += ' btn-default'
    // }else if(type === 'category'){
    //     classes += ' btn-category'
    // }else if( type === 'primary'){
    //     classes += ' btn-primary'
    // }//phương thức cũ


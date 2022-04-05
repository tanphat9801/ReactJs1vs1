import Button from "../../shared/Button/Button";
const TestButton = () => {

    const handleClickBtn = () =>{
        console.log('click me');
    }

    return ( 
        <div>
            <Button onClick={handleClickBtn}>click me</Button>
            <Button className='custom' type="default">btn1</Button>
            <Button type="default" ab='a' href='https://www.facebook.com/' target='true' title='hihi'>btn a link</Button>
            <Button type="category" title='hahaha'>btn3</Button>
            <Button type="category" abc='xyz'>btn4</Button>
            <Button type="primary">btn5</Button>
            <Button type="primary">btn6</Button>
            <Button type="primary" htmlType="submit" size='large' loading={true}>btn7</Button>
            <Button type="primary" htmlType="submit" size='large' loading={true} loadingPos="right">btn8</Button>
        </div>
     );
}
 
export default TestButton;
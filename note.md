==> Su dung hook voi redux va react-redux

/custom hook do ltv tu dinh nghia nham de phuc vu 1 muc dich nao do 

/ Ngoài những hooks được hỗ trợ bởi react các lib khác khi tích hợp với react cũng tự xây dựng lên các hoook cho riêng các thư viện đó 

/ custom hook là những func do ltv tự định nghĩa sử dụng những tính năng của react hook bên trng nó tách các logic của các components sử dụng lại được ở nhiều nơi

/ được đặt tên theo quy tắc bắt đầu bằng từ khóa use 


=> SỬ DỤNG HOOK VỚI REACT-REDUX

/React-redux sẽ bớt cồng kềnh và gọn nhẹ hơn thông qua useSelector() và useDispatch()

*useDispatch()
/bản chất là một func là 1 custom hook được xây dựng bởi react-redux 
/dùng để kích hoạt 1 action bên trong redux 

*useSelector()
/ cũng là một func được xây dựng bởi react-redux 
input: là một hàm để select dữ liệu từ store . gọi tên là fnSelect 
output : giá trị trả về từ fnSelect 
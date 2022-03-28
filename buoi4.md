=> BẤT ĐỒNG BỘ TRONG JS 
// quá trình xử lí code KHÔNG theo đúng trình tự không mong muốn do vấn đề thời gian 

**Synchronus - quá trình xử lí đồng bộ 

const a = 10 //1
const b = 20 //2

function sum(){ //4
    return a + b
}

const result = sum() //3
console.log("result", result) //5

**Asynchronus - quá trình xử lí bất đồng bộ 
let result 
const a = 10 //1 
const b = 20 //2
function sum(){
    result = a + b //5 - khoang 3s sau moi chay  
}

setTimeout(sum, 3000)//3 kich hoat timer 
console.log('result', result)//4 - chay truoc 
//- qua trinh xu ly dong thoi


*action sync va action async 
action sync(dong bo ) return ve 1 object 
action async(bat dong bo) return ve 1 function 


---------------------


=> API

*API là thuật ngữ viết tắt của :  APPICATION PROGRAMING INTERFACE -> giao diện lập trình ứng dụng  

*UserInterface : giao diện người dùng
- giúp người dùng tương tác với ứng dụng 
- người dùng ko cần quan tâm ứng dụng được xây dựng ntn 
- người dùng chỉ cần quan tâm kết quả và chỉ dẫn khi sử dưung phần mềm 
vd: search là sẽ có kết quả 

*API : giao diện lập trình ứng dụng 

- giúp ứng dụng lập trình(1) tương tác với ứng dụng lập trình(2) khác 
- ứng dụng 1 ko cần quan tâm đến ứng dụng 2 dduocj tạo ra như thế nào 
- ứng dụng 1 chỉ quan tâm đến chỉ dẫn sử dụng của ứng dụng 2 
vd : ứng dụng React tương tác với ứng dụng Bcakend Php
React gọi đến Php để lấy dữ liệu về Frontend. Chỉ cần truyền đúng tham số theo chỉ dẫn là ok 

vd2 : ứng dụng js tương tác với ứng dụng react
js gọi đến lib react(vd gọi hàm useState )



#### Mô hình redux kết hợp middleware (Thunk)

* middelware la 1 chuc nang duoc cung cap boi redux

thunk se co 2 action

* action sync
action:{type??}

* action async 
khi đưa action qua trung gian
- nếu action sync thì sẽ chạy trực tiếp vào reducer
- còn ngược lại nếu là action async thì nó sẽ gọi sang api .
- Khi api trả về dữ liệu thì middleware tiếp tục dispatch 1 action(action sync) để truyền và reducer 

* thunk
- la 1 lib su dung middleware cua redux de xu ly van de bat dong bo 

* action sync function return obj
* action async function return 1 function khac 

## POSTMAN 
- phần mềm giúp test trước api mà ko cần xây dựng trước fe 
- công cu giúp BE có thể lập trình và kiểm tra tính đúng đắn của logic dữ liệu 
- tài liệu cung cấp cho team fe một cách dễ dàng hơn 
- Giúp FE có thể test trước và nhìn thấy được cấu trúc data


#  Vai trò FRONTEND 
- xem thông tin về api 
- hiện thực logic gọi api và lưu data vào trong ung dung của Frontend (react)
- có nhiều cách, phương thức gọi api khác nhau 
    - ajax 
    - fetch 
    - XMLHTTPRequest
    axios(khuyên dùng)

    axios la 1 obj 
    dung de goi den cac phuong thuc minh mong muon (get , post , ...)

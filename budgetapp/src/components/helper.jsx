// xu li hien thi dau cong tru 
export function formatAmount(amount){
    const numberConfig = { style: 'currency', currency: 'VND' }
    let sign = '+'
    let amountFormat = amount;

    if(amount < 0){
        sign = "-"
        amountFormat = amount * (-1)
    }

    amountFormat = new Intl.NumberFormat('vi-VN', numberConfig).format(amountFormat)
    amountFormat.substring(0 , amountFormat.length - 2)

    return `${sign} ${amountFormat}`

}
//.length bo di cac ki tu khoang trang 

// tinh tong cac gia tri duong (income )
export function totalAmount(listData){
    let total = 0 ;
    for(let i = 0; i < listData.length; i++ ){
        const data = listData[i]
        const amount = data.amount
        // console.log(amount);
        total = total + amount
        // console.log(total);
    }
    return total
}
// total la gia tri moi se cong total gia tri cu voi lai amount




// hien thi gia tri %
export function formatPercentAmount(amount , total){
    // console.log(amount , total);// hai gia tri nay bat dau bang amount gia tri am va total la 1 props duoc truyen tu ben components budgetlist 
    if(!total){
        return "0%"
    }
    let percent = Math.round((amount / total) * 100)
    if(percent < 0){
        percent = percent * (-1)
    }
    return percent + '%';
}

export function formatDateString(date) {
    if (date instanceof Date) {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
    }
    return ''
}
//round dung de lam tron gia tri 
// dk if dung de loai bo dau - 


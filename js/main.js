//Bài 1:
// Sơ đồ 3 khối :
// Input:Điểm chuẩn,số điểm 3 môn,Khu vực ưu tiên,đối tượng ưu tiên
// Xử lí:VIết hàm tính tổng 3 môn,
// kiểm tra giá trị khu vực ưu tiên nhập vào,cộng kèm với điểm tổng,
// tương tự kiểm tra đối tượng ưu tiên cũng tiếp tục cộng điểm tương ứng vào
// hàm kiểm tra khu vực,sau đó viết hàm so sánh số điểm đó với điểm chuẩn
// ,in ra kqua
// Output:Tổng số điểm sau khi đã cộng 3 môn kèm với đối tượng ưu tiên,
// khu vực ưu tiên
const scoreBtn = document.getElementById('scoreBtn')
const score1 = document.querySelector('.score1')
const score2 = document.querySelector('.score2')
const score3 = document.querySelector('.score3')
const place = document.getElementById('place')
const obj = document.getElementById('obj')
const benchmark = document.getElementById('benchmark')
const result = document.querySelector('.result')
let exchange = new Intl.NumberFormat('vn-VN').format
scoreBtn.onclick = (e) => {
    e.preventDefault()
    // console.log(calcScore(score1,score2,score3))
    compare(benchmark)
}
//Hàm tính tổng điểm 3 môn 
let calcScore = (score1,score2,score3) => parseFloat(score1.value) + parseFloat(score2.value) +parseFloat(score3.value);

//Hàm kiểm tra khu vực ưu tiên và cộng vào số điểm tương ứng
let checkPlace = (place) => {
    if(place.value === 'X') {
        return calcScore(score1,score2,score3)
    }
    else if (place.value === 'A') {
        return calcScore(score1,score2,score3) + 2 ; 
    }
    else if (place.value === 'B') {
        return calcScore(score1,score2,score3) + 1 ; 
    }
    else if (place.value === 'C') {
        return calcScore(score1,score2,score3) + 0.5 ; 
    }
}
//Hàm kiểm tra đối tượng ưu tiên và cộng vào số điểm tương ứng
let checkObj = (obj) => {
    if(obj.value === '0') {
        return checkPlace(place)
    }
    else if(obj.value === '1') {
        return checkPlace(place) + 2.5;
    }
    else if(obj.value === '2') {
        return checkPlace(place) + 1.5;
    }
    else if(obj.value === '3') {
        return checkPlace(place) + 1;
    }
}
let compare = (benchmark) => {
    if(isNaN(checkObj(obj))) {
        result.style.display = 'block'
        result.style.color = 'red'
        result.innerHTML = `Vui lòng điền thông tin !`
    }
    else if(benchmark.value <= checkObj(obj)) {
        result.style.display = 'block'
        result.innerHTML = `Bạn đã đậu với số điểm : ${checkObj(obj)}`
        result.style.backgroundColor = 'green';
    }
    else {
        result.style.display = 'block'
        result.innerHTML = `Bạn đã rớt với số điểm : ${checkObj(obj)}`
        result.style.backgroundColor = 'red';
    }
}



//Bài 2:
// Sơ đồ 3 khối:
// Input :tên người dùng ,số kw sử dụng
// Xử lí:Viết câu điều kiện nếu đạt trong khoản sử dụng thì 
// lấy số kw sử dụng nhân cho giá trị tương ứng 
// Output:trả về tên người sử dụng và số tiền phải trả

const cost1 = 500;
const cost2 = 650;
const cost3 = 850;
const cost4 = 1100;
const cost5 = 1300 
const electricBtn = document.getElementById('electricBtn')
const bill  = document.getElementById('bill')
const totalPrice = document.querySelector('.total')
const userName = document.getElementById('name')
electricBtn.onclick = (e) => {
    e.preventDefault();
    calcBill(bill);
}
let calcBill = (bill) => {
    let billValue = parseFloat(bill.value);
    let total = 0;
    if(billValue <= 50 ) {
        total = billValue*cost1;
    }
    else if (billValue > 50 && billValue <=100) {
        total = 50*cost1 + (billValue - 50)*cost2
    }
    else if(billValue > 100 && billValue <=200) {
        total = 50*cost1 + 50*cost2 + (billValue-100)*cost3
    }
    else if (billValue > 200 && billValue <=350) {
        total = 50*cost1 + 50*cost2 + 100*cost3 (billValue-200)*cost4
    }
    else if (billValue > 350) {
        total = 50*cost1 + 50*cost2 + 100*cost3 + 150*cost4 +(billValue - 350)*cost5
    }
    totalPrice.innerHTML = `Khách hàng ${userName.value}
    <br>
    Tổng hóa đơn: ${exchange(total)} VND` ;
}



//Bài 3 : Tính thuế thu nhập cá nhân
// Sơ đồ 3 khối :
// Input:họ tên,thu nhập cả năm,số người phụ thuộc
// Xử lí :Viết hàm tính thu nhập chịu thuế theo công thức đã cho
// Viết hàm kiểm tra các mốc thu nhập và gán với số thuế tương ứng
// sau đó in ra tên người dùng và số tiền thuế phải trả
// Output :Thuế thu nhập sau khi xử lí
const taxBtn = document.getElementById('taxBtn')
const totalIcome = document.getElementById('totalIcome')
const persons = document.getElementById('persons')
let totalTax = document.querySelector('.total-tax')
let user = document.getElementById('user')
const PERSON = 1600000;
const COST = 4000000;
taxBtn.onclick = (e) => {
    e.preventDefault();
    calcTax()
}
function calcTotal (totalIcome,persons) {
    let total = 0;
    let totalIcomeValue = parseFloat(totalIcome.value);
    let personValue = parseFloat(persons.value);
    total = totalIcomeValue - COST - personValue*PERSON;
    return total;
}
function calcTax () {
    let target = calcTotal(totalIcome,persons)
    let userValue = user.value;
    let tax = 0;
    if(target <= 60000000) {
        tax = target*5/100
    }
    else if(target > 60000000 && target <=120000000) {
        tax = target*10/100
    }
    else if(target > 120000000 && target <=210000000) {
        tax = target*15/100
    }
    else if(target > 210000000 && target <=384000000) {
        tax = target*20/100
    }
    else if(target > 384000000 && target <=624000000) {
        tax = target*25/100
    }
    else if(target > 624000000 && target <=960000000) {
        tax = target*30/100
    }
    else if (target > 960000000) {
        tax = target*35/100
    }
    totalTax.innerHTML = `Họ tên :${userValue}
    <br>
    Số tiền thuế phải đóng : ${exchange(tax)} VND
    ` 
}




//Bài 4
// Sơ đồ 3 khối:
// Input:mã khách hàng,loại khách hàng,số kênh cao cấp,số cổng kết nối nếu là doanh nghiệp
// Xử lí:Viết một hàm kiểm tra có phải là doanh nghiệp không
// Nếu đúng thì cho ô số cổng kết nối xuất hiện và cho biến isCompany = true
// Nếu không thì cho ẩn và cho biến isCompany = false
// viết hàm chọn phương thức khách hàng 
// nếu là cty thì chạy hàm calcCompany,
// nếu là nhà dân thì chạy hàm calcNormal
// hàm calcCompany tính toán và in ra mã doanh nghiệp,số tiền phải trả 
// theo công thức nếu cổng kết nối > 10 thì số tiền mỗi cổng thêm 5$
// hàm calcNormal tính toán và in ra mã doanh nghiệp,số tiền phải trả 
// theo công thức  
// Output:Trả với mức giá tiền cáp tùy vào loại khách hàng có công thức khác nhau
const cableBtn = document.getElementById('cable-btn')
const userID = document.getElementById('userId')
const channel = document.getElementById('channel')
const optional = document.getElementById('optional')
const connect = document.querySelector('.connect')
const connectCable = document.getElementById('connect-cable')
const BASIC_HANDLE_COST_NORMAL = 4.5;
const BASIC_COST_NORMAL = 20.5;
const VIP_CABLE_NORMAL = 7.5;
const BASIC_HANDLE_COST_COMPANY = 15;
const BASIC_COST_COMPANY = 75;
const EXTRA_COST_COMPANY = 5;
const VIP_CABLE_COMPANY = 50;
const totalBill = document.querySelector('.total-bill')

cableBtn.onclick = (e) => {
    e.preventDefault()
    checkCalc()
}
function checkCompany () {
    let isCompany = false;
    let optionalValue = optional.value;
    if(optionalValue === 'company') {
        connect.classList.remove('disable')
        isCompany = true;
    }
    else {
        connect.classList.add('disable')
        isCompany = false;
    }
    return isCompany;
}
function checkCalc () {
    checkCompany() === true ? calcCompany(userID,channel,connectCable) : calcNormal(userID,channel);
}
function calcCompany(userID,channel,connectCable) {
    let userIDValue = userID.value ;
    let channelValue = channel.value;
    let connectCableValue = connectCable.value
    let total = 0;
    if(connectCableValue <= 10) {
        total = BASIC_COST_COMPANY*connectCableValue + 
        BASIC_HANDLE_COST_COMPANY + VIP_CABLE_COMPANY*channelValue
    }
    else if (connectCableValue > 10) {
        total = BASIC_COST_COMPANY + (connectCableValue-10)*EXTRA_COST_COMPANY 
        + BASIC_HANDLE_COST_COMPANY + VIP_CABLE_COMPANY*channelValue
    }
    totalBill.innerHTML = `Mã doanh nghiệp : ${userIDValue}
    <br>
    Tổng số tiền phải thanh toán : ${exchange(total)}$
    `
}
function calcNormal(userID,channel) {
    let userIDValue = userID.value ;
    let channelValue = channel.value;
    let total = 0;
    total = BASIC_HANDLE_COST_NORMAL + BASIC_COST_NORMAL + VIP_CABLE_NORMAL* channelValue;
    totalBill.innerHTML = `Mã khách hàng : ${userIDValue}
    <br>
    Tổng số tiền phải thanh toán : ${exchange(total)}$
    `
}
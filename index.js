let pdAmount=document.getElementById('pd-amount');
let shiping=document.getElementById('shiping-charge');
let totalcard=document.getElementById('total-card');
let checkout=document.getElementById('checkout');
let discount_code1=document.getElementById('discount_code1');
let complete=document.getElementById('complete');
const decreament= (incdec,price) => {
var itemval = document.getElementById(incdec);
var priceamount=document.getElementById(price);
if(itemval.value <= 0){
itemval.value = 0;
alert('Negative quantity not allowed');
}else{
itemval.value = parseInt(itemval.value) - 1;
priceamount.innerHTML=parseInt(priceamount.innerHTML)-15;
pdAmount.innerHTML=parseInt(pdAmount.innerHTML)-15;
totalcard.innerHTML=parseInt(pdAmount.innerHTML) +parseInt(shiping.innerHTML);
complete.innerHTML=''
}
}

const increament = (item2,money) =>{
   let itembox=document.getElementById(item2);
   let moneyamount=document.getElementById(money);
   
   console.log(moneyamount)
    console.log(itembox)
    if(itembox.value>=5){
        itembox.value=5;
        alert('max you can add 5')
        itembox.style.backgroundColor='red';
        itembox.style.color='white';
    }
    else{
        itembox.value=parseInt(itembox.value)+1;
        moneyamount.innerText=parseInt(moneyamount.innerText) +15
        pdAmount.innerHTML=parseInt(pdAmount.innerHTML) +
        15;
        totalcard.innerHTML=parseInt(moneyamount.innerText) +parseInt( shiping.innerText);
        complete.innerHTML=''
    }
}


checkout.addEventListener('click',function(){

    complete.innerHTML='Your order is submitted'

})

const discount_code=()=>{
    let finalCart=parseInt(totalcard.innerHTML)
    console.log('fina',finalCart)
    let error_trw=document.getElementById('error_trw')
    if(discount_code1.value=='build'){
      let newtotal=finalCart-30;
      totalcard.innerHTML=newtotal;
      error_trw.innerHTML='code is vaild'
    }
    else{
        error_trw.innerHTML='invalid code'
    }
}


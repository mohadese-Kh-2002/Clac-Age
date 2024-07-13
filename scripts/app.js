const $=document
const CalcBtn=$.querySelector('.Calc-age__submit')
const CalcForm=$.querySelector('.Clac-age__form')
const ClacAgeInput=$.querySelector('.Clac-age__input')
const ClacResult=$.querySelector(".age")

CalcForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const age=/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
    if(age.test(ClacAgeInput.value)){
        const tarikh=new persianDate()
        const year=ClacAgeInput.value.slice(0,4)
        const month=ClacAgeInput.value.slice(5,7)
        const day=ClacAgeInput.value.slice(8,10)
        const yearPerson=+tarikh.toLocale('en').format("YYYY")- +year
        const monthPerson=+tarikh.toLocale('en').format("MM")- +month
        const dayPerson=+tarikh.toLocale('en').format("DD")- +day
        ClacResult.innerHTML=`
        <span>${ClacAgeInput.value} => </span>
        <span>years: ${yearPerson}</span>
        <span>months: ${monthPerson}</span>
        <span>days: ${dayPerson}</span>
        `
        
    }else{
        ClacResult.innerHTML='your date is invalid!'
        ClacResult.style.cssText='color:#fe0000'
    }
    ClacAgeInput.value=''
})
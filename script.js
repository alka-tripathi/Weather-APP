APIkey = "69e188e7c3754605b0d182757241308";
let cityinput = document.getElementById("inputbox");
let btn = document.getElementById("searchbtn");
let input = cityinput.value;

//output card
let cityname=document.getElementById("city-name");
let country = document.getElementById("country-name");
let temp =document.getElementById("temp");
let localtime =document.getElementById("loc-time");



//http://api.weatherapi.com/v1/current.json?key=69e188e7c3754605b0d182757241308&q=London&aqi=yes


 async function getdata(APIkey,cityinput){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${cityinput}&aqi=yes`)
    return await response.json();
}
btn.addEventListener("click",async()=>{
    // console.log(input.value);
    const input = cityinput.value;
    const result = await getdata(APIkey,input);
    console.log(result);
    cityname.innerText=`${result.location.name},${result.location.region}`;
    country.innerText=result.location.country;
    temp.innerText=`${result.current.temp_c}Celsius`;
    localtime.innerText=`${result.location.localtime}`;

});
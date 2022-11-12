var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.win span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var nd;
var body = document.querySelector('body');

//https://openweathermap.org/api

async function changeWeatherAPI(){
    var capitalsearch = search.value.trim();
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${capitalsearch}&appid=507f532be7770fea18ad4ad71071a599`
    let data = await fetch(urlAPI).then(res => res.json())
    
    if(data.cod == 200){
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main: ''
        time.innerText = new Date().toLocaleDateString('vi')

        body.setAttribute('class','cold')
        if(temp >= 27){
            body.setAttribute('class','hot')
        }
        if(temp <= 26){
            body.setAttribute('class','cold')
        }
    }else{
        content.classList.add('hide');
    }
    
}


search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        changeWeatherAPI();
        if(nd >= 28 )
        {
            weather.classList.remove('img1');
            weather.classList.add('img');
            
        }
        else
        {
            weather.classList.remove('img');
            weather.classList.add('img1');
        }
    }
})
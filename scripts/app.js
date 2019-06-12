const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast;

const updateUI = (data) => {
  
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  //destructure properties
  const { cityDets, weather} = data;

  //Put information on the ui
  details.innerHTML = `
  <h5 class="my-3">${ cityDets.EnglishName }</h5>
  <div class="my-3">${ weather.WeatherText }</div>
  <div class="display-4 my-4">
    <span>${  weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;

  //show on the browser
  if( card.classList.contains('d-none') ) {
    card.classList.remove('d-none');
  }

  //update day/night images and icon time

  /////icon time
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);


  ////////time image
  //His way
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  // if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg';
  // }

  time.setAttribute('src', timeSrc);

  
  //My way -> Is correct, but if I add more images and times or want to change something, I would have to change one at a time.
  // if(weather.IsDayTime){
  //   time.setAttribute('src', 'img/day.svg');
  // } else {
  //   time.setAttribute('src', 'img/night.svg');
  // }

};

//city form event
cityForm.addEventListener('submit', e => {
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update de ui with new city
  forecast.updateCity(city)
    .then( data => updateUI(data))
    .catch(err => console.log('Something went wrong.', err));

  //set local storage
  localStorage.setItem('city', city);

});

if ( localStorage.getItem('city') ) {
  forecast.updateCity( localStorage.getItem('city') )
    .then( data => updateUI(data) )
    .catch( err => console.log(err) );
}
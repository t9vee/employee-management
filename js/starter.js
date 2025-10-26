var today = new Date();
var todaydate = today.getDate();
var todayMonth = today.getMonth()+1;
var todayYear = today.getFullYear();
var fullDate = todayYear+'-'+todayMonth+'-'+todaydate;



function showLocation(){
  navigator.geolocation.getCurrentPosition(
  function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  },
  function (error) {
    console.error('Error getting location:', error.message);
  }
);
}


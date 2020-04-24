$(document).ready(function() {
  var count=0;
  var yy;
  $("#button_1").click(function(e) {
    var x = document.getElementById('shoot');
    var y = $('#text_1').val();
    var z = $('#text_2').val();
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + y + ',' + z + '&APPID=YOUR_ID',
      dataType: 'jsonp',
      success: function(json) {
          s1.innerText = (json.main.temp-273.15) + " 'C";
          s2.innerText = json.clouds.all + " %";
          s3.innerText = json.main.humidity + " %";
          s4.innerText = json.main.pressure + " hpa";
          s5.innerText = json.wind.speed + " m/s";
          x.style.display = "block";
      }
  });
  });

  $("#button_2").click(function(e) {
    var x = document.getElementById('shoot');
    var y = $('#text_3').val();
    var z = $('#text_4').val();
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + y + '&lon=' + z + '&APPID=YOUR_ID',
      dataType: 'jsonp',
      success: function(json) {
          s1.innerText = (json.main.temp-273.15) + " 'C";
          s2.innerText = json.clouds.all + " %";
          s3.innerText = json.main.humidity + " %";
          s4.innerText = json.main.pressure + " hpa";
          s5.innerText = json.wind.speed + " m/s";
          x.style.display = "block";
      }
  });
  });

  $("#button_3").click(function(e) {
    var x = document.getElementById('shoot')
    var y = document.getElementById('first_1');
    var z = document.getElementById('second');
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  });

  $("#button_4").click(function(e) {
    var x = document.getElementById('shoot')
    var y = document.getElementById('first_1');
    var z = document.getElementById('second');
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  });

  $("#show").click(function(e) {
    var y = document.getElementById('show');
    var yz = document.getElementById('hide');
    var z = document.getElementById('forecast');
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?lat=23.20&lon=77.08&APPID=YOUR_ID',
      dataType: 'jsonp',
      success: function(json) {
        p1.innerText = "Temprature : " + (json.list[count].main.temp-273.15) + " 'C";
        p2.innerText = "Clouds : " + json.list[count].clouds.all + " %";
        p3.innerText = "Humidity : " + json.list[count].main.humidity + " %";
        p6.innerText = "Date and Time : " + json.list[count].dt_txt;
        p4.innerText = "Pressure : " + json.list[count].main.pressure + " hpa";
        p5.innerText = "Wind Speed : " + json.list[count].wind.speed + " m/s";
      }
  });
    y.style.display = "none";
    yz.style.display = "block";
    z.style.display = "block";
  });
  $("#hide").click(function(e) {
    var y = document.getElementById('hide');
    var yz = document.getElementById('show');
    var z = document.getElementById('forecast');
    y.style.display = "none";
    yz.style.display = "block";
    z.style.display = "none";
  });


  $("#prev").click(function(e) {
    if(count>0){
      count = count-1;
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast?lat=23.20&lon=77.08&APPID=YOUR_ID',
        dataType: 'jsonp',
        success: function(json) {
          p1.innerText = "Temprature : " + (json.list[count].main.temp-273.15) + " 'C";
          p2.innerText = "Clouds : " + json.list[count].clouds.all + " %";
          p3.innerText = "Humidity : " + json.list[count].main.humidity + " %";
          p6.innerText = "Date and Time : " + json.list[count].dt_txt;
          p4.innerText = "Pressure : " + json.list[count].main.pressure + " hpa";
          p5.innerText = "Wind Speed : " + json.list[count].wind.speed + " m/s";
        }
    });
  }
  });

  $("#next").click(function(e) {
    count = count+1;
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?lat=23.20&lon=77.08&APPID=YOUR_ID',
      dataType: 'jsonp',
      success: function(json) {
        p1.innerText = "Temprature : " + (json.list[count].main.temp-273.15) + " 'C";
        p2.innerText = "Clouds : " + json.list[count].clouds.all + " %";
        p3.innerText = "Humidity : " + json.list[count].main.humidity + " %";
        p6.innerText = "Date and Time : " + json.list[count].dt_txt;
        p4.innerText = "Pressure : " + json.list[count].main.pressure + " hpa";
        p5.innerText = "Wind Speed : " + json.list[count].wind.speed + " m/s";
      }
  });
  });

  $("#prev_day").click(function(e) {
    if(count>0){
      count = count-8;
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast?lat=23.20&lon=77.08&APPID=YOUR_ID',
        dataType: 'jsonp',
        success: function(json) {
          p1.innerText = "Temprature : " + (json.list[count].main.temp-273.15) + " 'C";
          p2.innerText = "Clouds : " + json.list[count].clouds.all + " %";
          p3.innerText = "Humidity : " + json.list[count].main.humidity + " %";
          p6.innerText = "Date and Time : " + json.list[count].dt_txt;
          p4.innerText = "Pressure : " + json.list[count].main.pressure + " hpa";
          p5.innerText = "Wind Speed : " + json.list[count].wind.speed + " m/s";
        }
    });
  }
  });

  $("#next_day").click(function(e) {
    count = count+8;
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?lat=23.20&lon=77.08&APPID=YOUR_ID',
      dataType: 'jsonp',
      success: function(json) {
        p1.innerText = "Temprature : " + (json.list[count].main.temp-273.15) + " 'C";
        p2.innerText = "Clouds : " + json.list[count].clouds.all + " %";
        p3.innerText = "Humidity : " + json.list[count].main.humidity + " %";
        p6.innerText = "Date and Time : " + json.list[count].dt_txt;
        p4.innerText = "Pressure : " + json.list[count].main.pressure + " hpa";
        p5.innerText = "Wind Speed : " + json.list[count].wind.speed + " m/s";
      }
  });
  });
});

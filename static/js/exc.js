$(document).ready(function() {
  var yy;
  var x = document.getElementById('result');
  $("#button_1").click(function(e) {
    var y = $('#text_1').val();
    var z = $('#text_2').val();
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + y + ',' + z + '&APPID=3ea8c4603341150369ad240ffece6189',
      dataType: 'jsonp',
      success: function(json) {
          s1.innerText = json.main.temp + " 'C";
          s2.innerText = json.clouds.all + " %";
          s3.innerText = json.main.humidity + " %";
          s4.innerText = json.main.pressure + " hpa";
          s5.innerText = json.wind.speed + " m/s";
          x.style.display = "block";
      }
  });
  });
});

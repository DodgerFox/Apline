google.maps.event.addDomListener(window, 'load', init);
function init(){
  var mapOptions = {
  	zoom: 15,
  	center: new google.maps.LatLng(55.107471, 33.247424),
  	disableDefaultUI: true,
  	draggable: true
  }
  var mapElement = document.getElementById('map');

	var map = new google.maps.Map(mapElement, mapOptions);
	// var image = '/local/templates/main/assets/images/map-marker.png';
  //
	// var marker1 = new google.maps.Marker({
	// 	position: new google.maps.LatLng(55.107471, 33.247424),
	// 	map: map,
	// 	icon: image,
	// 	title: ''
	// });
}

function openMap() {
  $('.onthemap p').click(function () {
    $('.map').addClass('open')
    $(document).on("click", function (e){
      var div = $(".onthemap");
      if (!div.is(e.target)
      && div.has(e.target).length === 0) {
        $('.map').removeClass('open')
      }
    });
  })
}
openMap()

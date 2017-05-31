

	 var app = angular.module('myApp', []);
app.controller('UserController', function($scope){
   $scope.placelist = landmarks;
});


$(function($) {
	if($("body").hasClass("locations")){
	
		  	initialize();
			var latpre = getParameterByName("lat");
			var lngpre = getParameterByName("lng");
			if((latpre!= undefined && lngpre != undefined)&&(latpre!= "" && lngpre != "")){
				locate(latpre,lngpre);
			}
			
		}
		
		$(document).on('submit','form.submit1',function(e){	  
			   e.preventDefault();
			  var validform ="valid";
			  var stat = $(this).find(".selstore").val();
			  var isValidZip =  /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/ .test(stat);			
			  if(stat===""){
				alert("please enter a valid  zipcode or select a city")  
				validform ="invalid";
			  }else if(isValidZip){				
				  var geocoder = new google.maps.Geocoder();	
				  geocoder.geocode( { 'address': stat}, function(results, status) {						
					  var getvsref = localStorage.getVar;
					  var querystring = "";				  				  
					  if (status == google.maps.GeocoderStatus.OK) {
						  //var inp=results[0].geometry.location;
						var lat = results[0].geometry.location.lat();
						var lng = results[0].geometry.location.lng();
		  				//window.location.href = "/resultStore?lat=" + lat + "&lng=" + lng+ "&radius=35";		 				
		 				setTimeout(function(){
							if($("body").hasClass("locations")){
								locate(lat,lng);
							}else{
								window.location.href = "/locations?lat=" + lat + "&lng=" + lng ;  
							}
						}, 200);		 						  				
      					} else {
        					msmsg+=stat + " is not valid zipcode";							alert(msg);
							validform ="invalid";
						}
			  }); // end geocoder 			  
			}else{
				stat= stat.toLowerCase();
				
				var combopsentinel = false;				
				var combopsentinel = false;				
				var counter =0;
				for(var i=0; i<cities.length; i++){
					if(cities[i].value.toLowerCase().indexOf(stat) >=0){						
						var datsplit  =  cities[i].data.split(',');
						
						if($("body").hasClass("locations")){
								locate(datsplit[0],datsplit[1]);
							}else{	
								window.location.href = "/locations?lat=" + datsplit[0] + "&lng=" + datsplit[1] ;							}
						combopsentinel = true;
					}
				}
				if(!combopsentinel){
					alert("Please enter a Valid zip code or select a city");
					validform ="invalid";
				}
				
			}
			
	  	});
		if($(".autocomplete").length){
			$('.autocomplete').autocomplete({
				lookup: cities,
				onSelect: function (suggestion) {
					var datsplit  = suggestion.data.split(',');
					if($("body").hasClass("locations")){
					   locate(datsplit[0],datsplit[1]);
					}else{		
						windwindow.location.href = "/locations?lat=" + datsplit[0] + "&lng=" + datsplit[1] ; 				}
				}
			});
		}
		if($('#map_canvas').length){//make sure it only runs on page where there's a map
		$('body').on('mousedown', function(event) {
			var clickedInsideMap = $(event.target).parents('#map_canvas').length > 0;
			if(!clickedInsideMap) {
				disableScrollingWithMouseWheel($('#map_canvas'));
			}else{
				enableScrollingWithMouseWheel(null);
			}
		});	
		$(window).scroll(function() {
			disableScrollingWithMouseWheel($('#map_canvas'));
		});
		}
});
/*location and store functions*/
	function locate( latitude , longitude ){
		var earthRadius1 = 6371.0; // miles
		var maxDistance1 = 250.0;
		var loccounter =0;
		deleteMarkers();
		var newMarkers = [],
				marker;	
		var latlngbounds = new google.maps.LatLngBounds(); 	
		$(".storesection").hide();
		for(i = 0; i< $(".storesection").length;i++ ){
			var storeobject =  $(".storesection")[i];
			var latp = storeobject.getAttribute("data-lat");
			var longp= storeobject.getAttribute("data-long");
			var id = storeobject.getAttribute("id");
			var longf = parseFloat(longp);
			var latf = parseFloat(latp);				
			
			var dLati = Math.PI * ((latitude - latf) / 180.0);
			var dLoni = Math.PI * ((longitude - longf) / 180.0);      
			var lati1 = Math.PI * (latf / 180.0);
			var lati2 = Math.PI * (latitude / 180.0);
			
			var a1 = Math.sin(dLati / 2) * Math.sin(dLati / 2) + Math.sin(dLoni / 2) * Math.sin(dLoni / 2) * Math.cos(lati1) * Math.cos(lati2);
			var c1 = 2 * Math.atan2(Math.sqrt(a1), Math.sqrt(1-a1));
			var test = earthRadius1 * c1;
			if(earthRadius1 * c1 <= maxDistance1) {				
				loccounter++;
				$("#"+id).show();
				marker = new google.maps.Marker({
					map: map,
					draggable: false,
					position: new google.maps.LatLng(latf, longf),
					visible: true,	
					title: $("#"+id+">.loccontent>.title").text(),
					
				});
				var contentString= $("#"+id).html();
				marker.info = new google.maps.InfoWindow({
					content: contentString
				});	
				marker.addListener('click', function() {
					this.info.open(map, this);
				});;	
				newMarkers.push(marker);
				latlngbounds.extend(new google.maps.LatLng(latf, longf));
				map.setZoom(5);
			}
			markers = newMarkers;
			
		}
		if(loccounter===0){
			$(".storesection").show();
			alert("no location near you");	initMarkers(map);
		}else{
			$(".numStore").text(loccounter);
			$(".hidenum").css("display","block");
			map.fitBounds(latlngbounds);
			google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
				if (this.getZoom() > 14) {
					this.setZoom(14);
				}
});
		}
		
	}
	var el = $('#map_canvas');
	
	var markers;
	 
	function initialize() {
		var secheltLoc = new google.maps.LatLng(49.8291931, -97.1100462),			
			myMapOptions = {
				zoom: 3,
				center: secheltLoc,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		map = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);				
		markers = initMarkers(map);
		
		
	 
	}
	function initMarkers(maps) {						
		var newMarkers = [],
			marker;
		
		var latlngbounds = new google.maps.LatLngBounds(); 	
					
		for(var i=0; i< $(".storesection").length; i++) {
			var d = i+1;
			var storeobject =  $(".storesection")[i];
			var latp = storeobject.getAttribute("data-lat");
			var longp= storeobject.getAttribute("data-long");
			var id = storeobject.getAttribute("id");
			var longf = parseFloat(longp);
			var latf = parseFloat(latp);
			var contentString= $("#"+id).html().replace("<img src=\"/resources/images/searmark.png\">", "");
		
			
			marker = new google.maps.Marker({
				map: maps,
				draggable: false,
				position: new google.maps.LatLng(latf, longf),
				visible: true,
				title: $("#"+id+">.loccontent>.title").text()
			});
			marker.info = new google.maps.InfoWindow({
				content: contentString
			});	
			marker.addListener('click', function() {
				this.info.open(map, this);
			});
			newMarkers.push(marker);
			latlngbounds.extend(new google.maps.LatLng(latf, longf));
				
		}
		map.fitBounds(latlngbounds);
		return newMarkers;
	}
	 // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

     // Removes the markers from the map, but keeps them in the array.
     function clearMarkers() {
        setMapOnAll(null);
     }
	function deleteMarkers() {
        clearMarkers();
        markers = [];
     }
	
	function enableScrollingWithMouseWheel(mapi) {
		map.setOptions({ scrollwheel: true });
	}
	function disableScrollingWithMouseWheel(mapi) {
		map.setOptions({ scrollwheel: false });
	}
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	function initializemap( latitude , longitude ){
	
	var markers;
		var secheltLoc = new google.maps.LatLng(latitude, longitude),			
			myMapOptions = {
				zoom: 8,
				center: secheltLoc,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		map = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);
		var contentString = $(".adresscont").html() ;
		var newMarkers = [],
				marker;	
		 
			marker = new google.maps.Marker({
					map: map,
					draggable: false,
					position: new google.maps.LatLng(latitude, longitude),
					visible: true,	
					title: $(".adresscont>.title").text()
			});
			marker.info = new google.maps.InfoWindow({
				content: contentString
			});	
			marker.addListener('click', function() {
				this.info.open(map, this);
			});
			newMarkers.push(marker);

		 markers = newMarkers;
	 }
/*end location and store  funtions*/

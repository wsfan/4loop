  $.ajax({

    url: "http://content.guardianapis.com/news?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "<br>" + this['fields'].trailText + "</li>");
		  });
		/*$( "#news" ).append("<li>"  + field {this['trailText'] + "</li>");
		  });*/

    }});
	 $.ajax({

    url: "http://content.guardianapis.com/football?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "<br>" + this['fields'].trailText + "</li>")

      });

    }});
	 $.ajax({

    url: "http://content.guardianapis.com/travel?show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append("<li>"  + '<a href="' + this['webUrl']  +'">' + this['webTitle'] + '</a>' + "<br>" + this['fields'].trailText + "</li>")

      });

    }});
	
	$(document).ready(function(){
			$("p").hide();
			});

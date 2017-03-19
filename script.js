$(document).ready(function() {

  $("#searchRecipes").click(function(event) {
    event.preventDefault();

    $("#videos").empty();

    $("#instructionBox").hide();

    var ingredient = $(".ingBox").val();

    var meal = $("#mySelect").val();

    $.getJSON("https://www.googleapis.com/youtube/v3/search?id=[YOUR_ID]&key=[YOUR_API_KEY]&part=snippet&q=vegan+recipe " + ingredient +  " " + meal, function(data) {

      var arr = data.items;

      $("#videos").append(`<div class="col-md-6">
        <div class="videoBox"><iframe class="videoSpecs" src="http://www.youtube.com/embed/${arr[0].id.videoId}"
 allowfullscreen></iframe></div>
        <div class="videoBox"><iframe class="videoSpecs" src="http://www.youtube.com/embed/${arr[1].id.videoId}"
 allowfullscreen></iframe></div>
      </div>
      <div class="col-md-6">
        <div class="videoBox"><iframe class="videoSpecs" src="http://www.youtube.com/embed/${arr[2].id.videoId}"
 allowfullscreen></iframe></div>
        <div class="videoBox"><iframe class="videoSpecs" src="http://www.youtube.com/embed/${arr[3].id.videoId}"
     allowfullscreen></iframe></div>
      </div>`);
    });

    $(".ingBox").val("");

    $("#mySelect").val("choose");

  });

});

'use strict';

var app = angular.module('myApp', ['angularSoundManager', 'ngRoute', 'angularUtils.directives.dirPagination']);

// configure the routes
app.config(function($routeProvider) {
  $routeProvider

            // route for the home page
            .when('/home', {
              templateUrl : 'pages/main.html',
              controller  : 'MainController'
            })

            // route for the about page
            .when('/history', {
              templateUrl : 'pages/playHistory.html',
              controller  : 'playlistController'
            })

            // route for the contact page
            .when('/contact', {
              templateUrl : 'pages/contact.html',
              controller  : 'ContactController'
            });
          });


app.controller('playlistController', function($scope, $route, $location) {

 var retrievePlaylist = localStorage.getItem("PlayListArray");
 var playlistToArray = JSON.parse(retrievePlaylist);

 $scope.localArray = [];

 if (localStorage.getItem("PlayListArray") === null) {
 } else {
  var n = (playlistToArray.length);
  for (var i = 0; i < n; i++){

    var allLocalTracks = {

      id: playlistToArray[i].id,
      title: playlistToArray[i].title,
      url: playlistToArray[i].url

    };

    $scope.localArray.push(allLocalTracks);
  }
}

$scope.clearStorage = function(){
  localStorage.clear();
};


$scope.delete = function(index){
  $scope.localArray.splice(index, 1);
  localStorage.removeItem(index);

  jsonToLocalStorage($scope.localArray);

};

function jsonToLocalStorage() {
  var jsonTodo = angular.toJson($scope.localArray);
  if (jsonTodo != 'null') {
    localStorage.setItem("PlayListArray", jsonTodo);
  } else {
    alert("Invalid JSON!");
  }
}

$scope.reloadRoute = function() {
 $route.reload();
};
}
);

app.controller('MainController', function($scope, $http, $location){

  $scope.changeView = function(view){
            $location.path(view); // path not hash
          };

          $scope.pageSize = 10;
          $scope.songs = [];

          $scope.pageChanged = function() {
           window.scrollTo(0,0);
           $scope.currentPage = 1;
         };

         if($scope.search === undefined){
          $scope.search = "new year";
          fetch();
        }

        var pendingTask;

        $scope.change = function(){
          if(pendingTask){
            clearTimeout(pendingTask);
          }
          pendingTask = setTimeout(fetch);

        };

        $scope.select = function($event){
         $event.target.select();
       };


       function fetch(){
        $scope.loading = true;
        $scope.resultMessage = false;
        $scope.songs = [];
        $http.get("http://www.findthetune.com/guests/search/phrase=" + $scope.search + "&perpage=500")
        .success(function(response){
          $scope.loading = false;
          $scope.currentPage = 1;
          $scope.details = response;
          $scope.resultMessage = true;

          for(var i=0; i < response.tracks.length; i++){

            var labelName = response.tracks[i].label_fk;
            var labelLow = labelName.toLowerCase();
            var resultUrl = "http://server1.findthetune.com/stream_music_file.php?lbl="+labelLow+"&alb="+response.tracks[i].album_num+"&trk="+response.tracks[i].track_num+"";
            var imgUrl = "http://www.findthetune.com/online/music/display_album_cover/"+labelLow+"/"+response.tracks[i].album_num+"";

            var allTracks = {
              id: response.tracks[i].track_id,
              lbl_fk: response.tracks[i].label_fk,
              alb_num: response.tracks[i].album_num,
              track_num: response.tracks[i].track_num,
              track_descr: response.tracks[i].description,
              track_dur: response.tracks[i].duration,
              title: response.tracks[i].primary_title,
              artist: response.tracks[i].composers,
              img: imgUrl,
              url: resultUrl
            };

            $scope.songs.push(allTracks);
          }
        });
}


});

app.controller('PaginationController', function($scope){
  $scope.pageChangeHandler = function(num) {
    window.scrollTo(0,0);
    console.log('going to page ' + num);
  };
});

app.controller('ContactController', function($scope, $http) {
 
  $scope.signUp = function (contactform) {
    if (contactform.$valid) {
      var request = $http({
        method: "post",
        url: "http://soundident.com/ftt/insert.php",
        crossDomain : true,
        data: {
          username: $scope.username,
          email:    $scope.email,
          country: $scope.country,
          subject: $scope.subject,
          message: $scope.message
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      /* Successful HTTP post request or not */
      request.success(function(data) {
        if(request.success){
          $scope.submitButtonDisabled = true;
          $scope.result='bg-success';
          $scope.responseMessage = "Request successfully sent";
        }
        else {
          $scope.submitButtonDisabled = false;
          $scope.result='bg-danger';
          $scope.responseMessage = "Error submitting request - make sure that no fields are left empty.";
        }
      });
    }
  };
});

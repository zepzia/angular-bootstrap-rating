var app = angular.module('myModule', ['ui.bootstrap']);

app.controller('RatingDemoCtrl', function ($scope) {
  $scope.titlesw= ['100%','90%','80%','70%', '60%', '50%', '40%', '30%', '20%', '10%', 'Neutral', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];
  $scope.rate = 7;
  $scope.max = 21;
  $scope.overStar = $scope.rate+1;
  $scope.selectedTitle=$scope.titlesw[$scope.rate-1];
  
  $scope.neutralIndex= $scope.titlesw.indexOf('Neutral')+1;
  
  $scope.hoveringOver = function(value) {  
    $scope.selectedTitle = $scope.titlesw[value-1];
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);   
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
});
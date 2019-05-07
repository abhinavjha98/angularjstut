var app=angular.module('myapp',[]);
var App = angular.module('myApp',[]);
App.controller('CartForm',function($scope){
    $scope.myback={
        "background-image":"url(bgimage.jpg)",
        "background-size" : "cover"
    }
    $scope.tables={
        "border": "1px solid #ddd",
  "padding": "8px"
    }
    $scope.myObj = {
        "color" : "white",
        "background-color" : "coral",
        "font-size" : "60px",
        "padding" : "50px"
    }
    $scope.myadd={
        "background": "transparent",
    "border":"none",
    "outline": "none",
    "color": "#fff",
    "background": "#03a9f4",
    "padding": "5px 5px",
    "cursor": "pointer",
    "border-radius": "5px"
    }
    $scope.cart = {
        items: [{ qty: '', description: '', cost: ''}]
    }
    $scope.addItem = function() {
        $scope.cart.items.push({ qty: '', description: '', cost: ''});
    }
    $scope.removeItem = function(index) {
        $scope.cart.items.splice(index, 1);
    }
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cart.items, function(item) {
            total += item.qty * item.cost;
        })
        return total;
    }
});
// app.controller('CartForm', function($scope)
// {
    
    
// }
// );
let app = angular.module("myapp",[]);

app.controller("myctrl", function($scope, $http) {
    
    $http.get('https://api.unsplash.com/photos/?client_id=GHweiIULDANw-KNaZs5fAb1htItlqH1I0w9TSfACXKs&per_page=30&page=1')
        .then(
        (response) => {
            $scope.images = response.data;
            console.log(response.data);
        },
        (error) => {
            console.log(error);
        }
    )
})
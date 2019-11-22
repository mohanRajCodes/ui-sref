var myApp = angular.module("myModule",['ui.router']);
myApp.config(['$stateProvider','$urlRouterProvider',uiRouterFunc]);
myApp.controller("paramsObjectController",paramsObjectFunc)
myApp.controller('queryStringController',queryStringFunc)
myApp.controller('addController',addCtrlFunc);

function uiRouterFunc($stateProvider,$urlRouterProvider){

    $stateProvider
    .state("Firstlink",{
        url:'/firstLink',
        template:'<em>This is First Link</em>'
    })
    .state("paralink",{
        url:'/params/:a/:b',
        template:'<em>This is params route with two parameter</em>'
    })
    .state("noparamslink",{
        url:'/params/:a',
        template:'<em>This is params route with no parameter</em>'
    })
    .state("paramsObject",{
        url:"/paramsObject",
        template:'<em>This is an UI router with params object <p>a value:{{ a }} </p> <p> b value: {{b}} </p></em>',
        controller:'paramsObjectController',
        params:{
            a:{value:'1'},
            b:{array:true}
        }
    })
    .state("queryString",{
        url:'/queryString?a&b',
        template:'<em>This is an UI router with query string <p>a value:{{ a }} </p> <p> b value: {{b}} </p></em>',
        controller:'queryStringController'

    })
    .state("addCal",{
        url:'/add?a&b',
        templateUrl: '/Client/add.html',
        controller: 'addController'
    })
    .state("showAdd",{
        url:'/add?a&b',
        templateUrl:'/Client/addResult.html',
        controller: 'addController'
    })
    .state("root",{
        url:'/',
        template:"<em>You are in root</em>"
    });
   

    $urlRouterProvider.otherwise("/");
    
}
function paramsObjectFunc ($stateParams,$scope){

    $scope.a = $stateParams.a;
    $scope.b = $stateParams.b;
}

function queryStringFunc ($stateParams,$scope){

    $scope.a = $stateParams.a;
    $scope.b = $stateParams.b;
}

function addCtrlFunc ($state,$scope,$stateParams){

    //console.log($state);
    //console.log($scope.a + "and" + $scope.b);
    if ($stateParams.a && $stateParams.b ){
        $scope.sum =parseInt($stateParams.a) + parseInt($stateParams.b);
        $scope.showResult=true;    
    }
  
  //$scope.showResult = false;

    $scope.addfunc = function(){
        
         $state.go('showAdd',{
            a:$scope.a,
            b:$scope.b
         });

        /*$scope.sum = parseInt($scope.a) + parseInt($scope.b);
        $scope.showResult=true;
        console.log($scope.a + "and" + $scope.b);
        console.log($scope.sum);*/
    }

}


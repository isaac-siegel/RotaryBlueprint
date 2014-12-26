

console.log("controller says hello")

var firebaseRef;
var eventsRef;
var eventsSnapshot;
var arr;



//initializeFirebase()
//getAllEvents()




var app = angular.module("eventApp", ["firebase"])
    .directive('onFinishRender', function ($timeout) {     //setting up callback for ng-repeat done
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    });

app.filter('unsafe', function($sce) {
    2
    return function(val) {
        3
        return $sce.trustAsHtml(val);
        4
    };
    5
});



app.controller("eventsController", function($scope, $firebase) {


    firebaseRef = new Firebase('https://eventsharedb.firebaseio.com/');
    eventsRef = firebaseRef.child("events");



   var sync = $firebase(eventsRef);
    console.log(sync.$asArray())
    //create a synchronized array for use in our HTML code
    $scope.events = sync.$asArray();

    $scope.$on('test', function(ngRepeatFinishedEvent) {   //callback executing

        //apply css styles to elements after being added to the DOM by Angular
        new GridScrollFx( document.getElementById( 'grid' ), {
            viewportFactor : 0.4
        } );

        console.log("done");
    });

    $scope.$on('modalDone', function(ngRepeatFinishedEvent) {   //callback executing

        //apply css styles to elements after being added to the DOM by Angular
       modalSetup();

        console.log("modal setup done");
    });



});




/*

 var app = angular.module("eventApp", ["firebase"]);

 app.controller("eventsController", function($scope, $firebase) {


 firebaseRef = new Firebase('https://eventsharedb.firebaseio.com/');
 eventsRef = firebaseRef.child("events");


 var sync = $firebase(eventsRef);
 console.log(sync.$asArray())
 //create a synchronized array for use in our HTML code
 $scope.events = sync.$asArray();


 });
*/



//
//function initializeFirebase()
//{
//    firebaseRef = new Firebase('https://eventsharedb.firebaseio.com/');
//    eventsRef = firebaseRef.child("events");
//}
//
//function getAllEvents()
//{
//    eventsRef.on("value", function(snapshot) {
//        console.log(snapshot.val());  // Alerts "San Francisco"
//        eventsSnapshot = snapshot.val();
//        console.log(eventsSnapshot)
//
//
//    });
//    console.log(arr)
//    arr = eventsSnapshot.keys(o).map(function(k) { return o[k] });
//    console.log(arr)
//
//
//}


//function eventsController($scope) {
////    $scope.events = [
////        {equip:'Jani',country:'Norway'},
////        {equip:'Hege',country:'Sweden'},
////        {equip:'Kai',country:'Denmark'}
////    ];
//    console.log(arr)
//
//    $scope.events = arr
//}


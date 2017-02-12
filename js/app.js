'use strict';

var app = angular.module("myApp", ["ngRoute"]);
 app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/login.html'
    })
    .when('/notes', {
        templateUrl : 'pages/notes.html'
    });
}])
  
  app.controller('loginCtrl', function($scope,$location, $http){
        
        var found = false;
     
        getUsers(); // Load all available users
        
        // function to retrieve all Users from the DB, check whether the user exists in the DB
        // used : backend PHP file retrieveUsers.php
        function getUsers(){  
           $http.post("backendPHP/retrieveUsers.php").success(function(data){
           
           $scope.users = data;
           console.log('users',data);
            
               
               $scope.submit = function(){
               var name = $scope.name;
               var password = $scope.password;

               console.log('success',name);
             
           
                  angular.forEach($scope.users, function(item){
                
                     if($scope.name == item.name && $scope.password == item.pass){
                          found = true;
                          $scope.id_number = item.id;
                          showNotes($scope.id_number);
                       
                      }
                     
                  })
               
                  if(found){
                     $location.path('/notes'); 
                     // window.location.href = 'index.php';
                   }else
                      alert('Login incorrect');

              }; 
              
           
          });

        }; 


       

        
        // function to retrieve all Notes from the DB per particular user ID
        // used : backend PHP file retrieveNotes.php
        function showNotes(ID){
          
            $http.post("backendPHP/retrieveNotes.php?ID="+ID).success(function(data){
          
              console.log('notes: ',data);
             
                $.each(data, function(i, notes){

                  var rows = $('<tr>'+'<td>'+ notes.id +' </td> <td>'+ notes.note +' </td>'+'</tr>');
                  rows.hide();
               
                  setTimeout(function(){
               
                     $('tr:last-child').after(rows);
                     rows.delay(1000).fadeIn(1000);
                     }, i * 1500);
               
                
                });
             
            });

        }; 

        
  
  });
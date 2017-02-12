<!DOCTYPE html>
<html lang="en-US" ng-app="myApp">

<head>

<!-- load AnguarJS via CDN-->
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>

<!-- jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<!--  bootstrap  -->
<?php require_once 'css/bootstrap.html';?>

<!--  App -->
<script src="js/app.js"></script>


</head>

<body ng-controller="loginCtrl">

  <header>
  	<nav class="navbar navbar-default">
  	  <div class="container">

  	    <div class="navbar-header">
  	      <div class="navbar-brand">AnguarJS</div>
  	    </div>
  	    
  	    <ul class="nav navbar-nav navbar-right">
           
           <li><a href="#/"><i class="fa fa-home"></i> Logout</a>

           </li>

  	    </ul> 


  	  </div>
  	</nav>  


  </header>


<div>


   <div ng-view></div>
 	

 	
</div>



</body>
</html>
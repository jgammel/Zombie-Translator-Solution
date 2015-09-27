console.log("main is loaded");
requirejs.config({
	baseUrl: 'js',
    paths: {
        'jQuery':'vendors/jquery.min',
        'bootstrap':'vendors/bootstrap.min',


    },
    shim: {
    	'jQuery':{
	    	exports: '$'
    	},
        'bootstrap': ['jQuery'],
        'app': ['jQuery']
	}
   
});


require(['jQuery', 'app'],function($){
$(function(){

  console.log('required plugins loaded...');


  

  });
});
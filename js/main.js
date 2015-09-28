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

	}
   
});


require(['app']);
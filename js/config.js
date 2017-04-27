/*console.log('config')*/
requirejs.config({ 
    baseUrl: 'js/',
    paths: { 
         underscore: "plugin/underscore",
         jquery : ["https://code.jquery.com/jquery-3.2.1","plugin/jquery.min"],
         custom : "plugin/custom"
      } 
});

require(["config"],function(){
          require(['main']);
        });
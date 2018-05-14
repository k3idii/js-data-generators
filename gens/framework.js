
window._gen_registry = {};



window.registerNewGenerator = function(name, handler){  
  console.log("Register new generator : " + name, handler);
  window._gen_registry[name] = handler;

}

window._gen_object = {
  template: "",
  doPostTemplate: function(){},
  doGenerate: function(){}
}


function setupGenFramework(selector, dashboard, output){
  this._gen_selector = selector;
  this._gen_output = output;
  this._gen_dashboard = dashboard;

  this._gen_registry = [];
  
  this._proto = {
    template: "",
    doPostTemplate: function(){},
    doGenerate: function(){}
  }

  this.loadGenerators = function(arr){
    jQuery.each(arr, function(k,v){
      var path = "gens/" + v + ".js";
      jQuery.getScript(path);
    });
  }

  console.log(this);

 // jQuery.each(window._gen_registry, function (a,b){
 //   var entry = document.createElement("option");
 //   window._gen_selector[0].appendChild(entry);
 // });


}
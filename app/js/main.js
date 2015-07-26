(function(){
    var app = angular.module("main", []);
    app.controller("formController", function(){
        this.temp = "Hello World";
        $( "#ipFundName" ).autocomplete({
          source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
        });
        this.onSubmit = function(){
            alert("Hello World");
        };
    });
})();

//In order to use filter by, have to convert objects to an array
zenNotebook.filter('object2Array', function() {
    return function(input) {
        var out = [];
        for(i in input){
            out.push(input[i]);
        }
        return out;
    }
});
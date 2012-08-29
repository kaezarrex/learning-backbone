var Agency = Backbone.Model;

var Agencies = Backbone.Collection.extend({

    model: Agency,

    url: window.location.origin + '?url=http://api.transloc.com/1.1/agencies.json',

    parse: function(response) {
        return response.data;
    }

});

var agencies = new Agencies();

agencies.fetch({
    success: function() {

        agencies.forEach(function(agency) {
            log(agency.get('name'));
        });

     }
});


function log() {
    var s = '';
    _.each(arguments, function(item) {
        s = s + ' ' + item;
    });
    $('body').append('<pre>' + s + '</pre>');
};

$(document).ready(function(){
    
    $('#field-lang-select').change(function(){
        window.location.href = window.location.origin + $(this).val();
    });

    var w_url = window.location.href.split('/')[3];

    $('form.lang-select').before('<div class="newLang"><img src="'+window.location.origin +'/base/images/paises/'+ w_url +'.svg"></div>')

});
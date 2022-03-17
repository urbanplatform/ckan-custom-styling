$(document).ready(function(){
    
    $('#field-lang-select').change(function(){
        window.location.href = window.location.origin + $(this).val();
    });

    var w_url = window.location.href.split('/')[3];

    if(!w_url || w_url == 'dataset' || w_url == 'group' || w_url == 'about' || w_url == 'organization'){
        $('form.lang-select').before('<div class="newLang"><img src="'+window.location.origin +'/base/images/paises/es.svg"></div>')
    }

    if(w_url && w_url != 'dataset' && w_url != 'group' && w_url != 'about' && w_url != 'organization')
    $('form.lang-select').before('<div class="newLang"><img src="'+window.location.origin +'/base/images/paises/'+ w_url +'.svg"></div>')

    $('a.btn-success[data-module="api-info"]').click(function() {
        $(document).ajaxStop(function () {
            if($(this).hasClass('newBtn')){

            } else {
                $(this).addClass('newBtn');
                $('.modal:not([id])').addClass('notId fade resource-view-embed');
                $('.modal.notId').wrapAll('<div class="modal-dialog"></div>');
                $('.modal.notId').children().wrapAll('<div class="modal-dialog"></div>');
                $('.modal.notId .modal-dialog').children().wrapAll('<div class="modal-content"></div>')
            }
        });
    })

});
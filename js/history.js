// Script para la página de historia de ShotokanPedia

$(document).ready(function() {
    // Funcionalidad para pestañas de evolución
    $('.tab-btn').click(function() {
        const tabId = $(this).data('tab');
        
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        
        $('.tab-pane').removeClass('active');
        $('#' + tabId).addClass('active');
    });
    
    // Animación mejorada para la línea de tiempo
    function checkTimelineItems() {
        $('.timeline-item').each(function() {
            const itemPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            // Activar cuando el elemento esté a 80% del viewport desde la parte superior
            if (scrollPosition + windowHeight * 0.8 > itemPosition) {
                $(this).addClass('visible');
            }
        });
    }
    
    // Ejecutar al cargar y al hacer scroll
    checkTimelineItems();
    $(window).on('scroll', checkTimelineItems);
    
    // Scroll suave para los enlaces internos
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        
        $('html, body').animate({
            'scrollTop': $target.offset().top - 100
        }, 800, 'swing');
    });
});

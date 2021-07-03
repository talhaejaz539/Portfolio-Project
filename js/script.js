/* =========================================
                Portfolio magnifier
========================================= */

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // Child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
$(function(){
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel':"Image %1 of %2",
      'fitImagesInViewport':true,
      'imageFadeDuration':500,
      'showImageNumberLabel':true,

    })
    //venubox
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    new VenoBox({
        selector: '.my-video-links',
    });

});
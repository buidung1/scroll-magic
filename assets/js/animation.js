
    //get elements
    const pinContainer = document.querySelector(".pinContainer");
    let text = pinContainer.querySelector(".title");
    let charactor = pinContainer.querySelectorAll(".images");

    let screenwidth = window.outerWidth;

    //ScrollMagic
    var controller = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();
    var timeline1 = new TimelineMax();

    if (screenwidth >100) {
        timeLine.fromTo(charactor[0], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[1], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[2], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[3], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[4], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[5], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[6], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[7], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[8], 5, {x: 0}, {x: -10000}, 0)
                .fromTo(charactor[9], 5, {x: 0}, {x: -10000}, 0);



        new ScrollMagic.Scene ({
            triggerElement: pinContainer,
            triggerHook: 0,
            duration: 1000
        })
            .setPin(pinContainer)
            .setTween(timeLine)
            .addTo(controller);
    }
    

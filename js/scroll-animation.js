/*
 * @description		Animate elements only on scroll.
 * @see				DesignCourse (https://youtu.be/S18Wh9IELo0?t=954)
 * @author			Michael Gary Dean <contact@michaeldean.ca>
 */


/*
 * Define variables
 */
var tl = new TimelineMax({onUpdate:updatePercentage});	//tl = timeline
const controller = new ScrollMagic.Controller();

/*
 * @see 	https://greensock.com/docs/v2/TimelineMax/from()
 */
tl.fromTo("#scroll-headline", 1, {opacity: 0}, {opacity: 1},0.5)
.to("#scroll-headline", 1, {opacity: 0}, "-=0.25");
/*
 * Create new scrolling scene
 */
const fadeInHeadline = new ScrollMagic.Scene({
	triggerElement: ".container-title-card",
	triggerHook: "0",
	duration: "200%"
}).setTween(tl).addTo(controller);

fadeInHeadline.reverse(true);

/*
 * Update scroll progress
 */
function updatePercentage() {
	tl.progress();
	//console.log(tl.progress());
}
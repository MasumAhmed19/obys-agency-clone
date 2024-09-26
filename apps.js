let count=0;
const stopwatch = setInterval(() => {
    if(count < 101){
        document.getElementById('timer').innerText = count++
    }else{
        clearInterval(stopwatch)
    }
}, 15);




let tl = gsap.timeline()

tl.from(".line h1", {
    y:130,
    duration:0.7,
    stagger:0.2,
    delay:0.5
})

tl.from(".line1-para1, .line h2", {
    opacity:0,
    onStart: function(){
        let count=0;
        const stopwatch = setInterval(() => {
        if(count < 101){
            document.getElementById('timer').innerText = count++
        }else{
            clearInterval(stopwatch)
        }}, 15);
    }

})

tl.to("#loader", {
    opacity:0,
    duration:0.4,
    delay:1.5
})
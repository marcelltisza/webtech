$(document).ready(function () {
    $("#picture1").mouseenter(function() {
       $("#picture1").animate({
          opacity: "1",
          height: "120px",
          width: "120px"
       }, 300)
    })
    $("#picture1").mouseleave(function() {
       $("#picture1").animate({
          opacity: "0.7",
          height: "100px",
          width: "100px"
       }, 300)
    })

    $("#picture2").mouseenter(function() {
       $("#picture2").animate({
          opacity: "1",
          height: "120px",
          width: "120px"
       }, 300)
    })
    $("#picture2").mouseleave(function() {
       $("#picture2").animate({
          opacity: "0.7",
          height: "100px",
          width: "100px"
       }, 300)
    })
    
    $("#picture3").mouseenter(function() {
       $("#picture3").animate({
          opacity: "1",
          height: "120px",
          width: "120px"
       }, 300)
    })
    $("#picture3").mouseleave(function() {
       $("#picture3").animate({
          opacity: "0.7",
          height: "100px",
          width: "100px"
       }, 300)
    })

    $("#fadeInButton").click(function() {
       $("#fadein").fadeIn(1000)
    })
    $("#fadeOutButton").click(function() {
      $("#fadein").fadeOut(1000)
   })
 })
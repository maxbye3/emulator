function giveFeedback(){
    
    var messageType = $(".btn-group .active").html();
    var message = $("textarea").val();
    var name = $("#name").val();
    writeUserData(messageType,message,name);


}

function writeUserData(messageType,message,name) {
  if(name == ""){
      name = "no name left";
  }
  firebase.database().ref('message').push({
    messageType:messageType,
    message: message,
    name: name
  });

  completeFeedback();

}

function completeFeedback(){
    $(".contact-section").fadeOut(); 
}

function phone(){
    // console.log("phone here"+);
    $(".phone").css("opacity",".5");
    $(".tablet").css("opacity","1");
    $("body").css("background","#eb6b56");
    $("#frameID").css({"height":"667px","width":"375px"});
}

function tablet(){
    console.log("tablet here");
    $(".phone").css("opacity","1");
    $(".tablet").css("opacity",".5");
    $("body").css("background","#f37934");
    $("#frameID").css({"height":"1024px","width":"768px"});
}

// function buttonClick(){
//     $(".btn-default").removeClass("active");
//     console.log($(this));
//     debugger;
// }


$( ".btn-default" ).click(function() {
  $(".btn-default").removeClass("active");
  $(this).addClass("active");
});
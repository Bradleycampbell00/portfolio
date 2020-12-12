$(".submit").onClick(function(e){
    var name = $(".name");
    var email = $(".email");
    var message = $(".message");


    if (!name.val() || !email.val() || !message.val()) {
        e.preventDefault()
        alert("Invalid Input")
    } else  {
        e.preventDefault()
        $.ajax({
            url: "https://formspree.io/Bradleycampbell00@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json" 
        })
        
        $(".name").empty()
        $(".email").empty()
        $(".message").empty()
        alert("message sent")
    }
});
// message er jonno
let show_msg = document.querySelector(".show-msg");
let showMessage = document.querySelector(".fb-message");
let tooltiptext2 = document.querySelector(".tooltiptext2");
show_msg.addEventListener("click",function(){
    showMessage.classList.toggle("active");
    show_msg.classList.toggle("backGround");
    noti_fic.classList.remove("background");
    notification_main.classList.remove("active");
    admin_dashboard.classList.remove("active");
   
    
})

let chat = document.querySelector(".chat");
let Show = document.querySelector(".Show");
chat.addEventListener("click",function(){
   
    Show.classList.add("notShow")
  
})

// Notification er jonno

let noti_fic = document.querySelector(".noti-fic");
let notification_main = document.querySelector(".notification-main");

noti_fic.addEventListener("click",function(){

    notification_main.classList.toggle("active");
    showMessage.classList.remove("active");
    admin_dashboard.classList.remove("active");
    noti_fic.classList.toggle("background");
    show_msg.classList.remove("backGround");
})

//Adminer jonno

let show = document.querySelector(".show");
let admin_dashboard = document.querySelector(".admin-dashboard");
// console.log(admin_dashboard);
show.addEventListener("click",function(){
    admin_dashboard.classList.toggle("active");
    notification_main.classList.remove("active");
    showMessage.classList.remove("active");
    noti_fic.classList.remove("background");
    show_msg.classList.remove("backGround");
})

    
    
    
    
    
    
    




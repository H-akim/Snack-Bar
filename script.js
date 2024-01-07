var show_success = document.getElementById("show_success");
var show_error = document.getElementById("show_error");
var show_invalid = document.getElementById("show_invalid");
var toast_box = document.getElementById("toast_box");

let success_msg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let error_msg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error';
let invalid_msg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again';

show_success.addEventListener("click", ()=>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = success_msg;
    toast_box.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },6000);
})

show_error.addEventListener("click", ()=>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = error_msg;
    toast_box.appendChild(toast);
    if(error_msg.includes("Error")){
        toast.classList.add("Error");
    }
    setTimeout(()=>{
        toast.remove();
    },6000);
})

show_invalid.addEventListener("click", ()=>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = invalid_msg;
    toast_box.appendChild(toast);
    if(invalid_msg.includes("Invalid")){
        toast.classList.add("Invalid");
    }
    setTimeout(()=>{
        toast.remove();
    },6000);
})
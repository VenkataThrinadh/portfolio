function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        
        message: document.getElementById("message").value,

    };
    const serviceID = "service_kuble9n";
    const templateID = "template_2t6n7id"

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
           
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
    .catch(err=>console.log(err));
}


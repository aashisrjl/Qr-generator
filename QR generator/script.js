function generator(){
    var link=document.getElementById("link").value;
    var qr=document.getElementById("qr");

    //cleaar previous
    qr.innerHTML="";

    //new qr code
    var qrcode= new QRcode(qr,{
        input:url,
        height:200,
        width:200

    });

}
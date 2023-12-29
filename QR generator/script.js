function generator() {
    var link = document.getElementById("link").value;
    var qr = document.getElementById("qr");

    // Clear previous
    qr.innerHTML = "";

    // New QR code
    var qrcode = new QRCode(qr, {
        text: link,
        height: 150,
        width: 150
    });
}

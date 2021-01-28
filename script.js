//buat get video from webcam
let video = document.querySelector("#videoElement");
let width = 600;   
let height = 0;  

height = width / (4/3);

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { width: width, height: height } })
    .then(function (stream) {
        video.srcObject = stream;
    })
    .catch(function (err) {

    });
}

//setting canvasnya



video.setAttribute('width', width);
video.setAttribute('height', height);


// let arr = takepicture()
// console.log(arr)
// arr.forEach(element => {
//   let output = `<img src="${element}">`
//   target.innerHTML = output
// });

let canvas = document.querySelectorAll('.canvas');

let i = 0;
function takepicture() {
    console.log(canvas,i);
    canvas[i].setAttribute('width', width);
    canvas[i].setAttribute('height', height);
    var context = canvas[i].getContext('2d');
    context.drawImage(video, 0, 0,canvas[i].width, canvas[i].height);

    //nambah frame di canvas
    let frame = null;
    if (document.getElementById("tosca-toogle").checked) {
        frame = document.getElementById("img-tosca");
        context.drawImage(frame, 0, 0,canvas[i].width, canvas[i].height);
    }
    if (document.getElementById("putih-toogle").checked) {
        frame = document.getElementById("img-putih");
        context.drawImage(frame, 0, 0,canvas[i].width, canvas[i].height);
    }
    if (document.getElementById("doodle-toogle").checked) {
        frame = document.getElementById("img-doodle");
        context.drawImage(frame, 0, 0,canvas[i].width, canvas[i].height);
    }
    

    i++
}

function reset() {
    for (let i = 0; i < canvas.length; i++) {
    var context = canvas[i].getContext('2d');
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas[i].width, canvas[i].height);
    }
    i=0;
}

function gantiFrame(id,imgId){
    console.log(id)
    if (document.getElementById(id).checked) {
        document.getElementById(imgId).style.display ="initial"
    } else {
        document.getElementById(imgId).style.display ="none"
    }
    
}
        
        
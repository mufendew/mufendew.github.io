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





video.setAttribute('width', width);
video.setAttribute('height', height);


// let arr = takepicture()
// console.log(arr)
// arr.forEach(element => {
//   let output = `<img src="${element}">`
//   target.innerHTML = output
// });

//setting canvasnya
let canvas = document.querySelectorAll('.canvas');
let arrImg =['','','','','','']

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
    arrImg[i] = (canvas[i].toDataURL('image/png'))
    console.log(arrImg)

    i++
}

function reset() {
    for (let i = 0; i < canvas.length; i++) {
    var context = canvas[i].getContext('2d');
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas[i].width, canvas[i].height);
    arrImg[i] = ''
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

function download(i){
    let canvasHasil = document.getElementById('hasil');
    let gambarr = document.getElementById("gambar-hasil");
    canvasHasil.setAttribute('width', gambarr.width)
    canvasHasil.setAttribute('height', gambarr.height)
    let context = canvasHasil.getContext('2d');
    
    context.drawImage(gambarr, 0, 0,gambarr.width, gambarr.height);

    context.drawImage(`<img src=${arrImg[0]}>`, 0, 0);

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    let link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvasHasil.toDataURL('image/png')
    link.click();
  }
        
        
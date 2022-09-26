const videoEl = document.getElementById("video");
const buttonStart = document.getElementById("buttonStart");
const buttonSelectScreen = document.getElementById("buttonSelectScreen");

//a prompt that user select a media stream then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    console.log(mediaStream);
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
    videoEl.hidden = false;
  } catch (error) {
    //catch errors
    console.log(error);
  }
}
buttonStart.addEventListener("click", async () => {
  buttonStart.disabled = true;
  await videoEl.requestPictureInPicture();
  buttonStart.disabled = false;
});
//on load
buttonSelectScreen.addEventListener("click", selectMediaStream);

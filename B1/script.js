const video = document.getElementById("video");
const pip = document.getElementById("picture");

pip.addEventListener("click", async () => {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.play();
      await video.requestPictureInPicture();
    }
  } catch (err) {
    console.error(err);
  }
});

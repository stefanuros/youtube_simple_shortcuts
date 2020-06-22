// Like the video with ctrl+l
document.onkeypress = (e) => {
  let evt = window.event ? event : e;

  if(!evt.shiftKey) {
    return;
  }

  // If shift+L is pressed
  if (evt.code === "KeyL") {
    // Like the video
    document.getElementById("top-level-buttons").children[0].click();
  }
  // Speed up the video
  else if(evt.code === "BracketRight") {
    // Add 0.25 to the playback rate
    const playbackRate = document.getElementsByTagName("video")[0].playbackRate + 0.25;
    // Limit the playback to the default amount
    document.getElementsByTagName("video")[0].playbackRate = Math.min(Math.max(playbackRate, 0.25), 2);
  }
  else if(evt.code === "BracketLeft") {
    // Remove 0.25 from the playback rate
    const playbackRate = document.getElementsByTagName("video")[0].playbackRate - 0.25;
    // Limit the playback to the default amount
    document.getElementsByTagName("video")[0].playbackRate = Math.min(Math.max(playbackRate, 0.25), 2);
  }
}

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

  }
  else if(evt.code === "BracketLeft") {
    
  }
}

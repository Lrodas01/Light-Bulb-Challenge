function bulbToggle () {
    let bulb = document.getElementById('lightbulb');

        if (bulb.src.match ('https://lh3.googleusercontent.com/drive-viewer/AKGpihYPXDMhrwGhR0W4QnjBv5xVekNE6g4id3qkL-FWvJ4_-NhOmaC7g9r_h2dq_ZWXLDNzOxuEv48XLv4EELo_PPfq-xd8Ev_37w=s2560')) {
            bulb.src = ('https://lh3.googleusercontent.com/drive-viewer/AKGpiha_ztccUE8UMZdT_5eGZYp1D7IrnktehgYtJFAX-wfLlA3QMvhY4u7hfT6aC_eXFW0Gqwhqhyh6ZY9JPnuHkj89Hsd_f3oJGEs=s2560');
        }else{bulb.src = ('https://lh3.googleusercontent.com/drive-viewer/AKGpihYPXDMhrwGhR0W4QnjBv5xVekNE6g4id3qkL-FWvJ4_-NhOmaC7g9r_h2dq_ZWXLDNzOxuEv48XLv4EELo_PPfq-xd8Ev_37w=s2560')

        }
};


//work in progress

function backgroundToggle () {
    if (document.body.style.background.match ("white")) {
    document.body.style.background = ("black");
    } else {document.body.style.background = ("white")

    }
};


let text = document.getElementById("text");

function changeColor() {

  if (text.style.color == "black") {
    text.style.color = "white";
  } else {
    text.style.color = "black";
  }
}
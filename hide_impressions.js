const observer = new MutationObserver(onRun);
observer.observe(document.body, {childList: true, subtree: true});
  
function onRun() {
  var link_elements = document.body.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr");

  for (element of link_elements) {
    var href_link = element.getAttribute('href'); 
    if (href_link != null && href_link.match(/analytics/)) {
      element.parentNode.style.display = "none";
    }
  }

  var link_elements2 = document.body.getElementsByClassName("css-4rbku5 css-18t94o4 css-901oao r-18jsvk2 r-1loqt21 r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0");

  for (element of link_elements2) {
    var href_link = element.getAttribute('href'); 
    if (href_link != null && href_link.match(/analytics/)) {
      element.parentNode.style.display = "none";
    }
  }
}

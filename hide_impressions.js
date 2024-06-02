const observer = new MutationObserver(onRun);
observer.observe(document.body, {childList: true, subtree: true});

function hide_parent_if_analytics_link(class_name) {
  var elements = document.body.getElementsByClassName(class_name);

  for (element of elements) {
    var href_link = element.getAttribute('href'); 
    if (href_link != null && href_link.match(/analytics/)) {
      element.parentNode.style.display = "none";
    }
  }
}

function hide_element(class_name) {
  var elements = document.body.getElementsByClassName(class_name);

  for (var element of elements) {
    element.style.display = "none";
  }
}

function hide_element_if_parent_and_child(parent_class_name, class_name) {
  var elements = document.body.getElementsByClassName(class_name);

  for (var element of elements) {
    var parent = element.parentNode;
    if (parent.className == parent_class_name) {
      element.style.display = "none";
    }
  }
}

function onRun() {
  hide_parent_if_analytics_link("css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1ny4l3l r-1loqt21");
  //hide_element("css-901oao css-16my406 r-18jsvk2 r-1tl8opc r-bcqeeo r-qvutc0");
  hide_element_if_parent_and_child("css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2 r-1471scf", "css-1rynq56 r-bcqeeo r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41 r-1q142lx r-s1qlax");
  hide_element_if_parent_and_child("css-1qaijid r-bcqeeo r-qvutc0 r-1tl8opc", "css-175oi2r r-xoduu5 r-1udh08x");
  hide_element_if_parent_and_child("css-1qaijid r-bcqeeo r-qvutc0 r-1tl8opc", "css-1qaijid r-bcqeeo r-qvutc0 r-1tl8opc r-1b43r93 r-1cwl3u0");
  
  // ver.1.5
  hide_element_if_parent_and_child("css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41 r-1q142lx r-n7gxbd", "css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
  hide_element_if_parent_and_child("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc", "css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc");
  hide_element_if_parent_and_child("css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc", "css-175oi2r r-xoduu5 r-1udh08x");
}

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
  hide_parent_if_analytics_link("css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr");
  //hide_element("css-901oao css-16my406 r-18jsvk2 r-1tl8opc r-bcqeeo r-qvutc0");
  hide_element_if_parent_and_child("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2", "css-901oao r-18jsvk2 r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0");
  hide_element("css-901oao r-14j79pv r-1q142lx r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-s1qlax r-qvutc0");
}

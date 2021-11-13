const hostUrl = window.location.host;


const links = document.getElementsByTagName('a')
var len = links.length;

for (var i = 0; i < len; i++) {
  if(!links[i].href.includes(hostUrl)) {
    links[i].target = '_blank';
  }
}

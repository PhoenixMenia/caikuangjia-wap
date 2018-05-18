(function () {
  var h = document.documentElement.clientWidth;
  var fontSize = h / 375 * 100;
  var htmlObj = document.getElementsByTagName('html')[0];
  if (window.screen.orientation && (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90)) {
    fontSize = h / 667 * 100;
  }
  var fontSizeStr = 'font-size:' + fontSize + 'px';
  htmlObj.setAttribute('style', fontSizeStr);
})();
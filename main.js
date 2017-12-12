'use strict';

module.exports = {
  load () {
    // When the package loaded
  },

  unload () {
    // When the package unloaded
  },

  messages: {
    'launch-cctools' () {
      var win = new Editor.Window('cctools');
      win.adjust (0, 0, 1300, 950);
      win.load('http://htmlfive.co.kr/creator-cctools');
    }
  }
};

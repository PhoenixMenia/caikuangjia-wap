new Vue({
    el: 'body',
    data: {
      showMenu: false
    },
    methods: {
      openMenu: function () {
        this.showMenu = true;
      },
      closeMenu: function () {
        this.showMenu = false;
      }
    }
  })
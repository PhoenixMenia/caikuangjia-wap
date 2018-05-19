new Vue({
    el: 'body',
    data: {
      showMenu: false,
      filterTableShow: false
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
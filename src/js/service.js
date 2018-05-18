new Vue({
    el: 'body',
    data: {
      showMenu: false,
      designOpen: true,
      teamOpen: true,
      caseOpen: true
    },
    methods: {
      openMenu: function () {
        this.showMenu = true;
      },
      closeMenu: function () {
        this.showMenu = false;
      },
      switchCase: function (attr, boolean) {
        this[attr] = boolean;
      }
    }
  })
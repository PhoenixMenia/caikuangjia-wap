new Vue({
    el: 'body',
    data: {
      showMenu: false,
      showType: false,
      showBudget: false,
      selectedTypeIndex: 0,
      selectedTypeIndexOld: 0,
      selectedPriceIndex: 0,
      selectedPriceIndexOld: 0,
      diamondTypeList: ['红宝石', '蓝宝石', '祖母绿', '钻石'],
      diamondPriceList: ['100以下', '100-1万', '1万-10万', '10万-20万', '20万以上']
    },
    methods: {
      openMenu: function () {
        this.showMenu = true;
      },
      closeMenu: function () {
        this.showMenu = false;
      },
      openTypeDialog: function () {
        this.showType = true;
        this.selectedTypeIndexOld = this.selectedTypeIndex;
      },
      cancelType: function () {
        this.showType = false;
        this.selectedTypeIndex = this.selectedTypeIndexOld;
      },
      openPriceDialog: function () {
        this.showBudget = true;
        this.selectedPriceIndexOld = this.selectedPriceIndex;
      },
      cancelPrice: function () {
        this.showBudget = false;
        this.selectedPriceIndex = this.selectedPriceIndexOld;
      }
    }
  })
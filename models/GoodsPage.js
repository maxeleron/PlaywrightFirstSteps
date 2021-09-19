class GoodsPage {
    constructor(page) {
      this.page = page;
      this.goodsTileTitle = '.goods-tile__title';
    }
    async sortGoods(sortLocator) {
      await this.page.click(`[for='${sortLocator}']`);
    }
  }
  module.exports = { GoodsPage };

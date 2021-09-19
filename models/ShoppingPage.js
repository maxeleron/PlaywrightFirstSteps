class ShoppingPage {
    constructor(page) {
      this.page = page;
      this.buyButton = '.product__buy .buy-button';
      this.buyCreditButton = '.product__credit .button--large';
      this.shoppingCart = 'text=Корзина';
      this.purchaseButton = 'text=" Оформить заказ "';
    }
    async openSamsungGalaxyM32() {
      await this.page.goto('https://rozetka.com.ua/samsung-sm-m325fzkgsek/p306669293/');
    }
  }
  module.exports = { ShoppingPage };

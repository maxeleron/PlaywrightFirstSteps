class MainPage {
    constructor(page) {
      this.page = page;
      this.catalogueButton = '#fat-menu';
    }
    async open() {
      await this.page.goto('https://rozetka.com.ua/');
    }
  }
  module.exports = { MainPage };

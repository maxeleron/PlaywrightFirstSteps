class SearchPage {
    constructor(page) {
      this.page = page;
      this.searchInput = 'rz-header input';
      this.searchButton = 'rz-header form > button';
    }

    async search(searchText, locatorForWait) {
      // Input search text
      await this.page.fill( this.searchInput, searchText );
      // Click "Search" ("Найти") button
      await this.page.click( this.searchButton );
      // Wait for tiles appear after search
      await this.page.waitForSelector(locatorForWait);
    }
  }
  module.exports = { SearchPage };

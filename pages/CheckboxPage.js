'use strict';

const BasePage = require('./BasePage');

const CHECKBOX = {
  css: 'input[type="checkbox"]'
};

class CheckboxPage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  async load() {
    await this.visit('/checkboxes');
  }

  async uncheckDefaultCheckbox() {
    let checkboxes = await this.findElements(CHECKBOX);
    for (const e of checkboxes) {
      if (await e.isSelected()) {
        e.click();
      }
    }
  }

  async checkOneCheckbox(index) {
    let checkboxes = await this.findElements(CHECKBOX);
    await checkboxes[index].click();
  }

  async checkAllCheckboxes() {
    let checkboxes = await this.findElements(CHECKBOX);
    for (const e of checkboxes) {
      e.click();
    }
  }

  async checkSelectedCheckbox() {
    let checkboxes = await this.findElements(CHECKBOX);
    let elementChecked = [];
    for (const e of checkboxes) {
      elementChecked.push(await e.isSelected());

    }

    return elementChecked.filter(e => e === true);
  }
}

module.exports = CheckboxPage;
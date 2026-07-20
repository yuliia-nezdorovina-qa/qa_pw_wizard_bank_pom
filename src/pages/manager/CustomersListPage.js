import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.lastRaw = page.locator("tbody tr").last();
    this.deleteButton = this.lastRaw.getByRole("button", { name: "Delete" });
    this.accountNumber = this.lastRaw.locator("td").nth(3);
    this.searchCustomerField = page.getByPlaceholder('Search Customer');
    this.raw = page.locator("tbody tr");
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async clickDeleteButton() {
    await this.deleteButton.click();
  }

  async fillFirstNameInSearchField(firstName) {
    await this.searchCustomerField.fill(firstName);
  }

  async fillLastNameInSearchField(lastName) {
    await this.searchCustomerField.fill(lastName);
  }

  async fillPostCodeInSearchField(postCode) {
    await this.searchCustomerField.fill(postCode);
  }

  async assertCustomerFirstNameIsPresent(firstName) {
    await expect(this.lastRaw).toContainText(firstName);
  }

  async assertCustomerLastNameIsPresent(lastName) {
    await expect(this.lastRaw).toContainText(lastName);
  }

  async assertCustomerPostCodeIsPresent(postCode) {
    await expect(this.lastRaw).toContainText(postCode);
  }

  async assertCustomerRowIsNotVisible(firstName) {
    await expect(this.lastRaw).not.toContainText(firstName);
  }

  async assertAccountNumberNotEmpty() {
    await expect(this.accountNumber).toBeVisible();
  }

  async assertCustomerRowIsPresent(firstNameOrLastName) {
    await expect(this.raw).toContainText(firstNameOrLastName);
  }

  async assertCustomerRowWithPostCodeIsPresent(postCode) {
    await expect(this.raw).toContainText(postCode);
  }

  async assertOnlyOneCustomerRowIsPresent() {
   await expect(this.raw).toHaveCount(1);
}


}

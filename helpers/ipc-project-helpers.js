export class IpcProjectLocators {
    constructor(page) {
          this.ProductsTitle = page.locator('[data-test="title"]') 
          this.ErrorMessage = page.locator('[data-test="error"]')
          this.AddfirstProduct = page.locator('[class="btn btn_primary btn_small btn_inventory "]').first()
          this.AddsecondProduct = page.locator('[class="btn btn_primary btn_small btn_inventory "]').nth(1)
          this.CartBadge = page.locator('[data-test="shopping-cart-badge"]')
          this.CheckoutButton = page.getByRole('button',{name:'Checkout'})
          this.FinishButton = page.getByRole('button',{name:'Finish'})
          this.CompleteMessage = page.locator('[data-test="complete-header"]')
          this.CartItem = page.locator('[class="cart_item"]')
  
    
    }
}
export class CheckoutInformation  { 
     constructor(page) {
        this.page = page
    this.FirstnameField = page.getByRole('textbox', { name: 'First Name' })
    this.LastnameField = page.getByRole('textbox', { name: 'Last Name' })
    this.ZipCodeField = page.getByRole('textbox', { name: 'Zip/Postal Code' })
    this.ContinueButton = page.getByRole('button', { name: 'Continue' })
  }


    async checkout(firstName, lastName, zipCode) {
       await this.FirstnameField.fill(firstName)
        await this.LastnameField.fill(lastName)
        await this.ZipCodeField.fill(zipCode)
        await this.ContinueButton.click()
    }

}
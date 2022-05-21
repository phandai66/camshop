package pages;

import locators.CartLocators;
import net.serenitybdd.core.pages.WebElementFacade;

public class CartPage extends CartLocators {
    public void addToCartAnyProductFromHomepage() {
        buttonAddToCartOnHomepage.click();
    }

    public void openTheCart() {
        iconButtonCart.click();
    }

    public String getNameOfProductInCart() throws InterruptedException {
        waitTime(2000);
        String nameOfProductInCart = textNameOfProductInCart.getText();
        return nameOfProductInCart;
    }

    public void clickOnAnyProductToGoToDetailPageOfIt(WebElementFacade product) {
        product.click();
    }

    public void clickAddToCartButtonDetailPage() {
        buttonAddToCartInDetailPage.click();
    }

    public void clickButtonCloseDetailPage() throws InterruptedException {
        waitTime(2000);
        buttonCloseDetailPage.click();
    }

    public void clickIconButtonDeleteAll() throws InterruptedException {
        waitTime(1000);
        iconButtonDeleteAll.click();
    }

    public String getTextEmptyCartWarning() {
        String emptyCartWarning = textEmptyCartWarning.getText();
        return emptyCartWarning;
    }

    public void clickIconButtonDeleteOfProductInCart() throws InterruptedException {
        waitTime(2000);
        iconButtonDeleteOfProductInCart.click();
    }

    public boolean checkProductName() {
        return textNameOfProductInCart.isPresent();
    }
}

package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locators.CartLocators;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.CartPage;

public class RemoveProductFromCartSteps {
    @Steps
    CartPage cartPage;
    CartLocators cartLocators;

    @When("^Add three products to cart$")
    public void addThreeProductsToCart() throws InterruptedException {
        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct1OnHomepage);
        cartPage.clickAddToCartButtonDetailPage();
        cartPage.clickButtonCloseDetailPage();
        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct2OnHomepage);
        cartPage.clickAddToCartButtonDetailPage();
        cartPage.clickButtonCloseDetailPage();
        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct3OnHomepage);
        cartPage.clickAddToCartButtonDetailPage();
        cartPage.clickButtonCloseDetailPage();
    }

    @And("^Click Delete all button$")
    public void clickDeleteAllButton() throws InterruptedException {
        cartPage.clickIconButtonDeleteAll();
    }


    @Then("^The \"([^\"]*)\" disappear in cart$")
    public void theDisappearInCart(String warning) {
        Assert.assertEquals(cartPage.getTextEmptyCartWarning(), warning);
    }

    @And("^Click Delete icon button of product$")
    public void clickDeleteIconButtonOfProduct() throws InterruptedException {
        cartPage.clickIconButtonDeleteOfProductInCart();
    }

    @Then("^Product disappears in cart$")
    public void productDisappearsInCart() {
        Assert.assertFalse(cartPage.checkProductName());
    }
}

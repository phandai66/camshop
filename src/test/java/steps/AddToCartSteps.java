package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locators.CartLocators;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.AdminPage;
import pages.CartPage;

public class AddToCartSteps {
    @Steps
    CartPage cartPage;
    AdminPage adminPage;
    CartLocators cartLocators;

    @Given("^Open homepage$")
    public void openHomePage() {
        adminPage.open();
    }

    @When("^Add to cart any product from homepage$")
    public void addToCartAnyProductFromHomepage() {
        cartPage.addToCartAnyProductFromHomepage();
    }

    @And("^Open the cart$")
    public void openTheCart() {
        cartPage.openTheCart();
    }

    @Then("^The product \"([^\"]*)\" appears in cart$")
    public void theProductAppearsInCart(String product) throws InterruptedException {
        Assert.assertEquals(cartPage.getNameOfProductInCart(), product);
    }

    @When("^Click on any product to go to detail page of it$")
    public void clickOnAnyProductToGoToDetailPageOfIt() {
        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct1OnHomepage);
    }

    @And("^Click Add to cart button detail page$")
    public void clickAddToCartButtonDetailPage() {
        cartPage.clickAddToCartButtonDetailPage();
    }

    @And("^Close detail page$")
    public void closeDetailPage() throws InterruptedException {
        cartPage.clickButtonCloseDetailPage();
    }
}

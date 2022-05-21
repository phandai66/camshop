package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import locators.CartLocators;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.HomePage;
import pages.MyPageObject;

public class ChangeTheQuantityOfEachProductInTheCartSteps {
    @Steps
    MyPageObject myPageObject;
    CartLocators cartLocators;
    HomePage homePage;

    @And("^Enter \"([^\"]*)\" to input number$")
    public void enterToInputNumber(String quantity) throws InterruptedException {
        myPageObject.enterData(cartLocators.inputNumberQuantity, quantity);
    }

    @Then("^The total quantity \"([^\"]*)\" in the Order Summary is displayed correctly$")
    public void theTotalQuantityInTheOrderSummaryIsDisplayedCorrectly(String totalQuantity) throws InterruptedException {
        Assert.assertEquals(myPageObject.getText(cartLocators.textTotalQuantity), totalQuantity);
    }

    @And("^Click Up icon of product$")
    public void clickUpIconOfProduct() {
        homePage.clickElement(cartLocators.iconButtonUp);
    }

    @Then("^The total quantity \"([^\"]*)\" in the Order Summary$")
    public void theTotalQuantityInTheOrderSummary(String totalQuantity) throws InterruptedException {
        Assert.assertEquals(myPageObject.getText(cartLocators.textTotalQuantity), totalQuantity);
    }

    @And("^Click Down icon of product$")
    public void clickDownIconOfProduct() {
        homePage.clickElement(cartLocators.iconButtonDown);
    }
}

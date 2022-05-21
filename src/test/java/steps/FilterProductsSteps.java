package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locators.CartLocators;
import locators.HomepageLocators;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.HomePage;
import pages.MyPageObject;

public class FilterProductsSteps {
    @Steps
    HomePage homePage;
    CartLocators cartLocators;
    HomepageLocators homepageLocators;
    MyPageObject myPageObject;


    @When("^Select option in the Connection type$")
    public void selectOptionInTheConnectionType() throws InterruptedException {
        myPageObject.waitTime(1000);
        homePage.clickElement(homepageLocators.buttonWiredConnectionType);
    }

    @Then("^Related products \"([^\"]*)\" \"([^\"]*)\" appear$")
    public void relatedProductsAppear(String product2 , String product3) throws InterruptedException {
        Assert.assertEquals(myPageObject.getText(cartLocators.textProduct2OnHomepage), product2);
        Assert.assertEquals(myPageObject.getText(cartLocators.textProduct3OnHomepage), product3);
    }

    @Then("^All \"([^\"]*)\" appear$")
    public void allAppear(String product) throws InterruptedException {
        Assert.assertEquals(myPageObject.getText(homePage.textNameOfRelatedProductOnHomepage), product);
    }

    @When("^Select options in the Camera angle$")
    public void selectOptionsInTheCameraAngle() {
        homePage.clickElement(homepageLocators.button90oCameraAngle);
    }

    @Then("^Related \"([^\"]*)\" appear$")
    public void relatedAppear(String product) throws InterruptedException {
        Assert.assertEquals(myPageObject.getText(cartLocators.textProduct1OnHomepage), product);
    }

    @Then("^This \"([^\"]*)\" appears$")
    public void thisAppears(String product) throws Throwable {
        Assert.assertEquals(myPageObject.getText(cartLocators.textProduct2OnHomepage), product);
    }
}

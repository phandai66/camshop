package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import locators.HomepageLocators;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.HomePage;
import pages.MyPageObject;

public class ContactSteps {
    @Steps
    HomePage homePage;
    MyPageObject myPageObject;
    HomepageLocators homepageLocators;

    @Then("^The phone number is same \"([^\"]*)\"$")
    public void thePhoneNumberIsSame(String phoneNumber) {
        Assert.assertEquals(homePage.getTextPhoneNumber(), phoneNumber);
    }

    @Then("^The email is same \"([^\"]*)\"$")
    public void theEmailIsSame(String email) throws InterruptedException {
        Assert.assertEquals(email, myPageObject.getText(homepageLocators.textEmail));
    }

    @Then("^The address is same \"([^\"]*)\"$")
    public void theAddressIsSame(String address) throws InterruptedException {
        Assert.assertEquals(homePage.getTextAddress(), address);
    }
}

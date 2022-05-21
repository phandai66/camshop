package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locators.CartLocators;
import locators.OrderLocators;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.CartPage;
import pages.HomePage;
import pages.MyPageObject;

public class OrderSteps {
    @Steps
    CartPage cartPage;
    CartLocators cartLocators;
    HomePage homePage;
    MyPageObject myPageObject;
    OrderLocators orderLocators;


    @When("^Add any three products to cart$")
    public void addAnyThreeProductsToCart() throws InterruptedException {
        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct1OnHomepage);
        cartPage.clickAddToCartButtonDetailPage();
        cartPage.clickButtonCloseDetailPage();
//        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct2OnHomepage);
//        cartPage.clickAddToCartButtonDetailPage();
//        cartPage.clickButtonCloseDetailPage();
//        cartPage.clickOnAnyProductToGoToDetailPageOfIt(cartLocators.textProduct3OnHomepage);
//        cartPage.clickAddToCartButtonDetailPage();
//        cartPage.clickButtonCloseDetailPage();
    }

    @And("^Click Continue to order button in cart$")
    public void clickContinueToOrderButtonInCart() {
        homePage.clickElement(cartLocators.buttonContinueToOrder);
    }

    @And("^Fill in all required information \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and chose City, District, Ward$")
    public void fillInAllRequiredInformationAndChoseCityDistrictWard(String fullName, String phoneNumber, String email, String address) throws InterruptedException {
        myPageObject.waitTime(2000);
        homePage.enterData(orderLocators.textBoxFullName, fullName);
        homePage.enterData(orderLocators.textBoxPhoneNumber, phoneNumber);
        homePage.enterData(orderLocators.textBoxEmail, email);
        homePage.enterData(orderLocators.textBoxAddress, address);
        homePage.clickElement(orderLocators.dropDownListCity);
        homePage.clickElement(orderLocators.textCityValue);
        homePage.clickElement(orderLocators.dropDownListDistrict);
        homePage.clickElement(orderLocators.textDistrictValue);
        homePage.clickElement(orderLocators.dropDownListWard);
        homePage.clickElement(orderLocators.textWardValue);
    }

    @And("^Click Payment button$")
    public void clickPaymentButton() {
        homePage.clickElement(orderLocators.buttonPayment);
    }

    @And("^Check I paid with the above account checkbox$")
    public void checkIPaidWithTheAboveAccountCheckbox() {
        homePage.clickElement(orderLocators.checkboxConfirmPayment);
    }

    @And("^Click Complete button$")
    public void clickCompleteButton() {
        homePage.clickElement(orderLocators.buttonComplete);
    }

    @Then("^A successful order popup \"([^\"]*)\" appears")
    public void aSuccessfulOrderPopupAppearsAndInformationDisplayExactly(String popup) throws InterruptedException {
        Assert.assertEquals(popup, homePage.getText(orderLocators.textPaymentSuccessfully));
    }
}

package pages;

import locators.HomepageLocators;
import net.serenitybdd.core.pages.WebElementFacade;

public class HomePage extends HomepageLocators {
    public void enterContentInTheSearchBox(String product) throws InterruptedException {
        waitTime(1000);
        textBoxSearch.sendKeys(product);
    }

    public String getTextNameRelatedProductOnHomepage() {
        String nameOfRelatedProductOnHomepage = textNameOfRelatedProductOnHomepage.getText();
        return nameOfRelatedProductOnHomepage;
    }

    public void deleteDataInSearchTextBox() {
        textBoxSearch.clear();
    }

    public String getTextNameProductOnHomepage() {
        String nameOfProductOnHomepage = textNameOfProductOnHomepage.getText();
        return nameOfProductOnHomepage;
    }

    public String getTextSearchWarning() {
        String searchWarning = textSearchWarning.getText();
        return searchWarning;
    }

    public String getTextPhoneNumber() {
        String phoneNumber = textPhoneNumber.getText();
        return phoneNumber;
    }

    public String getTextEmail() {
        String email = textEmail.getText();
        return email;
    }

    public String getTextAddress() throws InterruptedException {
        waitTime(1000);
        String address = textAddress.getText();
        return address;
    }

    public void clickElement(WebElementFacade element) {
        element.click();
    }

}

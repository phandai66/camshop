package pages;

import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.pages.PageObject;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MyPageObject extends PageObject {

    public void waitForAlertPresence() {
        try {
            WebDriverWait wait = new WebDriverWait(getDriver(), 1000);
            wait.until(ExpectedConditions.alertIsPresent());
        } catch (Exception e) {
            System.out.println("Alert not found");
        }
    }

    public String getAlertMessage(){
        String errorMessage;
        try
        {
            waitForAlertPresence();
            errorMessage =  getDriver().switchTo().alert().getText();
        }
        catch(NoAlertPresentException Ex)
        {
            return "Alert not found";
        }
        return errorMessage;
    }

    public void waitTime(int time) throws InterruptedException {
        Thread thread = new Thread(() -> {
            try {
                Thread.sleep(time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        thread.start();
        thread.join();
    }

    public String getText(WebElementFacade text) throws InterruptedException {
        waitTime(2000);
        return text.getText();
    }

    public void enterData(WebElementFacade element, String data) {
        element.sendKeys(data);
    }

}

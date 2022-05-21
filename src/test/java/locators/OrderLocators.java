package locators;

import net.serenitybdd.core.pages.WebElementFacade;
import org.openqa.selenium.support.FindBy;
import pages.MyPageObject;

public class OrderLocators extends MyPageObject {
    @FindBy(xpath = "//input[@id='custName']")
    public WebElementFacade textBoxFullName;

    @FindBy(xpath = "//input[@id='email']")
    public WebElementFacade textBoxEmail;

    @FindBy(xpath = "//input[@id='phoneNumber']")
    public WebElementFacade textBoxPhoneNumber;

    @FindBy(xpath = "//input[@id='address']")
    public WebElementFacade textBoxAddress;

    @FindBy(xpath = "//nz-select-search[@class='ant-select-selection-search ng-star-inserted']/input")
    public WebElementFacade dropDownListCity;

    @FindBy(xpath = "//div[@class='order-info-wrapper']/div[1]/div[1]/div/div[2]/div[6]/nz-form-item/nz-select/nz-select-top-control/nz-select-search/input")
    public WebElementFacade dropDownListDistrict;

    @FindBy(xpath = "//div[@class='order-info-wrapper']/div[1]/div[1]/div/div[2]/div[7]/nz-form-item/nz-select/nz-select-top-control/nz-select-search/input")
    public WebElementFacade dropDownListWard;

    @FindBy(xpath = "//div[contains(text(),'Thành phố Đà Nẵng')]")
    public WebElementFacade textCityValue;

    @FindBy(xpath = "//div[contains(text(),'Quận Ngũ Hành Sơn')]")
    public WebElementFacade textDistrictValue;

    @FindBy(xpath = "//div[contains(text(),'Phường Mỹ An')]")
    public WebElementFacade textWardValue;

    @FindBy(xpath = "//div[@class='order-info-wrapper']/div[1]/div[2]/div/div/div/button")
    public WebElementFacade buttonPayment;

//    @FindBy(xpath = "//span[@class='ant-checkbox']/input[@class='ant-checkbox-input ng-valid ng-dirty ng-touched']")
//    public WebElementFacade checkboxConfirmPayment;

    @FindBy(xpath = "//div[@class='payment-info-wrapper']/div[1]/div[1]/div[2]/div/label/span")
    public WebElementFacade checkboxConfirmPayment;

    @FindBy(xpath = "//div[@class='payment-info-wrapper']/div[2]/button")
    public WebElementFacade buttonComplete;

    //After payment successfully
    @FindBy(xpath = "//div[@class='ant-form-item-control-input-content ng-tns-c58-23']/input")
    public WebElementFacade textFullName;

    @FindBy(xpath = "//body/div[3]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/app-order-confirm[1]/div[1]/div[2]/div[1]/div[1]/div[3]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]")
    public WebElementFacade textPhoneNumber;

    @FindBy(xpath = "//body/div[3]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/app-order-confirm[1]/div[1]/div[2]/div[1]/div[1]/div[2]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]")
    public WebElementFacade textEmail;

    @FindBy(xpath = "//body/div[3]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/app-order-confirm[1]/div[1]/div[2]/div[1]/div[3]/div[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]")
    public WebElementFacade textAddress;

    @FindBy(xpath = "//body/div[3]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/app-order-confirm[1]/div[1]/div[2]/div[1]/div[1]/div[4]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]")
    public WebElementFacade textCity;

    @FindBy(xpath = "//body/div[3]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/app-order-confirm[1]/div[1]/div[2]/div[1]/div[2]/div[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]")
    public WebElementFacade textDistrict;

    @FindBy(xpath = "//body/div[3]/div[3]/div[1]/nz-modal-container[1]/div[1]/div[1]/div[1]/app-order-confirm[1]/div[1]/div[2]/div[1]/div[2]/div[2]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]")
    public WebElementFacade textWard;

    @FindBy(xpath = "//span[contains(text(),'Đặt hàng thành công')]")
    public WebElementFacade textPaymentSuccessfully;
}

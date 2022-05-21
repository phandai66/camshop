package locators;

import net.serenitybdd.core.pages.WebElementFacade;
import org.openqa.selenium.support.FindBy;
import pages.MyPageObject;

public class HomepageLocators extends MyPageObject {
    //Search
    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[2]/div[1]/nz-input-group[1]/input[1]")
    public WebElementFacade textBoxSearch;

    //Cart
    @FindBy(xpath = "//div[contains(text(),'SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD ')]")
    public WebElementFacade textNameOfRelatedProductOnHomepage;

    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]")
    public WebElementFacade textNameOfProductOnHomepage;

    @FindBy(xpath = "//p[contains(text(),'Không có sản phẩm')]")
    public WebElementFacade textSearchWarning;

    //Contact
    @FindBy(xpath = "//span[contains(text(),'Hotline: 0916685091')]")
    public WebElementFacade textPhoneNumber;

    @FindBy(xpath = "//body/app-root[1]/div[1]/app-footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]")
    public WebElementFacade textEmail;

    @FindBy(xpath = "//span[contains(text(),'Địa chỉ: 14 Doãn Uẩn, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵ')]")
    public WebElementFacade textAddress;

    //Filter Products
    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[1]/nz-collapse[1]/nz-collapse-panel[1]/div[2]/div[1]/nz-checkbox-group[1]/label[1]")
    public WebElementFacade buttonWiredConnectionType;

    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[1]/nz-collapse[1]/nz-collapse-panel[1]/div[2]/div[1]/nz-checkbox-group[1]/label[2]")
    public WebElementFacade buttonWirelessConnectionType;

    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[1]/nz-collapse[1]/nz-collapse-panel[3]/div[2]/div[1]/nz-checkbox-group[1]/label[1]")
    public WebElementFacade buttonCameraAccessoriesCategory;

    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[1]/nz-collapse[1]/nz-collapse-panel[3]/div[2]/div[1]/nz-checkbox-group[1]/label[2]")
    public WebElementFacade buttonCameraExchangeCategory;

    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[1]/nz-collapse[1]/nz-collapse-panel[3]/div[2]/div[1]/nz-checkbox-group[1]/label[3]")
    public WebElementFacade buttonCameraCategory;

    @FindBy(xpath = "")
    public WebElementFacade button720pResolution;

    @FindBy(xpath = "")
    public WebElementFacade button1080pResolution;

    @FindBy(xpath = "")
    public WebElementFacade button1440pResolution;

    @FindBy(xpath = "")
    public WebElementFacade buttonYesSiren;

    @FindBy(xpath = "")
    public WebElementFacade buttonNoSiren;

    @FindBy(xpath = "")
    public WebElementFacade button10mNightVision;

    @FindBy(xpath = "")
    public WebElementFacade button15mNightVision;

    @FindBy(xpath = "")
    public WebElementFacade button20mNightVision;

    @FindBy(xpath = "")
    public WebElementFacade button45oCameraAngle;

    @FindBy(xpath = "//body[1]/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[1]/nz-collapse[1]/nz-collapse-panel[2]/div[2]/div[1]/nz-checkbox-group[1]/label[1]/span[2]")
    public WebElementFacade button90oCameraAngle;

    @FindBy(xpath = "")
    public WebElementFacade button180oCameraAngle;

    @FindBy(xpath = "")
    public WebElementFacade button360oCameraAngle;

    @FindBy(xpath = "")
    public WebElementFacade buttonIndoorCameraInstallationLocation;

    @FindBy(xpath = "")
    public WebElementFacade buttonOutdoorCameraInstallationLocation;
}

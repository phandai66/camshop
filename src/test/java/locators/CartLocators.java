package locators;

import net.serenitybdd.core.pages.WebElementFacade;
import org.openqa.selenium.support.FindBy;
import pages.MyPageObject;

import java.util.List;

public class CartLocators extends MyPageObject {
    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[3]/div[1]/button[1]/span[1]")
    public WebElementFacade buttonAddToCartOnHomepage;

    @FindBy(xpath = "//header/div[1]/div[1]/div[2]/div[1]/img[1]")
    public WebElementFacade iconButtonCart;

    @FindBy(xpath = "//p[contains(text(),'SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD ')]")
    public WebElementFacade textNameOfProductInCart;

    @FindBy(xpath = "//div[contains(text(),'SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD ')]")
    public WebElementFacade textProduct1OnHomepage;

    @FindBy(xpath = "//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/app-product-list[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]")
    public WebElementFacade textProduct2OnHomepage;

    @FindBy(xpath = "//div[contains(text(),'Trọn bộ 4 camera Hikvision 5MP Super HD 2K')]")
    public WebElementFacade textProduct3OnHomepage;

    @FindBy(xpath = "//span[contains(text(),'Thêm vào giỏ hàng')]")
    public WebElementFacade buttonAddToCartInDetailPage;

    @FindBy(xpath = "//span[contains(text(),'Đóng')]")
    public WebElementFacade buttonCloseDetailPage;

    @FindBy(xpath = "//span[contains(text(),'Xóa tất cả')]")
    public WebElementFacade iconButtonDeleteAll;

    @FindBy(xpath = "//a[contains(text(),'Mua hàng ngay!')]")
    public WebElementFacade textEmptyCartWarning;

    @FindBy(xpath = "//button[@class='justify-content-between align-items-center ant-btn ant-btn-text ant-btn-circle ant-btn-sm ant-btn-dangerous']//*[name()='svg']")
    public WebElementFacade iconButtonDeleteOfProductInCart;

    @FindBy(xpath = "//div[@class='ant-input-number-input-wrap']/input")
    public WebElementFacade inputNumberQuantity;

    @FindBy(xpath = "//div[@class='ant-input-number-handler-wrap']/span[@class='ant-input-number-handler ant-input-number-handler-up']")
    public WebElementFacade iconButtonUp;

    @FindBy(xpath = "//div[@class='ant-input-number-handler-wrap']/span[@class='ant-input-number-handler ant-input-number-handler-down']")
    public WebElementFacade iconButtonDown;

    //Order Summary
    @FindBy(xpath = "//div[@class='d-flex']/span[@class='me-2 text-primary']")
    public WebElementFacade textTotalQuantity;

    @FindBy(xpath = "//div[@class='order-summary mt-4 mt-xl-0']/button[@class='ant-btn ant-btn-primary ant-btn-block']")
    public WebElementFacade buttonContinueToOrder;

}

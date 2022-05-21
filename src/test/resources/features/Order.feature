Feature: Order

  @DH-056
  Scenario Outline: The user can order successfully with all products in cart
    Given Open homepage
    When Add any three products to cart
    And Open the cart
    And Click Continue to order button in cart
    And Fill in all required information "<FullName>", "<PhoneNumber>", "<Email>", "<Address>" and chose City, District, Ward
    And Click Payment button
    And Check I paid with the above account checkbox
    And Click Complete button
    Then A successful order popup "<Popup>" appears
    Examples:
    | FullName | PhoneNumber | Email | Address | City | District | Ward | Popup |
    | Phan Thị Đài | 0783208860  | phandai2066@gmail.com | K2/12 Phan Hành Sơn | Thành Phố Đà Nẵng | Quận Ngũ Hành Sơn | Phường Mỹ An | Đặt hàng thành công |
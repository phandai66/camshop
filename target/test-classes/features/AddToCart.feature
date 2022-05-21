Feature: Add to cart
  I want to add products to cart

  @TGH-001
  Scenario Outline: The user can add products to cart by clicking "Add to cart" button of each product on homepage
    Given Open homepage
    When Add to cart any product from homepage
    And Open the cart
    Then The product "<product>" appears in cart
    Examples:
    | product |
    | SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic |

  @TGH-002
  Scenario Outline: The user can add products to cart by clicking "Add to cart" button in product detail page of each product
    Given Open homepage
    When Click on any product to go to detail page of it
    And Click Add to cart button detail page
    And Close detail page
    And Open the cart
    Then The product "<product>" appears in cart
    Examples:
      | product |
      | SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic |

#  @TGH-003
#  Scenario Outline: The number of products in the cart increases when the "Add to cart" button is pressed for products already in the cart
#    Given Open homepage
#    When Open the cart

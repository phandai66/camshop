Feature: Remove product from cart

  @XSP-001
  Scenario Outline: The user can clear cart when clicking "Delete all" button
    Given Open homepage
    When Add three products to cart
    And Open the cart
    And Click Delete all button
    Then The "<Warning>" disappear in cart
    Examples:
    | Warning |
    | Mua hàng ngay! |

  @XSP-002
  Scenario: The user can remove any product by clicking "Delete" button
    Given Open homepage
    When Click on any product to go to detail page of it
    And Click Add to cart button detail page
    And Close detail page
    And Open the cart
    And Click Delete icon button of product
    Then Product disappears in cart

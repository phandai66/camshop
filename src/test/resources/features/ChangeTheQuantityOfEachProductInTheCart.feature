Feature: Change the quantity of each product in the cart

  @DSL-001
  Scenario Outline: The user can change the quantity of each product in the cart by typing in input number
    Given Open homepage
    When Click on any product to go to detail page of it
    And Click Add to cart button detail page
    And Close detail page
    And Open the cart
    And Enter "<Quantity>" to input number
    Then The total quantity "<TotalQuantity>" in the Order Summary is displayed correctly
    Examples:
    | Quantity | TotalQuantity |
    | 2        | 12            |

  @DSL-005
  Scenario Outline: The user can increase the number of products by clicking the Up icon
    Given Open homepage
    When Click on any product to go to detail page of it
    And Click Add to cart button detail page
    And Close detail page
    And Open the cart
    And Click Up icon of product
    Then The total quantity "<TotalQuantity>" in the Order Summary
    Examples:
      | TotalQuantity |
      | 2             |

  @DSL-006
  Scenario Outline: The user can increase the number of products by clicking the Down icon
    Given Open homepage
    When Click on any product to go to detail page of it
    And Click Add to cart button detail page
    And Close detail page
    When Click on any product to go to detail page of it
    And Click Add to cart button detail page
    And Close detail page
    And Open the cart
    And Click Down icon of product
    Then The total quantity "<TotalQuantity>" in the Order Summary
    Examples:
      | TotalQuantity |
      | 1             |

Feature: Search
  I want to search products I like

  @TK-001 @SearchFunction
  Scenario Outline: The related product will appear when the user performs the search function
    Given Open homepage
    When Enter content "<product>" in the search box
    Then "<Related product>" appear on the screen
    Examples:
    | product                            | Related product                                                                                                     |
    | SriHome 4MP Trọn Bộ 4 Camera Dahua | SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic |

  @TK-002 @SearchFunction
  Scenario Outline: When the user deletes data in the search button, all products appear
    Given Open homepage
    When Enter content "<product>" in the search box
    And Delete data in the search button
    Then All "<products>" appear on homepage
    Examples:
      | product                            | products |
      | SriHome 4MP Trọn Bộ 4 Camera Dahua | Camera Reolink RLC-511W 5MP Cao Cấp |

  @TK-003 @SearchFunction
  Scenario Outline: The warning appears when the user searches for a product that doesn't exist
    Given Open homepage
    When Enter content "<product>" in the search box
    Then The "<warning>" appears
    Examples:
      | product         | warning           |
      | uyryiuoiiuhjkgu | Không có sản phẩm |

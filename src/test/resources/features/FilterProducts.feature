Feature: Filter Products

  @LSP-015
  Scenario Outline: Related products will appear when selecting one or more options in the Camera angle
    Given Open homepage
    When Select options in the Camera angle
    Then Related "<Products>" appear
    Examples:
      | Products |
      | SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic |

  @LSP-016
  Scenario Outline: Related products will disappear when unselecting one or more options in the Camera angle
    Given Open homepage
    When Select options in the Camera angle
    And Select options in the Camera angle
    Then This "<Product>" appears
    Examples:
      | Product |
      | Camera Reolink RLC-511W 5MP Cao Cấp |

  @LSP-019
  Scenario Outline: Related products will appear when selecting one or more options in the Connection type
    Given Open homepage
    When Select option in the Connection type
    Then Related products "<Product2>" "<Product3>" appear
    Examples:
    | Product2 | Product3 |
    | Camera Reolink RLC-511W 5MP Cao Cấp |  Trọn bộ 4 camera Hikvision 5MP Super HD 2K |

  @LSP-020
  Scenario Outline: Related products will disappear when unselecting one or more options in the Connection type
    Given Open homepage
    When Select option in the Connection type
    And Select option in the Connection type
    Then All "<Products>" appear
    Examples:
    | Products |
    | SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic |


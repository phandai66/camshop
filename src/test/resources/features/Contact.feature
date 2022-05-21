Feature: Contact

  @LH-001
  Scenario Outline: The phone number in hotline section is correct
    Given Open homepage
    Then The phone number is same "<PhoneNumber>"
    Examples:
      | PhoneNumber         |
      | Hotline: 0916685091 |

  @LH-002
  Scenario Outline: The email in email section is correct
    Given Open homepage
    Then The email is same "<Email>"
    Examples:
      | Email         |
      | Email: camshop@gmail.com |

  @LH-003
  Scenario Outline: The address in address section is correct
    Given Open homepage
    Then The address is same "<Address>"
    Examples:
      | Address         |
      | Địa chỉ: 14 Doãn Uẩn, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng |
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddToCart.feature");
formatter.feature({
  "name": "Add to cart",
  "description": "  I want to add products to cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The user can add products to cart by clicking \"Add to cart\" button of each product on homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TGH-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Add to cart any product from homepage",
  "keyword": "When "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "The product \"\u003cproduct\u003e\" appears in cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can add products to cart by clicking \"Add to cart\" button of each product on homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TGH-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add to cart any product from homepage",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.addToCartAnyProductFromHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product \"SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic\" appears in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.theProductAppearsInCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The user can add products to cart by clicking \"Add to cart\" button in product detail page of each product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TGH-002"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "The product \"\u003cproduct\u003e\" appears in cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can add products to cart by clicking \"Add to cart\" button in product detail page of each product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TGH-002"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.clickOnAnyProductToGoToDetailPageOfIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.clickAddToCartButtonDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.closeDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product \"SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic\" appears in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.theProductAppearsInCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/ChangeTheQuantityOfEachProductInTheCart.feature");
formatter.feature({
  "name": "Change the quantity of each product in the cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The user can change the quantity of each product in the cart by typing in input number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DSL-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"\u003cQuantity\u003e\" to input number",
  "keyword": "And "
});
formatter.step({
  "name": "The total quantity \"\u003cTotalQuantity\u003e\" in the Order Summary is displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Quantity",
        "TotalQuantity"
      ]
    },
    {
      "cells": [
        "2",
        "12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can change the quantity of each product in the cart by typing in input number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DSL-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.clickOnAnyProductToGoToDetailPageOfIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.clickAddToCartButtonDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.closeDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"2\" to input number",
  "keyword": "And "
});
formatter.match({
  "location": "ChangeTheQuantityOfEachProductInTheCartSteps.enterToInputNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The total quantity \"12\" in the Order Summary is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "ChangeTheQuantityOfEachProductInTheCartSteps.theTotalQuantityInTheOrderSummaryIsDisplayedCorrectly(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The user can increase the number of products by clicking the Up icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DSL-005"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "Click Up icon of product",
  "keyword": "And "
});
formatter.step({
  "name": "The total quantity \"\u003cTotalQuantity\u003e\" in the Order Summary",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TotalQuantity"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can increase the number of products by clicking the Up icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DSL-005"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.clickOnAnyProductToGoToDetailPageOfIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.clickAddToCartButtonDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.closeDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Up icon of product",
  "keyword": "And "
});
formatter.match({
  "location": "ChangeTheQuantityOfEachProductInTheCartSteps.clickUpIconOfProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The total quantity \"2\" in the Order Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "ChangeTheQuantityOfEachProductInTheCartSteps.theTotalQuantityInTheOrderSummary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The user can increase the number of products by clicking the Down icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DSL-006"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "Click Down icon of product",
  "keyword": "And "
});
formatter.step({
  "name": "The total quantity \"\u003cTotalQuantity\u003e\" in the Order Summary",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TotalQuantity"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can increase the number of products by clicking the Down icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DSL-006"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.clickOnAnyProductToGoToDetailPageOfIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.clickAddToCartButtonDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.closeDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.clickOnAnyProductToGoToDetailPageOfIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.clickAddToCartButtonDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.closeDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Down icon of product",
  "keyword": "And "
});
formatter.match({
  "location": "ChangeTheQuantityOfEachProductInTheCartSteps.clickDownIconOfProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The total quantity \"1\" in the Order Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "ChangeTheQuantityOfEachProductInTheCartSteps.theTotalQuantityInTheOrderSummary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Contact.feature");
formatter.feature({
  "name": "Contact",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The phone number in hotline section is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LH-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "The phone number is same \"\u003cPhoneNumber\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "PhoneNumber"
      ]
    },
    {
      "cells": [
        "Hotline: 0916685091"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The phone number in hotline section is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LH-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The phone number is same \"Hotline: 0916685091\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.thePhoneNumberIsSame(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The email in email section is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LH-002"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "The email is same \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email"
      ]
    },
    {
      "cells": [
        "Email: camshop@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The email in email section is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LH-002"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email is same \"Email: camshop@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.theEmailIsSame(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The address in address section is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LH-003"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "The address is same \"\u003cAddress\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Address"
      ]
    },
    {
      "cells": [
        "Địa chỉ: 14 Doãn Uẩn, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The address in address section is correct",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LH-003"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The address is same \"Địa chỉ: 14 Doãn Uẩn, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.theAddressIsSame(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/FilterProducts.feature");
formatter.feature({
  "name": "Filter Products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Related products will appear when selecting one or more options in the Camera angle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-015"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Select options in the Camera angle",
  "keyword": "When "
});
formatter.step({
  "name": "Related \"\u003cProducts\u003e\" appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Products"
      ]
    },
    {
      "cells": [
        "SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Related products will appear when selecting one or more options in the Camera angle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-015"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select options in the Camera angle",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProductsSteps.selectOptionsInTheCameraAngle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Related \"SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic\" appear",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProductsSteps.relatedAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Related products will disappear when unselecting one or more options in the Camera angle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-016"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Select options in the Camera angle",
  "keyword": "When "
});
formatter.step({
  "name": "Select options in the Camera angle",
  "keyword": "And "
});
formatter.step({
  "name": "This \"\u003cProduct\u003e\" appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Camera Reolink RLC-511W 5MP Cao Cấp"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Related products will disappear when unselecting one or more options in the Camera angle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-016"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select options in the Camera angle",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProductsSteps.selectOptionsInTheCameraAngle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select options in the Camera angle",
  "keyword": "And "
});
formatter.match({
  "location": "FilterProductsSteps.selectOptionsInTheCameraAngle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "This \"Camera Reolink RLC-511W 5MP Cao Cấp\" appears",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProductsSteps.thisAppears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Related products will appear when selecting one or more options in the Connection type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-019"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Select option in the Connection type",
  "keyword": "When "
});
formatter.step({
  "name": "Related products \"\u003cProduct2\u003e\" \"\u003cProduct3\u003e\" appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product2",
        "Product3"
      ]
    },
    {
      "cells": [
        "Camera Reolink RLC-511W 5MP Cao Cấp",
        "Trọn bộ 4 camera Hikvision 5MP Super HD 2K"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Related products will appear when selecting one or more options in the Connection type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-019"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select option in the Connection type",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProductsSteps.selectOptionInTheConnectionType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Related products \"Camera Reolink RLC-511W 5MP Cao Cấp\" \"Trọn bộ 4 camera Hikvision 5MP Super HD 2K\" appear",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProductsSteps.relatedProductsAppear(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Related products will disappear when unselecting one or more options in the Connection type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-020"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Select option in the Connection type",
  "keyword": "When "
});
formatter.step({
  "name": "Select option in the Connection type",
  "keyword": "And "
});
formatter.step({
  "name": "All \"\u003cProducts\u003e\" appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Products"
      ]
    },
    {
      "cells": [
        "SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Related products will disappear when unselecting one or more options in the Connection type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LSP-020"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select option in the Connection type",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProductsSteps.selectOptionInTheConnectionType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select option in the Connection type",
  "keyword": "And "
});
formatter.match({
  "location": "FilterProductsSteps.selectOptionInTheConnectionType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All \"SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic\" appear",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProductsSteps.allAppear(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Order.feature");
formatter.feature({
  "name": "Order",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The user can order successfully with all products in cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DH-056"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Add any three products to cart",
  "keyword": "When "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "Click Continue to order button in cart",
  "keyword": "And "
});
formatter.step({
  "name": "Fill in all required information \"\u003cFullName\u003e\", \"\u003cPhoneNumber\u003e\", \"\u003cEmail\u003e\", \"\u003cAddress\u003e\" and chose City, District, Ward",
  "keyword": "And "
});
formatter.step({
  "name": "Click Payment button",
  "keyword": "And "
});
formatter.step({
  "name": "Check I paid with the above account checkbox",
  "keyword": "And "
});
formatter.step({
  "name": "Click Complete button",
  "keyword": "And "
});
formatter.step({
  "name": "A successful order popup \"\u003cPopup\u003e\" appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FullName",
        "PhoneNumber",
        "Email",
        "Address",
        "City",
        "District",
        "Ward",
        "Popup"
      ]
    },
    {
      "cells": [
        "Phan Thị Đài",
        "0783208860",
        "phandai2066@gmail.com",
        "K2/12 Phan Hành Sơn",
        "Thành Phố Đà Nẵng",
        "Quận Ngũ Hành Sơn",
        "Phường Mỹ An",
        "Đặt hàng thành công"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can order successfully with all products in cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DH-056"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add any three products to cart",
  "keyword": "When "
});
formatter.match({
  "location": "OrderSteps.addAnyThreeProductsToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Continue to order button in cart",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.clickContinueToOrderButtonInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill in all required information \"Phan Thị Đài\", \"0783208860\", \"phandai2066@gmail.com\", \"K2/12 Phan Hành Sơn\" and chose City, District, Ward",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.fillInAllRequiredInformationAndChoseCityDistrictWard(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Payment button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.clickPaymentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check I paid with the above account checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.checkIPaidWithTheAboveAccountCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Complete button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderSteps.clickCompleteButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A successful order popup \"Đặt hàng thành công\" appears",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderSteps.aSuccessfulOrderPopupAppearsAndInformationDisplayExactly(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/RemoveProductFromCart.feature");
formatter.feature({
  "name": "Remove product from cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The user can clear cart when clicking \"Delete all\" button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@XSP-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Add three products to cart",
  "keyword": "When "
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.step({
  "name": "Click Delete all button",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003cWarning\u003e\" disappear in cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Warning"
      ]
    },
    {
      "cells": [
        "Mua hàng ngay!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user can clear cart when clicking \"Delete all\" button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@XSP-001"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add three products to cart",
  "keyword": "When "
});
formatter.match({
  "location": "RemoveProductFromCartSteps.addThreeProductsToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Delete all button",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveProductFromCartSteps.clickDeleteAllButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"Mua hàng ngay!\" disappear in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveProductFromCartSteps.theDisappearInCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user can remove any product by clicking \"Delete\" button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@XSP-002"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on any product to go to detail page of it",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartSteps.clickOnAnyProductToGoToDetailPageOfIt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add to cart button detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.clickAddToCartButtonDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close detail page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.closeDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.openTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Delete icon button of product",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveProductFromCartSteps.clickDeleteIconButtonOfProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product disappears in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveProductFromCartSteps.productDisappearsInCart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/Search.feature");
formatter.feature({
  "name": "Search",
  "description": "  I want to search products I like",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The related product will appear when the user performs the search function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TK-001"
    },
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter content \"\u003cproduct\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "name": "\"\u003cRelated product\u003e\" appear on the screen",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "Related product"
      ]
    },
    {
      "cells": [
        "SriHome 4MP Trọn Bộ 4 Camera Dahua",
        "SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The related product will appear when the user performs the search function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TK-001"
    },
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter content \"SriHome 4MP Trọn Bộ 4 Camera Dahua\" in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.enterContentInTheSearchBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"SriHome 4MP Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic Trọn Bộ 4 Camera Dahua IP 2MP Full HD 1080P, Có Mic\" appear on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.appearOnTheScreen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "When the user deletes data in the search button, all products appear",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TK-002"
    },
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter content \"\u003cproduct\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "name": "Delete data in the search button",
  "keyword": "And "
});
formatter.step({
  "name": "All \"\u003cproducts\u003e\" appear on homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "products"
      ]
    },
    {
      "cells": [
        "SriHome 4MP Trọn Bộ 4 Camera Dahua",
        "Camera Reolink RLC-511W 5MP Cao Cấp"
      ]
    }
  ]
});
formatter.scenario({
  "name": "When the user deletes data in the search button, all products appear",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TK-002"
    },
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter content \"SriHome 4MP Trọn Bộ 4 Camera Dahua\" in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.enterContentInTheSearchBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete data in the search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.deleteDataInTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All \"Camera Reolink RLC-511W 5MP Cao Cấp\" appear on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.allAppearOnHomepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "The warning appears when the user searches for a product that doesn\u0027t exist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TK-003"
    },
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter content \"\u003cproduct\u003e\" in the search box",
  "keyword": "When "
});
formatter.step({
  "name": "The \"\u003cwarning\u003e\" appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "warning"
      ]
    },
    {
      "cells": [
        "uyryiuoiiuhjkgu",
        "Không có sản phẩm"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The warning appears when the user searches for a product that doesn\u0027t exist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TK-003"
    },
    {
      "name": "@SearchFunction"
    }
  ]
});
formatter.step({
  "name": "Open homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter content \"uyryiuoiiuhjkgu\" in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.enterContentInTheSearchBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"Không có sản phẩm\" appears",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.theAppears(String)"
});
formatter.result({
  "status": "passed"
});
});
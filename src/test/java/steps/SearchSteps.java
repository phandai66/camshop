package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import pages.HomePage;

public class SearchSteps {
    @Steps
    HomePage homePage;

    @When("^Enter content \"([^\"]*)\" in the search box$")
    public void enterContentInTheSearchBox(String product) throws InterruptedException {
       homePage.enterContentInTheSearchBox(product);
    }

    @Then("^\"([^\"]*)\" appear on the screen$")
    public void appearOnTheScreen(String relatedProduct) {
        Assert.assertEquals(homePage.getTextNameRelatedProductOnHomepage(), relatedProduct);
    }

    @And("^Delete data in the search button$")
    public void deleteDataInTheSearchButton() {
        homePage.deleteDataInSearchTextBox();
    }

    @Then("^All \"([^\"]*)\" appear on homepage$")
    public void allAppearOnHomepage(String products) {
        Assert.assertEquals(homePage.getTextNameProductOnHomepage(), products);
    }

    @Then("^The \"([^\"]*)\" appears$")
    public void theAppears(String warning) {
        Assert.assertEquals(homePage.getTextSearchWarning(), warning);
    }
}

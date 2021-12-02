package stepsdefines;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
//import org.testng.asserts.SoftAssert;

import io.cucumber.datatable.DataTable;
//import gherkin.ast.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {
	
	WebDriver driver = Baseclass.driver;
	
	 @Given("^User has opened swaglabs web application$")
	    public void user_has_opened_swaglabs_web_application() throws Throwable {

	        driver.get("https://www.saucedemo.com/");
	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
	        
	    }

	 @When("^User has entered correct \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_has_entered_correct_something_and_something(String username, String password) throws Throwable {
		 WebElement uname = driver.findElement(By.name("user-name"));
		 uname.sendKeys(username);
		 WebElement pwd = driver.findElement(By.name("password"));
		 pwd.sendKeys(password);
		 
	    }

	    @Then("^Validating if that user has been  navigated to product page$")
	    public void validating_if_that_user_has_been_navigated_to_product_page() throws Throwable {
	    	
	    	WebElement title = driver.findElement(By.xpath("//span[@class='title']"));
	    	Assert.assertEquals(title.getText(), "PRODUCTS");
	    }

	   
	    @And("^User click on Login Button$")
	    public void user_click_on_login_button() throws Throwable {
	    	WebElement login_button = driver.findElement(By.id("login-button"));
			login_button.click();
	    }
	    @When("^User has entered wrong \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_has_entered_wrong_something_and_something(String username, String password) throws Throwable {
	    	WebElement uname = driver.findElement(By.name("user-name"));
			 uname.sendKeys(username);
			 WebElement pwd = driver.findElement(By.name("password"));
			 pwd.sendKeys(password);
			 WebElement login_button = driver.findElement(By.id("login-button"));
			 login_button.click();
	    }

	    @Then("^Validating if that user has been  getting as \"([^\"]*)\"$")
	    public void validating_if_that_user_has_been_getting_as_something(String error) throws Throwable {
	    	
	    	WebElement Err = driver.findElement(By.xpath("//h3[@data-test='error']"));
	    	String actual_err = Err.getText();
			Assert.assertEquals(actual_err, error);
	    	
	    }
	    
}

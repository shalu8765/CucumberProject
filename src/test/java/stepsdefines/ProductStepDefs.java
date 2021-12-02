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

public class ProductStepDefs {
	
WebDriver driver = Baseclass.driver;
	
	@Then("^Validating if that user has been  navigated to product and click on add product \"([^\"]*)\"$")
    public void validating_if_that_user_has_been_navigated_to_product_and_click_on_add_product_something(String product) throws Throwable {
    	WebElement title = driver.findElement(By.xpath("//span[@class='title']"));
    	Assert.assertEquals(title.getText(), "PRODUCTS");
    	//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']/following::button
    	WebElement add_to_cart = driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='"+product+"']/following::button[1]"));
    	add_to_cart.click();
    	
    }

    @Then("^Validating if that user has added a product to product page$")
    public void validating_if_that_user_has_added_a_product_to_product_page() throws Throwable {
    	
    	WebElement CartValue = driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
		Assert.assertEquals(CartValue.getText(),"1");
    }
}



package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.testBase;

public class TechfiosStepDefination extends testBase{
	
	LoginPage loginPage;
	DashboardPage dashboardPage;
	NewAccountPage accountPage;
	
	

	@Given ("^User is on the techfios login page$") 
	public void user_is_on_the_techfios_login_page() {
		initDriver();
		
	}
	
	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(username);
	
		
	}
	
	@When("^User enters the password \"([^\"]*)\"$")
	public void user_enters_password (String password) throws Throwable {
		loginPage.enterPassword( password);
		
	}
	
	@And("^User clicks on login$")
	public void User_clicks_on_login_button () throws Throwable {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
//		dashboardPage.varifyDashboardHeader();
		   
	}

	@And("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() throws Throwable {
	  dashboardPage.clickOnBankCash();
	}
	
	@And("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() throws Throwable {
		dashboardPage.clickOnNewAccount();
		accountPage = PageFactory.initElements(driver, NewAccountPage.class);
//		accountPage.varifyAccountHeader();
					  
	}

	@Then("^User enters accountTitle \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle(String accountTitle) throws Throwable {
	    accountPage.insertAccountTitle(accountTitle);
	    Thread.sleep(3000);
	    
	}
	
	@Then("^User enters description \"([^\"]*)\" in accounts page$")
	public void user_enters_description(String description) throws Throwable {
	    accountPage.insertDescription(description);
	    Thread.sleep(3000);

		   
	}
	
	@Then("^User enters initialBalance \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance(String initialBalance) throws Throwable {
	    accountPage.insertInitialBalance(initialBalance);
	    Thread.sleep(3000);
	}
	
	@Then("^User enters accountNumber \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber(String accountNumber) throws Throwable {
	    accountPage.insertAccountNumber(accountNumber);
	    Thread.sleep(3000);
	}
	
	@Then("^User enters contactPerson \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson(String contactPerson) throws Throwable {
	    accountPage.insertContactPerson(contactPerson);
	    Thread.sleep(3000);
	}
	
	@Then("^User enters Phone \"([^\"]*)\" in accounts page$")
	public void user_enters_phone(String phone) throws Throwable {
	    accountPage.insertPhone(phone);
	}
	
	@Then("^User enters internetBankingURL \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL(String internetBankingURL) throws Throwable {
	    accountPage.insertInternetBankingUrl(internetBankingURL);
	}
	
	@And("^User clicks on submitButton$")
	public void user_clicks_on_submitButton() throws Throwable {
	  accountPage.clickSubmitButton();
	  Thread.sleep(3000);
	  takeScreenshot(driver);
	  
	  
	}

	
	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
		dashboardPage.clickOnListAccount();
		takeScreenshot(driver);
		

		
	}


}

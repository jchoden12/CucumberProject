package pages;


import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class NewAccountPage {
	
	WebDriver driver;
	
	public void NewAccountPage(WebDriver driver) {
		this.driver = driver;
		
	}
	
	// Web Elements
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[1]/h5")
	WebElement AccountHeader;
	@FindBy(how = How.XPATH, using = "//*[@id=\'account\']") 

	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\'description\']")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//*[@id=\'balance\']")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\'contact_person\']")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement InternetBankingUrl;
	@FindBy(how = How.XPATH, using = "//*[@id=\'page-wrapper\']/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement SubmitButton;
	
	public void varifyAccountHeader() {
		Assert.assertEquals("Accounts- iBilling",AccountHeader.getText());
		
	}
	
	public void insertAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle);
		
	}
	
	public void insertDescription(String description) {
		Description.sendKeys(description);
		
	}
	
	public void insertInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance);
		
	}
	
	public void insertAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	}
	
	public void insertContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
	}
	
	public void insertPhone(String phone) {
		Phone.sendKeys(phone);
	}
	
	public void insertInternetBankingUrl(String internetBankingURL) {
		InternetBankingUrl.sendKeys(internetBankingURL);
		
	}
	public void clickSubmitButton() {
		SubmitButton.click();
		
	}

}



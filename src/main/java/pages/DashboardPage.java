package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {
	
	WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver = driver;
		
	}
	
	@FindBy(how = How.XPATH, using = "//*[@id='page-wrapper']/div[2]/div/h2")
	WebElement Dashboard;
	
	@FindBy(how = How.XPATH, using = "//*[@id='side-menu']/li[10]/a/span[1]")
	WebElement BankCash;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]") 
	WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[2]/a")
	WebElement ListAccount;
	
	
	public void varifyDashboardHeader() {
	
		Assert.assertEquals("Dashboard- iBilling", Dashboard.getText());
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void clickOnBankCash() {
		BankCash.click();
	}
	
	public void clickOnNewAccount() {
		NewAccount.click();
		
	}
	public void clickOnListAccount() {
		ListAccount.click();
		
	}

}

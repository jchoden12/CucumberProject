package runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\feature",
		glue= "steps",
		tags ="@scenarioHW",
		monochrome = true ,
		plugin = {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json"
			
		}
		
		)
public class LoginRunner {



}

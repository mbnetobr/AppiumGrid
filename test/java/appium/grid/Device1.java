package appium.grid;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.remote.MobilePlatform;
import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;


public class Device1 {
	static DesiredCapabilities capabilities;
	static AppiumDriver driver;
	static WebDriverWait wait;

	@Parameters("DeviceID")
	@BeforeMethod
	public void setup(String DeviceID) throws Exception {
		System.out.println(DeviceID);

		capabilities = new DesiredCapabilities();
		capabilities.setCapability("udid", DeviceID);
		capabilities.setCapability("appPackage","com.android.contacts");
		capabilities.setCapability("appActivity",".activities.PeopleActivity");
		capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME,MobilePlatform.ANDROID);
		capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, DeviceID);
		
		driver = new AndroidDriver(new URL("http://localhost:4444/wd/hub"),capabilities);

	}

	@Test
	public void zoom() throws InterruptedException  {
		Thread.sleep(6000);	
	}

	@AfterMethod
	public void tearDown() {
		driver.quit();
	}
}

package com.test.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import java.util.List;

import com.test.pages.EtsyPlatform;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Etsy extends Common {

	public EtsyPlatform etsyPlatformPage;
	public static long currentRowCount;
	public static String SavedHotelName;
	
	public Etsy(){
		etsyPlatformPage = new EtsyPlatform(driver);
	}
	
	@Given("^I am a on etsy page$")
	public void i_am_on_etsy_page() throws Throwable {
		etsyPlatformPage.gotoHomePage();
		//assertEquals("All categories | Etsy UK", etsyPlatformPage.getPageTitle());
		
	}

	@When("^I search for \"([^\"]*)\"$")
	public void i_search_for(String arg1) throws Throwable {
	    
	}

	@When("^I select \"([^\"]*)\" and hit search$")
	public void i_select_and_hit_search(String arg1) throws Throwable {}
	    

	@When("^I sort by \"([^\"]*)\"$")
	public void i_sort_by(String arg1) throws Throwable {
	}

	@Then("^I print top (\\d+) items price$")
	public void i_print_top_items_price(int arg1) throws Throwable {
	   
	}

	
}

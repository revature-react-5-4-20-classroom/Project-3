package com.revature.DataService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Optional;

import com.revature.DataService.models.Location;
import com.revature.DataService.repositories.LocationRepository;
import com.revature.DataService.services.LocationService;

class LocationServiceTest {

	@InjectMocks 
	LocationService locationService; 
	
	@Mock
	LocationRepository locationRepository; 
	
	@BeforeEach
	void setUp() throws Exception
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testGetById() throws Exception {
		Optional<Location> locations = Optional.of(new Location());
		locations.get().setLocationName("Reston");
		
		when(locationRepository.findById(Mockito.anyInt())).thenReturn(locations);
		
		Location locationInstance = locationService.getById(1);
		
		assertNotNull(locationInstance);
		assertEquals("Reston", locationInstance.getLocationName());
		
	}
	
	@Test
	void testGetAll() 
	{
		ArrayList<Location> locations = new ArrayList<Location>();
		locations.add(new Location());
		locations.add(new Location());
		locations.add(new Location());
		
		when(locationRepository.findAll()).thenReturn(locations);
		
		ArrayList<Location> locationsTest = (ArrayList<Location>) locationService.getAll();
		
		assertNotNull(locationsTest.get(0));
		assertNotNull(locationsTest.get(1));
		assertNotNull(locationsTest.get(2));
		assertTrue(locationsTest.size()>0);
	}

}
package vn.axonactive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.axonactive.entity.City;
import vn.axonactive.service.CityService;
import vn.axonactive.service.LocationService;

/**
 * Created by pmmi on 5/15/2017.
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class MapRestController {

    @Autowired
    private CityService cityService;

    @Autowired
    private LocationService locationService;

    @GetMapping(value = "/getAllCity")
    public ResponseEntity getAllCity() {
        return new ResponseEntity<>(cityService.getAllCity(), HttpStatus.OK);
    }

    @PostMapping(value = "/addCity")
    public Object addNewCity(@RequestBody City newCity) {
        cityService.addNewCity(newCity);
        return newCity;
    }

    @DeleteMapping(value = "/{CityId}")
    public String deleteCity(@PathVariable(value = "CityId") long CityId){
        cityService.deleteCity(CityId);
        return "OK";
    }

    @PutMapping(value = "/edit")
    public Object editCity(@RequestBody City editedCity){
        cityService.updateCity(editedCity);
        return editedCity;
    }
}

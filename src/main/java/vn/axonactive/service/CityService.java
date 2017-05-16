package vn.axonactive.service;

import org.springframework.web.bind.annotation.RequestBody;
import vn.axonactive.entity.City;

/**
 * Created by pmmi on 5/16/2017.
 */
public interface CityService {
    Object getAllCity();

    Object addNewCity(City newCity);

    String deleteCity(long CityId);

    Object updateCity(@RequestBody City editedCity);
}

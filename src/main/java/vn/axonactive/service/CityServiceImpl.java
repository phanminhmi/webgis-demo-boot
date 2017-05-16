package vn.axonactive.service;

/**
 * Created by pmmi on 5/15/2017.
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import vn.axonactive.entity.City;
import vn.axonactive.repository.CityRepository;

@Service
public class CityServiceImpl implements CityService{


    @Qualifier("cityRepository")
    @Autowired
    private CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public Object getAllCity(){
        return cityRepository.findAll();
    }

    @Override
    public Object addNewCity(City newCity) {
        return cityRepository.save(newCity);
    }

    @Override
    public String deleteCity(long CityId) {
        cityRepository.delete(CityId);
        return "Success";
    }

    @Override
    public Object updateCity(@RequestBody City editedCity){
        return cityRepository.save(editedCity);
    }
}

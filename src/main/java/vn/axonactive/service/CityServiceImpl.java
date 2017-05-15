package vn.axonactive.service;

/**
 * Created by pmmi on 5/15/2017.
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import vn.axonactive.repository.CityRepository;

@Service
public class CityServiceImpl implements CityService {


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
}

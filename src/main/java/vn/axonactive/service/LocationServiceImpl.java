package vn.axonactive.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import vn.axonactive.repository.LocationRepository;

/**
 * Created by pmmi on 5/15/2017.
 */

@Service
public class LocationServiceImpl implements LocationService {


    @Qualifier("locationRepository")
    @Autowired
    private LocationRepository locationRepository;

    @Override
    public Object findLocationById(long id) {
        return this.locationRepository.findOne(id);
    }
}

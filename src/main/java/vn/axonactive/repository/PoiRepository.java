package vn.axonactive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.axonactive.entity.Poi;

/**
 * Created by pmmi on 5/17/2017.
 */
@Repository
public interface PoiRepository extends JpaRepository<Poi, Long>{

}

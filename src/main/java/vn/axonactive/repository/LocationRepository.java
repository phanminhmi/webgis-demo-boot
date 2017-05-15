package vn.axonactive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.axonactive.entity.Location;

/**
 * Created by pmmi on 5/15/2017.
 */
@Repository
public interface LocationRepository extends JpaRepository<Location, Long>{
}

package vn.axonactive.entity;

/**
 * Created by pmmi on 5/9/2017.
 */

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Location {
    private Double lat;
    private Double lon;
}

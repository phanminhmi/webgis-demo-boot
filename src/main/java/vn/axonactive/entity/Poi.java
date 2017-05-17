package vn.axonactive.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by pmmi on 5/12/2017.
 */

@Entity
@Getter@Setter
@NoArgsConstructor
@Table(name = "poi")
public class Poi {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lat")
    private float lat;

    @Column(name = "lng")
    private float lng;

    public Poi(String name, float lat, float lng) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}

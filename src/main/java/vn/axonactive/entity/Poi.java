package vn.axonactive.entity;

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

    @Column(name = "address")
    private String address;

    @Column(name = "lat")
    private float lat;

    @Column(name = "lng")
    private float lng;

    @Column(name = "type")
    private String type;
}

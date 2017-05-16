package vn.axonactive.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "city")
public class City implements Serializable {

    private long cityId;
    private String cityName;
    private Location center;
    private Double population;

    public City() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getCityId() {
        return cityId;
    }

    public void setCityId(long cityId) {
        this.cityId = cityId;
    }

    @Column(name = "cityName")
    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id")
    @JsonManagedReference
    public Location getCenter() {
        return center;
    }

    public void setCenter(Location center) {
        this.center = center;
    }

    @Column(name = "population")
    public Double getPopulation() {
        return population;
    }

    public void setPopulation(Double population) {
        this.population = population;
    }


}

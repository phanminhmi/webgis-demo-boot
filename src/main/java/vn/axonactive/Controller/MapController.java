package vn.axonactive.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import vn.axonactive.entity.Location;

/**
 * Created by pmmi on 5/9/2017.
 */

@Controller
public class MapController {

    @RequestMapping(value = "/")
    public String showMap(Model model) {
        model.addAttribute("location", new Location(16.040958, 108.220493));
        return "index";
    }
}

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<jsp:include page="header.jsp"/>
<body>
<div class="container" style="margin-top: 60px;">
    <div>
        <div class="col-md-4">
            <form:form action="/create" method="get" modelAttribute="newPoi" id="poiForm">
                <div>
                    <label for="name">Name</label>
                    <input path="name" type="text" name="name" id="name" class="form-control"/>
                </div>

                <div class="form-group">
                    <label class="control-label">Latitude</label>
                    <form:input path="lat" type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label class="control-label">Longtitude</label>
                    <form:input path="lng" type="text" class="form-control"/>
                </div>
                <input type="submit" value="Send"/>
            </form:form>
        </div>

        <div class="col-md-8">
            <div id="googleMap" style="width: 690px; height: 380px;"></div>
        </div>
    </div>

    <hr/>

    <div>
        <div class="col-md-4">
            <h3>Population Map Demo</h3>
            <form id="cityForm">
                <div class="form-group">
                    <label for="cityName">City Name</label>
                    <input type="text" name="cityName" id="cityName" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="lat">Center Latitude</label>
                    <input type="text" name="lat" id="lat" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="lng">Center Longtitude</label>
                    <input type="text" name="lng" id="lng" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="population">Population</label>
                    <input type="text" name="population" id="population" class="form-control"/>
                </div>
                <p>
                    <input type="submit" value="Send" />
                </p>

            </form>
            <script>
                (function ($) {
                    $.fn.serializeFormJSON = function () {
                        var o = {};
                        var a = this.serializeArray();
                        $.each(a, function () {
                            if (o[this.name]) {
                                if (!o[this.name].push) {
                                    o[this.name] = [o[this.name]];
                                }
                                o[this.name].push(this.value || '');
                            } else {
                                o[this.name] = this.value || '';
                            }
                        });
                        return o;
                    };
                })(jQuery);

                $("#cityForm").submit(function (e) {
                    e.preventDefault();
                    var data = $(this).serializeFormJSON();
                    var newCity = {
                        cityName: data.cityName,
                        center: {
                            lat: parseFloat(data.lat),
                            lng: parseFloat(data.lng)
                        },
                        population: parseInt(data.population)
                    }
                    console.log(data);

                    $.ajax({
                        type: "POST",
                        url: "http://localhost:8080/api/addCity",
                        data: JSON.stringify(newCity),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data){console.log(newCity);},
                    });
                });
            </script>
        </div>
        <div class="col-md-8">
            <div id="map" style="width: 690px; height: 380px;"></div>
        </div>
    </div>

    <hr/>



</div>
</body>
</html>

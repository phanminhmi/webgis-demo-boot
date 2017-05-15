<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<jsp:include page="header.jsp"/>
<body>
<div class="container" style="margin-top: 60px;">
    <div>
        <div class="col-md-4">
            <form:form action="#" method="get" modelAttribute="location">
                <div class="form-group">
                    <label class="control-label">Latitude</label>
                    <form:input path="lat" type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label class="control-label">Longtitude</label>
                    <form:input path="lng" type="text" class="form-control"/>
                </div>
            </form:form>
        </div>

        <div class="col-md-8">
            <div id="googleMap" style="width: 690px; height: 380px;"></div>
        </div>
    </div>

    <hr/>

    <div>
        <div class="col-md-4">
            <h3>InitMap Function</h3>
        </div>
        <div class="col-md-8">
            <div id="map" style="width: 690px; height: 380px;"></div>
        </div>
    </div>

    <hr/>

    <div>
        <div class="col-md-4">
            <h3>Clustering</h3>
        </div>
        <div class="col-md-8">
            <div id="visualizing" style="width: 690px; height: 380px;"></div>
        </div>
    </div>

</div>
</body>
</html>

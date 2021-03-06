$(document).ready(
    function initMap() {
        var axondanang = {lat: parseFloat($("#lat").val()), lng: parseFloat($("#lng").val())};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: axondanang
        });
        $.ajax({
            url: 'http://localhost:8080/api/getAllCity',
            type: "GET",
            dataType: "json",
            success: function (data) {
                var citymap = data;
                for (var city in citymap) {
                    // Add the circle for this city to the map.
                    var cityCircle = new google.maps.Circle({
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                        map: map,
                        center: citymap[city].center,
                        radius: Math.sqrt(citymap[city].population) * 100
                    });
                }
            }
        });

        infoWindow = new google.maps.InfoWindow;
        
        

        var marker = new google.maps.Marker({
            position: axondanang,
            map: map
        });

        map.data.addGeoJson(bee12Logo);
        map.data.setStyle(function(feature) {
            return ({
                strokeColor: feature.getProperty('stroke'),
                fillColor: feature.getProperty('fill'),
                fillOpacity: feature.getProperty('fill-opacity'),
                strokeWeight: feature.getProperty('stroke-width'),
                strokeOpacity: feature.getProperty('stroke-opacity')
            });
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('Your location here!');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }


    },
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
);

var googleLogo = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "letter": "G",
                "color": "blue",
                "rank": "7",
                "ascii": "71"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
                        [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
                        [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
                        [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
                        [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
                        [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
                        [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
                        [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "letter": "o",
                "color": "red",
                "rank": "15",
                "ascii": "111"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
                        [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
                        [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
                        [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
                    ],
                    [
                        [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
                        [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "letter": "o",
                "color": "yellow",
                "rank": "15",
                "ascii": "111"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
                        [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
                        [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
                        [132.71, -25.64], [131.87, -25.76]
                    ],
                    [
                        [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
                        [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "letter": "g",
                "color": "blue",
                "rank": "7",
                "ascii": "103"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
                        [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
                        [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
                        [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
                        [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
                        [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
                        [138.99, -25.40], [138.73, -25.00 ], [138.12, -25.04]
                    ],
                    [
                        [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
                        [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "letter": "l",
                "color": "green",
                "rank": "12",
                "ascii": "108"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [140.14,-21.04], [140.31,-29.42], [141.67,-29.49], [141.59,-20.92], [140.14,-21.04]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "letter": "e",
                "color": "red",
                "rank": "5",
                "ascii": "101"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
                        [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
                        [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
                        [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
                        [144.31, -28.26], [144.14, -27.41]
                    ],
                    [
                        [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
                        [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
                    ]
                ]
            }
        }
    ]
}

var bee12Logo = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#ffff00",
                "fill-opacity": 0.8
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            110.54443359375,
                            16.06692895745012
                        ],
                        [
                            110.14892578125,
                            13.111580118251648
                        ],
                        [
                            111.62109375,
                            13.111580118251648
                        ],
                        [
                            112.06054687499999,
                            14.179186142354181
                        ],
                        [
                            110.76416015625,
                            14.562317701914855
                        ],
                        [
                            111.6650390625,
                            14.668625907385914
                        ],
                        [
                            111.7529296875,
                            15.623036831528264
                        ],
                        [
                            110.54443359375,
                            16.06692895745012
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#000000",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#000000",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            110.80810546875,
                            15.665354182093287
                        ],
                        [
                            110.6982421875,
                            14.902321826141808
                        ],
                        [
                            111.3134765625,
                            14.987239525774244
                        ],
                        [
                            111.37939453125,
                            15.47485740268724
                        ],
                        [
                            110.80810546875,
                            15.665354182093287
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#000000",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#000000",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            110.61035156249999,
                            14.26438308756265
                        ],
                        [
                            110.50048828124999,
                            13.410994034321702
                        ],
                        [
                            111.33544921874999,
                            13.410994034321702
                        ],
                        [
                            111.55517578125,
                            14.030014548014327
                        ],
                        [
                            110.61035156249999,
                            14.26438308756265
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#ffff00",
                "fill-opacity": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            112.82958984375,
                            13.7313809749427
                        ],
                        [
                            113.57666015625,
                            13.859413869074032
                        ],
                        [
                            113.291015625,
                            14.370833973406821
                        ],
                        [
                            112.39013671875,
                            14.157881896141474
                        ],
                        [
                            112.21435546875,
                            13.645986814875332
                        ],
                        [
                            112.52197265625,
                            13.111580118251648
                        ],
                        [
                            113.51074218749999,
                            13.132979019087472
                        ],
                        [
                            113.466796875,
                            13.368243250897299
                        ],
                        [
                            112.763671875,
                            13.432366575813761
                        ],
                        [
                            112.82958984375,
                            13.7313809749427
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            112.67578124999999,
                            14.072644954380316
                        ],
                        [
                            112.587890625,
                            13.880745842025602
                        ],
                        [
                            113.18115234375,
                            13.966054081318314
                        ],
                        [
                            113.13720703125,
                            14.157881896141474
                        ],
                        [
                            112.67578124999999,
                            14.072644954380316
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#ffff00",
                "fill-opacity": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            114.3017578125,
                            13.774066408054827
                        ],
                        [
                            114.93896484374999,
                            13.944729974920167
                        ],
                        [
                            114.67529296874999,
                            14.349547837185362
                        ],
                        [
                            114.0380859375,
                            14.179186142354181
                        ],
                        [
                            113.84033203125,
                            13.752724664396988
                        ],
                        [
                            114.10400390625,
                            13.197164523281993
                        ],
                        [
                            115.02685546875,
                            13.197164523281993
                        ],
                        [
                            114.9169921875,
                            13.453737213419249
                        ],
                        [
                            114.27978515625,
                            13.496472765758952
                        ],
                        [
                            114.3017578125,
                            13.688687769784968
                        ],
                        [
                            114.3017578125,
                            13.774066408054827
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            114.27978515625,
                            13.944729974920167
                        ],
                        [
                            114.6533203125,
                            14.00869637063467
                        ],
                        [
                            114.58740234375,
                            14.157881896141474
                        ],
                        [
                            114.23583984374999,
                            14.093957177836224
                        ],
                        [
                            114.27978515625,
                            13.944729974920167
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#000000",
                "fill-opacity": 0.8
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            115.6640625,
                            13.239945499286312
                        ],
                        [
                            115.94970703125,
                            13.239945499286312
                        ],
                        [
                            115.94970703125,
                            15.855673509998681
                        ],
                        [
                            115.6640625,
                            15.855673509998681
                        ],
                        [
                            115.6640625,
                            13.239945499286312
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#000000",
                "fill-opacity": 0.8
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            116.69677734375,
                            15.284185114076433
                        ],
                        [
                            116.98242187499999,
                            15.220589019578128
                        ],
                        [
                            117.22412109375,
                            15.47485740268724
                        ],
                        [
                            117.861328125,
                            15.517205256329813
                        ],
                        [
                            118.10302734374999,
                            15.156973713377667
                        ],
                        [
                            116.65283203124999,
                            13.645986814875332
                        ],
                        [
                            116.630859375,
                            13.346865014577924
                        ],
                        [
                            118.36669921875,
                            13.368243250897299
                        ],
                        [
                            118.32275390624999,
                            13.688687769784968
                        ],
                        [
                            117.0703125,
                            13.710035342476681
                        ],
                        [
                            118.47656249999999,
                            15.13576435459581
                        ],
                        [
                            118.05908203124999,
                            15.876809064146757
                        ],
                        [
                            117.04833984375001,
                            15.89794240102209
                        ],
                        [
                            116.630859375,
                            15.580710739162123
                        ],
                        [
                            116.69677734375,
                            15.284185114076433
                        ]
                    ]
                ]
            }
        }
    ]
}
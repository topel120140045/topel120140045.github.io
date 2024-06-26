const p = `{
    "points": [
        {
            "lat": -5.0493669,
            "lng": 105.2017091
        },
        {
            "lat": -5.0498585,
            "lng": 105.2043914
        },
        {
            "lat": -5.0501898,
            "lng": 105.2043163
        },
        {
            "lat": -5.0503394,
            "lng": 105.2052067
        },
        {
            "lat": -5.0510555,
            "lng": 105.2051638
        },
        {
            "lat": -5.0513868,
            "lng": 105.2060758
        },
        {
            "lat": -5.0518036,
            "lng": 105.2060329
        },
        {
            "lat": -5.0518036,
            "lng": 105.2064191
        },
        {
            "lat": -5.0522738,
            "lng": 105.2064406
        },
        {
            "lat": -5.0523807,
            "lng": 105.2077388
        },
        {
            "lat": -5.0552769,
            "lng": 105.2076529
        },
        {
            "lat": -5.0560678,
            "lng": 105.2088975
        },
        {
            "lat": -5.0575426,
            "lng": 105.2092944
        },
        {
            "lat": -5.05828,
            "lng": 105.2092944
        },
        {
            "lat": -5.0587716,
            "lng": 105.2090799
        },
        {
            "lat": -5.0592952,
            "lng": 105.208522
        },
        {
            "lat": -5.0605456,
            "lng": 105.2076207
        },
        {
            "lat": -5.0616571,
            "lng": 105.2069877
        },
        {
            "lat": -5.06108,
            "lng": 105.2057861
        },
        {
            "lat": -5.060738,
            "lng": 105.2051638
        },
        {
            "lat": -5.0616678,
            "lng": 105.2048312
        },
        {
            "lat": -5.0614647,
            "lng": 105.2042733
        },
        {
            "lat": -5.0608983,
            "lng": 105.2044021
        },
        {
            "lat": -5.0608128,
            "lng": 105.2040051
        },
        {
            "lat": -5.0603746,
            "lng": 105.2040051
        },
        {
            "lat": -5.0601288,
            "lng": 105.2028035
        },
        {
            "lat": -5.0617212,
            "lng": 105.2022992
        },
        {
            "lat": -5.0626189,
            "lng": 105.2018593
        },
        {
            "lat": -5.0633029,
            "lng": 105.2014409
        },
        {
            "lat": -5.0625762,
            "lng": 105.2002608
        },
        {
            "lat": -5.0639761,
            "lng": 105.1992415
        },
        {
            "lat": -5.0629075,
            "lng": 105.1968704
        },
        {
            "lat": -5.0604494,
            "lng": 105.197203
        },
        {
            "lat": -5.0599685,
            "lng": 105.1971923
        },
        {
            "lat": -5.0596052,
            "lng": 105.1968919
        },
        {
            "lat": -5.0577029,
            "lng": 105.1931261
        },
        {
            "lat": -5.0573181,
            "lng": 105.1929544
        },
        {
            "lat": -5.057083,
            "lng": 105.1929008
        },
        {
            "lat": -5.052167,
            "lng": 105.1920747
        },
        {
            "lat": -5.0507669,
            "lng": 105.1984583
        },
        {
            "lat": -5.0498906,
            "lng": 105.1982652
        },
        {
            "lat": -5.0495913,
            "lng": 105.2004324
        },
        {
            "lat": -5.0486616,
            "lng": 105.2002822
        },
        {
            "lat": -5.0485012,
            "lng": 105.2016126
        }
    ],
    "bounds": {
        "left": 105.1920747,
        "bottom": -5.0639761,
        "right": 105.2092944,
        "top": -5.0485012,
        "centerLatLng": null
    }
}`;

let map = JSON.parse(p);
let points = map.points;

let pp = [];
points.forEach((point) => {
  pp.push([point.lat, point.lng]);
});
console.log(pp);

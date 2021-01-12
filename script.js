let restaurants =

[
    {
        "FastFood": [{
            "name": "KFC",
            "outlets": "88",
            "location": "3155 Commonwealth Ave W, #B1-32/33, Singapore 129588",
            "website": "https://www.kfc.com.sg/",
            "image": "kfcimage.jpg"
        },

        {
            "name": "MacDonalds",
            "outlets": "136",
            "location": "50 Jurong Gateway Rd, #01-63, #02-55, Singapore 608549",
            "website": "https://www.mcdonalds.com.sg/",
            "image": "macimg.jpg"
        },
        
        {
            "name": "Subway",
            "outlets": "50",
            "location": "1 Bukit Batok Central Link, Singapore 658713",
            "website": "https://www.subway.com/en-sg",
            "image": "subwayimg.jpg"
        }],
        
        "Korean": [{
            "name": "Oppa Korean BBQ Buffet",
            "outlets": "1",
            "location": "#03-10 JCube, 2 Jurong East Central 1, 609731",
            "website": "http://oppakoreanbbq.com/",
            "image": "oppabbqimg.jpg"
        },
    
        {
            "name": "O.BBa Jjajang & BBQ",
            "outlets": "2",
            "location": "19 Cheong Chin Nam Rd, Singapore 599743",
            "website": "https://www.facebook.com/obbabukittimah/",
            "image": "obbaimg.jpg"
        }],

        "Japanese": [{
            "name": "Takagi Ramen",
            "outlets": "5",
            "location": "Jurong West Street 41, #01-74 Block 492, Singapore 640492",
            "website": "https://takagiramen.com/",
            "image": "takagiimg.jpg"
        },
        
        {
            "name": "Sushi Tei",
            "outlets": "13",
            "location": "1 HarbourFront Walk, #02 - 152, Singapore 098585",
            "website": "https://sushitei.com/",
            "image": "teiimg.jpg"
        }],

        "IndianMuslim": [{
            "name": "Mufiz Food Centre",
            "outlets": "1",
            "location": "632 Bukit Batok Central, Singapore 650633",
            "website": "https://www.facebook.com/MufizRestaurant/?__tn__=-UC*F",
            "image": "mufizimg.jpg"
        },
        
        {
            "name": "Tandoori Culture",
            "outlets": "2",
            "location": "4 Hillview Rise, #02-03 HillV2, Singapore 667979",
            "website": "http://tandooriculture.com.sg/",
            "image": "tandooriimg.jpg"
        }],

        "Chinese": [{
            "name": "Ding Tai Fung",
            "outlets": "10",
            "location": "63 Jurong West Central 3, Singapore 648331",
            "website": "https://dintaifung.com.sg/",
            "image": "dingimg.jpg"
        },
    
        {
            "name": "Hai Di Lao Hotpot",
            "outlets": "11",
            "location": "311 New Upper Changi Road #01-13 Bedok Mall, 467360",
            "website": "https://www.haidilao.com/sg/",
            "image": "haiimg.jpg"
        }],

        "Vegetarian": [{
            "name": "VeganBurg Singapore",
            "outlets": "1",
            "location": "44 Jln Eunos, Singapore 419502",
            "website": "https://www.veganburg.com/menu-sg",
            "image": "veganburgimg.jpg"
        }],

        "Italian": [{
            "name": "La Forketta",
            "outlets": "1",
            "location": "9 Dempsey Road, Dempsey Hill, #01-09, 247697",
            "website": "https://www.laforketta.com.sg/",
            "image": "lafimg.jpg"
        }],

        "Thai": [{
            "name": "Siam Square Mookata",
            "outlets": "10",
            "location": "11 Woodlands Close #01-46 Stall 3B, 737853",
            "website": "https://siamsquaremookata.com.sg/",
            "image": "siamimg.jpg"
        }]

    }
]

/*Fast Food*/
$("#ff1-name").text(restaurants[0].FastFood[0].name);
$("#ff1-outlets").text(restaurants[0].FastFood[0].outlets);
$("#ff1-location").text(restaurants[0].FastFood[0].location);
$("#ff1-img").attr("src", restaurants[0].FastFood[0].image);
$("#ff1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].FastFood[0].website;
});

$("#ff2-name").text(restaurants[0].FastFood[1].name);
$("#ff2-outlets").text(restaurants[0].FastFood[1].outlets);
$("#ff2-location").text(restaurants[0].FastFood[1].location);
$("#ff2-img").attr("src", restaurants[0].FastFood[1].image);
$("#ff2-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].FastFood[1].website;
});

$("#ff3-name").text(restaurants[0].FastFood[2].name);
$("#ff3-outlets").text(restaurants[0].FastFood[2].outlets);
$("#ff3-location").text(restaurants[0].FastFood[2].location);
$("#ff3-img").attr("src", restaurants[0].FastFood[2].image);
$("#ff3-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].FastFood[2].website;
});

/*Korean*/
$("#k1-name").text(restaurants[0].Korean[0].name);
$("#k1-outlets").text(restaurants[0].Korean[0].outlets);
$("#k1-location").text(restaurants[0].Korean[0].location);
$("#k1-img").attr("src", restaurants[0].Korean[0].image);
$("#k1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Korean[0].website;
});

$("#k2-name").text(restaurants[0].Korean[1].name);
$("#k2-outlets").text(restaurants[0].Korean[1].outlets);
$("#k2-location").text(restaurants[0].Korean[1].location);
$("#k2-img").attr("src", restaurants[0].Korean[1].image);
$("#k2-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Korean[1].website;
});

/*Japanese*/
$("#j1-name").text(restaurants[0].Japanese[0].name);
$("#j1-outlets").text(restaurants[0].Japanese[0].outlets);
$("#j1-location").text(restaurants[0].Japanese[0].location);
$("#j1-img").attr("src", restaurants[0].Japanese[0].image);
$("#j1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Japanese[0].website;
});

$("#j2-name").text(restaurants[0].Japanese[1].name);
$("#j2-outlets").text(restaurants[0].Japanese[1].outlets);
$("#j2-location").text(restaurants[0].Japanese[1].location);
$("#j2-img").attr("src", restaurants[0].Japanese[1].image);
$("#j2-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Japanese[1].website;
});

/*Indian Muslim*/
$("#im1-name").text(restaurants[0].IndianMuslim[0].name);
$("#im1-outlets").text(restaurants[0].IndianMuslim[0].outlets);
$("#im1-location").text(restaurants[0].IndianMuslim[0].location);
$("#im1-img").attr("src", restaurants[0].IndianMuslim[0].image);
$("#im1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].IndianMuslim[0].website;
});

$("#im2-name").text(restaurants[0].IndianMuslim[1].name);
$("#im2-outlets").text(restaurants[0].IndianMuslim[1].outlets);
$("#im2-location").text(restaurants[0].IndianMuslim[1].location);
$("#im2-img").attr("src", restaurants[0].IndianMuslim[1].image);
$("#im2-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].IndianMuslim[1].website;
});

/*Chinese*/
$("#c1-name").text(restaurants[0].Chinese[0].name);
$("#c1-outlets").text(restaurants[0].Chinese[0].outlets);
$("#c1-location").text(restaurants[0].Chinese[0].location);
$("#c1-img").attr("src", restaurants[0].Chinese[0].image);
$("#c1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Chinese[0].website;
});

$("#c2-name").text(restaurants[0].Chinese[1].name);
$("#c2-outlets").text(restaurants[0].Chinese[1].outlets);
$("#c2-location").text(restaurants[0].Chinese[1].location);
$("#c2-img").attr("src", restaurants[0].Chinese[1].image);
$("#c2-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Chinese[1].website;
});

/*Vegetarian*/
$("#v1-name").text(restaurants[0].Vegetarian[0].name);
$("#v1-outlets").text(restaurants[0].Vegetarian[0].outlets);
$("#v1-location").text(restaurants[0].Vegetarian[0].location);
$("#v1-img").attr("src", restaurants[0].Vegetarian[0].image);
$("#v1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Vegetarian[0].website;
});

/*Italian*/
$("#i1-name").text(restaurants[0].Italian[0].name);
$("#i1-outlets").text(restaurants[0].Italian[0].outlets);
$("#i1-location").text(restaurants[0].Italian[0].location);
$("#i1-img").attr("src", restaurants[0].Italian[0].image);
$("#i1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Italian[0].website;
});

/*Thai*/
$("#t1-name").text(restaurants[0].Thai[0].name);
$("#t1-outlets").text(restaurants[0].Thai[0].outlets);
$("#t1-location").text(restaurants[0].Thai[0].location);
$("#t1-img").attr("src", restaurants[0].Thai[0].image);
$("#t1-btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].Thai[0].website;
});




/*$("#restaurant-name").text(restaurants[0].FastFood[0].name);
$("#outlets").text(restaurants[0].FastFood[0].outlets);
$("#location").text(restaurants[0].FastFood[0].location);
$("#restaurant-img").attr("src", restaurants[0].FastFood[0].image);

$("#btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].FastFood[0].website;
});*/



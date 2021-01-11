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
            "image": "takagimg.jpg"
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

/*Stuff to display restaurant info(but it dont work)*/

$(".search-btn").click(function(event) {
    event.preventDefault();
    window.location.href = "index2.html";
    if (($(".search-food").val()) == "FastFood") {
        for (var i = 0; i<restaurants[0].FastFood.length; i++) {
            $("#restaurant-name").text(restaurants[0].FastFood[i].name);
            $("#outlets").text(restaurants[0].FastFood[i].outlets);
            $("#location").text(restaurants[0].FastFood[i].location);
            $("#restaurant-img").attr("src", restaurants[0].FastFood[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[0].FastFood[i].website;
            });
        }
    } else if (($(".search-food").val()) == "Korean") {
        for (var i = 0; i<restaurants[1].Korean.length; i++) {
            $("#restaurant-name").text(restaurants[1].Korean[i].name);
            $("#outlets").text(restaurants[1].Korean[i].outlets);
            $("#location").text(restaurants[1].Korean[i].location);
            $("#restaurant-img").attr("src", restaurants[2].Korean[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[1].Korean[i].website;
            });
        }
    } else if (($(".search-food").val()) == "Japanese") {
        for (var i = 0; i<restaurants[2].Japanese.length; i++) {
            $("#restaurant-name").text(restaurants[2].Japanese[i].name);
            $("#outlets").text(restaurants[2].Japanese[i].outlets);
            $("#location").text(restaurants[2].Japanese[i].location);
            $("#restaurant-img").attr("src", restaurants[2].Japanese[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[2].Japanese[i].website;
            });
        }
    } else if (($(".search-food").val()) == "IndianMuslim") {
        for (var i = 0; i<restaurants[3].IndianMuslim.length; i++) {
            $("#restaurant-name").text(restaurants[3].IndianMuslim[i].name);
            $("#outlets").text(restaurants[3].IndianMuslim[i].outlets);
            $("#location").text(restaurants[3].IndianMuslim[i].location);
            $("#restaurant-img").attr("src", restaurants[3].IndianMuslim[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[3].IndianMuslim[i].website;
            });
        }
    } else if (($(".search-food").val()) == "Chinese") {
        for (var i = 0; i<restaurants[4].Chinese.length; i++) {
            $("#restaurant-name").text(restaurants[4].Chinese[i].name);
            $("#outlets").text(restaurants[4].Chinese[i].outlets);
            $("#location").text(restaurants[4].Chinese[i].location);
            $("#restaurant-img").attr("src", restaurants[4].Chinese[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[4].Chinese[i].website;
            });
        }
    } else if (($(".search-food").val()) == "Vegetarian") {
        for (var i = 0; i<restaurants[5].Vegetarian.length; i++) {
            $("#restaurant-name").text(restaurants[5].Vegetarian[i].name);
            $("#outlets").text(restaurants[5].Vegetarian[i].outlets);
            $("#location").text(restaurants[5].Vegetarian[i].location);
            $("#restaurant-img").attr("src", restaurants[5].Vegetarian[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[5].Vegetarian[i].website;
            });
        }
    } else if (($(".search-food").val()) == "Italian") {
        for (var i = 0; i<restaurants[6].Italian.length; i++) {
            $("#restaurant-name").text(restaurants[6].Italian[i].name);
            $("#outlets").text(restaurants[6].Italian[i].outlets);
            $("#location").text(restaurants[6].Italian[i].location);
            $("#restaurant-img").attr("src", restaurants[6].Italian[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[6].Italian[i].website;
            });
        }
    } else (($(".search-food").val()) == "Thai"); {
        for (var i = 0; i<restaurants[7].Thai.length; i++) {
            $("#restaurant-name").text(restaurants[7].Thai[i].name);
            $("#outlets").text(restaurants[7].Thai[i].outlets);
            $("#location").text(restaurants[7].Thai[i].location);
            $("#restaurant-img").attr("src", restaurants[7].Thai[i].image);
            $("#btn").click(function(event) {
                event.preventDefault();
                window.location.href = restaurants[7].Thai[i].website;
            });
        }
    }
})



/*$("#restaurant-name").text(restaurants[0].FastFood[0].name);
$("#outlets").text(restaurants[0].FastFood[0].outlets);
$("#location").text(restaurants[0].FastFood[0].location);
$("#restaurant-img").attr("src", restaurants[0].FastFood[0].image);

$("#btn").click(function(event) {
    event.preventDefault();
    window.location.href = restaurants[0].FastFood[0].website;
});*/



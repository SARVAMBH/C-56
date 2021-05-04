var images = ["https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/merlion.jpg",
     "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/doha.jpg",
     "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/ireland.jpg",
     "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/gornergratbahn-matterhorn.jpg",
    "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/fjaerlandsfjord.jpg",
            "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/usa.jpg",
            "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/omar-ali-mosque.jpg",
            "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/dubai.jpg",
            "https://www.worldsmostawesome.com/lists/richest-countries-in-the-world-top-15/denmark.jpg"
 ];
var country = ["SINGAPORE",
    "QATAR",
             "IRELAND",
               "SWITZERLAND",
               "NORWAY",
               "UNITED STATES",
               "BRUNEI",
               "UNITED ARAB EMIRATES",
               "DENMARK"
];
var i = 0;

function nextslide() {
    document.getElementById("album").src = images[i];
    document.getElementById("country").innerHTML = country[i];
    i++;
    document.getElementById("audio").play();
    if (i == 9) {
        i = 0;
    }
}

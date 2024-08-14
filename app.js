let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({ 
//   behavior: 'smooth' 
// });



// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
// })


// // script.js
// document.addEventListener("keydown", function(event) {
//     const keySequence = [];
//     const secretWords = ["pakistan", "mohid"];
//     let currentWord = "";

//     document.addEventListener("keydown", function(event) {
//         keySequence.push(event.key);
//         currentWord += event.key;

//         // Check if the current word matches any secret word
//         if (secretWords.includes(currentWord)) {
//             revealSecret();
//             currentWord = ""; // Reset the current word after triggering
//         }

//         // Limit the length of keySequence to prevent it from growing indefinitely
//         if (keySequence.length > 20) {
//             keySequence.shift();
//         }

//         console.log(currentWord); // For debugging, logs the current word being typed
//     });

//     function revealSecret() {
//         const secretDiv = document.getElementById("secretDiv");
//         secretDiv.classList.remove("hidden");
//         secretDiv.classList.add("visible");
//     }
// });



// script.js
document.addEventListener("keydown", function(event) {
    const keySequence = [];
    const secretWords = ["pakistan", "mohid"];
    let currentWord = "";

    document.addEventListener("keydown", function(event) {
        keySequence.push(event.key);
        currentWord += event.key;

        // Check if the current word matches any secret word
        if (secretWords.includes(currentWord)) {
            revealSecret();
            currentWord = ""; // Reset the current word after triggering
        }

        // Limit the length of keySequence to prevent it from growing indefinitely
        if (keySequence.length > 20) {
            keySequence.shift();
        }

        // console.log(currentWord); // For debugging, logs the current word being typed
    });

    function revealSecret() {
        hideSecret()
        const secretDiv = document.getElementById("secretDiv");
        const overlay = document.createElement("div");
        overlay.className = "overlay visible";
        document.body.appendChild(overlay);
        document.body.classList.add("hidden-background");

        secretDiv.classList.remove("hidden");
        secretDiv.classList.add("visible");

        // Auto-hide after 5 seconds
        setTimeout(hideSecret, 5000);

        // Hide on click
        overlay.addEventListener("click", hideSecret);
        secretDiv.addEventListener("click", hideSecret);
    }

    function hideSecret() {
        const secretDiv = document.getElementById("secretDiv");
        const overlay = document.querySelector(".overlay");
        if (secretDiv) {
            secretDiv.classList.remove("visible");
            secretDiv.classList.add("hidden");
        }
        if (overlay) {
            overlay.classList.remove("visible");
            document.body.removeChild(overlay);
        }
        document.body.classList.remove("hidden-background");
    }
});



    // document.querySelectorAll('.timeline-point').forEach(point => {
    //     point.addEventListener('mouseenter', function() {
    //         const cardId = this.getAttribute('data-card');
            
    //         // Hide all cards
    //         document.querySelectorAll('.achievement-card').forEach(card => {
    //             card.classList.remove('show');
    //             card.classList.add('hide');
    //         });

    //         // Show the relevant card
    //         const activeCard = document.getElementById(cardId);
    //         activeCard.classList.remove('hide');
    //         activeCard.classList.add('show');
    //     });
    // });

    // // Show the cards container on the first hover
    // document.querySelector('.timeline-point').addEventListener('mouseenter', function() {
    //     document.querySelector('.cards-container').style.display = 'block';
    // });




    document.querySelectorAll('.timeline-point').forEach((point, index) => {
        point.addEventListener('mouseenter', function() {
            const cardId = this.getAttribute('data-card');
            
            // Hide all cards
            document.querySelectorAll('.achievement-card').forEach(card => {
                card.classList.remove('show');
                card.classList.add('hide');
            });

            // Show the relevant card
            const activeCard = document.getElementById(cardId);
            // activeCard.classList.remove('hide');
            // activeCard.classList.add('show');
        });
    });

    // Show the cards container on the first hover
    document.querySelector('.timeline-point').addEventListener('mouseenter', function() {
        // document.querySelector('.cards-container').style.display = 'block';
    });


    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar ul li a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - window.innerHeight / 3;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });


//     function toggleSidebar() {
//         const sidebar = document.getElementById('sidebar');
//         sidebar.classList.toggle('open');
//     }
// function toggleSidebar() {
//         const sidebar = document.getElementById('sidebar');
//         sidebar.classList.toggle('open');
//     }

//     function toggleAudio() {
//         const audioPlayer = document.querySelector('.audio-player');
//         audioPlayer.classList.toggle('show');}


    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }

    function toggleAudio() {
        const audioPlayer = document.querySelector('.audio-player');
        audioPlayer.classList.toggle('show');
    }





 // Define the bounds of Pakistan
    var southWest = L.latLng(23.6345, 60.8724); // Southwestern corner of Pakistan
    var northEast = L.latLng(37.0841, 77.8374); // Northeastern corner of Pakistan
    var bounds = L.latLngBounds(southWest, northEast);

    // Initialize the Leaflet map
    var map = L.map('map', {
        center: [30.3753, 69.3451], // Centered on Pakistan
        zoom: 5, // Slightly closer zoom level for better focus on Pakistan
        maxBounds: bounds, // Restrict map to Pakistan's bounds
        maxBoundsViscosity: 1.0 // Restrict panning beyond bounds
    });

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 12, // Limit maximum zoom to prevent too much zooming out
        minZoom: 5, // Minimum zoom to keep focus on Pakistan
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add scale control to the map
    L.control.scale().addTo(map);

    // Example population density data
    var populationData = [
        {
            region: "Punjab",
            coords: [31.1704, 72.7097],
            population: "110 million"
        },
        {
            region: "Sindh",
            coords: [25.0782, 67.0407],
            population: "48 million"
        },
        {
            region: "Khyber Pakhtunkhwa",
            coords: [34.9526, 71.4406],
            population: "35 million"
        },
        {
            region: "Balochistan",
            coords: [29.9533, 66.4878],
            population: "12 million"
        }
    ];

    // Add markers to the map
    populationData.forEach(function(data) {
        L.marker(data.coords).addTo(map)
            .bindPopup("<b>" + data.region + "</b><br>Population: " + data.population);
    });



    // Mock data for real-time stats
    const stats = {
        population: "220 million",
        gdp: "$278.2 billion",
        literacy: "59.13%",
        pollution: "85.73 AQI"
    };

    // Function to update the stats on the dashboard with mock data
    function updateStats() {
        document.getElementById('population-stat').textContent = stats.population;
        document.getElementById('gdp-stat').textContent = stats.gdp;
        document.getElementById('literacy-stat').textContent = stats.literacy;
        document.getElementById('pollution-stat').textContent = stats.pollution;
    }

    // Update stats on page load
    window.onload = function() {
        updateStats(); // Update the dashboard with mock data
    };



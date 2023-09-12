// set up API call to unsplash to generate nature image
function unsplash() {
    var apiKey = "tOQT-14Jo3wp5-I1CMKVmCdvQXVRihQoi8pJ7AsiPQI";
    var apiKey2 = "Ab4F25pH3_s49oNWOzNXoahqu18przepQm1JgDMKkZA";
    var apiKey3 = "oeF6_nedrYDZgPYD3W22C9NSsJsCa0DeZfWTlHO7u2I";
    var apiKey4 = "BhBNA4hLuZrHL_xWMeD4BgR-aMZgW07kKJhE4iDhk7E";
  
    var requestURL =
      "https://api.unsplash.com/photos/random?query=nature?orientation=landscape&client_id=" +
      apiKey;
  
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        var photoUrl = data.urls.regular;
  
        // Create an <img> element and set its source to the random photo URL
    //     document.getElementById.setAttribute(
    //       "style",
    //       "background-image:url(" + photoUrl + ")"
    //     );
    //   })
    var haikuPicture = document.getElementById('haikuPicture');
    var style = "background-image:url(" + photoUrl + ")";
    haikuPicture.style.cssText += style;
      });
  }

unsplash();

// export for use
export default unsplash;
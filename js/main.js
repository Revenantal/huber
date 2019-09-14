$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });



    document.querySelector('#startPickup').addEventListener('click', function(e){
        e.preventDefault();
        fullpage_api.moveSectionDown();
    });


    ///Get user location
    // if user says no, guess at location
    // Generate results
    // after a few seconds, change positon... yell at user
    // Change position again ... yell again
    // huber gets lost (double time
    // change position again huber cancels
    // shutdown

});
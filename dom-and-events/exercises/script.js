function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have lift off!';
     });
    
missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });    
}
document.addEventListener('DOMContentLoaded', function() {
    const abortButton = document.getElementById('abortMission');
    
    abortButton.addEventListener('click', function() {
        // Show confirmation dialog
        const confirmAbort = confirm('Are you sure you want to abort the mission?');
        
        if (confirmAbort) {
            // User confirmed, change the button text
            abortButton.textContent = 'Mission aborted! Space shuttle returning home.';
            
            // Optionally, disable the button after aborting
            abortButton.disabled = true;
            
            // Optionally, change the button's appearance to indicate aborted state
            abortButton.style.backgroundColor = 'gray';
            abortButton.style.color = 'white';
        }
        // If user cancels, do nothing and the button remains unchanged
    });
});
 
window.addEventListener("load", init);
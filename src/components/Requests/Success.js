import React from "react";
import Navigation from "../Nav/Navigation";

function Success() {
  return (
    <div>
      <Navigation />
      <h1>Success!</h1>
      <h3>
        Your request has been submitted! Our elite mechanics are heading your
        way now.
      </h3>
      <div>
              <img src="https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png" id="check"/>
      </div>
    </div>
    
  );
}

export default Success;

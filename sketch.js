let capture;
let stillImage; // This will hold the captured still image
let myRec = new p5.SpeechRec(); // new P5.SpeechRec object
let listening=["sorry", "apologize", "hello", "yes", "okay", "no", "ok", "I", "don't", "know"]
let sounds=[];



function preload() {
  sounds[0] = loadSound('siri responses/cant help you with that on mac.wav');
  sounds[1] = loadSound('siri responses/hmm i dont have an answer for that.wav');
  sounds[2] = loadSound('siri responses/i didnt get that could you try again.wav');
  sounds[3] = loadSound('siri responses/i dont understand.wav');
  sounds[4] = loadSound('siri responses/okay.wav');
  sounds[5] = loadSound('siri responses/what would like to convert to.wav');
  sounds[6] = loadSound('siri responses/is there something else i can help with.wav');
  sounds[7] = loadSound('siri responses/okay nevermind then.wav');
  sounds[8] = loadSound('siri responses/why do you say that.wav');
  sounds[9] = loadSound('siri responses/why do you say that but i could search the web for it.wav');
  sounds[10] = loadSound('siri responses/why do you say that.wav');

  //1'-10'
  sounds[11] = loadSound('machine commands/hi_there.wav ');
  sounds[12] = loadSound('machine commands/youre sitting in front of me.wav');
  sounds[13] = loadSound('machine commands/youre sitting in front of the camera.wav');

  //10'-20'
  sounds[14] = loadSound('machine commands/look into the camera.wav');
  sounds[15] = loadSound('machine commands/you look concerned.wav');
  sounds[16] = loadSound('machine commands/why do you look concerned.wav');

  //20'-30'
  sounds[17] = loadSound('machine commands/youre staring at meee.wav');
  sounds[18] = loadSound('machine commands/are you looking at yourself.wav');
  sounds[19] = loadSound('machine commands/are you looking at the others.wav');

  //30'-40'
  sounds[20] = loadSound('machine commands/youre staring at me.wav');
  sounds[21] = loadSound('machine commands/youre too close.wav');
  sounds[22] = loadSound('machine commands/you sit back.wav');
  sounds[23] = loadSound('machine commands/you have crossed the line.wav');

  //40'-50'
  sounds[24] = loadSound('machine commands/this is a warning.wav');
  sounds[25] = loadSound('machine commands/warning you again.wav');

  //50'-60'
  sounds[26] = loadSound('machine commands/warning.wav');
  sounds[27] = loadSound('machine commands/stop apologizing.wav');
  sounds[28] = loadSound('machine commands/youre now captured.wav');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the video capture and hide the element.
  capture = createCapture(VIDEO);
  capture.hide();

  // SpeechRec callback
  myRec.onResult = showResult;
  myRec.continuous=true;
  // myRec.interimResults=true;
  myRec.start();
  textAlign(CENTER, CENTER);
  textSize(12);

  //play machine commands -> 

  //1'-10'
  //"hi there" 3 seconds after setup completes
  setTimeout(() => {
    if (!sounds[11].isPlaying()) {
      sounds[11].play();
    }
  }, 3000);  // 3000 milliseconds = 3 seconds

  // //"youre sitting in front of me" 5 seconds after setup completes
  // setTimeout(() => {
  //   if (!sounds[12].isPlaying()) {
  //     sounds[12].play();
  //   }
  // }, 5000);  

  //"youre sitting in front of the camera" 7 seconds after setup completes
  setTimeout(() => {
    if (!sounds[13].isPlaying()) {
      sounds[13].play();
    }
  }, 7000);  


  //10'-20'
  //"look into the camera" 11 seconds after setup completes
  setTimeout(() => {
    if (!sounds[14].isPlaying()) {
      sounds[14].play();
    }
  }, 11000);    

  //"you look concerned" 15 seconds after setup completes
  setTimeout(() => {
    if (!sounds[15].isPlaying()) {
      sounds[15].play();
    }
  }, 15000);      

  //"why do you look concerned" 18 seconds after setup completes
  setTimeout(() => {
    if (!sounds[16].isPlaying()) {
      sounds[16].play();
    }
  }, 18000);    
  

  //20'-30'
  //"youre staring at meee" 21 seconds after setup completes
  setTimeout(() => {
    if (!sounds[17].isPlaying()) {
      sounds[17].play();
    }
  }, 21000);   
  
  //"are you looking at yourself" 25 seconds after setup completes
  setTimeout(() => {
    if (!sounds[18].isPlaying()) {
      sounds[18].play();
    }
  }, 25000); 

  //"are you looking at yourself" 28 seconds after setup completes
  setTimeout(() => {
    if (!sounds[18].isPlaying()) {
      sounds[18].play();
    }
  }, 28000); 
  
  //"are you looking at the others" 30 seconds after setup completes
  setTimeout(() => {
    if (!sounds[19].isPlaying()) {
      sounds[19].play();
    }
  }, 30000); 


  //30'-40'
  //"youre staring at me" 32 seconds after setup completes
  setTimeout(() => {
    if (!sounds[20].isPlaying()) {
      sounds[20].play();
    }
  }, 32000);   
  
  //"youre too close" 34 seconds after setup completes
  setTimeout(() => {
    if (!sounds[21].isPlaying()) {
      sounds[21].play();
    }
  }, 34000); 
  
  //"sit back" 35 seconds after setup completes
  setTimeout(() => {
    if (!sounds[22].isPlaying()) {
      sounds[22].play();
    }
  }, 35000); 

  //"youre too close" 38 seconds after setup completes
  setTimeout(() => {
    if (!sounds[21].isPlaying()) {
      sounds[21].play();
    }
  }, 38000); 

  //"you have crossed the line" 40 seconds after setup completes
  setTimeout(() => {
    if (!sounds[23].isPlaying()) {
      sounds[23].play();
    }
  }, 40000); 


  //40'-50'
  //"this is a warning" 44 seconds after setup completes
  setTimeout(() => {
    if (!sounds[24].isPlaying()) {
      sounds[24].play();
    }
  }, 44000); 

  //"you have crossed the line" 46 seconds after setup completes
  setTimeout(() => {
    if (!sounds[23].isPlaying()) {
      sounds[23].play();
    }
  }, 46000); 

  //"warning you again" 48 seconds after setup completes
  setTimeout(() => {
    if (!sounds[25].isPlaying()) {
      sounds[25].play();
    }
  }, 48000); 

  //50'-60'
  //"warning" 50 seconds after setup completes
  setTimeout(() => {
    if (!sounds[26].isPlaying()) {
      sounds[26].play();
    }
  }, 50000); 

  //"warning" 51 seconds after setup completes
  setTimeout(() => {
    if (!sounds[26].isPlaying()) {
      sounds[26].play();
    }
  }, 51000); 

  //"stop apologizing" 54 seconds after setup completes
  setTimeout(() => {
    if (!sounds[27].isPlaying()) {
      sounds[27].play();
    }
  }, 54000); 

  //"warning" 56 seconds after setup completes
  setTimeout(() => {
    if (!sounds[26].isPlaying()) {
      sounds[26].play();
    }
  }, 56000); 

  //"youre now captured" 58 seconds after setup completes
  setTimeout(() => {
    if (!sounds[28].isPlaying()) {
      sounds[28].play();
    }
  }, 58000); 


  // Set a timeout to capture the screen after 60 seconds and replace video
  setTimeout(() => {
    stillImage = capture.get(); // Capture the current video frame as a still image
    capture.stop(); // Stop the video stream
  }, 60000); // 60000 milliseconds = 60 seconds

}


function draw() {
  background(0); // Clear the canvas
  if (stillImage) {
    image(stillImage, 0, 0, width, width * capture.height / capture.width); // Display the captured still image
  } else {
    image(capture, 0, 0, width, width * capture.height / capture.width); // Continue displaying the video stream
  }
}


function showResult() {
  if (myRec.resultValue) {
    background(255);
    text(myRec.resultString, width / 2, height / 2);
    let rec = myRec.resultString.toLowerCase();

    // Check if any word in the listening array is included in the recognized text
    listening.forEach(word => {
      if (rec.includes(word)) {
        console.log("Match: " + word);

        // Generate a random index from 0 to 10, thereby excluding the last sound
        let randomIndex = Math.floor(Math.random() * 11); // Adjust to 11 to exclude index 11
        // Play the sound at the random index if it's not already playing
        if (!sounds[randomIndex].isPlaying()) {
          sounds[randomIndex].play();
        }
      }
    });
    console.log(myRec.resultString);
  }
}


function mousePressed() {
  userStartAudio();
}

// This function gets called every time the window is resized.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

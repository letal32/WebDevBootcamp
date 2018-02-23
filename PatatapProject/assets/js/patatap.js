
//Create the background to fill the canvas

var background = new Path.Rectangle(new Point(0,0), view.size.width, view.size.height);
background.fillColor = "black";

//Create a circle path. The circle is not visible, but it stores a reference
//to an object that can be used later

//var circle = new Path.Circle(new Point(0,0), 0);

var circles = {};

var initialRadius = 200;

var keyData = {
            q: {
                sound: new Howl({
                src: ['assets/sounds/bubbles.mp3']
                })
            },
            w: {
                sound: new Howl({
                src: ['assets/sounds/clay.mp3']
                })
            },
            e: {
                sound: new Howl({
                src: ['assets/sounds/confetti.mp3']
                }) 
            },
            r: {
                sound: new Howl({
                src: ['assets/sounds/corona.mp3']
                })
            },
            t: {
                sound: new Howl({
                src: ['assets/sounds/dotted-spiral.mp3']
                })
            },
            y: {
                sound: new Howl({
                src: ['assets/sounds/flash-1.mp3']
                })
            },
            u: {
                sound: new Howl({
                src: ['assets/sounds/flash-2.mp3']
                })
            },
            i: {
                sound: new Howl({
                src: ['assets/sounds/flash-3.mp3']
                })
            },
            o: {
                sound: new Howl({
                    src: ['assets/sounds/glimmer.mp3']
                })
            },
            p: {
                sound: new Howl({
                src: ['assets/sounds/moon.mp3']
                })
            },
            a: {
                sound: new Howl({
                src: ['assets/sounds/pinwheel.mp3']
                })
            },
            s: {
                sound: new Howl({
                src: ['assets/sounds/piston-1.mp3']
                })
            },
                d: {
                sound: new Howl({
                src: ['assets/sounds/piston-2.mp3']
                })
            },
            f: {
                sound: new Howl({
                src: ['assets/sounds/prism-1.mp3']
                })
            },
            g: {
                sound: new Howl({
                src: ['assets/sounds/prism-2.mp3']
                })
            },
            h: {
                sound: new Howl({
                src: ['assets/sounds/prism-3.mp3']
                })
            },
            j: {
                sound: new Howl({
                src: ['assets/sounds/splits.mp3']
                })
            },
            k: {
                sound: new Howl({
                src: ['assets/sounds/squiggle.mp3']
                })
            },
            l: {
                sound: new Howl({
                src: ['assets/sounds/strike.mp3']
                })
            },
            z: {
                sound: new Howl({
                src: ['assets/sounds/suspension.mp3']
                })
            },
            x: {
                sound: new Howl({
                src: ['assets/sounds/timer.mp3']
                })
            },
            c: {
                sound: new Howl({
                src: ['assets/sounds/ufo.mp3']
                })
            },
            v: {
                sound: new Howl({
                src: ['assets/sounds/veil.mp3']
                })
            },
            b: {
                sound: new Howl({
                src: ['assets/sounds/wipe.mp3']
                })
            },
            n: {
                sound: new Howl({
                    src: ['assets/sounds/zig-zag.mp3']
                })
            },
            m: {
                sound: new Howl({
                src: ['assets/sounds/moon.mp3']
                })
            }
        };

function onKeyDown(event){

    if (event.key in circles){
        circles[event.key].remove();
    }

    var centerX = randomRange(0, view.size.width); 
    var centerY = randomRange(0, view.size.height);

    if (event.key in keyData){
        circles[event.key] = new Path.Circle({
            radius: initialRadius,
            center: new Point(centerX, centerY),
            fillColor: randomColor()
        });
    };

    keyData[event.key].sound.play();
}


function onFrame(event){
    
    var keys = Object.keys(circles);
    
    for (var i = 0; i < keys.length; i++){
        if (keys[i] in circles && circles[keys[i]].bounds.height > 0 && circles[keys[i]].bounds.width > 0 ){
            circles[keys[i]].bounds.height -= 10;
            circles[keys[i]].bounds.width -= 10;
        }   
    }
}


function randomRange(min, max){
    return min + Math.floor(max * Math.random()); 
}

function randomColor(){
   var red = randomRange(100,255);
   var green = randomRange(100,255);
   var blue = randomRange(100,255);
   
   return "rgba(" + red + ", " + green + ", " + blue + ")"; 
}
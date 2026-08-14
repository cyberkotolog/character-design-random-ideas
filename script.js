function generate(){
   //generating type//
   var types = [
    "humanoid", 
    "animal", 
    "anthro", 
    "creature/monster", 
    "robot",
    "biomech", 
    "something else"];

   var typething = ''

   var random_types = Math.floor(Math.random() * types.length);

        typething = types[random_types]

   document.getElementById("type").innerHTML = typething;


      //generating creature//
   var creatures = [
    "gargoyle", 
    "kikimora", 
    "bunny", 
    "dog", 
    "butterfly", 
    "hognose snake", 
    "viper",
    "Pangolin",
    "Beetle",
    "Bison",
    "Antelope",
    "Alpaca",
    "Anglerfish",
    "Cat",
    "Seal",
    "Emu",
    "Dolphin",
    "Gila Monster",
    "Guinea Pig",
    "Hamster",
    "Green Bee-Eater",
    "Goose",
    "Jellyfish",
    "Jerboa",
    "Komodo Dragon",
    "Kudu",
    "Ladybug",
    "Mouse",
    "Mule",
    "Monitor Lizard",
    "Meerkat",
    "Sea Angel",
    "Sea bunny",
    "Lion",
    "Noodlefish",
    "Otter",
    "Oyster",
    "Owl",
    "Sloth",
    "Whale",
    "Dogfish",
    "Shrimp",
    "Tropicbird",
    "Parrot",
    "fruit bat",
    "vampire bat",
    "Horse",
    "Penquin",
    "Wolf",
];

   var creaturething = ''

   var random_creatures = Math.floor(Math.random() * creatures.length);

        creaturething = creatures[random_creatures]

   document.getElementById("creature").innerHTML = creaturething;

      //generating shape//

   var shapes = [
    "triangle", 
    "square", 
    "circle"];

   var shapething = ''

   var random_shapes = Math.floor(Math.random() * shapes.length);

        shapething = shapes[random_shapes]

   document.getElementById("shape").innerHTML = shapething;

      //generating extra//

   var extras = [
    "super fluffy", 
    "really long tail", 
    "snail eyes", 
    "big wings", 
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",];

   var extrathing = ''

   var random_extras = Math.floor(Math.random() * extras.length);

        extrathing = extras[random_extras]

   document.getElementById("extra").innerHTML = extrathing;

      //generating song inspo//

   var songs = [
    "McKenna Rae - A Human's Touch", 
    "BugDroidCell - THIS IS FNAF", 
    "berenika - darker times",
    "Epoch - Savlonic",
    "Electroforez - Komendatsky chas",
    "IC3PEAK - Boo-Hoo",
    "Flavor foley - Spoken For ft. Kasane Teto",
    ""

];

   var songthing = ''

   var random_songs = Math.floor(Math.random() * songs.length);

        songthing = songs[random_songs]

   document.getElementById("song").innerHTML = songthing;

         //generating song aesthetic//

   var aesthetics = [
    "dark academia", 
    "cottagecore", 
    "frutiger aero", 
    "minimalist", 
    "solarpunk", 
    "spacecore", 
    "'magical girl show'", 
    "Y2K",
    "Webcore",
    "Xpiritualism",
    "Silicon Dreams",
    "Dark Aero",
    "Frutiger Eco",
    "DORFic",
    "Hexatron",
    "Decora",
    "Acubi",
    "Acid House",
    "Groovival",
];

   var aestheticthing = ''

   var random_aesthetics = Math.floor(Math.random() * aesthetics.length);

        aestheticthing = aesthetics[random_aesthetics]

   document.getElementById("aesthetic").innerHTML = aestheticthing;


   //generating color//
   var hex_humbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

   var hexcode = '';

    for(var i=0;i < 6;i++){
var random_index = Math.floor(Math.random() * hex_humbers.length);

        hexcode += hex_humbers[random_index]
    }
    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByClassName("circle")[0].style. 
    background = "#" + hexcode;

}
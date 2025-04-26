import { v4 as uuidv4 } from "uuid";

// const beaverCover= "/assets/covers/CanaryForest.jpg";
const beaver = "/songs/Beaver-Creek.mp3";
const daylight = "/songs/Daylight.mp3";

function data() {
return [
    {
        name: "Beaver Creek",
        cover:
        "https://cms.chillhop.com/media/78391/squarelb118536196d42fe9057174e884ac250c93c52ca8.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: beaver,
        color: ["#205950", "#2ab3bf"], 
        id: uuidv4(),
        active: true,
    },
    {
        name: "Daylight",
        cover:
            "https://cms.chillhop.com/media/78391/squarelb118536196d42fe9057174e884ac250c93c52ca8.jpg",
        artist: "Aiguille",
        audio: daylight,
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Keep Going",
        cover:
            "https://cms.chillhop.com/media/78391/squarelb118536196d42fe9057174e884ac250c93c52ca8.jpg",
        artist: "Swørn",
        audio: beaver,
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Nightfall",
        cover:
            "https://cms.chillhop.com/media/78391/squarelb118536196d42fe9057174e884ac250c93c52ca8.jpg",
        artist: "Aiguille",
        audio: daylight,
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Reflection",
        cover:
            "https://cms.chillhop.com/media/78391/squarelb118536196d42fe9057174e884ac250c93c52ca8.jpg",
        artist: "Swørn",
        audio: beaver,
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Under the City Stars",
        cover:
        "https://cms.chillhop.com/media/78391/squarelb118536196d42fe9057174e884ac250c93c52ca8.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: daylight,
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: false,
    },
    ];
}

export default data;
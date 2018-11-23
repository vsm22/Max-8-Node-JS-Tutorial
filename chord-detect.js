const MaxApi = require("max-api");
const Tonal = require("tonal");
const Detect = require("tonal-detect");

MaxApi.addHandler("detect", (...midiNotes) => {

    const namedNotes = midiNotes.map(Tonal.Note.fromMidi);
    const chords = Detect.chord(namedNotes);

    if (chords && chords.length > 0) {
        MaxApi.outlet("chords", ...chords);
    } else {
        MaxApi.outlet("chords", "unknwn");
    }
});
const express = require('express');
const app = express();
app.use(express.json());


const fragen = [
    { 
        frage: "Welche Eigenschaft schätzt du am meisten?", 
        antworten:{
            "Mut": "Gryffindor", 
            "Weisheit": "Ravenclaw", 
            "Treue": "Hufflepuff", 
            "Ehrgeiz": "Slytherin"
        }  
    },
    { 
        frage: "Was ist dein Lieblingstier?", 
        antworten: {
            "Löwe": "Gryffindor", 
            "Adler": "Ravenclaw", 
            "Dachs": "Hufflepuff", 
            "Schlange": "Slytherin"
        }
    },
    { 
        frage: "Wähle ein Element, das dich am besten repräsentiert?", 
        antworten: {
            "Feuer": "Gryffindor", 
            "Luft": "Ravenclaw", 
            "Erde": "Hufflepuff", 
            "Wasser": "Slytherin"
        }
    },
    { 
        frage: "Was ist dein bevorzugter Freizeitort?", 
        antworten: {
            "Sportplatz": "Gryffindor", 
            "Bibliothek": "Ravenclaw", 
            "Gärten": "Hufflepuff", 
            "Wald": "Slytherin"
        }
    },
    { 
        frage: "Welches magische Wesen fasziniert dich am meisten?", 
        antworten: {
            "Hippogreif": "Gryffindor", 
            "Thestral": "Ravenclaw", 
            "Niffler": "Hufflepuff", 
            "Basilisk": "Slytherin"
        }
    },
    { 
        frage: "Welche Art von Zaubersprüchen würdest du am liebsten lernen?", 
        antworten: {
            "Verteidigungssprüche": "Gryffindor", 
            "Komplexe Zauber": "Ravenclaw", 
            "Heilzauber": "Hufflepuff", 
            "Dunkle Künste": "Slytherin"
        }
    },
    { 
        frage: "Wofür würdest du kämpfen?", 
        antworten: {
            "Gerechtigkeit": "Gryffindor", 
            "Wissen": "Ravenclaw", 
            "Freunde": "Hufflepuff", 
            "Macht": "Slytherin"
        }
    },
    { 
        frage: "Wähle eine Zaubertrankzutat.", 
        antworten: {
            "Drachenblut": "Gryffindor", 
            "Mondstein": "Ravenclaw", 
            "Honigtau": "Hufflepuff", 
            "Basiliskenblut": "Slytherin"
        }
    },
    { 
        frage: "Wie würdest du deinen Zauberstab beschreiben?", 
        antworten: {
            "Robust": "Gryffindor", 
            "Elegant": "Ravenclaw", 
            "Warm": "Hufflepuff", 
            "Geheimnisvoll": "Slytherin"
        }
    },
    { 
        frage: "Was ist dein Lieblingsfach in Hogwarts?", 
        antworten: {
            "Verteidigung gegen die dunklen Künste": "Gryffindor", 
            "Arithmantik": "Ravenclaw", 
            "Kräuterkunde": "Hufflepuff", 
            "Zaubertränke": "Slytherin"
        }
    },
    { 
        frage: "Was ist dein idealer Beruf in der Zaubererwelt?", 
        antworten: {
            "Auror": "Gryffindor", 
            "Lehrer": "Ravenclaw", 
            "Heiler": "Hufflepuff", 
            "Ministeriumsbeamter": "Slytherin"
        }
    },
    { 
        frage: "Wie gehst du mit Konflikten um?", 
        antworten: {
            "Direkt konfrontieren": "Gryffindor", 
            "Logisch analysieren": "Ravenclaw", 
            "Vermitteln": "Hufflepuff", 
            "Strategisch vorgehen": "Slytherin"
        }
    },
    { 
        frage: "Wähle ein magisches Accessoire?", 
        antworten: {
            "Schwert": "Gryffindor", 
            "Diadem": "Ravenclaw", 
            "Becher": "Hufflepuff", 
            "Medaillon": "Slytherin"
        }
    },
    { 
        frage: "Welche Art von Magie würdest du bevorzugen?", 
        antworten: {
            "Kampfmagie": "Gryffindor", 
            "Akademische Magie": "Ravenclaw", 
            "Heilmagie": "Hufflepuff", 
            "Machtvolle Magie": "Slytherin"
        }
    },
    { 
        frage: "Was ist deine Strategie im Schachspiel?", 
        antworten: {
            "Angriff": "Gryffindor", 
            "Strategisch": "Ravenclaw", 
            "Geduldig": "Hufflepuff", 
            "Unberechenbar": "Slytherin"
        }
    },
    { 
        frage: "Welche Jahreszeit magst du besonders?", 
        antworten: {
            "Sommer": "Gryffindor", 
            "Frühling": "Ravenclaw", 
            "Herbst": "Hufflepuff", 
            "Winter": "Slytherin"
        }
    },
    { 
        frage: "Welcher Zauberspruch spricht dich am meisten an?", 
        antworten: {
            "Expelliarmus": "Gryffindor", 
            "Lumos": "Ravenclaw", 
            "Alohomora": "Hufflepuff", 
            "Imperius": "Slytherin"
        }
    },
    { 
        frage: "Wie verbringst du gerne deine Abende?", 
        antworten: {
            "Abenteuer erleben": "Gryffindor", 
            "Bücher lesen": "Ravenclaw", 
            "Zeit mit Freunden": "Hufflepuff", 
            "Pläne schmieden": "Slytherin"
        }
    },
    { 
        frage: "Welches magische Geschöpf hättest du gerne als Haustier?", 
        antworten: {
            "Greif": "Gryffindor", 
            "Phönix": "Ravenclaw", 
            "Maulwurf": "Hufflepuff", 
            "Drache": "Slytherin"
        }
    },
    { 
        frage: "Wie würdest du reagieren, wenn du einem seltenen, magischen Tier im Verbotenen Wald begegnest?", 
        antworten: {
            "Ich würde es konfrontieren": "Gryffindor", 
            "Seine Eigenschaften studieren": "Ravenclaw", 
            "Versuchen, es zu pflegen": "Hufflepuff", 
            "Überlegen wie man es nutzen kann": "Slytherin"
        }
    },
];

app.get('/', (req, res) => {
    res.send('Hallo, Hogwarts-Quiz!');
});

// Quiz- und Antwort-Routen
app.get('/quiz', (req, res) => {
    res.json(fragen);
});

app.post('/antworten', (req, res) => {
    let hausPunkte = { Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 };

    req.body.antworten.forEach(antwort => {
        fragen.forEach(frage => {
            if (frage.antworten[antwort]) {
                hausPunkte[frage.antworten[antwort]]++;
            }
        });
    });

    let zugewiesenesHaus = Object.keys(hausPunkte).reduce((a, b) => hausPunkte[a] > hausPunkte[b] ? a : b);

    res.json({ haus: zugewiesenesHaus });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

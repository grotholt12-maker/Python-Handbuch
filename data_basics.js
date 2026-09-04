export const dataBasics = {
    category: "1. Grundlagen",
    icon: "fa-layer-group",
    chapters: [
        {
            id: "variablen",
            title: "Variablen & Datentypen",
            content: `
                <p class="mb-4">Variablen sind wie Boxen im Arbeitsspeicher. Du packst Daten hinein und gibst der Box einen Namen.</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>int:</strong> Ganze Zahlen (z.B. 42)</li>
                    <li><strong>float:</strong> Kommazahlen (z.B. 3.14 - immer mit Punkt!)</li>
                    <li><strong>str:</strong> Text (z.B. "Hallo")</li>
                    <li><strong>bool:</strong> Wahrheitswerte (True oder False)</li>
                </ul>
            `,
            code: `spieler_name = "Gandalf"\nlebenspunkte = 100\nist_am_leben = True\n\nprint("Spieler:", spieler_name)`
        }
    ]
};
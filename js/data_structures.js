export const dataStructures = {
    category: "4. Datenstrukturen",
    icon: "fa-database",
    chapters: [
        {
            id: "lists",
            title: "Listen (Lists)",
            content: `
                <p class="mb-4">Listen sind geordnete Sammlungen von Elementen. Du kannst Elemente hinzufügen, entfernen oder verändern (sie sind <em>mutable</em>). In anderen Sprachen nennt man sie oft Arrays.</p>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li>Erstellt mit eckigen Klammern: <code>[]</code></li>
                    <li>Der Index (die Position) beginnt immer bei <strong>0</strong>.</li>
                    <li>Python-Listen können verschiedene Datentypen mischen (Zahlen, Text, sogar andere Listen).</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Listen erstellen und auslesen",
                    code: `inventar = ["Schwert", "Schild", "Trank"]\n\nprint("Erstes Item:", inventar[0])\nprint("Letztes Item:", inventar[-1]) # -1 wählt das letzte Element`
                },
                {
                    title: "2. Listen verändern",
                    code: `zahlen = [1, 2, 3]\n\n# Element hinzufügen\nzahlen.append(4)\n\n# Element an bestimmter Position einfügen\nzahlen.insert(0, 99)\n\n# Element entfernen\nzahlen.remove(2)\n\nprint("Neue Liste:", zahlen)`
                }
            ]
        },
        {
            id: "dictionaries",
            title: "Dictionaries",
            content: `
                <p class="mb-4">Dictionaries speichern Daten als <strong>Schlüssel-Wert-Paare</strong> (Key-Value). Stell sie dir wie ein echtes Wörterbuch vor: Du schlägst ein Wort nach (Key) und bekommst die Bedeutung (Value).</p>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li>Erstellt mit geschweiften Klammern: <code>{}</code></li>
                    <li>Keys müssen einzigartig sein.</li>
                    <li>Extrem schnell beim Suchen von Daten.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Dictionary nutzen",
                    code: `spieler = {\n    "name": "Aragorn",\n    "level": 42,\n    "klasse": "Waldläufer"\n}\n\nprint("Name:", spieler["name"])\n\n# Neuen Wert hinzufügen oder ändern\nspieler["gilde"] = "Gefährten"\nspieler["level"] = 43\n\nprint("Update:", spieler)`
                },
                {
                    title: "2. Durch Dictionaries iterieren",
                    code: `spieler = {"name": "Aragorn", "level": 42}\n\n# Nur durch die Schlüssel (Keys) gehen\nfor key in spieler.keys():\n    print("Schlüssel:", key)\n\n# Durch Schlüssel UND Werte (Items) gehen\nfor key, value in spieler.items():\n    print(key + " -> " + str(value))`
                }
            ]
        },
        {
            id: "tuples_sets",
            title: "Tuples & Sets",
            content: `
                <p class="mb-4">Zwei weitere wichtige Strukturen für spezielle Anwendungsfälle:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Tuples <code>()</code>:</strong> Wie Listen, aber sie können nach der Erstellung <strong>nicht mehr verändert</strong> werden (immutable). Perfekt für feste Konstanten (z.B. Koordinaten).</li>
                    <li><strong>Sets <code>{}</code>:</strong> Mengen. Sie sind ungeordnet und jedes Element kann <strong>nur genau einmal</strong> vorkommen. Ideal, um Duplikate aus einer Liste zu filtern.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "Tuples (Unveränderlich)",
                    code: `koordinaten = (10, 25)\nprint("X-Achse:", koordinaten[0])\n\n# koordinaten[0] = 15 -> Das würde einen FEHLER auslösen!`
                },
                {
                    title: "Sets (Einzigartig)",
                    code: `ids = {1, 2, 2, 3, 3, 3, 4}\nprint("Set filtert Duplikate:", ids)\n\n# Listen-Duplikate mit einem Set entfernen\nnamen_liste = ["Anna", "Tom", "Anna", "Lisa"]\nnamen_set = set(namen_liste)\nprint("Gefiltert:", list(namen_set))`
                }
            ]
        }
    ]
};

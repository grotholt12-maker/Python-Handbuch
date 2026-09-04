export const dataBasics = {
    category: "1. Grundlagen",
    icon: "fa-layer-group",
    chapters: [
        {
            id: "variablen_regeln",
            title: "Variablen & Namensregeln",
            content: `
                <p class="mb-4">Variablen sind benannte Speicherorte für Daten. In Python musst du nicht angeben, welche Art von Daten du speichern willst – Python erkennt das automatisch bei der Zuweisung.</p>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li>Dürfen <strong>nicht</strong> mit einer Zahl beginnen.</li>
                    <li>Unterscheiden Groß- und Kleinschreibung (Case-Sensitive).</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "Werte zuweisen und ändern",
                    code: `spieler_name = "Gandalf"\nlevel = 10\n\n# Werte aktualisieren\nlevel = level + 1\nprint("Aktuelles Level:", level)\n\n# Mehrfachzuweisung\nx, y = 10, 20\nprint("X ist:", x, "und Y ist:", y)`
                }
            ]
        },
        {
            id: "datentypen_casting",
            title: "Datentypen prüfen & ändern",
            content: `
                <p class="mb-4">Manchmal musst du wissen, welchen Typ eine Variable hat, oder den Typ aktiv umwandeln (Typecasting).</p>
            `,
            codeBlocks: [
                {
                    title: "1. Typen prüfen mit type()",
                    code: `alter = 25\nkommazahl = 3.14\n\nprint("Typ von alter:", type(alter))\nprint("Typ von kommazahl:", type(kommazahl))`
                },
                {
                    title: "2. Typecasting (Umwandeln)",
                    code: `kommazahl = 3.99\nganze_zahl = int(kommazahl)\nprint("Aus 3.99 wird:", ganze_zahl) # Schneidet Kommastellen ab\n\npunkte = 150\nprint("Du hast " + str(punkte) + " Punkte")`
                }
            ]
        },
        {
            id: "operatoren",
            title: "Operatoren & Mathematik",
            content: `
                <p class="mb-4">Neben Plus und Minus gibt es einige spezielle Operatoren, die beim Programmieren extrem nützlich sind.</p>
            `,
            codeBlocks: [
                {
                    title: "Wichtige Rechenoperationen",
                    code: `a = 10\nb = 3\n\nprint("Division:", a / b)\nprint("Ganzzahldivision:", a // b)\nprint("Modulo (Rest):", a % b)\nprint("Potenz:", 2 ** 3)`
                }
            ]
        }
    ]
};

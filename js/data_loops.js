export const dataLoops = {
    category: "2. Kontrollstrukturen & Logik",
    icon: "fa-code-branch",
    chapters: [
        {
            id: "if_else",
            title: "Bedingungen (if, elif, else)",
            content: `
                <p class="mb-4">Bedingungen geben deinem Programm ein Gehirn. Sie erlauben es, Entscheidungen zu treffen und Code nur dann auszuführen, wenn bestimmte Voraussetzungen erfüllt sind.</p>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li><code>==</code> (Gleich), <code>!=</code> (Ungleich)</li>
                    <li><code>></code>, <code><</code>, <code>>=</code>, <code><=</code> (Größer/Kleiner als)</li>
                    <li><code>and</code>, <code>or</code>, <code>not</code> (Logische Verknüpfungen)</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Standard if/elif/else",
                    code: `alter = 17\nhat_fuehrerschein = True\n\nif alter >= 18 and hat_fuehrerschein:\n    print("Du darfst fahren.")\nelif alter == 17 and hat_fuehrerschein:\n    print("Begleitetes Fahren.")\nelse:\n    print("Du darfst nicht fahren.")`
                },
                {
                    title: "2. Truthiness & Inline-If",
                    code: `benutzername = ""\n\n# Leere Strings gelten als False\nif not benutzername:\n    print("Bitte gib einen Namen ein!")\n\n# Inline-If (Kurzschreibweise)\nalter = 20\nstatus = "Erwachsen" if alter >= 18 else "Minderjährig"\nprint("Status: " + status)`
                }
            ]
        },
        {
            id: "while_loops",
            title: "Die While-Schleife",
            content: `
                <p class="mb-4">Die <code>while</code>-Schleife läuft so lange weiter, wie ihre Bedingung <code>True</code> ist. Sie ist perfekt, wenn du vorher nicht weißt, wie oft der Code wiederholt werden muss.</p>
            `,
            codeBlocks: [
                {
                    title: "1. Klassische While-Schleife",
                    code: `countdown = 3\nwhile countdown > 0:\n    print("Start in: " + str(countdown))\n    countdown -= 1\nprint("Los!")`
                },
                {
                    title: "2. Schleifen steuern (break & continue)",
                    code: `versuche = 0\nwhile True:\n    versuche += 1\n    \n    if versuche == 2:\n        print("Überspringe Versuch 2")\n        continue  # Springt sofort wieder nach oben\n        \n    if versuche >= 4:\n        print("Abbruch!")\n        break     # Zerstört die Schleife komplett\n        \n    print("Versuch: " + str(versuche))`
                }
            ]
        },
        {
            id: "for_loops",
            title: "Die For-Schleife & Range",
            content: `
                <p class="mb-4">Die <code>for</code>-Schleife nutzt du, wenn du genau weißt, wie oft iteriert werden soll, oder wenn du durch eine Sammlung von Elementen gehen willst.</p>
            `,
            codeBlocks: [
                {
                    title: "1. Durch Text iterieren",
                    code: `wort = "Python"\nfor buchstabe in wort:\n    print(buchstabe)`
                },
                {
                    title: "2. Zahlenreihen mit range()",
                    code: `# range(start, stop)\nfor i in range(10, 13):\n    print("Range 10-13: " + str(i))\n\n# range(start, stop, schrittweite)\nfor i in range(0, 11, 5):\n    print("5er Schritt: " + str(i))`
                }
            ]
        },
        {
            id: "advanced_loops",
            title: "Fortgeschrittene Iteration",
            content: `
                <p class="mb-4">Hier wird es "pythonic". Diese Werkzeuge machen deinen Code kürzer, schneller und lesbarer.</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>enumerate():</strong> Gibt dir beim Durchlaufen den Index (die Positionsnummer).</li>
                    <li><strong>zip():</strong> Klebt zwei oder mehr Listen wie ein Reißverschluss zusammen.</li>
                    <li><strong>for...else:</strong> Der else-Block läuft nur, wenn kein break aufgerufen wurde.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Enumerate (Index und Wert)",
                    code: `namen = ["Alice", "Bob", "Charlie"]\n\nfor index, name in enumerate(namen):\n    print(str(index + 1) + ". Platz: " + name)`
                },
                {
                    title: "2. Zip (Zwei Listen parallel)",
                    code: `namen = ["Alice", "Bob", "Charlie"]\npunkte = [85, 92, 78]\n\nfor name, score in zip(namen, punkte):\n    print(name + " hat " + str(score) + " Punkte")`
                },
                {
                    title: "3. Die for...else Magie",
                    code: `namen = ["Alice", "Bob", "Charlie"]\ngesucht = "David"\n\nfor name in namen:\n    if name == gesucht:\n        print(gesucht + " wurde gefunden!")\n        break\nelse:\n    print(gesucht + " ist nicht in der Liste.")`
                }
            ]
        }
    ]
};

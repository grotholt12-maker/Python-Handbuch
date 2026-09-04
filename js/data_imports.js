export const dataImports = {
    category: "7. Module & Imports",
    icon: "fa-box-open",
    chapters: [
        {
            id: "import_basics",
            title: "Module nutzen",
            content: `
                <p class="mb-4">Ein Modul ist einfach eine Python-Datei mit vorgefertigtem Code, den jemand anderes geschrieben hat. Mit dem Schlüsselwort <code>import</code> holst du dir diese Werkzeuge in dein aktuelles Skript.</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><code>import modulname</code>: Importiert das gesamte Modul.</li>
                    <li><code>from modulname import funktion</code>: Importiert nur ein ganz spezifisches Werkzeug aus der Kiste. Das spart Arbeitsspeicher.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Das Random-Modul (Zufall)",
                    code: `import random\n\n# Zufällige ganze Zahl zwischen 1 und 10 generieren\nwuerfel = random.randint(1, 10)\nprint("Du hast eine " + str(wuerfel) + " gewürfelt!")\n\n# Zufälliges Element aus einer Liste wählen\nfarben = ["Rot", "Blau", "Grün"]\nauswahl = random.choice(farben)\nprint("Zufällige Farbe: " + auswahl)`
                },
                {
                    title: "2. Spezifische Werkzeuge importieren",
                    code: `# Wir holen nur 'sqrt' (Wurzel) und 'pi' aus der Mathe-Bibliothek\nfrom math import sqrt, pi\n\nprint("Pi ist ungefähr:", pi)\n\nwurzel = sqrt(16)\nprint("Die Wurzel aus 16 ist:", wurzel)`
                }
            ]
        }
    ]
};

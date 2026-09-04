export const dataLoops = {
    category: "2. Kontrollstrukturen & Logik",
    icon: "fa-code-branch",
    chapters: [
        {
            id: "if_else",
            title: "Bedingungen (if, elif, else)",
            content: `
                <p class="mb-4">Bedingungen geben deinem Programm ein Gehirn. Sie erlauben es, Entscheidungen zu treffen und Code nur dann auszuführen, wenn bestimmte Voraussetzungen erfüllt sind.</p>
                
                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Vergleichs- und Logik-Operatoren:</h3>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li><code>==</code> (Gleich), <code>!=</code> (Ungleich)</li>
                    <li><code>></code>, <code><</code>, <code>>=</code>, <code><=</code> (Größer/Kleiner als)</li>
                    <li><code>and</code> (Beide Bedingungen müssen True sein)</li>
                    <li><code>or</code> (Mindestens eine Bedingung muss True sein)</li>
                    <li><code>not</code> (Kehrt den Wahrheitswert um)</li>
                </ul>

                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Truthiness (Wahrheit in Python):</h3>
                <p class="mb-4">In Python ist fast alles "Wahr" (True), es sei denn, es ist absolut leer. Eine <code>0</code>, ein leerer Text <code>""</code>, eine leere Liste <code>[]</code> oder <code>None</code> werden automatisch als <code>False</code> gewertet. Das spart viel Code!</p>
            `,
            code: `alter = 17
hat_fuehrerschein = True

# 1. Standard if/elif/else
if alter >= 18 and hat_fuehrerschein:
    print("Du darfst fahren.")
elif alter == 17 and hat_fuehrerschein:
    print("Du darfst begleitet fahren.")
else:
    print("Du darfst nicht fahren.")

# 2. Truthiness (Kurzschreibweise)
benutzername = ""

# Statt: if benutzername == "":
if not benutzername:
    print("Bitte gib einen Namen ein!")

# 3. Inline-If (Ternary Operator) - für Profis
# Variablen-Zuweisung in einer einzigen Zeile
status = "Erwachsen" if alter >= 18 else "Minderjährig"
print("Status:", status)`
        },
        {
            id: "while_loops",
            title: "Die While-Schleife",
            content: `
                <p class="mb-4">Die <code>while</code>-Schleife läuft so lange weiter, wie ihre Bedingung <code>True</code> ist. Sie ist perfekt, wenn du vorher <strong>nicht weißt</strong>, wie oft der Code wiederholt werden muss (z.B. Warten auf eine Benutzereingabe oder bei einem laufenden Spiel).</p>
                
                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Schleifen steuern (break & continue):</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><span class="keyword-tooltip">break<span class="tooltip-text">Bricht die aktuelle Schleife sofort und komplett ab.</span></span>: Zerstört die Schleife sofort. Das Programm läuft nach der Schleife weiter.</li>
                    <li><span class="keyword-tooltip">continue<span class="tooltip-text">Überspringt den Rest des aktuellen Durchlaufs und springt nach oben zum nächsten.</span></span>: Bricht nur den <em>aktuellen</em> Durchlauf ab und springt direkt wieder nach oben zur Überprüfung der Bedingung.</li>
                </ul>
            `,
            code: `# 1. Klassische While-Schleife
countdown = 3
while countdown > 0:
    print("Start in:", countdown)
    countdown -= 1  # WICHTIG: Sonst Endlosschleife!
print("Los!")

# 2. Die Endlosschleife mit break (Sehr häufiges Pattern)
versuche = 0
while True:  # Läuft für immer...
    versuche += 1
    if versuche == 5:
        print("Maximale Versuche erreicht. Abbruch!")
        break  # ...außer wir beenden sie hier absichtlich!
    
    if versuche == 2:
        print("Überspringe Versuch 2")
        continue  # Springt sofort wieder zu Zeile 11

    print("Versuch Nummer:", versuche)`
        },
        {
            id: "for_loops",
            title: "Die For-Schleife & Range",
            content: `
                <p class="mb-4">Die <code>for</code>-Schleife nutzt du, wenn du <strong>genau weißt</strong>, wie oft iteriert werden soll, oder wenn du durch eine Sammlung von Elementen (Texte, Listen) gehen willst.</p>
                
                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Die <code>range()</code> Funktion:</h3>
                <p class="mb-4">Generiert Zahlenfolgen "on the fly", ohne sie alle im Speicher abzulegen. Sie nimmt bis zu drei Argumente: <code>range(Start, Stopp, Schrittweite)</code>.</p>
            `,
            code: `# 1. Durch Text iterieren
wort = "Python"
for buchstabe in wort:
    print("Buchstabe:", buchstabe)

# 2. Range mit einem Argument (Stop) - Startet bei 0!
for i in range(3):
    print("Range 3:", i)  # Gibt 0, 1, 2 aus (nicht die 3!)

# 3. Range mit Start und Stop
for i in range(10, 13):
    print("Range 10-13:", i) # Gibt 10, 11, 12 aus

# 4. Range mit Schrittweite (Zählen in 5er Schritten)
for i in range(0, 21, 5):
    print("5er Schritt:", i) # 0, 5, 10, 15, 20

# 5. Rückwärts zählen
for i in range(10, 0, -1):
    print("Rückwärts:", i)`
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
            // NEU: Statt "code:" nutzen wir jetzt "codeBlocks:" als Liste (Array)
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
        },

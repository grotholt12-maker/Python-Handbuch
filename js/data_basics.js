export const dataBasics = {
    category: "1. Grundlagen",
    icon: "fa-layer-group",
    chapters: [
        {
            id: "variablen_regeln",
            title: "Variablen & Namensregeln",
            content: `
                <p class="mb-4">Variablen sind benannte Speicherorte für Daten. In Python musst du nicht angeben, welche Art von Daten du speichern willst – Python erkennt das automatisch bei der Zuweisung (dynamische Typisierung).</p>
                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Wichtige Namensregeln:</h3>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li>Erlaubt sind Buchstaben (a-z, A-Z), Zahlen (0-9) und Unterstriche (_).</li>
                    <li>Dürfen <strong>nicht</strong> mit einer Zahl beginnen (z.B. <code>1spieler</code> ist ungültig).</li>
                    <li>Python unterscheidet Groß- und Kleinschreibung (Case-Sensitive): <code>Alter</code> und <code>alter</code> sind zwei verschiedene Variablen.</li>
                    <li><strong>Best Practice:</strong> Nutze <code>snake_case</code> für Variablennamen (alles klein, Wörter mit Unterstrich getrennt, z.B. <code>max_lebenspunkte</code>).</li>
                </ul>
            `,
            code: `# Zuweisung von Werten (von rechts nach links)
spieler_name = "Gandalf"
level = 10
ist_premium = True

# Mehrere Variablen in einer Zeile zuweisen
x, y, z = 10, 20, 30

# Werte aktualisieren
level = level + 1
print("Aktuelles Level:", level)`
        },
        {
            id: "datentypen_casting",
            title: "Datentypen prüfen & ändern",
            content: `
                <p class="mb-4">Es reicht nicht immer, Daten nur zu speichern. Oft musst du wissen, welchen Typ eine Variable hat, oder den Typ aktiv umwandeln (das nennt man <strong>Typecasting</strong>).</p>
                
                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Datentypen überprüfen: <code>type()</code></h3>
                <p class="mb-4">Wenn du dir unsicher bist, was in einer Variable steckt, nutze die Funktion <code>type()</code>.</p>
                
                <h3 class="text-lg font-bold mt-4 mb-2 text-blue-700">Datentypen umwandeln (Casting):</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><code>int(x)</code>: Wandelt x in eine ganze Zahl um. Kommastellen werden rigoros abgeschnitten (nicht gerundet!).</li>
                    <li><code>float(x)</code>: Wandelt x in eine Kommazahl um (z.B. aus 5 wird 5.0).</li>
                    <li><code>str(x)</code>: Wandelt x in Text (String) um. Zwingend nötig, wenn du Zahlen direkt an Text anhängen willst.</li>
                    <li><code>bool(x)</code>: Wandelt x in Wahr/Falsch um. (0 oder leere Texte sind False, alles andere True).</li>
                </ul>
                <p class="mb-4 bg-yellow-50 p-3 rounded border border-yellow-200"><strong>Vorsicht bei <code>input()</code>:</strong> Wenn ein Nutzer etwas in dein Programm eintippt, liest Python das <em>immer</em> als Text (str). Willst du damit rechnen, musst du es zwingend in <code>int()</code> oder <code>float()</code> umwandeln.</p>
            `,
            code: `# 1. Typen prüfen
alter = 25
print("Typ von alter:", type(alter)) # <class 'int'>

# 2. Typecasting
kommazahl = 3.99
# Wandelt in int um (schneidet ab, rundet NICHT auf!)
ganze_zahl = int(kommazahl) 
print("Aus 3.99 wird:", ganze_zahl) # Gibt 3 aus

# 3. Zahlen und Text kombinieren
punkte = 150
# print("Du hast " + punkte + " Punkte") -> FEHLER!
# Richtig:
print("Du hast " + str(punkte) + " Punkte")

# 4. Benutzereingaben (input) verarbeiten
eingabe = "42" # Simuliert eine Eingabe aus input()
ergebnis = int(eingabe) * 2
print("Ergebnis:", ergebnis)`
        },
        {
            id: "operatoren",
            title: "Operatoren & Mathematik",
            content: `
                <p class="mb-4">Python beherrscht alle grundlegenden mathematischen Operationen. Neben Plus und Minus gibt es einige spezielle Operatoren, die beim Programmieren extrem nützlich sind.</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Addition / Subtraktion:</strong> <code>+</code> und <code>-</code></li>
                    <li><strong>Multiplikation / Division:</strong> <code>*</code> und <code>/</code> (Normale Division ergibt in Python IMMER einen float/Kommazahl).</li>
                    <li><strong>Ganzzahldivision (Floor Division):</strong> <code>//</code> (Teilt und schneidet den Rest ab).</li>
                    <li><strong>Modulo (Restwert):</strong> <code>%</code> (Gibt nur den Rest einer Division zurück. Extrem wichtig, um zu prüfen, ob eine Zahl gerade oder ungerade ist).</li>
                    <li><strong>Potenzieren:</strong> <code>**</code> (z.B. 2 hoch 3).</li>
                </ul>
            `,
            code: `a = 10
b = 3

print("Addition:", a + b)       # 13
print("Division:", a / b)       # 3.3333...

# Spezielle Operatoren
print("Ganzzahldivision:", a // b) # 3 (Wie oft passt die 3 komplett in die 10?)
print("Modulo (Rest):", a % b)     # 1 (10 geteilt durch 3 ist 9, Rest 1)
print("Potenz:", 2 ** 3)           # 8 (2 * 2 * 2)

# Kurze Schreibweisen (Shorthands)
# Statt a = a + 5 schreibt man oft:
a += 5 
print("Neuer Wert von a:", a)`
        }
    ]
};

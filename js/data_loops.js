// data_loops.js

export const pythonIfElse = {
    category: "2. Kontrollstrukturen",
    icon: "code-branch",
    chapters: [
        {
            id: "if-elif-else",
            title: "1. If, Elif, Else (Bedingungen)",
            content: `
                <p class="mb-4 text-lg text-gray-800">
                    Bedingungen machen dein Programm intelligent. Sie erlauben es, Entscheidungen zu treffen und bestimmten Code nur dann auszuführen, wenn eine Vorgabe erfüllt ist.
                </p>
                <h3 class="text-xl font-bold mb-2 mt-6 text-gray-800">Die goldene Python-Regel: Einrückung!</h3>
                <p class="mb-4 text-gray-700">
                    In den meisten anderen Sprachen nutzt man geschweifte Klammern <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">{}</code>, um Code-Blöcke zu markieren. <strong>Python nutzt stattdessen Einrückungen (meist 4 Leerzeichen oder 1 Tab).</strong> Alles, was eingerückt ist, gehört zur Bedingung darüber. Ein Doppelpunkt <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">:</code> beendet die "Frage".
                </p>
                <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">if</code>: Die Hauptfrage ("Wenn das wahr ist...")</li>
                    <li><code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">elif</code>: Eine alternative Frage ("Oder wenn stattdessen das wahr ist..."). Steht für "else if". Davon kannst du beliebig viele nutzen.</li>
                    <li><code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">else</code>: Der Fallback ("Ansonsten..."). Braucht keine eigene Bedingung.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "Einfaches If / Else",
                    code: "alter = 16\n\nif alter >= 18:\n    print('Du darfst das Spiel kaufen.')\nelse:\n    print('Du bist noch zu jung für das Spiel.')"
                },
                {
                    title: "Komplexe Kette mit Elif",
                    code: "temperatur = 15\n\nif temperatur > 25:\n    print('Es ist heiß! Gehen wir schwimmen.')\nelif temperatur > 15:\n    print('Angenehmes Wetter.')\nelif temperatur > 5:\n    print('Zieh dir eine Jacke an.')\nelse:\n    print('Es ist eiskalt!')"
                }
            ]
        }
    ]
};

export const pythonForLoops = {
    category: "2. Kontrollstrukturen",
    icon: "rotate-right",
    chapters: [
        {
            id: "for-schleifen",
            title: "2. Die For-Schleife",
            content: `
                <p class="mb-4 text-lg text-gray-800">
                    Schleifen (Loops) verhindern, dass wir Code doppelt schreiben müssen. Eine <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">for</code>-Schleife nutzt du immer dann, wenn du vorher weißt, <strong>wie oft</strong> etwas wiederholt werden soll.
                </p>
                <h3 class="text-xl font-bold mb-2 mt-6 text-gray-800">Zählen mit range()</h3>
                <p class="mb-4 text-gray-700">
                    Die Funktion <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">range(anzahl)</code> erzeugt eine Zahlenfolge. <strong>Wichtig:</strong> Python fängt beim Zählen immer bei Null (0) an! <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">range(3)</code> erzeugt also die Zahlen 0, 1 und 2.
                </p>
            `,
            codeBlocks: [
                {
                    title: "Einfaches Zählen",
                    code: "print('Start')\n\nfor i in range(3):\n    print('Das ist Durchlauf Nummer:')\n    print(i)\n\nprint('Ende der Schleife')"
                },
                {
                    title: "Start, Ende und Schritte anpassen",
                    code: "# range(Start, Stop, Schrittweite)\n# Zählt von 2 bis 9 (10 wird nicht mehr erreicht) in 2er-Schritten\nfor zahl in range(2, 10, 2):\n    print(zahl)"
                }
            ]
        }
    ]
};

export const pythonWhileLoops = {
    category: "2. Kontrollstrukturen",
    icon: "spinner",
    chapters: [
        {
            id: "while-schleifen",
            title: "3. Die While-Schleife",
            content: `
                <p class="mb-4 text-lg text-gray-800">
                    Eine <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">while</code>-Schleife wird so lange wiederholt, <strong>solange eine Bedingung wahr (True) ist</strong>. Man nutzt sie, wenn man vorher nicht weiß, wie oft die Schleife durchlaufen werden muss (z.B. solange bis ein Spieler ein richtiges Passwort eingibt).
                </p>
                <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
                    <p class="font-bold">Achtung: Endlosschleifen!</p>
                    <p>Du musst in der Schleife dafür sorgen, dass die Bedingung irgendwann <strong>False</strong> wird. Sonst läuft das Programm für immer (oder bis der Computer abstürzt).</p>
                </div>
            `,
            codeBlocks: [
                {
                    title: "While als Countdown",
                    code: "countdown = 3\n\nwhile countdown > 0:\n    print('Noch:')\n    print(countdown)\n    # Verringert die Zahl in jedem Durchlauf um 1\n    countdown = countdown - 1\n\nprint('Start!')"
                }
            ]
        },
        {
            id: "break-continue",
            title: "4. Break und Continue",
            content: `
                <p class="mb-4 text-gray-700">
                    Manchmal musst du den Ablauf einer Schleife (egal ob <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">for</code> oder <code class="bg-gray-100 text-red-500 px-1 py-0.5 rounded font-mono">while</code>) von innen heraus abbrechen oder überspringen.
                </p>
                <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><strong class="font-bold text-gray-900">break:</strong> Bricht die gesamte Schleife sofort ab. Das Programm macht nach der Schleife weiter.</li>
                    <li><strong class="font-bold text-gray-900">continue:</strong> Bricht nur den <strong>aktuellen Durchlauf</strong> ab und springt direkt zum nächsten.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "Break (Schleife abbrechen)",
                    code: "for i in range(10):\n    if i == 3:\n        print('Abbruch!')\n        break\n    print(i)"
                },
                {
                    title: "Continue (Durchlauf überspringen)",
                    code: "for i in range(5):\n    if i == 2:\n        print('Überspringe die 2')\n        continue\n    print(i)"
                }
            ]
        }
    ]
};

// Falls du in deiner app.js "dataLoops" als eine Variable importierst, 
// kannst du am Ende der Datei einfach alle Module exportieren:
export const dataLoops = [pythonIfElse, pythonForLoops, pythonWhileLoops];

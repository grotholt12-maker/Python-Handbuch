export const dataBasics = {
    category: "1. Grundlagen & Syntax",
    icon: "fa-book-open-reader",
    chapters: [
        {
            id: "konzept_aufbau",
            title: "1. Konzept & Code-Aufbau",
            content: `
                <h3 class="text-xl font-bold mb-2 text-blue-700">Was genau ist das?</h3>
                <p class="mb-4 text-gray-700">Die Grundlagen der Python-Syntax umfassen die atomaren Bausteine der Sprache. In Python ist alles ein Objekt. Variablen sind lediglich Referenzen (Pointer) auf Instanzen primitiver Klassen im Speicher. Python verfolgt das Paradigma der dynamischen Typisierung und legt den Fokus auf extrem hohe Lesbarkeit ("Executable Pseudocode").</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Warum wurde es so integriert?</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Speichermanagement:</strong> Python abstrahiert die Speicherallokation vollständig, was die Entwicklung enorm beschleunigt.</li>
                    <li><strong>Dynamik:</strong> Verzweigungen (<code>if</code>, <code>match</code>) und Iterationen (<code>for</code>, <code>while</code>) lösen das Problem der Turing-Vollständigkeit. Das Programm kann autonom auf Laufzeitdaten reagieren.</li>
                </ul>
                <p class="mb-4 text-gray-700">Hier ist ein kompaktes Minimal-Beispiel, das Zuweisungen, Kontrollstrukturen und Schleifen in einem Skript vereint:</p>
            `,
            codeBlocks: [
                {
                    title: "Das fundamentale Minimal-Beispiel",
                    code: `max_versuche = 3\ntemperatur = 22.5\nsystem_aktiv = True\n\nfor versuch in range(1, max_versuche + 1):\n    kritisch = (temperatur * 1.5) > 30.0 \n    \n    if not system_aktiv:\n        print("System offline.")\n        break\n    elif kritisch:\n        print(f"Warnung in Versuch {versuch}: Temperatur zu hoch!")\n        temperatur -= 5.0\n        continue\n    else:\n        msg = "Optimal" if temperatur == 22.5 else "Stabil"\n        print(f"Status: {msg}")\n        break\nelse:\n    print("Maximale Versuche erreicht, ohne Erfolg.")`
                }
            ]
        },
        {
            id: "keywords_analyse",
            title: "2. Detaillierte Keyword-Analyse",
            content: `
                <div class="space-y-6 text-gray-700">
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Datentypen (int, float, str, bool)</h4>
                        <p class="mb-2"><strong>Quirks:</strong> Alle primitiven Datentypen sind <em>immutable</em> (unveränderlich). <code>a += 1</code> ändert nicht das Objekt, sondern erzeugt ein neues.</p>
                        <p class="mb-2"><strong>CPython Internals:</strong> Zur Optimierung hält CPython kleine Integers (-5 bis 256) dauerhaft im Speicher (Interning).</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Logische Operatoren (and, or, not)</h4>
                        <p class="mb-2"><strong>Quirks:</strong> Nutzen <em>Short-Circuit Evaluation</em> (Kurzschlussauswertung). Bei <code>A or B</code> wird <code>B</code> niemals evaluiert, wenn <code>A</code> bereits True ist.</p>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Verzweigungen (match / case)</h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> Structural Pattern Matching (ab Python 3.10).</p>
                        <p class="mb-2"><strong>Quirks:</strong> Prüft nicht nur Werte, sondern kann Strukturen (Listen) direkt entpacken (Destructuring) und an Variablen binden.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Der else-Block in Schleifen</h4>
                        <p class="mb-2">Das <code>else</code> nach einer Schleife wird <strong>nur</strong> ausgeführt, wenn die Schleife natürlich (ohne <code>break</code>) durchlaufen wurde. Ideal für Such-Algorithmen.</p>
                    </div>
                </div>
            `,
            codeBlocks: [
                {
                    title: "Short-Circuit & Identität vs. Wertgleichheit",
                    code: `a = 256\nb = 256\nprint("Ist a dasselbe Objekt wie b?", a is b) # True wegen Interning\n\n# Short-Circuit Evaluation: Verhindert Abstürze\nobj = None\nif obj is not None and obj.wert > 10:\n    print("Das wird nie erreicht und stürzt nicht ab!")\nelse:\n    print("Sicher abgefangen.")`
                }
            ]
        },
        {
            id: "use_cases",
            title: "3. Praxis-Szenarien (Use Cases)",
            content: `
                <p class="mb-4 text-gray-700">Hier sind drei realitätsnahe Szenarien, in denen diese Werkzeuge in der professionellen Entwicklung eingesetzt werden.</p>
            `,
            codeBlocks: [
                {
                    title: "Szenario 1: Datenbereinigung & Filterung",
                    code: `raw_data = ["12", 45, "invalid", 8.5, None, "22"]\nvalid_integers = []\n\nfor item in raw_data:\n    if not item:\n        continue\n    \n    if isinstance(item, int):\n        valid_integers.append(item)\n    elif isinstance(item, str) and item.isdigit():\n        valid_integers.append(int(item))\n\nprint("Gefilterte Liste:", valid_integers)`
                },
                {
                    title: "Szenario 2: State Routing (Match/Case)",
                    code: `def process_command(command):\n    match command:\n        case ["quit" | "exit"]:\n            print("Beende System...")\n        case ["move", entity, x, y] if isinstance(x, int) and isinstance(y, int):\n            print(f"Bewege {entity} zu Koordinaten ({x}, {y})")\n        case _:\n            print("Unbekannter Befehl.")\n\nprocess_command(["move", "hero", 100, 200])\nprocess_command(["attack", "dragon"])`
                },
                {
                    title: "Szenario 3: Retry-Logik mit Fallback (while...else)",
                    code: `import random\nversuche = 0\n\nwhile versuche < 3:\n    print(f"Verbindungsversuch {versuche + 1}...")\n    if random.random() > 0.7: # 30% Erfolgschance\n        print("Verbindung erfolgreich!")\n        break \n    versuche += 1\nelse:\n    print("Kritischer Fehler: Host nicht erreichbar.")`
                }
            ]
        },
        {
            id: "best_practices",
            title: "4. Best Practices & Pitfalls",
            content: `
                <h3 class="text-xl font-bold mb-4 text-red-600">Typische Anti-Patterns (Falsch vs. Richtig)</h3>
                
                <div class="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 class="font-bold text-red-700">Falsche Typprüfung</h4>
                    <p class="text-sm text-gray-700 mb-2">Nutze niemals <code>type(x) == int</code>, da dies Vererbung ignoriert.</p>
                    <code class="text-xs bg-white p-1 rounded text-green-700 block">Richtig: if isinstance(variable, int):</code>
                </div>

                <div class="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 class="font-bold text-red-700">Boolesche Werte explizit vergleichen</h4>
                    <p class="text-sm text-gray-700 mb-2">Schreibe nicht <code>if is_active == True:</code> oder <code>if my_list == []:</code>.</p>
                    <code class="text-xs bg-white p-1 rounded text-green-700 block">Richtig: if is_active: / if not my_list:</code>
                </div>

                <h3 class="text-xl font-bold mt-8 mb-4 text-blue-700">Performance-Aspekte (Memory & CPU)</h3>
                <ul class="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>String Concatenation:</strong> Strings in einer Schleife via <code>+=</code> zu verbinden, erzwingt bei jedem Durchlauf eine neue Speicherallokation. Sammle Strings besser in einer Liste und füge sie am Ende mit <code>"".join(liste)</code> zusammen.</li>
                    <li><strong>Membership-Testing:</strong> Die Suche in einer Liste (<code>if x in list</code>) kostet wertvolle CPU-Zeit. Wandle Listen, in denen du häufig suchst, zwingend in ein Set (<code>set(list)</code>) um, da dort der Lookup extrem schnell in Echtzeit geschieht.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "Chained Comparisons (Pythonic)",
                    code: `x = 15\n\n# Falsch (Langsam & unleserlich)\nif x > 10 and x < 20:\n    print("X ist im Rahmen.")\n\n# Richtig (Schneller & wie echte Mathematik)\nif 10 < x < 20:\n    print("X ist im Rahmen (Pythonic).")`
                }
            ]
        }
    ]
};

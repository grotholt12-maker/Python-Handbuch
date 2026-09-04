export const dataBasics = {
    category: "1. Grundlagen & Syntax",
    icon: "fa-book-open-reader",
    chapters: [
        {
            id: "konzept",
            title: "1. Komplette Erklärung (Das Konzept)",
            content: `
                <h3 class="text-xl font-bold mb-2 text-blue-700">Was genau ist das?</h3>
                <p class="mb-4 text-gray-700">Die Grundlagen der Python-Syntax umfassen die atomaren Bausteine der Sprache: die Zuweisung von Zuständen (Variablen und primitive Datentypen), die Manipulation dieser Zustände (Operatoren) sowie die dynamische Steuerung des Programmablaufs (Kontrollstrukturen und Schleifen). Python verfolgt dabei das Paradigma der dynamischen Typisierung und legt den Fokus auf eine extrem hohe Lesbarkeit ("Executable Pseudocode").</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Welches Problem löst es und warum wurde es in Python integriert?</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Variablen & Datentypen:</strong> In stark typisierten Sprachen (wie C oder Java) müssen Speicherallokation und Datentypen manuell deklariert werden. Python abstrahiert dies vollständig: Jede Variable ist lediglich eine Referenz (ein Pointer) auf ein Objekt im Speicher (<code>PyObject</code>). Das löst das Problem des starren Speichermanagements und beschleunigt die Entwicklung enorm.</li>
                    <li><strong>Operatoren:</strong> Sie abstrahieren komplexe Maschinenbefehle und C-Routinen in universell verständliche mathematische und logische Symbole.</li>
                    <li><strong>Kontrollstrukturen & Schleifen:</strong> Ein Programm ohne Verzweigungen wäre streng linear und statisch. Verzweigungen (<code>if</code>, <code>match</code>) und Iterationen (<code>for</code>, <code>while</code>) lösen das Problem der Turing-Vollständigkeit. Sie ermöglichen es dem Programm, auf Basis von dynamischen Laufzeitdaten (User-Input, Sensordaten) autonome Entscheidungen zu treffen und Operationen effizient auf Mengen von Daten anzuwenden.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Technisch präzise Definition:</h3>
                <p class="mb-4 text-gray-700">In Python ist alles ein Objekt. Variablen sind an Bezeichner (Namespaces) gebundene Referenzen auf Instanzen primitiver Klassen (<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>). Die Ausführung des Codes wird durch Kontrollfluss-Statements gesteuert, welche intern in CPython-Bytecode-Instruktionen (wie <code>POP_JUMP_IF_FALSE</code> oder <code>SETUP_LOOP</code>) übersetzt werden, um bedingte Sprünge im Ausführungs-Stack zu realisieren.</p>
            `
        },
        {
            id: "syntax",
            title: "2. Code-Aufbau und Syntax",
            content: `
                <p class="mb-4 text-gray-700">Das folgende Minimal-Beispiel kombiniert Datentypen, Operatoren, Bedingungen und Schleifen in einem in sich geschlossenen Skript.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Zeilenweise Analyse und Ausführungsreihenfolge:</h3>
                <ol class="list-decimal pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Zeilen 2-5:</strong> Der Python-Interpreter erzeugt vier Objekte im Speicher (ein Integer, ein Float, ein Boolean und einen String). Die Namen (z.B. <code>max_versuche</code>) werden als Referenzen an diese Objekte gebunden.</li>
                    <li><strong>Zeile 8 (<code>for</code>):</strong> Der Iterator der <code>range</code>-Funktion wird initialisiert. Die Schleife läuft maximal von 1 bis 3.</li>
                    <li><strong>Zeile 11:</strong> Der Ausdruck <code>(temperatur * 1.5) &gt; 30.0</code> wird evaluiert. Zuerst greift der arithmetische Operator <code>*</code>, dann der Vergleichsoperator <code>&gt;</code>. Das boolesche Ergebnis wird an <code>kritisch</code> gebunden.</li>
                    <li><strong>Zeile 14 (<code>if</code>):</strong> Der logische Operator <code>not</code> negiert den Wahrheitswert von <code>system_aktiv</code>. Ist das System inaktiv, triggert <code>break</code> und zerstört die Schleife sofort (der <code>else</code>-Block der Schleife in Zeile 26 wird übersprungen).</li>
                    <li><strong>Zeile 17 (<code>elif</code>):</strong> Ist <code>kritisch</code> wahr, greift der Zuweisungsoperator <code>-=</code> (reduziert Temperatur) und <code>continue</code> zwingt den Interpreter, alle nachfolgenden Zeilen zu überspringen und direkt mit dem nächsten Schleifendurchlauf (Versuch 2) zu starten.</li>
                    <li><strong>Zeile 21 (<code>else</code>):</strong> Trifft keine vorherige Bedingung zu, greift der Ternary Operator in Zeile 23. Er evaluiert die Bedingung inline und weist <code>msg</code> entsprechend einen String zu. Danach beendet <code>break</code> die Schleife regulär.</li>
                </ol>
            `,
            codeBlocks: [
                {
                    title: "Das fundamentale Minimal-Beispiel",
                    code: `# 1. Variablen und Zuweisung (Primitive Datentypen)\nmax_versuche = 3            # int\ntemperatur = 22.5           # float\nsystem_aktiv = True         # bool\nstatus_msg = "Aktiv"        # str\n\n# 2. Schleife (Loop) mit else-Block\nfor versuch in range(1, max_versuche + 1):\n    \n    # 3. Arithmetische und Vergleichsoperatoren\n    kritisch = (temperatur * 1.5) > 30.0 \n    \n    # 4. Kontrollstruktur (Bedingung)\n    if not system_aktiv:\n        print("System offline.")\n        break\n    elif kritisch:\n        print(f"Warnung im Versuch {versuch}: Temperatur zu hoch!")\n        temperatur -= 5.0   # Zuweisungsoperator\n        continue\n    else:\n        # 5. Ternary Operator\n        msg = "Optimal" if temperatur == 22.5 else "Stabil"\n        print(f"Status: {msg}")\n        break\nelse:\n    # Wird NUR ausgeführt, wenn die Schleife NICHT durch 'break' beendet wurde\n    print("Maximale Versuche erreicht, ohne Erfolg.")`
                }
            ]
        },
        {
            id: "keywords",
            title: "3. Detaillierte Keyword-Analyse",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-blue-700">Datentypen & Basis-Funktionen</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong><code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code></strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> Built-in Klassen zur Erzeugung oder Umwandlung (Casting) von primitiven Datentypen.</li>
                            <li><em>Quirks:</em> Alle primitiven Datentypen in Python sind <strong>immutable</strong> (unveränderlich). Eine Operation wie <code>a += 1</code> ändert nicht das Objekt im Speicher, sondern erzeugt ein neues Integer-Objekt und biegt die Referenz von <code>a</code> darauf um.</li>
                            <li><em>CPython Internals:</em> Zur Speicheroptimierung hält CPython kleine Integers (meist von -5 bis 256) und kurze Strings dauerhaft im Speicher (Interning). <code>a = 10</code> und <code>b = 10</code> zeigen physisch auf exakt dieselbe Speicheradresse.</li>
                        </ul>
                    </li>
                    <li><strong><code>is</code> vs. <code>==</code></strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> <code>==</code> prüft auf Wertgleichheit (nutzt <code>__eq__</code>), <code>is</code> prüft auf Identität (Speicheradresse).</li>
                        </ul>
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Operatoren</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code>, <code>**</code> (Arithmetisch)</strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Quirks:</em> Die reguläre Division <code>/</code> konvertiert Integers <em>immer</em> zu Floats. Die Ganzzahldivision <code>//</code> (Floor Division) schneidet die Kommastellen ab (rundet immer abwärts).</li>
                            <li><em>CPython Internals:</em> Werden in entsprechende Dunder-Methods übersetzt (z.B. <code>__add__</code> für <code>+</code>).</li>
                        </ul>
                    </li>
                    <li><strong><code>and</code>, <code>or</code>, <code>not</code> (Logisch)</strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Quirks:</em> Sie nutzen <strong>Short-Circuit Evaluation</strong> (Kurzschlussauswertung). Bei <code>A or B</code> wird <code>B</code> niemals evaluiert, wenn <code>A</code> bereits <code>True</code> ist. Dies ist extrem wichtig für Scoping und Fehlervermeidung (z.B. <code>if obj is not None and obj.value &gt; 10:</code> stürzt nicht ab, wenn <code>obj</code> None ist).</li>
                        </ul>
                    </li>
                    <li><strong><code>&amp;</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code> (Bitweise)</strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> Operieren direkt auf der Binärdarstellung der Zahlen.</li>
                            <li><em>Quirks:</em> Dürfen nicht mit <code>and</code>/<code>or</code> verwechselt werden. Sie haben eine höhere Bindungspriorität und eignen sich für Maskierungen oder Set-Operationen.</li>
                        </ul>
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Kontrollstrukturen & Schleifen</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong><code>if</code>, <code>elif</code>, <code>else</code></strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> Bedingte Verzweigungen.</li>
                            <li><em>Quirks:</em> Python nutzt "Truthiness". Fast alles ist wahr (True), außer es ist "leer" (<code>0</code>, <code>""</code>, <code>[]</code>, <code>None</code>, <code>False</code>).</li>
                        </ul>
                    </li>
                    <li><strong><code>match</code>, <code>case</code> (ab Python 3.10)</strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> Structural Pattern Matching (ähnlich zu Switch-Case in C, aber mächtiger).</li>
                            <li><em>Quirks:</em> Es prüft nicht nur auf Werte, sondern kann Strukturen (Listen, Objekte) entpacken (Destructuring) und Variablen direkt im <code>case</code>-Block binden.</li>
                        </ul>
                    </li>
                    <li><strong><code>for</code>, <code>while</code>, <code>in</code></strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> <code>for</code> iteriert über Iterables, <code>while</code> läuft basierend auf einer Bedingung. <code>in</code> ist der Membership-Operator.</li>
                            <li><em>CPython Internals:</em> Eine <code>for</code>-Schleife ruft intern <code>iter()</code> auf dem Objekt auf und dann wiederholt <code>next()</code>, bis eine <code>StopIteration</code>-Exception geworfen (und intern stumm geschluckt) wird.</li>
                        </ul>
                    </li>
                    <li><strong><code>break</code>, <code>continue</code>, <code>else</code> (in Schleifen)</strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> Steuerung des Schleifenabbruchs.</li>
                            <li><em>Quirks:</em> Das <code>else</code> nach einer <code>for/while</code>-Schleife ist eine Python-Eigenheit. Es wird <strong>nur</strong> ausgeführt, wenn die Schleife natürlich (ohne <code>break</code>) durchlaufen wurde. Hervorragend geeignet für "Suchen-und-Finden"-Algorithmen.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            id: "use_cases",
            title: "4. Verwendungsmöglichkeiten (Use Cases)",
            content: `
                <p class="mb-4 text-gray-700">Nenne mindestens 2-3 konkrete, realitätsnahe Praxis-Szenarien, in denen dieses Thema zwingend oder idealerweise eingesetzt wird.</p>
            `,
            codeBlocks: [
                {
                    title: "Szenario 1: Datenbereinigung und Filterung (For, Types, Conditions)",
                    code: `raw_data = ["12", 45, "invalid", 8.5, None, "22"]\nvalid_integers = []\n\nfor item in raw_data:\n    # 1. Truthiness check: Überspringe None oder leere Werte\n    if not item:\n        continue\n    \n    # 2. Typ-Prüfung und Casting\n    if isinstance(item, int):\n        valid_integers.append(item)\n    elif isinstance(item, str) and item.isdigit():\n        valid_integers.append(int(item)) # String zu Integer casten\n\nprint(valid_integers) # Output: [12, 45, 22]`
                },
                {
                    title: "Szenario 2: State Routing mit Structural Pattern Matching",
                    code: `def process_command(command):\n    # command ist eine Liste, z.B. ["move", "player1", 10, 20]\n    match command:\n        case ["quit" | "exit"]:\n            print("Beende das System...")\n        case ["move", entity, x, y] if isinstance(x, int) and isinstance(y, int):\n            # entity, x und y werden hier direkt aus der Liste entpackt (Destructuring)\n            # Der "if"-Guard stellt sicher, dass die Koordinaten Zahlen sind\n            print(f"Bewege {entity} zu den Koordinaten ({x}, {y})")\n        case _:\n            # Wildcard (_) fängt alle unbekannten Befehle ab\n            print("Unbekannter Befehl.")\n\nprocess_command(["move", "hero", 100, 200])`
                },
                {
                    title: "Szenario 3: Retry-Logik mit Fallback (While & Else)",
                    code: `import random\n\nverbindung_aufgebaut = False\nversuche = 0\n\nwhile versuche < 5:\n    print(f"Verbindungsversuch {versuche + 1}...")\n    # Simuliere einen Netzwerk-Call, der zu 20% erfolgreich ist\n    if random.random() > 0.8:\n        verbindung_aufgebaut = True\n        print("Verbindung erfolgreich!")\n        break # Stoppt die Schleife, überspringt den else-Block\n    \n    versuche += 1\nelse:\n    # Greift NUR, wenn break nie aufgerufen wurde (also alle Versuche fehlschlugen)\n    print("Kritischer Fehler: Host nicht erreichbar. Aktiviere Notfall-Protokoll.")`
                }
            ]
        },
        {
            id: "best_practices",
            title: "5. Best Practices & Typische Fehler (Pitfalls)",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-red-600">Anti-Patterns (Wie man es NICHT macht)</h3>
                
                <ul class="list-disc pl-5 mb-4 space-y-4 text-gray-700">
                    <li><strong>1. Falsche Typprüfung</strong><br>
                        <em>Falsch:</em> <code>if type(variable) == int:</code> (Ignoriert Vererbung; unflexibel).<br>
                        <em>Richtig:</em> <code>if isinstance(variable, int):</code> (Best Practice, erkennt auch Subklassen).
                    </li>
                    <li><strong>2. Boolesche Werte explizit vergleichen</strong><br>
                        <em>Falsch:</em> <code>if is_active == True:</code> oder <code>if my_list == []:</code><br>
                        <em>Richtig:</em> <code>if is_active:</code> oder <code>if not my_list:</code> (Nutze Pythonic Truthiness. Das ist schneller und sicherer).
                    </li>
                    <li><strong>3. Eine Liste modifizieren, während man darüber iteriert</strong><br>
                        <em>Falsch:</em><br>
                        <pre class="bg-gray-100 p-2 mt-1 mb-1 rounded text-sm"><code>for item in my_list:\n    if item < 5:\n        my_list.remove(item) # Verändert die Indizes während der Laufzeit!</code></pre>
                        <em>Richtig:</em> Nutze List Comprehensions oder iteriere über eine Kopie.<br>
                        <pre class="bg-gray-100 p-2 mt-1 rounded text-sm"><code>my_list = [item for item in my_list if item >= 5]</code></pre>
                    </li>
                    <li><strong>4. Chained Comparisons nicht nutzen</strong><br>
                        <em>Falsch:</em> <code>if x &gt; 10 and x &lt; 20:</code><br>
                        <em>Richtig:</em> <code>if 10 &lt; x &lt; 20:</code> (Python evaluiert das intern effizienter und es liest sich wie echte Mathematik).
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Performance-Aspekte (Memory & CPU)</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>String Concatenation in Schleifen:</strong> Strings sind immutable. Das Verknüpfen von Strings in einer Schleife via <code>+=</code> erzwingt in CPython bei jedem Durchlauf eine neue Speicherallokation und das Kopieren der alten Daten.<br>
                    <em>Besser:</em> Sammle Strings in einer Liste und füge sie am Ende mit <code>"".join(liste)</code> zusammen.</li>
                    <li><strong>Lokale vs. Globale Variablen:</strong> Der Lookup für lokale Variablen (<code>LOAD_FAST</code> im Bytecode) ist in Python signifikant schneller als der für globale Variablen (<code>LOAD_GLOBAL</code>). In rechenintensiven Schleifen (<code>while</code> oder <code>for</code>) sollten referenzierte externe Methoden oder Variablen in den lokalen Scope gezogen werden (z.B. <code>local_func = global_obj.func</code>), um Micro-Optimierungen vorzunehmen.</li>
                    <li><strong>Membership-Testing:</strong> Die Suche in einer Liste (<code>if x in my_list</code>) hat eine Komplexität von $O(n)$. Wenn du häufige Lookups machst, wandle die Liste zwingend in ein Set (<code>set()</code>) um. Dort ist die Komplexität $O(1)$, da Sets auf Hash-Tables basieren.</li>
                </ul>
            `
        }
    ]
};

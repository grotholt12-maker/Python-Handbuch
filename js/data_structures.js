export const dataStructures = {
    category: "2. Datenstrukturen",
    icon: "fa-database",
    chapters: [
        {
            id: "konzept",
            title: "1. Komplette Erklärung (Das Konzept)",
            content: `
                <h3 class="text-xl font-bold mb-2 text-blue-700">Was genau sind Datenstrukturen in Python?</h3>
                <p class="mb-4 text-gray-700">Datenstrukturen sind hochoptimierte Container-Objekte, die dazu dienen, Sammlungen von Daten effizient zu verwalten, zu strukturieren und abzufragen. Während eine reguläre Variable exakt eine Referenz auf ein Objekt hält, bündeln Datenstrukturen multiple Referenzen unter einem gemeinsamen Namensraum.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Welches Problem lösen sie?</h3>
                <p class="mb-4 text-gray-700">In der realen Programmierung operieren wir fast nie auf isolierten Einzelwerten, sondern auf Vektoren, Zeitreihen, Datenbankeinträgen oder API-Responses. Jede Datenstruktur in Python löst ein spezifisches Problem der Speichereffizienz oder Zugriffsgeschwindigkeit:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Listen (Lists):</strong> Lösen das Problem der sequenziellen, veränderbaren Datenspeicherung. Sie behalten die Einfügereihenfolge bei und sind dynamisch skalierbar.</li>
                    <li><strong>Tupel (Tuples):</strong> Lösen das Problem der semantischen Gruppierung von Daten, die zur Laufzeit strikt <em>nicht</em> mehr verändert werden dürfen (Immutability). Sie sind speichereffizienter als Listen.</li>
                    <li><strong>Dictionaries:</strong> Lösen das Problem des extrem schnellen Datenabrufs über semantische Schlüssel ($O(1)$ Komplexität) statt numerischer Indizes, basierend auf Hash-Tabellen.</li>
                    <li><strong>Sets (Mengen):</strong> Lösen das Problem der Duplikats-Vermeidung und ermöglichen hochperformante mathematische Mengenoperationen (Schnittmengen, Differenzen).</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Technisch präzise Definition:</h3>
                <p class="mb-4 text-gray-700">In CPython sind alle Standard-Datenstrukturen Container für <code>PyObject*</code>-Pointer. Eine Liste ist intern ein dynamisches Array von Zeigern (keine verlinkte Liste). Dictionaries und Sets basieren auf Hash-Tabellen (Open Addressing), was bedeutet, dass der Speicherort eines Objekts aus dem Hashwert seines Inhalts berechnet wird. Dies zwingt Objekte, die als Keys in Dictionaries oder Elemente in Sets fungieren sollen, zur Hashbarkeit (sie müssen <code>__hash__()</code> und <code>__eq__()</code> implementieren und zwingend immutable sein).</p>
            `
        },
        {
            id: "syntax",
            title: "2. Code-Aufbau und Syntax",
            content: `
                <p class="mb-4 text-gray-700">Dieses kompakte Beispiel demonstriert die Initialisierung und die primären Operationen der vier grundlegenden Datenstrukturen.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Zeilenweise Analyse und Ausführungsreihenfolge:</h3>
                <ol class="list-decimal pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Zeile 2 (List Creation):</strong> Eine mutable Liste wird im Speicher alloziert. CPython reserviert hierbei initial etwas mehr Platz, als für 4 Elemente nötig ist (Over-allocation).</li>
                    <li><strong>Zeile 3-4 (Indexing & Slicing):</strong> Zeile 3 ruft das zweite Element ab (Index 1). Zeile 4 generiert durch Slicing <code>[1:3]</code> ein <em>neues</em> Listenobjekt mit Kopien der Zeiger auf die Elemente 20 und 30. Der End-Index ist immer exklusiv.</li>
                    <li><strong>Zeile 7 (Tuple):</strong> Ein immutables Tupel wird erstellt. Im Speicher wird ein Block exakt für zwei Pointer reserviert.</li>
                    <li><strong>Zeile 8 (Unpacking):</strong> Python extrahiert die Werte aus dem Tupel und bindet sie sequenziell an die Namen <code>x</code> und <code>y</code>.</li>
                    <li><strong>Zeile 11-13 (Dictionary):</strong> Eine Hash-Tabelle wird aufgebaut. Der String <code>"id"</code> wird gehasht, um den Speicher-Offset für den Wert <code>101</code> zu bestimmen. Zeile 13 legt einen neuen Key an.</li>
                    <li><strong>Zeile 16-17 (Sets):</strong> Zwei Sets werden instanziiert. Die Pipe <code>|</code> ist der Operator für die mathematische Union (Vereinigung), welche ein neues Set ohne Duplikate erzeugt.</li>
                </ol>
            `,
            codeBlocks: [
                {
                    title: "Syntaktische Grundlagen aller 4 Datenstrukturen",
                    code: `# --- LISTEN (Lists) ---
daten = [10, 20, 30, 40]
zweiter_wert = daten[1]        # Indexing: 20
ausschnitt = daten[1:3]        # Slicing: [20, 30]
daten.append(50)               # Mutability: Element am Ende anfügen

# --- TUPEL (Tuples) ---
koordinaten = (48.13, 11.58)
x, y = koordinaten             # Unpacking (Destructuring)

# --- DICTIONARIES (Dicts) ---
user = {"id": 101, "role": "admin"}
user["active"] = True          # Neues Key-Value-Paar einfügen

# --- SETS (Mengen) ---
gruppe_a = {"Alice", "Bob", "Charlie"}
gruppe_b = {"Bob", "Dave"}
alle_user = gruppe_a | gruppe_b # Union-Operator: {"Alice", "Bob", "Charlie", "Dave"}`
                }
            ]
        },
        {
            id: "keywords",
            title: "3. Detaillierte Keyword-Analyse & Internals",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-blue-700">Listen-Methoden (append, pop, sort)</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong><code>.append(item)</code>:</strong> Fügt ein Element ans Ende an.
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>CPython Internals:</em> Die Komplexität ist amortisiert $O(1)$. CPython nutzt ein "Over-allocation" Pattern. Ist das Array voll, wird neuer Speicher allokiert (Wachstumsfaktor ca. 1.125) und das alte Array dorthin kopiert.</li>
                        </ul>
                    </li>
                    <li><strong><code>.pop(index)</code>:</strong> Entfernt und retourniert das Element am Index (Default ist das letzte Element <code>-1</code>).
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Quirks:</em> <code>pop()</code> ist $O(1)$. Aber <code>pop(0)</code> ist $O(N)$, da alle nachfolgenden Pointer im C-Array um eine Position nach links verschoben werden müssen. Vermeide dies bei großen Listen zwingend (nutze stattdessen <code>collections.deque</code>).</li>
                        </ul>
                    </li>
                    <li><strong><code>.sort()</code>:</strong> Sortiert die Liste In-Place.
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>CPython Internals:</em> Nutzt den Timsort-Algorithmus (eine hochoptimierte Mischung aus Merge-Sort und Insertion-Sort) mit $O(N \\log N)$.</li>
                        </ul>
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Tupel & Namedtuples</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Immutability & Hashing:</strong> Weil Tupel nach Erstellung nicht veränderbar sind, können sie (vorausgesetzt, all ihre Elemente sind ebenfalls immutable) gehasht werden und somit als Keys in Dictionaries fungieren.</li>
                    <li><strong><code>collections.namedtuple</code>:</strong> Eine Factory-Funktion, die Subklassen von Tupeln erzeugt.
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Quirks:</em> Erlaubt den Zugriff über Punkt-Notation (<code>obj.attribut</code>) statt nur über numerische Indizes. Sie verbrauchen exakt so wenig Speicher wie normale Tupel (da sie keine <code>__dict__</code> Instanz pro Objekt anlegen).</li>
                        </ul>
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Dictionaries & defaultdict</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Hashing & Offsets:</strong> Keys müssen immutable sein. CPython nutzt die Hash-Tabelle zur $O(1)$ Lookup-Time.
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Quirks:</em> Seit Python 3.7 bewahren Dictionaries garantiert die Einfügereihenfolge. Das liegt an der internen Umstrukturierung zu einem "Compact Dict", das ein separates, dichtes Array für Keys/Values und ein Sparse-Array für die Hashes nutzt (spart ca. 20% bis 25% RAM).</li>
                        </ul>
                    </li>
                    <li><strong><code>collections.defaultdict</code>:</strong> Eine Dictionary-Subklasse.
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Bedeutung:</em> Ruft bei Zugriff auf einen nicht existierenden Key automatisch eine Factory-Funktion (z.B. <code>int</code> oder <code>list</code>) auf, um einen Standardwert zu generieren, anstatt einen <code>KeyError</code> zu werfen.</li>
                        </ul>
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Set-Operatoren</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong><code>|</code> (Union), <code>&amp;</code> (Intersection), <code>-</code> (Difference), <code>^</code> (Symmetric Difference)</strong>
                        <ul class="list-circle pl-5 mt-1 space-y-1">
                            <li><em>Internals:</em> Sets sind intern wie Dictionaries implementiert, aber die Values sind Dummy-Referenzen. Die Set-Algebra ist extrem stark auf C-Ebene optimiert und iteriert blitzschnell über die Hash-Tabellen, um Schnittmengen abzugleichen.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            id: "use_cases",
            title: "4. Praxis-Szenarien (Use Cases)",
            content: `
                <p class="mb-4 text-gray-700">Diese Szenarien repräsentieren tägliche Standardarchitekturen in professionellen Python-Backends.</p>
            `,
            codeBlocks: [
                {
                    title: "Szenario 1: Semantische Datenstrukturen (Namedtuples)",
                    code: `from collections import namedtuple\n\n# Definiere den Bauplan für Datenbank-Records\n# Perfekt für Daten, die nur gelesen, aber nicht manipuliert werden sollen.\nDatabaseConfig = namedtuple("DatabaseConfig", ["host", "port", "user"])\n\n# Instanziierung\nprod_db = DatabaseConfig(host="10.0.0.5", port=5432, user="admin")\n\n# Zugriff ist lesbar wie bei Klassen, aber speichereffizient wie ein Tupel\nprint(f"Connecting to {prod_db.host} on port {prod_db.port}...")\n\n# prod_db.port = 8080 -> Würde einen AttributeError werfen (Immutability)`
                },
                {
                    title: "Szenario 2: Daten-Aggregation und Zählen (defaultdict)",
                    code: `from collections import defaultdict\n\nserver_logs = [\n    ("ERROR", "DB Timeout"),\n    ("INFO", "User Login"),\n    ("ERROR", "Memory High"),\n    ("WARN", "Disk Space"),\n]\n\n# Ohne defaultdict müssten wir manuell mit 'if key not in dict:' prüfen.\n# Mit 'list' als Default wird bei neuen Keys automatisch eine leere Liste generiert.\nlog_groups = defaultdict(list)\n\nfor severity, message in server_logs:\n    log_groups[severity].append(message)\n\nprint("Alle Errors:", log_groups["ERROR"])`
                },
                {
                    title: "Szenario 3: Bereinigung & Abgleich großer Datensätze (Sets)",
                    code: `legacy_user_ids = [101, 102, 103, 103, 104]  # Enthält Duplikate\nactive_user_ids = [103, 104, 105, 106]\n\n# 1. Deduplizierung durch Konvertierung in Sets ($O(N)$ Aufwand, extrem schnell)\nlegacy_set = set(legacy_user_ids)\nactive_set = set(active_user_ids)\n\n# 2. Schnittmengen-Berechnung (Wer ist legacy UND aktiv?)\n# Intersection (&)\nstill_active = legacy_set & active_set\nprint("Immer noch aktiv:", still_active)\n\n# 3. Differenz-Berechnung (Wer ist legacy, aber NICHT mehr aktiv?)\n# Difference (-)\nchurned_users = legacy_set - active_set\nprint("Abgewanderte Nutzer:", churned_users)`
                }
            ]
        },
        {
            id: "best_practices",
            title: "5. Best Practices & Typische Fehler (Pitfalls)",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-red-600">Gefährliche Anti-Patterns</h3>
                
                <ul class="list-disc pl-5 mb-4 space-y-4 text-gray-700">
                    <li><strong>1. Mutable Default Arguments in Funktionen</strong><br>
                        <em>Das Problem:</em> Default-Argumente in Python werden nur <strong>ein einziges Mal</strong> beim Parsen der Funktion evaluiert, nicht bei jedem Aufruf. Nutzt man eine Liste als Default, teilen sich alle Aufrufe dieselbe Referenz im Speicher.<br>
                        <em>Falsch:</em> <code>def füge_hinzu(item, sammlung=[]):</code><br>
                        <em>Richtig:</em> Setze den Default auf <code>None</code> und instanziiere in der Funktion.<br>
                        <pre class="bg-gray-100 p-2 mt-1 rounded text-sm font-mono text-gray-800">def füge_hinzu(item, sammlung=None):\n    if sammlung is None:\n        sammlung = []\n    sammlung.append(item)</pre>
                    </li>
                    <li><strong>2. Modifikation einer Liste während der Iteration</strong><br>
                        <em>Das Problem:</em> Wenn Elemente entfernt werden (<code>.remove()</code> oder <code>del</code>), rutschen die restlichen Indizes nach. Der Iterator der <code>for</code>-Schleife überspringt dann Elemente.<br>
                        <em>Richtig:</em> Iteriere über einen Slice der Liste (Kopie) mittels <code>for item in my_list[:]:</code> oder baue direkt eine neue Liste via List Comprehension auf.
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Performance- und Architektur-Aspekte (Memory & CPU)</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Das falsche Werkzeug für Lookups:</strong> Nutze niemals eine Liste, um riesige Datenmengen auf Existenz von Werten zu prüfen (<code>if wert in riesen_liste:</code>). Die CPU muss im Worst-Case die komplette Liste durchwandern ($O(N)$ Komplexität). Wandle die Liste in ein Set um; der Check <code>if wert in riesen_set:</code> verifiziert die Existenz in konstanter Zeit ($O(1)$) unabhängig von der Größe der Menge.</li>
                    <li><strong>Tuple Caching:</strong> Der CPython-Interpreter ist darauf optimiert, leere und kleine Tupel (bis ca. 20 Elemente) in internen "Free Lists" zwischenzuspeichern. Bei der wiederholten Erstellung und Löschung von kleinen Tupeln wird also nicht ständig C-Level <code>malloc()</code> (Memory Allocation) aufgerufen. Dies macht Tupel für fixierte Daten in engen Rechenschleifen extrem überlegen gegenüber Listen.</li>
                    <li><strong>Dictionary Memory Overhead:</strong> Obwohl das Compact Dict (seit Python 3.6+) wesentlich weniger Speicher verbraucht, sind Dictionaries intern immer noch groß (durch Overhead der Hash-Tabellen). Brauchst du Millionen von Objekten, die exakt dieselben Keys haben, weiche auf Klassen mit <code>__slots__</code> oder auf Namedtuples aus, um das RAM nicht zu sprengen.</li>
                </ul>
            `
        }
    ]
};

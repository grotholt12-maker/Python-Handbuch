export const dataAdvanced = {
    category: "5. Fortgeschrittene Konzepte",
    icon: "fa-rocket",
    chapters: [
        {
            id: "konzept",
            title: "1. Komplette Erklärung (Das Konzept)",
            content: `
                <h3 class="text-xl font-bold mb-2 text-blue-700">Was sind diese fortgeschrittenen Konzepte?</h3>
                <p class="mb-4 text-gray-700">Fortgeschrittene Python-Konzepte heben Code von bloßer Funktionalität auf das Level von "Pythonic Code" – sie machen ihn kompakter, extrem speichereffizient und deutlich performanter. Sie umfassen vier Kernsäulen:</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Comprehensions:</strong> Deklarative, einzeilige Konstrukte zur Transformation von Datenstrukturen (Listen, Dicts, Sets), die herkömmliche <code>for</code>-Schleifen ersetzen.</li>
                    <li><strong>Generatoren & Iteratoren:</strong> Werkzeuge für "Lazy Evaluation" (Bedarfsauswertung). Statt Daten komplett in den RAM zu laden, werden sie einzeln on-the-fly berechnet und der Programmzustand pausiert (Suspension).</li>
                    <li><strong>Dekoratoren (Decorators):</strong> Higher-Order-Functions (Funktionen, die Funktionen akzeptieren/zurückgeben). Sie ermöglichen Aspektorientierte Programmierung, indem sie Querschnittsfunktionen (wie Logging, Caching, Authentifizierung) von der Kern-Geschäftslogik trennen.</li>
                    <li><strong>Kontextmanager (Context Managers):</strong> Kapseln das strikte Setup und Teardown von Systemressourcen (Dateien, Netzwerk-Sockets, DB-Transaktionen), um Memory Leaks oder Deadlocks zu verhindern, selbst wenn das Programm abstürzt.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Welches Problem lösen sie und technischer Hintergrund?</h3>
                <p class="mb-4 text-gray-700">In CPython ist der Overhead für Funktionsaufrufe (wie <code>.append()</code>) relativ hoch. Comprehensions verlagern diese Iterationslogik tief in hochoptimierte C-Schleifen. <br>
                Zudem ist Arbeitsspeicher endlich. Werden Millionen von Datenbank-Datensätzen gleichzeitig als Liste in den RAM geladen, führt das zu einem <code>MemoryError</code>. Generatoren lösen dies, indem sie den Ausführungs-Stack-Frame (<code>PyFrameObject</code>) nicht verwerfen, sondern den Zustand auf dem Heap sichern. <br>
                Dekoratoren und Kontextmanager lösen vor allem architektonische Probleme (DRY-Prinzip) und garantieren über <code>try...finally</code> Mechanismen auf C-Ebene absolute Ressourcensicherheit.</p>
            `
        },
        {
            id: "syntax",
            title: "2. Code-Aufbau und Syntax",
            content: `
                <p class="mb-4 text-gray-700">Das folgende Beispiel vereint alle vier Konzepte in einem einzigen, hochprofessionellen Daten-Pipeline-Skript. Es simuliert eine Datenbankabfrage, berechnet Werte "lazy", misst die Ausführungszeit und filtert die Ergebnisse.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Zeilenweise Analyse und Ausführungsreihenfolge:</h3>
                <ol class="list-decimal pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Zeile 4-13 (Decorator):</strong> Der <code>@timer</code> Decorator ist eine Funktion, die einen Wrapper zurückgibt. <code>@wraps(func)</code> kopiert Metadaten (wie den Namen) der Originalfunktion. Der Wrapper misst die Zeit <em>um</em> die Ausführung von <code>func</code> herum.</li>
                    <li><strong>Zeile 16-21 (Context Manager):</strong> Die Klasse <code>MockDatabase</code> definiert <code>__enter__</code> (Setup) und <code>__exit__</code> (Teardown). Das <code>with</code>-Statement garantiert, dass <code>__exit__</code> immer ausgeführt wird, auch bei Abstürzen.</li>
                    <li><strong>Zeile 24-27 (Generator):</strong> <code>fetch_data</code> nutzt <code>yield</code>. Bei jedem Aufruf von <code>next()</code> liefert sie ein Dictionary, pausiert exakt an dieser Stelle und wartet auf den nächsten Aufruf. Der RAM-Bedarf ist winzig, unabhängig davon, ob die Range bis 5 oder 5 Milliarden geht.</li>
                    <li><strong>Zeile 30 (Anwendung):</strong> Die Funktion <code>process</code> wird vom <code>@timer</code> umschlossen (Zeile 30). In Zeile 32 öffnet <code>with</code> die Datenbank. Zeile 35 ruft den Generator auf (hier passiert noch keine Berechnung).</li>
                    <li><strong>Zeile 38 (Dict Comprehension):</strong> Iteriert über den Generator, filtert Werte (<code>if item['value'] > 20</code>) und baut ein neues Dictionary auf, wobei <code>item['id']</code> der Key wird.</li>
                </ol>
            `,
            codeBlocks: [
                {
                    title: "Kombination von Decorator, Context Manager, Generator & Comprehension",
                    code: `from functools import wraps
import time

# 1. Decorator
def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        dauer = time.time() - start
        print(f"[{func.__name__}] Dauer: {dauer:.4f} Sekunden")
        return result
    return wrapper

# 2. Context Manager
class MockDatabase:
    def __enter__(self):
        print("DB-Verbindung GESTARTET.")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("DB-Verbindung SICHER GESCHLOSSEN.")
        return False  # True würde eventuelle Exceptions schlucken

# 3. Generator
def fetch_data(limit):
    for i in range(1, limit + 1):
        # Berechnet den Wert "on the fly" und pausiert dann
        yield {"id": f"usr_{i}", "value": i * 10}

# 4. Zusammenführung & Dict Comprehension
@timer
def process():
    with MockDatabase() as db:
        # Generator initialisieren (startet die Schleife noch nicht!)
        stream = fetch_data(5)
        
        # Dict Comprehension entlädt den Generator und filtert
        ergebnis = {item['id']: item['value'] for item in stream if item['value'] > 20}
        
        print(f"Verarbeitete Daten: {ergebnis}")

process()`
                }
            ]
        },
        {
            id: "keywords",
            title: "3. Detaillierte Keyword-Analyse & Internals",
            content: `
                <div class="space-y-6 text-gray-700">
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2"><code>yield</code> und Generatoren</h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> Verwandelt eine Funktion in eine Generator-Factory. Statt zu <code>return</code> (was den Frame zerstört), friert <code>yield</code> den aktuellen Status der lokalen Variablen und den Instruction-Pointer ein.</p>
                        <p class="mb-2"><strong>CPython Internals:</strong> Generatoren operieren über das <code>__next__()</code>-Protokoll. Beim Aufruf von <code>next()</code> wird der Bytecode weiter ausgeführt (<code>YIELD_VALUE</code> liefert den Wert, <code>RESUME</code> setzt fort). CPython verschiebt den Stack-Frame für diesen Generator vom Ausführungs-Stack auf den Heap, sodass er bei Inaktivität erhalten bleibt.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Die <code>@</code>-Syntax und <code>functools.wraps</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> <code>@decorator</code> vor <code>def func():</code> ist bloßer Syntactic Sugar für <code>func = decorator(func)</code>. Es reicht eine Funktion als Parameter in eine andere, überschreibt den ursprünglichen Namen aber mit der Rückgabe (dem Wrapper).</p>
                        <p class="mb-2"><strong>Quirks (Das __name__ Problem):</strong> Ohne <code>@wraps(func)</code> im Wrapper, würde <code>func.__name__</code> nach der Dekoration "wrapper" lauten statt dem Originalnamen. Das bricht Logging-Tools und Debugger. <code>functools.wraps</code> kopiert <code>__name__</code>, <code>__doc__</code> und <code>__annotations__</code> aus der Originalfunktion sauber auf den Wrapper.</p>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2"><code>with</code>, <code>__enter__</code> und <code>__exit__</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> Das Kontextmanager-Protokoll. <code>__enter__</code> initialisiert die Ressource und liefert ein Objekt zurück (zugewiesen über <code>as</code>). <code>__exit__</code> räumt auf.</p>
                        <p class="mb-2"><strong>CPython Internals:</strong> Kompiliert zu den Bytecode-Befehlen <code>SETUP_WITH</code> und <code>WITH_EXCEPT_START</code>. Tritt im <code>with</code>-Block ein Fehler auf, übergibt der Interpreter den Fehlertyp, den Wert und den Traceback als Parameter an <code>__exit__(exc_type, exc_val, exc_tb)</code>. Gibt <code>__exit__</code> <code>True</code> zurück, wird der Fehler intern stummgeschluckt. Bei <code>False</code> (Standard) wird der Fehler nach dem Aufräumen weitergereicht.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Comprehensions (List, Dict, Set)</h4>
                        <p class="mb-2"><strong>CPython Internals:</strong> Eine <code>for</code>-Schleife mit <code>.append()</code> erfordert in jedem Durchlauf die Bytecodes <code>LOAD_METHOD</code> und <code>CALL_METHOD</code>. Eine List Comprehension nutzt intern stattdessen den massiv optimierten C-Level Befehl <code>LIST_APPEND</code> (bzw. <code>MAP_ADD</code> für Dicts). Sie ist dadurch ca. 30-50% schneller als eine klassische Schleife.</p>
                    </div>
                </div>
            `
        },
        {
            id: "use_cases",
            title: "4. Praxis-Szenarien (Use Cases)",
            content: `
                <p class="mb-4 text-gray-700">Diese Architektur-Muster finden sich in fast jedem professionellen Python-Backend, von Django über FastAPI bis hin zu Data-Science Pipelines.</p>
            `,
            codeBlocks: [
                {
                    title: "Szenario 1: API-Retry Logik (Decorators)",
                    code: `import time\nimport random\nfrom functools import wraps\n\n# Ein generischer Retry-Decorator\ndef retry(max_retries=3, delay=1.0):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_retries + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f"Fehler: {e}. Versuch {attempt}/{max_retries}...")\n                    time.sleep(delay)\n            raise Exception("Maximale Retries erreicht. Abbruch.")\n        return wrapper\n    return decorator\n\n@retry(max_retries=3, delay=0.5)\ndef fetch_unstable_api():\n    if random.random() < 0.7:  # 70% Fehlschlag-Quote\n        raise ConnectionError("Netzwerk-Timeout")\n    return "Erfolgreicher API-Payload!"\n\nprint(fetch_unstable_api())`
                },
                {
                    title: "Szenario 2: Riesige Dateien ohne Memory-Crash lesen (Generatoren & with)",
                    code: `def process_huge_log(file_path):\n    # Das 'with'-Statement sorgt für garantierte Dateischließung\n    with open(file_path, "r", encoding="utf-8") as file:\n        \n        # Datei-Objekte in Python SIND bereits Generatoren!\n        # Ein Iterieren über 'file' liest immer nur exakt EINE Zeile in den RAM.\n        # Eine 50 GB Datei benötigt so nur wenige Kilobyte RAM.\n        \n        # Generator Expression (wie List Comprehension, aber mit runden Klammern)\n        # Transformiert die Zeilen lazy.\n        error_lines = (line.strip() for line in file if "ERROR" in line)\n        \n        # Gibt nur die ersten 3 Errors aus\n        for _ in range(3):\n            try:\n                print(next(error_lines))\n            except StopIteration:\n                break\n\n# process_huge_log("server_logs.txt")`
                },
                {
                    title: "Szenario 3: Daten-Aggregation und Mapping (Dict Comprehensions)",
                    code: `# Gegeben: Eine unsaubere Liste von JSON-Payloads\npayloads = [\n    {"user_id": 101, "name": "Alice", "role": "admin", "active": True},\n    {"user_id": 102, "name": "Bob", "role": "user", "active": False},\n    {"user_id": 103, "name": "Charlie", "role": "user", "active": True},\n]\n\n# Ziel: Ein sauberes Lookup-Dictionary für extrem schnellen Zugriff ($O(1)$)\n# Nur aktive User sollen übernommen werden, der Key ist die user_id.\n\nactive_users_lookup = {\n    user["user_id"]: user["name"].upper()\n    for user in payloads\n    if user["active"]\n}\n\nprint("Lookup-Table:", active_users_lookup)\n# Output: Lookup-Table: {101: 'ALICE', 103: 'CHARLIE'}`
                }
            ]
        },
        {
            id: "best_practices",
            title: "5. Best Practices & Typische Fehler (Pitfalls)",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-red-600">Gefährliche Anti-Patterns</h3>
                
                <ul class="list-disc pl-5 mb-4 space-y-4 text-gray-700">
                    <li><strong>1. Memory Leak durch List Comprehensions bei Big Data</strong><br>
                        <em>Das Problem:</em> Entwickler ersetzen eine Iteration durch <code>[x for x in huge_dataset if x > 10]</code>. Dadurch iteriert CPython über alles und pumpt das komplette, gefilterte Ergebnis *sofort* in den Arbeitsspeicher. Bei Gigabytes an Daten crasht der Server.<br>
                        <em>Richtig:</em> Nutze eine <strong>Generator Expression</strong>. Der Code bleibt fast identisch, man tauscht nur die eckigen Klammern <code>[]</code> gegen runde Klammern <code>()</code>: <code>(x for x in huge_dataset if x > 10)</code>. Dies liefert einen lazy Generator zurück, der $O(1)$ Speicher benötigt.
                    </li>
                    <li><strong>2. Manuelles Ressourcen-Management</strong><br>
                        <em>Falsch:</em> <code>file = open("data.txt"); data = file.read(); file.close()</code>. Wenn <code>file.read()</code> einen Fehler wirft, wird <code>close()</code> nie erreicht. Die Datei bleibt vom OS gesperrt.<br>
                        <em>Richtig:</em> Nutze IMMER <code>with open("data.txt") as file:</code>.
                    </li>
                    <li><strong>3. Komplexe Logik in Comprehensions erzwingen</strong><br>
                        <em>Das Problem:</em> List Comprehensions mit 3 verschachtelten <code>for</code>-Loops und extrem komplexen <code>if/else</code> (Ternary) Logiken. <br>
                        <em>Richtig:</em> Comprehensions dienen der Lesbarkeit. Sobald sie über zwei Zeilen lang werden oder <code>elif</code>-artige Konstrukte benötigen, kehre zu normalen <code>for</code>-Schleifen zurück. Lesbarkeit steht über minimalen C-Level-Optimierungen.
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Performance-Aspekte (Memory & CPU)</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Generator CPU Overhead vs. Memory Tausch:</strong> Während Generatoren gigantische Mengen an RAM ($O(1)$) sparen, haben sie durch das wiederholte Suspendieren und Reaktivieren des Frames über <code>next()</code> einen leicht höheren CPU-Overhead im Vergleich zu Iterationen über vollständig im RAM liegende Arrays. Wenn das Array sehr klein ist (z.B. &lt; 10.000 Einträge), ist eine Liste oft insgesamt schneller als ein Generator.</li>
                    <li><strong>Contextlib für schlanke Context Manager:</strong> Wenn du keine komplette Klasse für Setup/Teardown schreiben möchtest, liefert die Standardbibliothek <code>@contextlib.contextmanager</code>. Damit verwandelst du einen simplen Generator mit einem einzigen <code>yield</code> in einen vollständigen Context Manager. Alles *vor* dem <code>yield</code> fungiert als <code>__enter__</code>, alles *danach* als <code>__exit__</code>.</li>
                </ul>
            `
        }
    ]
};

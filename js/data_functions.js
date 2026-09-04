export const dataFunctions = {
    category: "3. Funktionen & Module",
    icon: "fa-cogs",
    chapters: [
        {
            id: "konzept",
            title: "1. Komplette Erklärung (Das Konzept)",
            content: `
                <h3 class="text-xl font-bold mb-2 text-blue-700">Was genau ist das?</h3>
                <p class="mb-4 text-gray-700">Funktionen und Modularisierung bilden das Rückgrat skalierbarer Softwarearchitektur. Eine Funktion ist ein benannter, isolierter und wiederverwendbarer Code-Block, der Eingabewerte (Parameter) entgegennimmt, diese verarbeitet und einen Ausgabewert (Return-Wert) zurückgibt. Module und Pakete erweitern dieses Konzept auf Dateiebene: Sie bündeln Funktionen, Klassen und Variablen in separaten Dateien, um logische Namensräume (Namespaces) zu schaffen.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Welches Problem wird gelöst?</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Wiederverwendbarkeit (DRY - Don't Repeat Yourself):</strong> Redundanter Code wird vermieden. Änderungen müssen nur an einer Stelle (in der Funktion) durchgeführt werden.</li>
                    <li><strong>Abstraktion:</strong> Komplexe Logik wird hinter einer simplen Funktionssignatur verborgen. Der Aufrufer muss nicht wissen, <em>wie</em> die Funktion arbeitet, sondern nur, <em>was</em> sie tut.</li>
                    <li><strong>Namensraum-Kapselung (Scope):</strong> Durch Module wird der globale Namespace nicht verschmutzt. Variablen in Modul A kollidieren nicht mit Variablen in Modul B.</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Technisch präzise Definition (First-Class Objects & LEGB):</h3>
                <p class="mb-4 text-gray-700">In Python sind Funktionen "First-Class Citizens". Das bedeutet, sie sind echte Objekte vom Typ <code>function</code>, die im Speicher existieren. Sie können Variablen zugewiesen, als Argumente an andere Funktionen übergeben oder von diesen zurückgegeben werden.</p>
                <p class="mb-4 text-gray-700"><strong>Die LEGB-Regel (Scope Resolution):</strong> Wenn Python eine Variable sucht, durchsucht der Interpreter die Namensräume streng in dieser Reihenfolge:</p>
                <ul class="list-decimal pl-5 mb-4 space-y-1 text-gray-700 font-mono text-sm">
                    <li><strong>L</strong>ocal: Innerhalb der aktuellen Funktion.</li>
                    <li><strong>E</strong>nclosing: In der umschließenden Funktion (bei verschachtelten Funktionen).</li>
                    <li><strong>G</strong>lobal: Auf Modul-Ebene (außerhalb aller Funktionen in der Datei).</li>
                    <li><strong>B</strong>uilt-in: Pythons vordefinierte Namen (wie <code>print</code> oder <code>len</code>).</li>
                </ul>
            `
        },
        {
            id: "syntax",
            title: "2. Code-Aufbau und Syntax",
            content: `
                <p class="mb-4 text-gray-700">Das folgende Beispiel demonstriert alle Facetten einer komplexen Funktionssignatur, anonyme Funktionen und den Modul-Ausführungs-Guard.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Zeilenweise Analyse und Ausführungsreihenfolge:</h3>
                <ol class="list-decimal pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Zeile 2 (<code>def</code> & Parameter):</strong> Die Funktion <code>verarbeite_daten</code> wird definiert. <code>aktion</code> ist ein positionaler Parameter. <code>faktor</code> ist ein Keyword-Parameter mit Default-Wert (1.0). <code>*args</code> fängt beliebig viele unbenannte Argumente als Tupel ab. <code>**kwargs</code> fängt benannte Argumente als Dictionary ab.</li>
                    <li><strong>Zeile 4-6 (Verarbeitung):</strong> Eine Lambda-Funktion (anonym) wird erstellt, die einen Wert mit dem <code>faktor</code> multipliziert. Die Liste der <code>*args</code> wird mit einer List-Comprehension unter Nutzung der Lambda-Funktion verarbeitet.</li>
                    <li><strong>Zeile 7 (<code>return</code>):</strong> Ein Dictionary mit den Ergebnissen und den Metadaten (aus <code>**kwargs</code>) wird an den Aufrufer zurückgegeben und der Frame vom Stack gepoppt.</li>
                    <li><strong>Zeile 11 (<code>if __name__ == "__main__":</code>):</strong> Dies ist der Guard. Der Code darunter wird <em>nur</em> ausgeführt, wenn die Datei direkt als Skript gestartet wird. Wird die Datei von einem anderen Modul über <code>import</code> geladen, hat <code>__name__</code> den Wert des Modulnamens, und der Block wird ignoriert.</li>
                    <li><strong>Zeile 13:</strong> Die Funktion wird aufgerufen. "skalieren" ist <code>aktion</code>. 10, 20, 30 landen in <code>*args</code>. <code>faktor=2.5</code> überschreibt den Default. <code>modus="schnell"</code> landet in <code>**kwargs</code>.</li>
                </ol>
            `,
            codeBlocks: [
                {
                    title: "Umfassende Funktionssignatur & Modul-Guard",
                    code: `# 1. Funktionsdefinition mit allen Parameter-Arten
def verarbeite_daten(aktion, faktor=1.0, *args, **kwargs):
    # 2. Anonyme Funktion (Lambda) für einfache Inline-Logik
    berechne = lambda x: x * faktor
    
    ergebnisse = [berechne(wert) for wert in args]
    return {"aktion": aktion, "daten": ergebnisse, "meta": kwargs}

# 3. Ausführungs-Guard (Schutz beim Importieren als Modul)
if __name__ == "__main__":
    
    # Aufruf mit Positional, *args, explizitem Default-Override und **kwargs
    resultat = verarbeite_daten("skalieren", 10, 20, 30, faktor=2.5, modus="schnell")
    print(resultat)
    # Output: {'aktion': 'skalieren', 'daten': [25.0, 50.0, 75.0], 'meta': {'modus': 'schnell'}}`
                }
            ]
        },
        {
            id: "keywords",
            title: "3. Detaillierte Keyword-Analyse & Internals",
            content: `
                <div class="space-y-6 text-gray-700">
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2"><code>def</code> und <code>return</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> <code>def</code> ist ein ausführbares Statement. Zur Laufzeit kompiliert es den Body der Funktion zu einem Code-Objekt, verpackt dieses in ein Funktions-Objekt und bindet es an den Funktionsnamen im aktuellen Namensraum.</p>
                        <p class="mb-2"><strong>CPython Internals:</strong> Beim Aufruf einer Funktion erstellt CPython ein neues <code>PyFrameObject</code> (Stack Frame), das die lokalen Variablen (<code>fastlocals</code>) hält. Ein <code>return</code> poppt diesen Frame und gibt den Wert zurück. Fehlt <code>return</code>, gibt CPython implizit <code>None</code> zurück.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2"><code>*args</code> und <code>**kwargs</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> Packing-Operatoren. Das Sternchen (<code>*</code>) sammelt restliche positionale Argumente in ein Tuple (meist <code>args</code> genannt). Doppelstern (<code>**</code>) sammelt Keyword-Argumente in ein Dictionary (meist <code>kwargs</code> genannt).</p>
                        <p class="mb-2"><strong>Quirks:</strong> Die Namen <em>args</em> und <em>kwargs</em> sind nur Konvention. Du könntest sie <code>*werte</code> und <code>**optionen</code> nennen. Wichtig sind nur die Sternchen.</p>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2"><code>lambda</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> Erzeugt eine anonyme Funktion. Sie darf nur aus genau einem Ausdruck (Expression) bestehen, keinem Statement (wie <code>if</code>, <code>while</code> oder Zuweisungen).</p>
                        <p class="mb-2"><strong>Quirks:</strong> Sie haben keinen eigenen Namen (ihr <code>__name__</code> Attribut ist <code>&lt;lambda&gt;</code>). Intern werden sie exakt wie normale <code>def</code>-Funktionen kompiliert, sind aber syntaktisch stark limitiert.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Modularisierung: <code>import</code> und <code>__init__.py</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> <code>import</code> lädt Module in den Speicher. <code>__init__.py</code> (oft leer) signalisiert Python, dass der Ordner, in dem sie liegt, als importierbares "Paket" behandelt werden soll.</p>
                        <p class="mb-2"><strong>CPython Internals:</strong> Wenn du ein Modul importierst, schaut Python im Cache <code>sys.modules</code> nach. Ist es nicht da, wird die Datei kompiliert und <strong>von oben nach unten einmalig ausgeführt</strong>. Das Modulobjekt wird dann im Cache gespeichert. Deshalb sind Zirkelbezüge (A importiert B, B importiert A) gefährlich und verursachen oft Fehler.</p>
                    </div>
                </div>
            `
        },
        {
            id: "use_cases",
            title: "4. Praxis-Szenarien (Use Cases)",
            content: `
                <p class="mb-4 text-gray-700">Diese drei Szenarien zeigen, wie professionelle Python-Entwickler Funktionen und Parameter nutzen, um robusten Code zu schreiben.</p>
            `,
            codeBlocks: [
                {
                    title: "Szenario 1: Flexibler API-Wrapper (*args, **kwargs)",
                    code: `def api_request(endpoint, *args, **kwargs):\n    # Basis-URL mit endpoint verbinden\n    url = f"https://api.example.com/{endpoint}"\n    \n    # Alle zusätzlichen Pfad-Parameter aus *args anhängen\n    for arg in args:\n        url += f"/{arg}"\n        \n    # Header und Timeout aus **kwargs extrahieren, mit Fallbacks\n    timeout = kwargs.get("timeout", 5.0)\n    headers = kwargs.get("headers", {"Auth": "Bearer XYZ"})\n    \n    print(f"Sende Request an {url} (Timeout: {timeout}s)")\n    print(f"Headers: {headers}")\n\n# Aufruf:\napi_request("users", 1042, "profile", timeout=10.0)`
                },
                {
                    title: "Szenario 2: Datentransformation mit Lambda",
                    code: `server_logs = [\n    {"id": 1, "status": "ERROR", "time": 120},\n    {"id": 2, "status": "INFO", "time": 40},\n    {"id": 3, "status": "WARN", "time": 80}\n]\n\n# Komplexe Liste von Dictionaries nach dem Schlüssel 'time' sortieren.\n# Die lambda-Funktion sagt der sort-Funktion, nach welchem Wert sortiert werden soll.\nsortierte_logs = sorted(server_logs, key=lambda log: log["time"], reverse=True)\n\nfor log in sortierte_logs:\n    print(f"Log {log['id']} - Laufzeit: {log['time']}ms")`
                },
                {
                    title: "Szenario 3: Skript als Modul und CLI-Tool nutzen",
                    code: `# Datei: datenbank_tool.py\n\ndef datenbank_verbinden(db_name):\n    print(f"Verbunden mit {db_name}")\n    \n# Dieser Block wird IGNORIERT, wenn eine andere Datei macht:\n# import datenbank_tool\n# Er läuft nur, wenn man im Terminal tippt: python datenbank_tool.py\nif __name__ == "__main__":\n    import sys\n    # Liest Argumente aus der Kommandozeile (Terminal)\n    if len(sys.argv) > 1:\n        datenbank_verbinden(sys.argv[1])\n    else:\n        datenbank_verbinden("Standard-DB")`
                }
            ]
        },
        {
            id: "best_practices",
            title: "5. Best Practices & Typische Fehler (Pitfalls)",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-red-600">Gefährliche Anti-Patterns</h3>
                
                <ul class="list-disc pl-5 mb-4 space-y-4 text-gray-700">
                    <li><strong>1. Mutable Default Arguments (Der absolute Klassiker)</strong><br>
                        <em>Das Problem:</em> Default-Parameter (wie eine leere Liste <code>[]</code>) werden in Python genau <strong>einmal</strong> ausgewertet: Wenn die Funktion <code>def</code> vom Interpreter gelesen wird. Verwendet man eine Liste, greifen alle nachfolgenden Aufrufe ohne Argument auf exakt dieselbe Liste im Speicher zu. Die Liste wächst permanent an!<br>
                        <em>Falsch:</em> <code>def füge_user_hinzu(user, liste=[]):</code><br>
                        <em>Richtig:</em> Setze den Default auf <code>None</code>.<br>
                        <pre class="bg-gray-100 p-2 mt-1 rounded text-sm font-mono text-gray-800">def füge_user_hinzu(user, liste=None):\n    if liste is None:\n        liste = []\n    liste.append(user)</pre>
                    </li>
                    <li><strong>2. Wildcard Imports (<code>from modul import *</code>)</strong><br>
                        <em>Das Problem:</em> Dies verschmutzt deinen globalen Namespace komplett. Du weißt nicht, welche Variablen und Funktionen importiert wurden. Es kommt zu Überschreibungen ohne Vorwarnung.<br>
                        <em>Richtig:</em> Importiere immer explizit: <code>from modul import berechne_wert</code> oder importiere das Modul selbst: <code>import modul</code>.
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Performance-Aspekte (Memory & CPU)</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong><code>LOAD_FAST</code> vs. <code>LOAD_GLOBAL</code>:</strong> Aufgrund der LEGB-Regel ist der Zugriff auf lokale Variablen (im Scope der Funktion) in Python drastisch schneller als der Zugriff auf globale Variablen. CPython nutzt für lokale Variablen den Bytecode-Befehl <code>LOAD_FAST</code>, der über einen Index in einem Array zugreift (Komplexität $O(1)$). Globale Variablen nutzen <code>LOAD_GLOBAL</code>, was eine teure Dictionary-Suche ($O(1)$ amortisiert, aber mit Overhead) nach sich zieht.</li>
                    <li><strong>Micro-Optimierung in Schleifen:</strong> Wenn eine Funktion aus einem Modul (z.B. <code>math.sqrt</code>) innerhalb einer großen <code>while</code>-Schleife millionenfach aufgerufen wird, weise sie vorher einer lokalen Variablen zu: <code>lokale_wurzel = math.sqrt</code>. Dies zwingt den Interpreter, <code>LOAD_FAST</code> statt <code>LOAD_GLOBAL</code> zu nutzen und spart signifikant CPU-Zeit.</li>
                </ul>
            `
        }
    ]
};

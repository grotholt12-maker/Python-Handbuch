export const dataOop = {
    category: "4. Objektorientierung (OOP)",
    icon: "fa-cubes",
    chapters: [
        {
            id: "konzept",
            title: "1. Komplette Erklärung (Das Konzept)",
            content: `
                <h3 class="text-xl font-bold mb-2 text-blue-700">Was genau ist Objektorientierte Programmierung (OOP)?</h3>
                <p class="mb-4 text-gray-700">OOP ist ein Programmierparadigma, das Daten (Zustände) und das Verhalten (Methoden), das auf diesen Daten operiert, in logischen Einheiten – den <strong>Objekten</strong> – bündelt. Eine <strong>Klasse</strong> ist dabei der abstrakte Bauplan, während ein <strong>Objekt (Instanz)</strong> die konkrete Ausprägung dieses Bauplans im Arbeitsspeicher darstellt.</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Welches Problem löst OOP in Python?</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Kapselung (Encapsulation):</strong> Der interne Zustand eines Objekts wird vor direkten Eingriffen von außen geschützt. Komplexe Implementierungsdetails werden hinter einer einfachen öffentlichen API (Schnittstelle) verborgen.</li>
                    <li><strong>Wiederverwendbarkeit (Vererbung):</strong> Gemeinsame Logik muss nicht dupliziert werden. Neue Klassen können die Eigenschaften und Methoden bestehender Klassen erben und spezifisch erweitern (DRY-Prinzip).</li>
                    <li><strong>Polymorphismus:</strong> Unterschiedliche Objekte können auf dieselbe Methoden-Signatur unterschiedlich reagieren (z.B. reagiert ein <code>Vektor</code>-Objekt auf ein <code>+</code> anders als ein <code>Integer</code>).</li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Technischer Hintergrund in CPython:</h3>
                <p class="mb-4 text-gray-700">In Python ist "alles ein Objekt" – auch Klassen selbst! Wenn der Interpreter das Keyword <code>class</code> verarbeitet, erzeugt er im Hintergrund ein Objekt vom Typ <code>type</code> (die Metaklasse). Instanzen einer Klasse besitzen ein internes Dictionary (<code>__dict__</code>), in dem ihre spezifischen Attribute (Instanzvariablen) gespeichert werden. Methoden hingegen werden im Dictionary der Klasse (dem <code>PyTypeObject</code> auf C-Ebene) gespeichert und bei Aufruf über den Descriptor-Mechanismus dynamisch an die Instanz gebunden.</p>
            `
        },
        {
            id: "syntax",
            title: "2. Code-Aufbau und Syntax",
            content: `
                <p class="mb-4 text-gray-700">Das folgende Beispiel demonstriert eine Basisklasse und eine davon abgeleitete Subklasse. Es zeigt Instanziierung, Vererbung, Kapselung über Properties und Methoden-Überschreibung (Polymorphismus).</p>
                
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Zeilenweise Analyse und Ausführungsreihenfolge:</h3>
                <ol class="list-decimal pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>Zeile 1-8 (Basisklasse):</strong> <code>Fahrzeug</code> wird definiert. Die magische Methode <code>__init__</code> initialisiert den Zustand. Das Attribut <code>_geschwindigkeit</code> ist durch den Unterstrich als "protected" markiert (Konvention).</li>
                    <li><strong>Zeile 10-14 (Properties):</strong> Der Dekorator <code>@property</code> macht aus der Methode <code>kmh</code> ein berechnetes Attribut. Der <code>@kmh.setter</code> definiert, was passiert, wenn man <code>obj.kmh = Wert</code> schreibt, und integriert hier eine Validierung (Kapselung).</li>
                    <li><strong>Zeile 17 (Vererbung):</strong> <code>Auto(Fahrzeug)</code> erbt von Fahrzeug.</li>
                    <li><strong>Zeile 18-20 (<code>super()</code>):</strong> Die <code>__init__</code> des Autos überschreibt die der Basisklasse. Um den Code nicht zu duplizieren, ruft <code>super().__init__()</code> die Initialisierung der Elternklasse auf. Danach wird ein Auto-spezifisches Attribut hinzugefügt.</li>
                    <li><strong>Zeile 27-29:</strong> Eine Instanz von <code>Auto</code> wird erstellt (Instanziierung). Das Property <code>kmh</code> wird wie eine normale Variable ausgelesen und gesetzt, wobei intern die Methoden ausgeführt werden.</li>
                </ol>
            `,
            codeBlocks: [
                {
                    title: "Klassen, Vererbung und Properties",
                    code: `class Fahrzeug:
    def __init__(self, marke):
        self.marke = marke
        self._geschwindigkeit = 0  # Protected Attribut (Konvention)
        
    def beschleunigen(self):
        self._geschwindigkeit += 10

    # Getter für Kapselung
    @property
    def kmh(self):
        return self._geschwindigkeit
        
    # Setter mit Validierung
    @kmh.setter
    def kmh(self, wert):
        if wert < 0:
            raise ValueError("Geschwindigkeit kann nicht negativ sein!")
        self._geschwindigkeit = wert

# Vererbung: Auto erbt von Fahrzeug
class Auto(Fahrzeug):
    def __init__(self, marke, raeder=4):
        super().__init__(marke)  # Aufruf der Eltern-__init__
        self.raeder = raeder     # Spezifisches Attribut
        
    def beschleunigen(self):
        # Polymorphismus: Autos beschleunigen schneller
        self._geschwindigkeit += 20

# Instanziierung und Nutzung
mein_auto = Auto("BMW")
mein_auto.beschleunigen()
print(f"{mein_auto.marke} fährt {mein_auto.kmh} km/h") # Greift auf Property zu

mein_auto.kmh = 50 # Nutzt den Setter
print(f"Neue Geschwindigkeit: {mein_auto.kmh} km/h")`
                }
            ]
        },
        {
            id: "keywords",
            title: "3. Detaillierte Keyword-Analyse & Internals",
            content: `
                <div class="space-y-6 text-gray-700">
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2"><code>self</code></h4>
                        <p class="mb-2"><strong>Bedeutung:</strong> Die Referenz auf die aktuelle Instanz der Klasse. Anders als in Java oder C++ (wo <code>this</code> implizit existiert), muss <code>self</code> in Python bei Instanzmethoden immer zwingend als erster Parameter deklariert werden.</p>
                        <p class="mb-2"><strong>Internals:</strong> Wenn du <code>obj.methode(arg)</code> aufrufst, wandelt Python das intern um in <code>Klasse.methode(obj, arg)</code>. Das <code>obj</code> wird also automatisch als <code>self</code> übergeben.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Dekoratoren: <code>@classmethod</code> vs. <code>@staticmethod</code></h4>
                        <p class="mb-2"><strong><code>@classmethod</code>:</strong> Nimmt als ersten Parameter nicht die Instanz (<code>self</code>), sondern die Klasse selbst (Konvention: <code>cls</code>). Perfekt für "Factory-Methoden", die alternative Konstruktoren darstellen.</p>
                        <p class="mb-2"><strong><code>@staticmethod</code>:</strong> Verhält sich wie eine ganz normale Funktion, die aus logischen Gründen in den Namespace der Klasse gepackt wurde. Sie bekommt weder <code>self</code> noch <code>cls</code> übergeben.</p>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Kapselung: <code>_</code> und <code>__</code> (Name Mangling)</h4>
                        <p class="mb-2">Ein einfacher Unterstrich (<code>_attribut</code>) ist nur ein "Gentleman's Agreement" – es bedeutet "Bitte fass mich nicht von außen an", verhindert es aber technisch nicht. Ein doppelter Unterstrich (<code>__attribut</code>) triggert das <strong>Name Mangling</strong>: CPython benennt die Variable intern um in <code>_Klassenname__attribut</code>, um versehentliches Überschreiben in Subklassen (insbesondere bei Mehrfachvererbung) strikt zu verhindern.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Mehrfachvererbung & MRO (Method Resolution Order)</h4>
                        <p class="mb-2">Python unterstützt Multiple Inheritance (Erben von mehreren Klassen gleichzeitig). Die MRO bestimmt die exakte Reihenfolge, in der Basisklassen nach Methoden durchsucht werden. Python nutzt hierfür den <strong>C3-Linearisierungs-Algorithmus</strong>. Die MRO einer Klasse lässt sich jederzeit über das Attribut <code>Klasse.__mro__</code> abfragen. <code>super()</code> navigiert strikt anhand dieser MRO.</p>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold text-gray-900 border-b pb-1 mb-2">Magische Methoden (Dunder Methods) & Operator Overloading</h4>
                        <p class="mb-2">Dunder steht für "Double Underscore". Methoden wie <code>__init__</code> (Konstruktor), <code>__str__</code> (lesbare String-Repräsentation) oder <code>__len__</code> verknüpfen Python-Objekte mit nativen Sprachfeatures. <code>obj + obj2</code> ruft intern <code>obj.__add__(obj2)</code> auf. Auf C-Ebene binden diese Python-Methoden an sogenannte "Slots" im <code>PyTypeObject</code> (z.B. <code>tp_str</code> oder <code>nb_add</code>), was eine extrem effiziente Ausführung ermöglicht.</p>
                    </div>
                </div>
            `
        },
        {
            id: "use_cases",
            title: "4. Praxis-Szenarien (Use Cases)",
            content: `
                <p class="mb-4 text-gray-700">Diese Szenarien illustrieren, wie Objektorientierung komplexe Geschäftslogik elegant und skalierbar strukturiert.</p>
            `,
            codeBlocks: [
                {
                    title: "Szenario 1: Datenmodelle mit Dunder-Methoden (Operator Overloading)",
                    code: `class Vektor2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    # Operator Overloading für "+"
    def __add__(self, other):
        if not isinstance(other, Vektor2D):
            raise TypeError("Kann nur zwei Vektoren addieren.")
        return Vektor2D(self.x + other.x, self.y + other.y)
        
    # Definierte String-Ausgabe (wird von print() genutzt)
    def __str__(self):
        return f"Vektor({self.x}, {self.y})"

v1 = Vektor2D(2, 3)
v2 = Vektor2D(5, 7)
v3 = v1 + v2  # Nutzt __add__
print("Ergebnis der Vektoraddition:", v3)`
                },
                {
                    title: "Szenario 2: Factory-Pattern mit @classmethod",
                    code: `class Mitarbeiter:
    def __init__(self, vorname, nachname):
        self.vorname = vorname
        self.nachname = nachname
        
    # Alternativer Konstruktor (Factory)
    @classmethod
    def from_csv_string(cls, csv_string):
        # cls ist hier die Klasse 'Mitarbeiter'
        vorname, nachname = csv_string.split(",")
        return cls(vorname.strip(), nachname.strip())

# Statt __init__ manuell aufzurufen, nutzen wir die Factory
neuer_mitarbeiter = Mitarbeiter.from_csv_string("Hans, Gruber")
print("Importiert:", neuer_mitarbeiter.vorname, neuer_mitarbeiter.nachname)`
                },
                {
                    title: "Szenario 3: Kapselung & Validierung (Banking API)",
                    code: `class BankKonto:
    def __init__(self, inhaber, startguthaben):
        self.inhaber = inhaber
        # Echtes Private-Attribut (Name Mangling)
        self.__guthaben = startguthaben 
        
    @property
    def guthaben(self):
        return self.__guthaben
        
    def abheben(self, betrag):
        if betrag <= 0:
            raise ValueError("Betrag muss positiv sein.")
        if betrag > self.__guthaben:
            raise ValueError("Deckung nicht ausreichend!")
        self.__guthaben -= betrag
        return betrag

konto = BankKonto("Alice", 1000)
konto.abheben(200)
print(f"Aktuelles Guthaben von {konto.inhaber}: {konto.guthaben}€")
# print(konto.__guthaben) -> Würde einen AttributeError werfen!`
                }
            ]
        },
        {
            id: "best_practices",
            title: "5. Best Practices & Typische Fehler (Pitfalls)",
            content: `
                <h3 class="text-xl font-bold mt-4 mb-2 text-red-600">Architektur-Fehler & Anti-Patterns</h3>
                
                <ul class="list-disc pl-5 mb-4 space-y-4 text-gray-700">
                    <li><strong>1. Zu tiefe Vererbungshierarchien (Deep Inheritance)</strong><br>
                        <em>Das Problem:</em> Ein "God Object", das von 5 Ebenen an abstrakten Klassen erbt, wird unwartbar. Die MRO wird unübersichtlich und das Debugging wird zur Hölle.<br>
                        <em>Die Lösung:</em> <strong>Composition over Inheritance</strong> (Komposition vor Vererbung). Bündle Funktionalität in separaten, eigenständigen Klassen und weise sie als Attribute zu (z.B. ein <code>Auto</code> hat einen <code>Motor</code>, statt <code>Auto(Motor)</code> zu erben).
                    </li>
                    <li><strong>2. Modifikation von Klassenattributen über Instanzen</strong><br>
                        <em>Das Problem:</em> Wenn ein Attribut auf Klassen-Ebene definiert wird (außerhalb von <code>__init__</code>), teilen sich alle Instanzen diese Referenz. Wenn das Attribut mutable ist (z.B. eine Liste) und eine Instanz daran etwas anhängt, ändert sich der Wert für <em>alle</em> Objekte dieser Klasse! Modifiziere Instanz-Zustände immer nur über <code>self</code> in der <code>__init__</code>.
                    </li>
                </ul>

                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Performance-Aspekte (Memory & CPU)</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>RAM-Optimierung mit <code>__slots__</code>:</strong> Standardmäßig besitzt jedes Python-Objekt ein dynamisches Dictionary (<code>__dict__</code>), um Attribute zur Laufzeit flexibel aufzunehmen. Das kostet extrem viel Speicher-Overhead (oft Hunderte Bytes pro Instanz). Wenn du Millionen von kleinen Daten-Objekten (z.B. GPS-Punkte) instanziierst, definiere <code>__slots__ = ['lat', 'lon']</code> in der Klasse. Dies verbietet die dynamische Attribut-Erstellung, deaktiviert das <code>__dict__</code> und verringert den Speicherbedarf der Instanzen drastisch (um bis zu 50-60%).</li>
                    <li><strong>Overhead beim Methodenaufruf:</strong> In Python ist der Aufruf einer Instanzmethode teurer als der Aufruf einer einfachen Funktion, da zuerst das Attribut im <code>__dict__</code> der Instanz, dann in der Klasse und in der MRO gesucht wird, woraufhin der Descriptor-Mechanismus die Methode bindet. In ultra-Performance-kritischen, engen Schleifen kann es sinnvoll sein, die referenzierte Methode (z.B. <code>append_func = my_list.append</code>) vor der Schleife lokal zu binden, um den mehrfachen C-Level-Lookup pro Iteration zu sparen.</li>
                </ul>
            `
        }
    ]
};

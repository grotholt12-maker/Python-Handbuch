export const dataOop = {
    category: "3. Objektorientierung (OOP)",
    icon: "fa-cubes",
    chapters: [
        {
            id: "klassen_instanzen",
            title: "Klassen & Instanzen",
            content: `
                <p class="mb-4">In Python ist fast alles ein Objekt. Objektorientierung hilft dir, Code so zu strukturieren, wie Dinge in der echten Welt funktionieren.</p>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Die Klasse (Class):</strong> Das ist nur der <em>Bauplan</em>. Wie die Blaupause für ein Auto. Sie existiert nicht physisch, sondern beschreibt nur, was das Auto haben soll (Räder, Farbe) und was es kann (fahren, bremsen).</li>
                    <li><strong>Die Instanz (Object):</strong> Das ist das <em>fertige Auto</em>, das aus der Fabrik rollt. Du kannst aus einem Bauplan hunderte verschiedene Autos (Instanzen) bauen – z.B. ein rotes und ein blaues.</li>
                </ul>
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Was zum Teufel ist "self"?</h3>
                <p class="mb-4">Wenn ein Objekt etwas mit sich selbst machen will (z.B. "Auto, ändere <em>deine</em> Farbe"), muss es wissen, dass es sich selbst meint und nicht irgendein anderes Auto. <br><code>self</code> ist das Namensschild des Objekts. Es bedeutet übersetzt einfach: <strong>"Mein eigenes..."</strong> (z.B. <code>self.farbe = "rot"</code> bedeutet "Meine eigene Farbe ist rot").</p>
            `,
            code: `# 1. Der Bauplan (Die Klasse)
class Hund:
    # Die __init__ Funktion wird automatisch aufgerufen, 
    # wenn ein neuer Hund geboren (erstellt) wird.
    def __init__(self, name, alter):
        self.name = name    # "Mein eigener Name ist..."
        self.alter = alter  # "Mein eigenes Alter ist..."
        
    # Eine Fähigkeit des Hundes (Methode)
    def bellen(self):
        print(self.name + " sagt: Wuff! Ich bin " + str(self.alter) + " Jahre alt.")

# 2. Die Instanzen (Echte Hunde erschaffen)
hund_1 = Hund("Bello", 3)
hund_2 = Hund("Luna", 5)

# 3. Die Hunde benutzen
hund_1.bellen()
hund_2.bellen()`
        }
    ]
};

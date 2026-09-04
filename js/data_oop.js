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
                    <li><strong>Die Klasse (Class):</strong> Der <em>Bauplan</em>. Beschreibt, was das Objekt haben soll und was es kann.</li>
                    <li><strong>Die Instanz (Object):</strong> Das fertige Objekt, das aus dem Bauplan erstellt wurde.</li>
                </ul>
                <h3 class="text-xl font-bold mt-6 mb-2 text-blue-700">Was ist "self"?</h3>
                <p class="mb-4"><code>self</code> ist das Namensschild des Objekts. Es bedeutet übersetzt einfach: <strong>"Mein eigenes..."</strong> (z.B. <code>self.farbe = "rot"</code> bedeutet "Meine eigene Farbe ist rot").</p>
            `,
            codeBlocks: [
                {
                    title: "Klassenbauplan und Instanzierung",
                    code: `class Hund:\n    # Die __init__ Funktion wird bei der Erstellung aufgerufen\n    def __init__(self, name, alter):\n        self.name = name    # "Mein eigener Name"\n        self.alter = alter  # "Mein eigenes Alter"\n        \n    def bellen(self):\n        print(self.name + " sagt: Wuff! Ich bin " + str(self.alter))\n\n# Instanzen erschaffen und nutzen\nhund_1 = Hund("Bello", 3)\nhund_2 = Hund("Luna", 5)\n\nhund_1.bellen()\nhund_2.bellen()`
                }
            ]
        }
    ]
};

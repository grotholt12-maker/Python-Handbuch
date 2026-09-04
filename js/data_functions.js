export const dataFunctions = {
    category: "5. Funktionen",
    icon: "fa-wrench",
    chapters: [
        {
            id: "def_return",
            title: "Funktionen (def & return)",
            content: `
                <p class="mb-4">Eine Funktion ist ein benannter Code-Block, der eine bestimmte Aufgabe erfüllt. Du schreibst den Code einmal und kannst ihn beliebig oft aufrufen.</p>
                <ul class="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                    <li>Definiert mit dem Schlüsselwort <code>def</code>.</li>
                    <li><code>return</code> gibt das Ergebnis der Funktion an den Aufrufer zurück. Sobald <code>return</code> erreicht wird, endet die Funktion sofort.</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Einfache Funktion erstellen",
                    code: `def begruessung(name):\n    print("Hallo " + name + ", willkommen zurück!")\n\n# Funktion aufrufen\nbegruessung("Alice")\nbegruessung("Bob")`
                },
                {
                    title: "2. Funktionen mit Return-Wert",
                    code: `def addiere(a, b):\n    ergebnis = a + b\n    return ergebnis\n\n# Der Wert aus 'return' wird in der Variable gespeichert\nsumme = addiere(10, 5)\nprint("Die Summe ist:", summe)`
                }
            ]
        },
        {
            id: "parameters",
            title: "Erweiterte Parameter",
            content: `
                <p class="mb-4">Funktionen können sehr flexibel gestaltet werden, indem man Standardwerte für Parameter festlegt.</p>
            `,
            codeBlocks: [
                {
                    title: "Default-Parameter",
                    code: `# 'nachricht' hat einen Standardwert, falls nichts übergeben wird\ndef chat_nachricht(user, nachricht="ist dem Spiel beigetreten."):\n    print(user + " " + nachricht)\n\nchat_nachricht("Gandalf")\nchat_nachricht("Frodo", "hat den Ring gefunden!")`
                }
            ]
        }
    ]
};

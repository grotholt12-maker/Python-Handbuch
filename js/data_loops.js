export const dataLoops = {
    category: "2. Kontrollstrukturen",
    icon: "fa-rotate-right",
    chapters: [
        {
            id: "for_loops",
            title: "Die For-Schleife",
            content: `
                <p class="mb-4">Mit Schleifen wiederholst du Code. Die <span class="keyword-tooltip">for<span class="tooltip-text">Führt den eingerückten Code für jedes Element in einer Sammlung aus.</span></span>-Schleife nutzt du, wenn du vorher weißt, wie oft etwas wiederholt werden soll.</p>
            `,
            code: `for zahl in range(5):\n    print("Dies ist Durchlauf Nummer:", zahl)`
        }
    ]
};

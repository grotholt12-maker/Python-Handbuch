export const dataErrors = {
    category: "6. Fehlerbehandlung",
    icon: "fa-triangle-exclamation",
    chapters: [
        {
            id: "try_except",
            title: "Try & Except",
            content: `
                <p class="mb-4">Fehler passieren ständig. Mit <code>try</code> und <code>except</code> fängst du diese Fehler elegant ab, ohne dass dein gesamtes Programm abstürzt (Crash).</p>
                <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                    <li><strong>try:</strong> Hier schreibst du den Code hinein, der potenziell schiefgehen könnte.</li>
                    <li><strong>except:</strong> Dieser Block wird <em>nur</em> ausgeführt, wenn im <code>try</code>-Block ein Fehler aufgetreten ist. Er ist dein Sicherheitsnetz.</li>
                    <li><strong>finally (optional):</strong> Wird am Ende immer ausgeführt, egal ob ein Fehler auftrat oder nicht (gut zum Aufräumen).</li>
                </ul>
            `,
            codeBlocks: [
                {
                    title: "1. Einfacher Try-Except Block",
                    code: `try:\n    # Das wird einen Fehler werfen (Teilen durch 0)\n    ergebnis = 10 / 0\n    print(ergebnis)\nexcept:\n    print("Ups! Du kannst nicht durch Null teilen.")\n\nprint("Das Programm läuft ganz normal weiter!")`
                },
                {
                    title: "2. Gezielte Fehler abfangen",
                    code: `text_eingabe = "Keine Zahl"\n\ntry:\n    # Versucht, Text in eine Zahl umzuwandeln\n    zahl = int(text_eingabe)\n    print(zahl)\nexcept ValueError:\n    # Reagiert speziell auf Wert-Fehler\n    print("Fehler: Das war keine gültige Zahl!")\nexcept ZeroDivisionError:\n    print("Fehler: Division durch Null!")`
                }
            ]
        }
    ]
};

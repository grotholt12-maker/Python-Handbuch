// Importiere unsere Daten-Module
import { dataBasics } from './data_basics.js';
import { dataLoops } from './data_loops.js';
import { dataoop } from './data_oop.js';

// Alle Module in einer Liste sammeln
const allModules = [dataBasics, dataLoops, dataoop];

// UI Elemente referenzieren
const nav = document.getElementById('sidebar-nav');
const contentArea = document.getElementById('chapter-content');
const btnHandbook = document.getElementById('btn-handbook');
const btnSandbox = document.getElementById('btn-sandbox');
const viewHandbook = document.getElementById('view-handbook');
const viewSandbox = document.getElementById('view-sandbox');

// 1. Navigation aufbauen
function renderNavigation() {
    allModules.forEach(mod => {
        // Kategorie-Header
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `<h3 class="font-bold text-gray-700 mb-2 flex items-center"><i class="fa-solid ${mod.icon} mr-2 text-blue-500"></i>${mod.category}</h3>`;
        
        // Kapitel-Liste
        const ul = document.createElement('ul');
        ul.className = "space-y-1 pl-6 mb-4";
        
        mod.chapters.forEach(chapter => {
            const li = document.createElement('li');
            li.innerHTML = `<button class="text-gray-600 hover:text-blue-600 text-sm text-left w-full py-1" data-id="${chapter.id}">${chapter.title}</button>`;
            
            li.querySelector('button').addEventListener('click', () => {
                renderChapter(chapter);
            });
            ul.appendChild(li);
        });
        
        categoryDiv.appendChild(ul);
        nav.appendChild(categoryDiv);
    });
}
// 2. Kapitel im Hauptbereich anzeigen (NEU: Mit Inline-Sandboxes)
function renderChapter(chapter) {
    let contentHtml = `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">${chapter.title}</h2>
        <div class="prose max-w-none text-gray-700">${chapter.content}</div>
    `;

    // Wenn das Kapitel aufgeteilte Code-Blöcke hat, baue für jeden eine Sandbox
    if (chapter.codeBlocks) {
        chapter.codeBlocks.forEach((block, index) => {
            // Berechne die Höhe der Textarea basierend auf den Zeilen
            const lineCount = block.code.split('\n').length;
            
            contentHtml += `
                <div class="mt-8 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
                    <div class="flex justify-between items-center bg-gray-800 text-gray-300 text-sm py-2 px-4">
                        <span class="font-bold text-blue-400">${block.title}</span>
                        <button class="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded text-xs font-bold transition flex items-center gap-1 run-inline-btn" data-index="${index}">
                            <i class="fa-solid fa-play"></i> Ausführen
                        </button>
                    </div>
                    <textarea id="editor-${index}" class="w-full bg-[#1e1e1e] text-green-400 font-mono p-4 border-none focus:outline-none resize-y" spellcheck="false" rows="${lineCount}">${block.code}</textarea>
                    <div class="bg-black border-t border-gray-700 flex flex-col hidden" id="console-container-${index}">
                        <div class="bg-gray-900 text-gray-500 text-[10px] py-1 px-3 font-mono uppercase tracking-wider">Output Konsole</div>
                        <pre id="output-${index}" class="text-gray-300 font-mono p-3 overflow-y-auto text-sm"></pre>
                    </div>
                </div>
            `;
        });
    }

    contentArea.innerHTML = contentHtml;

    // Event Listener für jeden einzelnen "Ausführen"-Button
    if (chapter.codeBlocks) {
        const runButtons = contentArea.querySelectorAll('.run-inline-btn');
        runButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                const code = document.getElementById(`editor-${index}`).value;
                const consoleContainer = document.getElementById(`console-container-${index}`);
                const output = document.getElementById(`output-${index}`);
                
                // Konsole sichtbar machen und Lade-Text anzeigen
                consoleContainer.classList.remove('hidden');
                output.innerHTML = "Lade...\n";
                
                // Simuliere Python Ausführung (wie vorher in der großen Sandbox)
                setTimeout(() => {
                    let result = "";
                    if(code.includes('print')) {
                        const matches = code.match(/print\((.*?)\)/g);
                        if(matches) {
                            matches.forEach(m => {
                                // Bereinigt den Print-Befehl für die simple Simulation
                                result += m.replace('print(', '').replace(/\)$/, '').replace(/"/g, '').replace(/'/g, '') + "\n";
                            });
                        }
                    } else {
                        result += "Keine print-Anweisung gefunden.\n";
                    }
                    output.innerHTML = result + "\n[Prozess beendet]";
                }, 300);
            });
        });
    }
}

// 3. Ansichten wechseln (Handbuch <-> Sandbox)
function switchView(view) {
    if(view === 'handbook') {
        viewHandbook.classList.remove('hidden');
        viewSandbox.classList.add('hidden');
        btnHandbook.classList.replace('bg-gray-700', 'bg-blue-700');
        btnSandbox.classList.replace('bg-blue-700', 'bg-gray-700');
    } else {
        viewHandbook.classList.add('hidden');
        viewSandbox.classList.remove('hidden');
        btnSandbox.classList.replace('bg-gray-700', 'bg-blue-700');
        btnHandbook.classList.replace('bg-blue-700', 'bg-gray-700');
    }
}

btnHandbook.addEventListener('click', () => switchView('handbook'));
btnSandbox.addEventListener('click', () => switchView('sandbox'));

// 4. Sandbox Mock-Ausführung (Simuliert Python im Browser)
document.getElementById('run-code').addEventListener('click', () => {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('console-output');
    output.innerHTML = "Ausführen...\n";
    
    setTimeout(() => {
        if(code.includes('print')) {
            const matches = code.match(/print\((.*?)\)/g);
            if(matches) {
                matches.forEach(m => {
                    const text = m.replace('print(', '').replace(')', '').replace(/"/g, '').replace(/'/g, '');
                    output.innerHTML += text + "\n";
                });
            }
        } else {
            output.innerHTML += "Keine print-Anweisung gefunden.\n(Hinweis: Dies ist eine Simulation. Für komplexe Skripte nutze das echte Terminal.)";
        }
        output.innerHTML += "\n[Prozess beendet]";
    }, 500);
});

// App starten
renderNavigation();

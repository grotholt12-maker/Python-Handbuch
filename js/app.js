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

// 2. Kapitel im Hauptbereich anzeigen
function renderChapter(chapter) {
    contentArea.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">${chapter.title}</h2>
        <div class="prose max-w-none text-gray-700">${chapter.content}</div>
        <div class="mt-6">
            <div class="flex justify-between items-center bg-gray-800 text-gray-400 text-xs py-2 px-4 rounded-t-lg">
                <span>Beispiel-Code</span>
                <button class="hover:text-white transition copy-btn" data-code="${encodeURIComponent(chapter.code)}"><i class="fa-solid fa-laptop-code mr-1"></i> In Sandbox testen</button>
            </div>
            <pre class="code-block-container rounded-t-none mt-0"><code>${chapter.code}</code></pre>
        </div>
    `;

    // Button Event Listener um Code in die Sandbox zu laden
    contentArea.querySelector('.copy-btn').addEventListener('click', (e) => {
        const code = decodeURIComponent(e.target.dataset.code || e.target.parentElement.dataset.code);
        document.getElementById('code-editor').value = code;
        switchView('sandbox');
    });
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

/**
 * Build script — Assbane Therapy
 *
 * Pour les plateformes (Hostinger, Vercel, Netlify, etc.) qui attendent un
 * dossier de sortie après un build : on copie simplement les fichiers
 * statiques dans `dist/`. Aucun bundler, aucune transformation.
 */

const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const OUT = path.join(SRC, 'dist');

const STATIC_FILES = [
    'index.html',
    'services.html',
    'avis.html',
    'contact.html',
    'style.css',
    'main.js'
];

const STATIC_DIRS = ['assets'];

function rmrf(target) {
    if (!fs.existsSync(target)) return;
    if (fs.rmSync) {
        fs.rmSync(target, { recursive: true, force: true });
    } else {
        fs.rmdirSync(target, { recursive: true });
    }
}

function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const s = path.join(src, entry.name);
        const d = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(s, d);
        } else if (entry.isFile()) {
            fs.copyFileSync(s, d);
        }
    }
}

console.log('▸ Build : nettoyage du dossier dist/');
rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });

console.log('▸ Build : copie des fichiers statiques');
for (const file of STATIC_FILES) {
    const src = path.join(SRC, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(OUT, file));
        console.log(`  ✓ ${file}`);
    } else {
        console.warn(`  ⚠ fichier manquant : ${file}`);
    }
}

for (const dir of STATIC_DIRS) {
    const src = path.join(SRC, dir);
    if (fs.existsSync(src)) {
        copyDir(src, path.join(OUT, dir));
        console.log(`  ✓ ${dir}/`);
    }
}

console.log('▸ Build terminé →', OUT);

const fs = require('fs');
let content = fs.readFileSync('app/Courses/page.ts', 'utf8');

// fix weird spacing in tags
content = content.replace(/< \/a>/g, '</a>');
content = content.replace(/< \/p>/g, '</p>');
content = content.replace(/<\/div >/g, '</div>');
content = content.replace(/<\/a >/g, '</a>');
content = content.replace(/<\/span >/g, '</span>');
content = content.replace(/aria - label/g, 'aria-label');
content = content.replace(/href = "/g, 'href="');

// class -> className
content = content.replace(/class="/g, 'className="');

// style conversions
content = content.replace(/style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"/g, 'style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}');

// SVG attributes
content = content.replace(/stroke-width/g, 'strokeWidth');
content = content.replace(/stroke-linecap/g, 'strokeLinecap');
content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');

// fix broken links from copy paste
content = content.replace(/href=" \/ flagship - program"/g, 'href="/flagship-program"');

// Close img tags
content = content.replace(/<img(.*?)>/g, (match, p1) => {
    if (p1.trim().endsWith('/')) return match;
    return `<img${p1} />`;
});
// Close path tags
content = content.replace(/<path(.*?)><\/path>/g, '<path$1 />');
content = content.replace(/<path(.*?)>/g, (match, p1) => {
    // If it's already self-closing or has a closing tag, don't double close? We handled </path> above.
    if (p1.trim().endsWith('/')) return match;
    // but what if it's <path d="..."> ? We replaced </path> with empty string implicitly?
    // Let's just restore </path> for now or make it self closing.
    return match;
});

// Since we replaced <path...></path> with <path.../>, any remaining <path> without </path> needs />.
// Actually just replace <path(.*?)><\/path> with <path$1 /> is perfect.

// Wrap in component
content = `export default function CoursesPage() {\n  return (\n    ` + content + `\n  );\n}\n`;

fs.writeFileSync('app/Courses/page.tsx', content);

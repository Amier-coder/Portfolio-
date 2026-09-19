const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Background
  page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(0.98, 0.98, 0.99) });

  // Header bar
  page.drawRectangle({ x: 0, y: height - 120, width, height: 120, color: rgb(0.1, 0.1, 0.2) });

  // Name
  page.drawText('Ameer Hamza', {
    x: 60, y: height - 70, size: 28, font: fontBold, color: rgb(1, 1, 1)
  });

  // Title
  page.drawText('Full-Stack Web Developer', {
    x: 60, y: height - 100, size: 14, font, color: rgb(0.7, 0.8, 1)
  });

  // Contact info
  const contacts = [
    'Pakistan • PKT (GMT+5)',
    'ameerhamza@example.com',
    '+92 313 6426280',
    'WhatsApp: +92 313 6426280',
    'GitHub: github.com/Amier-coder',
    'LinkedIn: linkedin.com/in/ameer-hamza-551566382'
  ];
  contacts.forEach((c, i) => {
    page.drawText(c, { x: 60, y: height - 160 - i * 20, size: 10, font, color: rgb(0.3, 0.3, 0.4) });
  });

  // Sections
  const sections = [
    {
      title: 'PROFESSIONAL SUMMARY',
      body: 'Full-Stack Web Developer with expertise in React, TypeScript, Node.js, and modern web technologies. ' +
            'Passionate about building scalable, performant, and user-centric web applications. ' +
            'Experienced in e-commerce platforms, ERP systems, POS solutions, and custom media players. ' +
            'Strong focus on clean architecture, responsive design, and developer experience.'
    },
    {
      title: 'TECHNICAL SKILLS',
      body: 'Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Redux, Vite\n' +
            'Backend: Node.js, Express, REST APIs, MongoDB, PostgreSQL, Socket.io\n' +
            'Tools: Git, GitHub, Figma, Postman, Electron, Docker\n' +
            'Other: Responsive Design, UI/UX Engineering, Game Development, Media Players'
    },
    {
      title: 'KEY PROJECTS',
      body: '• ERP System — Comprehensive ERP with inventory, procurement, sales, finance, HR, reporting (React, TypeScript, Node.js, PostgreSQL)\n' +
            '• POS System — Modern Point of Sale with barcode scanning, payments, inventory sync, analytics (React, Node.js, MongoDB, Electron)\n' +
            '• eShop / MyShop — E-commerce platforms with cart, checkout, filtering (JavaScript, React)\n' +
            '• Movie Site — Searchable movie discovery app with ratings (JavaScript, API)\n' +
            '• Restaurant Site — Responsive restaurant website with menu & gallery (HTML5, CSS3)\n' +
            '• Custom Video Player — HTML5 video player with custom controls (JavaScript, HTML5)\n' +
            '• Tic Tac Toe — Polished browser game with win detection (JavaScript, Game Logic)\n' +
            '• Login Form UI — Accessible auth form with glassmorphic style (HTML5, CSS3)\n' +
            '• Company Demo — Corporate landing page with hero, services, contact (HTML5, CSS3)'
    },
    {
      title: 'EXPERIENCE',
      body: 'Freelance & Personal Projects — 2023–Present\n' +
            'Building and shipping web applications end-to-end — from UI design to API and database — for clients and personal products.\n\n' +
            'Frontend Developer — Personal & Open-Source Work — 2022–2023\n' +
            'Focused on mastering modern JavaScript and component-driven UI development through hands-on projects.'
    },
    {
      title: 'EDUCATION',
      body: 'Bachelor of Software Engineering / Information Technology\nUniversity of Education / University of Sargodha, Pakistan'
    }
  ];

  let y = height - 320;
  sections.forEach(sec => {
    page.drawText(sec.title, { x: 60, y, size: 13, font: fontBold, color: rgb(0.1, 0.1, 0.2) });
    y -= 22;

    const lines = wrapText(sec.body, font, 10, width - 120);
    lines.forEach(line => {
      page.drawText(line, { x: 60, y, size: 10, font, color: rgb(0.25, 0.25, 0.3) });
      y -= 16;
    });
    y -= 10;
  });

  page.drawText('— Generated for portfolio —', {
    x: 60, y: 40, size: 9, font, color: rgb(0.5, 0.5, 0.6)
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/resume.pdf', pdfBytes);
  console.log('resume.pdf created successfully');
}

function wrapText(text, font, size, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  words.forEach(w => {
    const test = current + (current ? ' ' : '') + w;
    const wWidth = font.widthOfTextAtSize(test, size);
    if (wWidth > maxWidth && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);
  return lines;
}

createResume().catch(console.error);
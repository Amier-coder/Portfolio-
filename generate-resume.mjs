import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter size: 612 x 792
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Background clean light
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: rgb(0.99, 0.99, 1.0),
  });

  // Top modern dark slate-navy banner
  const headerHeight = 110;
  page.drawRectangle({
    x: 0,
    y: height - headerHeight,
    width,
    height: headerHeight,
    color: rgb(0.06, 0.08, 0.15),
  });

  // Accent gradient line under header
  page.drawRectangle({
    x: 0,
    y: height - headerHeight - 3,
    width,
    height: 3,
    color: rgb(0.48, 0.36, 1.0), // primary violet
  });

  // Name
  page.drawText('AMEER HAMZA', {
    x: 48,
    y: height - 48,
    size: 26,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Subtitle / Designation
  page.drawText('WEB DEVELOPER | FULL STACK & FRONTEND', {
    x: 48,
    y: height - 70,
    size: 11,
    font: fontBold,
    color: rgb(0.5, 0.78, 1.0),
  });

  // Contact line in header
  const contactLine = 'Phone: 03136426280  •  Email: ameerhamza031364@gmail.com  •  Address: Azizia Town, Gujranwala';
  page.drawText(contactLine, {
    x: 48,
    y: height - 92,
    size: 9.5,
    font: font,
    color: rgb(0.85, 0.88, 0.95),
  });

  let currentY = height - headerHeight - 24;
  const leftX = 48;
  const contentWidth = width - 96;

  function drawSectionTitle(title) {
    page.drawText(title, {
      x: leftX,
      y: currentY,
      size: 11,
      font: fontBold,
      color: rgb(0.12, 0.15, 0.28),
    });
    // underline
    page.drawRectangle({
      x: leftX,
      y: currentY - 4,
      width: contentWidth,
      height: 1,
      color: rgb(0.8, 0.82, 0.88),
    });
    page.drawRectangle({
      x: leftX,
      y: currentY - 4,
      width: 45,
      height: 1.5,
      color: rgb(0.48, 0.36, 1.0),
    });
    currentY -= 17;
  }

  function drawWrappedText(text, fontSize = 9, fontToUse = font, color = rgb(0.2, 0.22, 0.28), lineHeight = 12) {
    const lines = wrapText(text, fontToUse, fontSize, contentWidth);
    lines.forEach((line) => {
      page.drawText(line, {
        x: leftX,
        y: currentY,
        size: fontSize,
        font: fontToUse,
        color,
      });
      currentY -= lineHeight;
    });
  }

  // 1. PROFILE
  drawSectionTitle('PROFILE SUMMARY');
  drawWrappedText(
    'Passionate Frontend & Full Stack Developer with expertise in React.js, Next.js, and modern JavaScript. Proven experience building responsive, scalable enterprise web applications using HTML5, CSS3, Tailwind CSS, Bootstrap, Redux, and REST APIs. Skilled in backend integration with Laravel and MySQL. Dedicated to clean, maintainable code, role-based security, query optimization, and collaborative teamwork.',
    9,
    font,
    rgb(0.22, 0.24, 0.3),
    12.5
  );
  currentY -= 7;

  // 2. SKILLS
  drawSectionTitle('TECHNICAL SKILLS & COMPETENCIES');
  const skillsList = [
    '• Frontend: React.js, Next.js, Redux.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, TypeScript',
    '• Backend & DB: Laravel, MySQL, RESTful APIs, Node.js, MongoDB, Express.js, Role-Based Access Control (RBAC)',
    '• Tools & Workflow: Git, GitHub, Postman, Vite, Figma, Component-Driven Architecture, Performance Optimization',
  ];
  skillsList.forEach((s) => {
    page.drawText(s, {
      x: leftX,
      y: currentY,
      size: 8.5,
      font: font,
      color: rgb(0.18, 0.2, 0.25),
    });
    currentY -= 12;
  });
  currentY -= 7;

  // 3. WORK EXPERIENCE
  drawSectionTitle('WORK EXPERIENCE');

  // Adroit light Solutions
  page.drawText('Adroit light Solutions', {
    x: leftX,
    y: currentY,
    size: 10,
    font: fontBold,
    color: rgb(0.1, 0.12, 0.2),
  });

  page.drawText('02/2026 – Present', {
    x: width - 48 - fontBold.widthOfTextAtSize('02/2026 – Present', 9),
    y: currentY,
    size: 9,
    font: fontBold,
    color: rgb(0.48, 0.36, 1.0),
  });
  currentY -= 13;

  page.drawText('Full Stack Developer  |  Enterprise Software Systems', {
    x: leftX,
    y: currentY,
    size: 9,
    font: fontOblique,
    color: rgb(0.35, 0.38, 0.45),
  });
  currentY -= 14;

  // ERP System
  page.drawText('ERP System (Core Operations & Business Modules)', {
    x: leftX + 8,
    y: currentY,
    size: 9,
    font: fontBold,
    color: rgb(0.15, 0.18, 0.28),
  });
  currentY -= 11;
  const erpDesc =
    'Developed and maintained a comprehensive ERP system to streamline core business operations, covering inventory, sales, purchasing, accounts, and reporting modules. Built responsive, reusable interfaces using React.js and Redux, and developed secure RESTful APIs with Laravel and MySQL. Implemented role-based access control, data validation, and query optimization.';
  const erpLines = wrapText(erpDesc, font, 8.5, contentWidth - 12);
  erpLines.forEach((l) => {
    page.drawText(l, { x: leftX + 8, y: currentY, size: 8.5, font, color: rgb(0.25, 0.27, 0.32) });
    currentY -= 11.5;
  });
  currentY -= 3;

  // POS System
  page.drawText('POS System (Point of Sale & Stock Management)', {
    x: leftX + 8,
    y: currentY,
    size: 9,
    font: fontBold,
    color: rgb(0.15, 0.18, 0.28),
  });
  currentY -= 11;
  const posDesc =
    'Built a Point of Sale (POS) system for fast, accurate retail billing and stock management. Implemented product search, cart and checkout flows, invoice generation, discounts, inventory tracking, and daily sales reports. Integrated a responsive React.js frontend with REST APIs and MySQL database.';
  const posLines = wrapText(posDesc, font, 8.5, contentWidth - 12);
  posLines.forEach((l) => {
    page.drawText(l, { x: leftX + 8, y: currentY, size: 8.5, font, color: rgb(0.25, 0.27, 0.32) });
    currentY -= 11.5;
  });
  currentY -= 3;

  // The PARA
  page.drawText('The PARA Platform', {
    x: leftX + 8,
    y: currentY,
    size: 9,
    font: fontBold,
    color: rgb(0.15, 0.18, 0.28),
  });
  currentY -= 11;
  const paraDesc =
    'Contributed as a Full Stack Developer to The PARA platform, delivering responsive user interfaces and integrating REST APIs with backend services. Focused on clean, maintainable code, performance optimization, and cross-device consistency.';
  const paraLines = wrapText(paraDesc, font, 8.5, contentWidth - 12);
  paraLines.forEach((l) => {
    page.drawText(l, { x: leftX + 8, y: currentY, size: 8.5, font, color: rgb(0.25, 0.27, 0.32) });
    currentY -= 11.5;
  });
  currentY -= 7;

  // 4. EDUCATION
  drawSectionTitle('EDUCATION');

  // Virtual University
  page.drawText('Bachelor in Business & Information Technology (BBIT)', {
    x: leftX,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: rgb(0.12, 0.15, 0.25),
  });
  page.drawText('In Progress', {
    x: width - 48 - fontBold.widthOfTextAtSize('In Progress', 9),
    y: currentY,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.6, 0.35),
  });
  currentY -= 11.5;

  page.drawText('Virtual University  •  Focus on Software Engineering, Information Systems & Web Architecture', {
    x: leftX,
    y: currentY,
    size: 8.5,
    font,
    color: rgb(0.35, 0.38, 0.45),
  });
  currentY -= 14;

  // Punjab College Gujranwala
  page.drawText('FSc Pre-Medical', {
    x: leftX,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: rgb(0.12, 0.15, 0.25),
  });
  page.drawText('Completed', {
    x: width - 48 - font.widthOfTextAtSize('Completed', 9),
    y: currentY,
    size: 9,
    font,
    color: rgb(0.35, 0.38, 0.45),
  });
  currentY -= 11.5;

  page.drawText('Punjab College Gujranwala  •  Strong analytical foundation and scientific methodology', {
    x: leftX,
    y: currentY,
    size: 8.5,
    font,
    color: rgb(0.35, 0.38, 0.45),
  });
  currentY -= 16;

  // 5. LANGUAGES & LINKS
  drawSectionTitle('LANGUAGES & LINKS');

  const langText = '• Languages: English (Fluent), Urdu (Good / Native)';
  const linkText = '• Online Portfolios: GitHub: github.com/Amier-coder  •  LinkedIn: linkedin.com/in/ameer-hamza-551566382';

  page.drawText(langText, {
    x: leftX,
    y: currentY,
    size: 8.5,
    font,
    color: rgb(0.2, 0.22, 0.28),
  });
  currentY -= 12;

  page.drawText(linkText, {
    x: leftX,
    y: currentY,
    size: 8.5,
    font,
    color: rgb(0.2, 0.22, 0.28),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/resume.pdf', pdfBytes);
  console.log('public/resume.pdf created successfully with verified CV data.');
}

function wrapText(text, font, size, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';

  words.forEach((w) => {
    const test = current ? `${current} ${w}` : w;
    const testWidth = font.widthOfTextAtSize(test, size);
    if (testWidth > maxWidth && current) {
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

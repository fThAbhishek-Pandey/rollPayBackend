import puppeteer from 'puppeteer';

async function generatePDF(htmlTemplate) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/opt/render/.cache/puppeteer/chrome/linux-130.0.6723.116/chrome-linux64/chrome'
  });

  const page = await browser.newPage();
  await page.setContent(htmlTemplate, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ path: 'output.pdf', format: 'A4' }); // Save to check locally

  await browser.close();

  
  return pdf; // Optionally return if you want to further process
}

export default  generatePDF;

const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();
  
  await page.goto('http://localhost:3000');
  
  // Wait for the Portfolio section to be visible
  // It has a h2 with "Портфолио"
  await page.waitForSelector('text=Портфолио');
  
  // Scroll to portfolio section
  await page.evaluate(() => {
    const portfolio = Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes('Портфолио'));
    if (portfolio) portfolio.scrollIntoView();
  });
  
  // Wait a bit for animations
  await page.waitForTimeout(1000);
  
  // Capture screenshot of the sticky part
  await page.screenshot({ path: 'verification/portfolio_section.png' });
  
  // Scroll down more to trigger the horizontal motion
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/portfolio_scroll_1.png' });

  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/portfolio_scroll_2.png' });

  await browser.close();
})();

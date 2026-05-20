const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the site
  await page.goto('http://localhost:3000');
  
  // Wait for content to load
  await page.waitForTimeout(2000);

  // Take screenshot of Hero
  await page.screenshot({ path: path.join(__dirname, '../verification/hero_v2.png'), fullPage: false });

  // Scroll to About section
  await page.evaluate(() => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView();
  });

  // Wait for animations
  await page.waitForTimeout(2000);

  // Take screenshot of About
  await page.screenshot({ path: path.join(__dirname, '../verification/about_section.png'), fullPage: false });

  await browser.close();
})();

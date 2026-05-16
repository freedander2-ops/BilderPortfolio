const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/engineering_check.png', fullPage: true });
  await browser.close();
})();

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Wait for animations to settle
    await page.waitForTimeout(3000);

    await page.screenshot({ path: '/home/jules/verification/hero_colorful.png', fullPage: true });
    console.log('✅ Screenshot captured');

    const text = await page.textContent('h1');
    if (text.includes('МАКСИМ')) {
      console.log('✅ Hero title found in Russian');
    } else {
      console.log('❌ Hero title not found or incorrect');
      process.exit(1);
    }
  } catch (e) {
    console.error('❌ Error during verification:', e);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to desktop
  await page.setViewportSize({ width: 1280, height: 800 });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Check if Header is visible
    const header = await page.locator('header');
    await header.waitFor({ state: 'visible' });
    console.log('Header is visible on desktop');

    // Scroll to check if header changes class (isScrolled)
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(500);
    const nav = await page.locator('nav');
    const classes = await nav.getAttribute('class');
    if (classes.includes('bg-black/60')) {
      console.log('Header background changed on scroll');
    }

    // Screenshot desktop
    await page.screenshot({ path: 'verification/header_desktop.png' });

    // Switch to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    const menuBtn = await page.locator('button.md\\:hidden');
    await menuBtn.click();
    console.log('Mobile menu button clicked');

    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/header_mobile_menu.png' });

  } catch (error) {
    console.error('Verification failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

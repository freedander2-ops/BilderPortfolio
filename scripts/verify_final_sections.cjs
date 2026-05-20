const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 3000 }
  });
  const page = await context.newPage();
  
  try {
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Scroll to bottom to trigger animations
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        let distance = 100;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if(totalHeight >= scrollHeight){
            clearInterval(timer);
            resolve();
          }
        }, 50);
      });
    });

    console.log('Checking Benefits section...');
    const benefits = await page.locator('#benefits');
    await benefits.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/benefits_section.png' });

    console.log('Checking Reviews section...');
    const reviews = await page.locator('#reviews');
    await reviews.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/reviews_section.png' });

    console.log('Checking Contacts section...');
    const contacts = await page.locator('#contacts');
    await contacts.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/contacts_section.png' });

    console.log('Checking Footer...');
    const footer = await page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'verification/footer_section.png' });

    console.log('Verification completed successfully.');
  } catch (error) {
    console.error('Verification failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

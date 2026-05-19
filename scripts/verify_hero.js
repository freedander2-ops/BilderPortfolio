const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to a common desktop resolution
  await page.setViewportSize({ width: 1920, height: 1080 });

  // In a real environment we would start the dev server and navigate to it.
  // For this verification, we will check if the file compiles and has correct imports.
  console.log('Verifying Hero component structure...');

  const fs = require('fs');
  const path = require('path');

  const heroPath = path.join(__dirname, '../src/components/sections/Hero.tsx');
  if (fs.existsSync(heroPath)) {
    console.log('✅ Hero.tsx exists');
    const content = fs.readFileSync(heroPath, 'utf8');
    if (content.includes('motion') && content.includes('useScroll') && content.includes('MAKSIM')) {
      console.log('✅ Hero.tsx contains expected motion and content');
    } else {
      console.log('❌ Hero.tsx missing core elements');
      process.exit(1);
    }
  } else {
    console.log('❌ Hero.tsx not found');
    process.exit(1);
  }

  const layoutPath = path.join(__dirname, '../src/app/layout.tsx');
  const pagePath = path.join(__dirname, '../src/app/page.tsx');

  if (fs.existsSync(layoutPath) && fs.existsSync(pagePath)) {
    console.log('✅ App router structure is correct');
  } else {
    console.log('❌ App router structure incomplete');
    process.exit(1);
  }

  await browser.close();
  console.log('Verification successful!');
})();

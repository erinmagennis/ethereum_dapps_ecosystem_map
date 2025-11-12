const puppeteer = require('puppeteer');
const path = require('path');

async function generateScreenshot(htmlFile, outputFile) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to 16:9 aspect ratio (1920x1080)
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2 // Higher quality
    });

    // Load the HTML file
    const filePath = 'file://' + path.resolve(__dirname, htmlFile);
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    // Wait a bit for any animations or dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshot
    await page.screenshot({
        path: outputFile,
        fullPage: false
    });

    await browser.close();
    console.log(`Generated: ${outputFile}`);
}

async function main() {
    console.log('Generating PNG screenshots...');

    await generateScreenshot(
        'ethereum_dapp_ecosystem_slide.html',
        'ethereum_dapp_ecosystem_slide.png'
    );

    await generateScreenshot(
        'ethereum_dapp_ecosystem_slide_logos_only.html',
        'ethereum_dapp_ecosystem_slide_logos_only.png'
    );

    console.log('Done! Screenshots generated successfully.');
}

main().catch(console.error);

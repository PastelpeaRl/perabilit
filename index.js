// 检测网页的截图
async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: outputPath });
  await browser.close();
}

// 检测网页的响应时间
async function measurePageResponseTime(url) {
  const startTime = Date.now();
  const response = await fetch(url);
  const endTime = Date.now();
  return endTime - startTime;
}
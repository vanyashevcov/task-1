const fs = require('fs');
const path = './index.html';

describe('HTML structure test', () => {
  test('should contain opening and closing <p> tags', () => {
    const html = fs.readFileSync(path, 'utf8');

    // Перевірка наявності відкриваючого тега <p>
    expect(html.includes('<p>')).toBeTruthy();

    // Перевірка наявності закриваючого тега </p>
    expect(html.includes('</p>')).toBeTruthy();

    // Перевірка, чи текст знаходиться всередині тегів <p>
    const correctContent = `<p>A light and gently sweet breakfast dish or a dessert for picky eaters. With crispy coating and the light and soft inside, you get a lovely balance of
flavors and textures. These delicious pancakes pair perfectly with sour cream and
fruit in pretty much any form.</p>`;
expect(html.includes(correctContent)).toBeTruthy();
});
});

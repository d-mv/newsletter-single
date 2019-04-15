const apiUrl = 'https://the-newsletter-app.herokuapp.com';

async function fetchData(mode, urlMod) {
  const url = `${apiUrl}/${urlMod}`;
  let data = '';
  if (mode === 'json') {
    data = await fetch(url).then(response => response.json());
  } else if (mode === 'html') {
    data = await fetch(url).then(response => response.text());
  } else {
    console.log('mode is missing');
  }

  return data;
}
test('API return list of posts', async () => {
  const data = await fetchData('json', 'api/list');
  expect(typeof data).toBe('object');
});

test('Server returns web-site', async () => {
  const data = await fetchData('html', '');
  expect(data).toContain('<!doctype html>');
});

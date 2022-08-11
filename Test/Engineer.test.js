const Engineer = require('../lib/engineer');
const engineer = new Engineer('Marko', '3891', 'marko@gmail.com', 'marko@github.com');

test('check if values from constructor works correctly', () => {
    expect(engineer.name).toBe('Marko');
    expect(engineer.id).toBe('3891');
    expect(engineer.email).toBe('marko@gmail.com');
    expect(engineer.gitHubUserName).toBe('marko@github.com');
});

test('check if name extractor works correctly', () => {
    expect(engineer.getName()).toBe('Marko');
});

test('check if id extractor works correctly', () => {
    expect(engineer.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(engineer.getEmail()).toBe('marko@gmail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(engineer.getRole()).toBe('Engineer');
});

test('check if school extractor works correctly', () => {
    expect(engineer.getgitHubUserName()).toBe('marko@github.com');
})
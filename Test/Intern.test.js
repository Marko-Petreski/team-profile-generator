const Intern = require('../lib/intern');
const intern = new Intern('Marko', '3891', 'marko@gmail.com', 'FSU');

test('check if values from constructor works correctly', () => {
    expect(intern.name).toBe('Marko');
    expect(intern.id).toBe('3891');
    expect(intern.email).toBe('marko@gmail.com');
    expect(intern.school).toBe('FSU');
});

test('check if name extractor works correctly', () => {
    expect(intern.getName()).toBe('Marko');
});

test('check if id extractor works correctly', () => {
    expect(intern.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(intern.getEmail()).toBe('marko@gmail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(intern.getRole()).toBe('Intern');
});

test('check if school extractor works correctly', () => {
    expect(intern.getSchool()).toBe('FSU');
})
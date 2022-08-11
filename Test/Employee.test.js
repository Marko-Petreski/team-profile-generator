const Employee = require('../lib/employee');
const employee = new Employee('Marko', '3891', 'marko@gmail.com');

test('check if values from constructor works correctly', () => {
    expect(employee.name).toBe('Marko');
    expect(employee.id).toBe('3891');
    expect(employee.email).toBe('marko@gmail.com');
});

test('check if name extractor works correctly', () => {
    expect(employee.getName()).toBe('Marko');
});

test('check if id extractor works correctly', () => {
    expect(employee.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(employee.getEmail()).toBe('marko@gmail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(employee.getRole()).toBe('Employee');
});
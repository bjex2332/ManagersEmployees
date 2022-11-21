const Test = require('../intern.js');
const intern = new Test('Brandon', '53524', 'test@gmail.com', '801');

describe ('Subordinate info', () => {
  it('Subordinates info should come through from the constructor', () => {
    expect(intern.name).toBe('Brandon');
    expect(intern.id).toBe('53524');
    expect(intern.email).toBe('test@gmail.com');
    expect(intern.school).toBe('801');
});

  it('Is getName() working?', () => {
    expect(intern.getName()).toBe('Brandon');
  })  

  it('Is getID() working?', () => {
    expect(intern.getID()).toBe('53524');
  })  

  it('Is getEmail() working?', () => {
    expect(intern.getEmail()).toBe('test@gmail.com');
  })  

  it('Is getSchool() working?', () => {
    expect(intern.getSchool()).toBe('801');
  })  

  it('Is getRole() working?', () => {
    expect(intern.getRole()).toBe('Intern');
  })  




})  
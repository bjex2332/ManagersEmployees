const Test = require('../engineer.js');
const engineer = new Test('Brandon', '53524', 'test@gmail.com', '801');

describe ('Subordinate info', () => {
  it('Subordinates info should come through from the constructor', () => {
    expect(engineer.name).toBe('Brandon');
    expect(engineer.id).toBe('53524');
    expect(engineer.email).toBe('test@gmail.com');
    expect(engineer.GitHub).toBe('801');
});

  it('Is getName() working?', () => {
    expect(engineer.getName()).toBe('Brandon');
  })  

  it('Is getID() working?', () => {
    expect(engineer.getID()).toBe('53524');
  })  

  it('Is getEmail() working?', () => {
    expect(engineer.getEmail()).toBe('test@gmail.com');
  })  

  it('Is getGitHub() working?', () => {
    expect(engineer.getGitHub()).toBe('801');
  })  

  it('Is getRole() working?', () => {
    expect(engineer.getRole()).toBe('Engineer');
  })  




})  
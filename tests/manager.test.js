const Test = require('../manager.js');
const manager = new Test('Brandon', '53524', 'test@gmail.com', '801');

describe ('Subordinate info', () => {
  it('Subordinates info should come through from the constructor', () => {
    expect(manager.name).toBe('Brandon');
    expect(manager.id).toBe('53524');
    expect(manager.email).toBe('test@gmail.com');
    expect(manager.office).toBe('801');
});

  it('Is getName() working?', () => {
    expect(manager.getName()).toBe('Brandon');
  })  

  it('Is getID() working?', () => {
    expect(manager.getID()).toBe('53524');
  })  

  it('Is getEmail() working?', () => {
    expect(manager.getEmail()).toBe('test@gmail.com');
  })  

  it('Is getOffice() working?', () => {
    expect(manager.getOffice()).toBe('801');
  })  

  it('Is getRole() working?', () => {
    expect(manager.getRole()).toBe('Manager');
  })  




})  
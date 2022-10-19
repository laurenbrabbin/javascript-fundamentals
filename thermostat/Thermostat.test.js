const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('returns the initial temp of 20', () => {
    let thermostat = new Thermostat()
    expect(thermostat.getTempreture()).toEqual [20];
  })
  it('reduces the tempreture', () => {
    let thermostat = new Thermostat()
    thermostat.down()
    expect(thermostat.getTempreture()).toEqual [19];
  })
  it('reduces the tempreture by 2', () => {
    let thermostat = new Thermostat()
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTempreture()).toEqual [18];
  })
  it('tempreture does not go below 10', () => {
    let thermostat = new Thermostat()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTempreture()).toEqual [10];
  })
  it('increases the tempreture by 1', () => {
    let thermostat = new Thermostat()
    thermostat.up()
    expect(thermostat.getTempreture()).toEqual [21];
  })
  it('increases the tempreture by 2', () => {
    let thermostat = new Thermostat()
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTempreture()).toEqual [22];
  })
  it('initally temp does not go above 25 since psm is on', () => {
    let thermostat = new Thermostat()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTempreture()).toEqual [25];
  })
  it('temp does not go above 32 if pms is off', () => {
    let thermostat = new Thermostat()
    thermostat.setPowerSavingMode(false)
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTempreture()).toEqual [32];
  })
  it('returns the energy usage as medium', () => {
    let thermostat = new Thermostat()
    expect(thermostat.energyUsage()).toEqual ['medium-usage'];
  })
  it('returns the energy usage as high', () => {
    let thermostat = new Thermostat()
    thermostat.setPowerSavingMode(false)
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    expect(thermostat.energyUsage()).toEqual ['high-usage'];
  })
  it('returns the energy usage as low', () => {
    let thermostat = new Thermostat()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.energyUsage()).toEqual ['low-usage'];
  })
})
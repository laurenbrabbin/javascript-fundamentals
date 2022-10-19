class Thermostat {
  constructor() {
    this.tempreture = 20; //starts with initial temp of 20 - min temp is 10. psm on max temp 25, psm off max temp 32
    this.psm = true //power saving mode is on by default
  }

  getTempreture() {
    return this.tempreture
  }

  reset() {
    this.tempreture = 20
  }

  down() {
    if (this.tempreture > 10 ) {
    this.tempreture -= 1
    }
  }

  up() {
    if ((this.psm == true) && (this.tempreture < 25)) {
      this.tempreture += 1
    } else if (this.psm == false && this.tempreture < 32 ) {
      this.tempreture += 1
    }
  }

  setPowerSavingMode(psm) {
    if (psm === true) {
    this.psm = true;
    } else if (psm === false) {
      this.psm = false;
    }
  }

  energyUsage() {
    if (this.tempreture < 18) {
      console.log('low-usage')
    } else if (this.tempreture <= 25 ) {
      console.log('medium-usage')
    } else {
      console.log('high-usage')
    }
  }
}

module.exports = Thermostat
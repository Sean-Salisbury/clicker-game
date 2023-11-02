//Upgrade Variables

//Maker 1 Upgrades

var maker1Upgrade1 = {
    active: false,
    cost: 1000,
    exclusive: []
  };
  
  var maker1Upgrade2 = {
    active: false,
    cost: 5000,
    exclusive: []
  };
  
  var maker1Upgrade3_1 = {
    active: false,
    cost: 20000,
    exclusiveButtonNames: ['Maker1UpgradeButton3_2']
  };
  
  var maker1Upgrade3_2 = {
    active: false,
    cost: 20000,
    exclusiveButtonNames: ['Maker1UpgradeButton3_1']
  };
  
  var maker1Upgrades = [maker1Upgrade1, maker1Upgrade2, maker1Upgrade3_1, maker1Upgrade3_2];
  
  //Maker 2 Upgrades
  
  var maker2Upgrade1 = {
    active: false,
    cost: 10000,
    exclusive: []
  };
  
  var maker2Upgrade2 = {
    active: false,
    cost: 20000,
    exclusive: []
  };
  
  var maker2Upgrades = [maker2Upgrade1, maker2Upgrade2];
  
  
  
  var maker1UpgradesArrayLength = makers[0].upgrades.length;
  var maker2UpgradesArrayLength = makers[1].upgrades.length;
  
  
  
  //What each upgrade does and multiplying that with the combined multiplier.
  
  async function MakerUpgradeConditions() {
  
    
    makers[0].upgradeMultiplier = 1;
    makers[1].upgradeMultiplier = 1;
  
    //Maker 1 Upgrades
      
    if (makers[0].upgrades[0].active == true) {
      makers[0].upgradeMultiplier = makers[0].upgradeMultiplier * 2;
    }
  
    if (makers[0].upgrades[1].active == true) {
      makers[0].upgradeMultiplier = makers[0].upgradeMultiplier * (makers[1].amount / 100 + 1);
    }
  
    if (makers[0].upgrades[2].active == true) {
      makers[0].upgradeMultiplier = makers[0].upgradeMultiplier * 1.5;
    }
  
    if (makers[0].upgrades[3].active == true) {
      makers[0].upgradeMultiplier = makers[0].upgradeMultiplier * (makers[2].amount / 100 + 1);
    }
  
    //Maker 2 Upgrades
  
    if (makers[1].upgrades[0].active == true) {
      makers[1].upgradeMultiplier = makers[1].upgradeMultiplier * 2;
    }
  
    if (makers[1].upgrades[1].active == true) {
      for (let counter = 2; counter < makersArrayLength; counter++) {
        var maker2Upgrade2Multiplier = ((((makers[0].amount + makers[counter].amount) * 0.3) / 100) + 1);
      }
      makers[1].upgradeMultiplier = makers[1].upgradeMultiplier * maker2Upgrade2Multiplier;
    }
    
  }
  
  //Maker 1 Upgrades
  //MakerNumber, makerUpgradeIndex, MakerUpgradeButtonID, 
  
  async function Maker1Upgrade1() {
    MakerUpgrades(0, 0, 'Maker1UpgradeButton1');
  }
  
  async function Maker1Upgrade2() {
    MakerUpgrades(0, 1, 'Maker1UpgradeButton2');
  }
  
  async function Maker1Upgrade3_1() {
    MakerUpgrades(0, 2, 'Maker1UpgradeButton3_1');
  }
  
  
  async function Maker1Upgrade3_2() {
    MakerUpgrades(0, 3, 'Maker1UpgradeButton3_2');
  }
  
  
  //Maker 2 Upgrades
  
  async function Maker2Upgrade1() {
    MakerUpgrades(1, 0, 'maker2UpgradeButton1');
  
  }
  
  async function Maker2Upgrade2() {
    MakerUpgrades(1, 1, 'maker2UpgradeButton2');
  }
  
  
  async function MakerUpgrades(makerNumber, upgradeNumber, makerUpgradeButtonName) {
    var makerUpgrade = makers[makerNumber].upgrades[upgradeNumber];
    if (theAmount >= makerUpgrade.cost) {
      makerUpgrade.active = true;
      MakerUpgradeConditions();
      document.getElementById(makerUpgradeButtonName).style.border = "2px solid gold";
      document.getElementById(makerUpgradeButtonName).style.cursor = "default";
      theAmount = theAmount - makerUpgrade.cost;
      document.getElementById(makerUpgradeButtonName).disabled = true;
      if (makerUpgrade.exclusiveButtonNames.length > 0) {
        document.getElementById(makerUpgrade.exclusiveButtonNames[0]).disabled = true;
        document.getElementById(makerUpgrade.exclusiveButtonNames[0]).style.border = "2px solid black";
        document.getElementById(makerUpgrade.exclusiveButtonNames[0]).style.cursor = "default";
        document.getElementById(makerUpgrade.exclusiveButtonNames[0]).style.background = "white";
      }
  
    }
    else {
      if (document.getElementById('dontHave').innerHTML == "You Cannot Afford That") {
  
      }
      else {
        document.getElementById('dontHave').innerHTML = "You Cannot Afford That";
        document.getElementById('dontHave').innerHTML = await sleep(2000);
        document.getElementById('dontHave').innerHTML = "";
      }
    }
  }
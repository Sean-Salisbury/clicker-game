//Maker Variables
var maker1 = {
    name: "Maker1", amount: 0, cost: 5, next10Cost: 0, displayNext10Cost: "",
    displayCost: "", displayAmount: "", perSecond: 0, perSecondDisplay: "", individualPerSecond: 1,
    upgrades: maker1Upgrades, upgradeMultiplier: 1
  };
  var maker2 = {
    name: "Maker2", amount: 0, cost: 100, next10Cost: 0, displayNext10Cost: "",
    displayCost: "", displayAmount: "", perSecond: 0, perSecondDisplay: "", individualPerSecond: 3,
    upgrades: maker2Upgrades, upgradeMultiplier: 1
  };
  var maker3 = {
    name: "Maker3", amount: 0, cost: 1000, next10Cost: 0, displayNext10Cost: "",
    displayCost: "", displayAmount: "", perSecond: 0, perSecondDisplay: "", individualPerSecond: 10,
  };
  var makers = [maker1, maker2, maker3];
  var totalCost = 0;
  var makersArrayLength = makers.length;
  
  //User leaves tab variables
  var hidden, visibilityChange;
  var timeLeft = null;
  var timeDifference = null;
  var theAmountWhenLeft = null;
  var theAmountTotalWhenLeft = null;
  
  //Other Variables
  var theAmountTotal = 0;
  var theAmount = 0;
  var perSecond = 0;
  var perInterval = 0;
  var theAmountDisplay = null;
  var perSecondDisplay = null;
  var amountWanted = 1;
  var costOfOne = 5
  
  //Reincarnation Variables
  var reincarnatePoints = 0;
  var reincarnateMax = 100000
  var reincarnateValue = theAmountTotal - (reincarnatePoints * reincarnateMax)
  
  var ascensionUpgrade1 = false;
  
  //Achievement Variables
  var thousandGot = false;
  var hundredThousandGot = false;
  
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  
  function onWebsiteLoad() {
    document.getElementById('reincarnationScreen').style.display = 'none';
    document.getElementById('clickButtonText').innerHTML = theAmount.toString();
    document.getElementById('upgradePathOpenMaker2').style.display = 'none';
    document.getElementById('buyMaker1Button').innerHTML = makers[0].amount.toString() + " Buy Maker " + makers[0].displayCost;
    document.getElementById('buyMaker1Button').style.display = 'inline-block';
    document.getElementById('buyMaker2Button').style.display = 'none';
    document.getElementById('buyMaker3Button').style.display = 'none';
    document.getElementById('Maker1UpgradeButton1').style.display = 'none';
    document.getElementById('Maker1UpgradeButton2').style.display = 'none';
    document.getElementById('Maker1UpgradeButton3_1').style.display = 'none';
    document.getElementById('Maker1UpgradeButton3_2').style.display = 'none';
    document.getElementById('maker2UpgradeButton1').style.display = 'none';
    document.getElementById('maker2UpgradeButton2').style.display = 'none'
  
    document.getElementById('reincarnateProgressLabel').innerHTML = "Reincarnate (" + reincarnatePoints + "):";
    document.getElementById('buyOne').style.background = "#3C86D0";
  
  
  
    // Check for browser compatibility for detecting if browser is not in focus
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
  
    // Event listener for visibility change
    document.addEventListener(visibilityChange, function() {
      if (document[hidden]) {
        timeLeft = new Date();
        theAmountWhenLeft = theAmount;
        theAmountTotalWhenLeft = theAmountTotal;
      } else {
        timeBack = new Date();
        timeDifference = timeBack - timeLeft;
        theAmount = theAmountWhenLeft;
        theAmountTotal = theAmountTotalWhenLeft
        theAmount = theAmount + (perSecond * (timeDifference / 1000));
        theAmountTotal = theAmountTotalWhenLeft + (perSecond * (timeDifference / 1000));
      }
    });
  }
  
  function openUpgradePathMaker1() {
    document.getElementById("upgradePathFormMaker1").style.display = "block";
  }
  
  function closeUpgradePathMaker1() {
    document.getElementById("upgradePathFormMaker1").style.display = "none";
  }
  
  function openUpgradePathMaker2() {
    document.getElementById("upgradePathFormMaker2").style.display = "block";
  }
  
  function closeUpgradePathMaker2() {
    document.getElementById("upgradePathFormMaker2").style.display = "none";
  }
  
  function openReincarnationConfirmation() {
    document.getElementById("reincarnationFormID").style.display = "block";
  }
  
  function cancelReincarnationConfirmation() {
    document.getElementById("reincarnationFormID").style.display = "none";
  }
  
  function openSettings() {
    document.getElementById("settingsFormID").style.display = "block";
    document.getElementById("openSettingsID").style.background = "#3C86D0";
  }
  
  function closeSettings() {
    document.getElementById("settingsFormID").style.display = "none";
    document.getElementById("openSettingsID").style.background = "#333";
  }
  
  function confirmReincarnationConfirmation() {
    document.getElementById("reincarnationFormID").style.display = "none";
    document.getElementById("mainScreen").style.display = "none";
    document.getElementById("reincarnationScreen").style.display = "inline-block";
  
    //maker variables
  
    maker1 = {
      name: "Maker1", amount: 0, cost: 5, next10Cost: 0, displayNext10Cost: "",
      displayCost: "", displayAmount: "", perSecond: 0, perSecondDisplay: "", individualPerSecond: 1,
      upgrades: maker1Upgrades, upgradeMultiplier: 1
    };
    maker2 = {
      name: "Maker2", amount: 0, cost: 100, next10Cost: 0, displayNext10Cost: "",
      displayCost: "", displayAmount: "", perSecond: 0, perSecondDisplay: "", individualPerSecond: 3,
      upgrades: maker2Upgrades, upgradeMultiplier: 1
    };
    maker3 = {
      name: "Maker3", amount: 0, cost: 1000, next10Cost: 0, displayNext10Cost: "",
      displayCost: "", displayAmount: "", perSecond: 0, perSecondDisplay: "", individualPerSecond: 10
    };
    makers = [maker1, maker2, maker3];
  
    //Other Variables
    theAmountTotal = 0;
    theAmount = 0;
    perSecond = 0;
    perInterval = 0;
    theAmountDisplay = null;
    perSecondDisplay = null;
    amountWanted = 1;
    costOfOne = 5
  
    document.getElementById('reincarnationTitle').innerHTML = "Reincarnation Points: " + reincarnatePoints;
  
    for (let counter = 0; counter < maker1UpgradesArrayLength; counter++) {
      makers[0].upgrades[counter].active = false;
    }
  
    for (let counter = 0; counter < maker2UpgradesArrayLength; counter++) {
      makers[1].upgrades[counter].active = false;
    }
  
    for (let counter = 0; counter < makersArrayLength; counter++) {
      makers[counter].upgradeMultiplier = 1;
    }
  
  }
  
  function reincarnationSubmit() {
    if (ascensionUpgrade1 == true) {
      document.getElementById("ascensionUpgrade1Button").style.border = "2px solid gold";
      document.getElementById('ascensionUpgrade1Button').style.cursor = "default";
    }
  
    document.getElementById("reincarnationScreen").style.display = "none";
    document.getElementById("mainScreen").style.display = "flex";
  
    document.getElementById('buyMaker1Button').innerHTML = makers[0].amount.toString() + " Buy Maker1 " + makers[0].displayCost;
    document.getElementById('buyMaker2Button').innerHTML = makers[1].amount.toString() + " Buy Maker2 " + makers[1].displayCost;
    document.getElementById('buyMaker3Button').innerHTML = makers[2].amount.toString() + " Buy Maker3 " + makers[2].displayCost;
    document.getElementById('reincarnateProgressLabel').innerHTML = "Reincarnate (" + reincarnatePoints + "):";
  
  
    document.getElementById('upgradePathOpenMaker2').style.display = 'none';
    document.getElementById('buyMaker1Button').innerHTML = makers[0].amount.toString() + " Buy Maker " + makers[0].displayCost;
    document.getElementById('buyMaker1Button').style.display = 'inline-block';
    document.getElementById('buyMaker2Button').style.display = 'none';
    document.getElementById('buyMaker3Button').style.display = 'none';
    document.getElementById('Maker1UpgradeButton1').style.display = 'none';
    document.getElementById('Maker1UpgradeButton2').style.display = 'none';
    document.getElementById('Maker1UpgradeButton3_1').style.display = 'none';
    document.getElementById('Maker1UpgradeButton3_2').style.display = 'none';
  
    document.getElementById('Maker1UpgradeButton1').disabled = false
    document.getElementById('Maker1UpgradeButton2').disabled = false
    document.getElementById('Maker1UpgradeButton3_1').disabled = false
    document.getElementById('Maker1UpgradeButton3_2').disabled = false
  
    document.getElementById('Maker1UpgradeButton1').style.cursor = "pointer";
    document.getElementById('Maker1UpgradeButton2').style.cursor = "pointer";
    document.getElementById('Maker1UpgradeButton3_1').style.cursor = "pointer";
    document.getElementById('Maker1UpgradeButton3_2').style.cursor = "pointer";
  }
  
  function clickButton() {
    theAmount++;
    theAmountTotal++;
  }
  
  
  async function Maker1() {
    document.getElementById('debug').innerHTML = ""
    costCalculator(1, amountWanted, true);
    if (theAmount >= totalCost) {
      theAmount = theAmount - totalCost;
      makers[0].amount = makers[0].amount + amountWanted;
  
      document.getElementById('clickButtonText').innerHTML = theAmountDisplay.toString();
  
  
      if (makers[0].amount >= 10 && makers[0].upgrades[0].active == false) {
        document.getElementById('Maker1UpgradeButton1').style.display = 'inline-block';
      }
  
      if (makers[0].amount >= 30 && makers[0].upgrades[1].active == false) {
        document.getElementById('Maker1UpgradeButton2').style.display = 'inline-block';
      }
  
      if (makers[0].amount >= 50 && makers[0].upgrades[2].active == false) {
        document.getElementById('Maker1UpgradeButton3_1').style.display = 'inline-block';
        document.getElementById('Maker1UpgradeButton3_2').style.display = 'inline-block';
      }
  
      if (makers[0].amount >= 20) {
        document.getElementById('buyMaker2Button').style.display = 'inline-block';
        document.getElementById('upgradePathOpenMaker2').style.display = 'inline-block';
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
  
  async function Maker2() {
    costCalculator(2, amountWanted, true);
    if (theAmount >= totalCost) {
      theAmount = theAmount - totalCost;
      makers[1].amount = makers[1].amount + amountWanted;
  
      document.getElementById('clickButtonText').innerHTML = theAmountDisplay.toString();
  
      if (makers[1].amount >= 10) {
        document.getElementById('maker2UpgradeButton1').style.display = 'inline-block'
      }
  
      if (makers[1].amount >= 20) {
        document.getElementById('maker2UpgradeButton2').style.display = 'inline-block'
      }
  
      if (makers[1].amount >= 25) {
        document.getElementById('buyMaker3Button').style.display = 'inline-block';
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
  
  
  async function Maker3() {
    costCalculator(3, amountWanted, true);
    if (theAmount >= totalCost) {
      theAmount = theAmount - totalCost;
      makers[2].amount = makers[2].amount + amountWanted;
  
      document.getElementById('clickButtonText').innerHTML = theAmountDisplay.toString();
  
      if (makers[2].amount >= 20) {
        document.getElementById('buyMaker3Button').style.display = 'inline-block';
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
  
  
  async function AscensionUpgrade1() {
    if (reincarnatePoints >= 1) {
      if (ascensionUpgrade1 == true) {
  
      }
      else {
        reincarnatePoints = reincarnatePoints - 1;
        document.getElementById('reincarnationTitle').innerHTML = "Reincarnation Points: " + reincarnatePoints;
        ascensionUpgrade1 = true;
        document.getElementById('ascensionUpgrade1Button').style.background = "#25942E";
  
      }
    }
    else {
      if (document.getElementById('dontHaveAscended').innerHTML == "You Cannot Afford That" || ascensionUpgrade1 == true) {
  
      }
      else {
        document.getElementById('ascensionUpgrade1Button').style.background = "#BE3D3D";
        document.getElementById('dontHaveAscended').innerHTML = "You Cannot Afford That";
        document.getElementById('dontHaveAscended').innerHTML = await sleep(2000);
        document.getElementById('dontHaveAscended').innerHTML = "";
        document.getElementById('ascensionUpgrade1Button').style.background = "#4CAF50";
  
      }
  
    }
  }
  
  function buyOne() {
    amountWanted = 1;
    document.getElementById('buyOne').style.background = "#3C86D0"
    document.getElementById('buyTen').style.background = "#4CAF50"
  }
  
  function buyTen() {
    amountWanted = 10;
    document.getElementById('buyTen').style.background = "#3C86D0"
    document.getElementById('buyOne').style.background = "#4CAF50"
  }
  
  
  
  function costCalculator(makerNumber, quantityOfMaker, wantChange) {
    array = [];
    totalCost = 0;
    costOfOne = makers[makerNumber - 1].cost;
    for (let amountDone = 0; amountDone < quantityOfMaker; amountDone++) {
      array.push(costOfOne);
      costOfOne = costOfOne + Math.round(costOfOne * 0.14);
    }
    let sizeOfArray = array.length;
  
    for (let currentPosition = 0; currentPosition < sizeOfArray; currentPosition++) {
      totalCost = totalCost + array[currentPosition];
    }
  
    if (sizeOfArray == 10) {
      makers[makerNumber - 1].next10Cost = totalCost;
    }
  
    if (theAmount >= totalCost) {
  
      if (wantChange == true) {
        makers[makerNumber - 1].cost = costOfOne;
      }
    }
  }
  
  
  
  async function timerOneTenthSecond() {
  
    for (let counter = 1; counter <= makersArrayLength; counter++) {
      if (makers[counter - 1].amount >= 1000) {
        makers[counter - 1].displayAmount = (makers[counter - 1].amount / 1000).toFixed(1);
        makers[counter - 1].displayAmount = makers[counter - 1].displayAmount + "K";
      }
      else {
        makers[counter - 1].displayAmount = makers[counter - 1].amount;
      }
      if (amountWanted == 1) {
        if (makers[counter - 1].cost >= 1000 && makers[counter - 1].cost < 1000000) {
          makers[counter - 1].displayCost = (makers[counter - 1].cost / 1000).toFixed(1);
          makers[counter - 1].displayCost = makers[counter - 1].displayCost + "K";
        }
        else if (makers[counter - 1].cost >= 1000000) {
          makers[counter - 1].displayCost = (makers[counter - 1].cost / 1000000).toFixed(1);
          makers[counter - 1].displayCost = makers[counter - 1].displayCost + "M";
        }
        else {
          makers[counter - 1].displayCost = makers[counter - 1].cost;
        }
      }
  
      document.getElementById('buyMaker' + counter + 'Button').innerHTML = makers[counter - 1].displayAmount + " Buy " + makers[counter - 1].name + " "
        + makers[counter - 1].displayCost;
  
      if (amountWanted > 1) {
        costCalculator(counter, amountWanted, false);
        if (makers[counter - 1].next10Cost >= 1000 && makers[counter - 1].next10Cost < 1000000) {
          makers[counter - 1].displayNext10Cost = (makers[counter - 1].next10Cost / 1000).toFixed(1);
          makers[counter - 1].displayNext10Cost = makers[counter - 1].displayNext10Cost + "K";
        }
        else if (makers[counter - 1].next10Cost >= 1000000) {
          makers[counter - 1].displayNext10Cost = (makers[counter - 1].next10Cost / 1000000).toFixed(1);
          makers[counter - 1].displayNext10Cost = makers[counter - 1].displayNext10Cost + "M";
        }
        else {
          makers[counter - 1].displayNext10Cost = makers[counter - 1].next10Cost;
        }
        document.getElementById('buyMaker' + counter + 'Button').innerHTML = makers[counter - 1].displayAmount + " Buy " + makers[counter - 1].name + " "
          + makers[counter - 1].displayNext10Cost;
  
      }
    }
  
  
    //Defining how much each maker makes at the start.
    makers[0].perSecond = makers[0].amount;
    makers[1].perSecond = makers[1].amount * 3;
    makers[2].perSecond = makers[2].amount * 10;
  
  
    //Maker 1 Upgrades
  
    makers[0].perSecond = makers[0].perSecond * makers[0].upgradeMultiplier;
  
    //Maker 2 Upgrades
  
    makers[1].perSecond = makers[1].perSecond * makers[1].upgradeMultiplier;
  
    //Maker 1 Upgrades Button Styling
  
    if (theAmount < 1000 && makers[0].upgrades[0].active != true) {
      document.getElementById('Maker1UpgradeButton1').style.border = "2px solid red";
    }
    else if (theAmount >= 1000 && makers[0].upgrades[0].active != true) {
      document.getElementById('Maker1UpgradeButton1').style.border = "2px solid #027148";
    }
  
  
    if (theAmount < 5000 && makers[0].upgrades[1].active != true) {
      document.getElementById('Maker1UpgradeButton2').style.border = "2px solid red";
    }
    else if (theAmount >= 5000 && makers[0].upgrades[1].active != true) {
      document.getElementById('Maker1UpgradeButton2').style.border = "2px solid #027148";
    }
  
    if (theAmount < 20000 && makers[0].upgrades[2].active != true && makers[0].upgrades[3].active != true) {
      document.getElementById('Maker1UpgradeButton3_1').style.border = "2px solid red";
    }
    else if (theAmount >= 20000 && makers[0].upgrades[2].active != true && makers[0].upgrades[3].active != true) {
      document.getElementById('Maker1UpgradeButton3_1').style.border = "2px solid #027148";
    }
  
    if (theAmount < 20000 && makers[0].upgrades[3].active != true && makers[0].upgrades[2].active != true) {
      document.getElementById('Maker1UpgradeButton3_2').style.border = "2px solid red";
    }
    else if (theAmount >= 20000 && makers[0].upgrades[3].active != true && makers[0].upgrades[2].active != true) {
      document.getElementById('Maker1UpgradeButton3_2').style.border = "2px solid #027148";
    }
  
    //Maker 2 Upgrades Button Styling
  
    if (theAmount < 10000 && makers[1].upgrades[0].active != true) {
      document.getElementById('maker2UpgradeButton1').style.border = "2px solid red";
    }
    else if (theAmount >= 10000 && makers[1].upgrades[0].active != true) {
      document.getElementById('maker2UpgradeButton1').style.border = "2px solid #027148";
    }
  
    if (theAmount < 20000 && makers[1].upgrades[1].active != true) {
      document.getElementById('maker2UpgradeButton2').style.border = "2px solid red";
    }
    else if (theAmount >= 20000 && makers[1].upgrades[1].active != true) {
      document.getElementById('maker2UpgradeButton2').style.border = "2px solid #027148";
    }
  
    //Buy button styling
  
    if (amountWanted === 1) {
      if (theAmount < makers[0].cost) {
        document.getElementById('buyMaker1Button').style.border = "2px solid red";
      }
      else {
        document.getElementById('buyMaker1Button').style.border = "2px solid #027148";
      }
  
      if (theAmount < makers[1].cost) {
        document.getElementById('buyMaker2Button').style.border = "2px solid red";
      }
      else {
        document.getElementById('buyMaker2Button').style.border = "2px solid #027148";
      }
  
      if (theAmount < makers[2].cost) {
        document.getElementById('buyMaker3Button').style.border = "2px solid red";
      }
      else {
        document.getElementById('buyMaker3Button').style.border = "2px solid #027148";
      }
    }
    else if (amountWanted === 10) {
      if (theAmount < makers[0].next10Cost) {
        document.getElementById('buyMaker1Button').style.border = "2px solid red";
      }
      else {
        document.getElementById('buyMaker1Button').style.border = "2px solid #027148";
      }
  
      if (theAmount < makers[1].next10Cost) {
        document.getElementById('buyMaker2Button').style.border = "2px solid red";
      }
      else {
        document.getElementById('buyMaker2Button').style.border = "2px solid #027148";
      }
  
      if (theAmount < makers[2].next10Cost) {
        document.getElementById('buyMaker3Button').style.border = "2px solid red";
      }
      else {
        document.getElementById('buyMaker3Button').style.border = "2px solid #027148";
      }
  
  
    }
  
    //Calculating perSecond
  
    perSecond = makers[0].perSecond + makers[1].perSecond + makers[2].perSecond;
  
    //Ascension upgrades
  
    if (ascensionUpgrade1 == true) {
      perSecond = perSecond * 2
      makers[0].perSecond = makers[0].perSecond * 2;
      makers[1].perSecond = makers[1].perSecond * 2;
      makers[2].perSecond = makers[2].perSecond * 2;
    }
  
    for (let counter = 0; counter < makersArrayLength; counter++) {
      makers[counter].individualPerSecond = (makers[counter].perSecond / makers[counter].amount).toFixed(2);
      makers[counter].perSecond = parseFloat(makers[counter].perSecond.toFixed(2));
    }
  
  
    //perInterval amount and calculating theAmount
  
    perInterval = perSecond / 10;
    theAmount = theAmount + perInterval;
    theAmountTotal = theAmountTotal + perInterval;
  
    //Display amounts
  
    theAmountDisplay = theAmount.toFixed(1);
    perSecondDisplay = perSecond.toFixed(0);
    makers[0].perSecondDisplay = makers[0].perSecond.toFixed(0);
    makers[1].perSecondDisplay = makers[1].perSecond.toFixed(0);
    makers[2].perSecondDisplay = makers[2].perSecond.toFixed(0);
  
    for (let counter = 1; counter <= makersArrayLength; counter++) {
      if (makers[counter - 1].perSecond >= 1000 && makers[counter - 1].perSecond < 1000000) {
        makers[counter - 1].perSecondDisplay = (makers[counter - 1].perSecond / 1000).toFixed(2);
        makers[counter - 1].perSecondDisplay = makers[counter - 1].perSecondDisplay + "K";
      }
      else if (makers[counter - 1].perSecond >= 1000000) {
        makers[counter - 1].perSecondDisplay = (makers[counter - 1].perSecond / 1000000).toFixed(2);
        makers[counter - 1].perSecondDisplay = makers[counter - 1].perSecondDisplay + "M";
      }
      else {
        makers[counter - 1].perSecondDisplay = makers[counter - 1].perSecond;
      }
    }
  
  
    //Updating perSecond Tooltip
  
    for (let counter = 1; counter <= makersArrayLength; counter++) {
      if (makers[counter - 1].amount >= 1) {
        document.getElementById('buyMaker' + counter + 'Button').setAttribute("data-title", "Making " + makers[counter - 1].perSecondDisplay + " per second\n" +
          "Each one is making " + makers[counter - 1].individualPerSecond + " per second");
      }
      else {
        document.getElementById('buyMaker' + counter + 'Button').setAttribute("data-title", "Making " + makers[counter - 1].perSecondDisplay + " per second");
      }
    }
  
  
    if (theAmount >= 1000000) {
      theAmountDisplay = (theAmount / 1000000).toFixed(2);
      theAmountDisplay = theAmountDisplay + "M"
      document.getElementById('clickButtonText').innerHTML = theAmountDisplay.toString();
    }
    else {
      document.getElementById('clickButtonText').innerHTML = theAmountDisplay.toString();
    }
  
    document.getElementById('perSecondText').innerHTML = perSecondDisplay.toString() + " Per Second";
  }
  
  setInterval(timerOneTenthSecond, 100);
  
  async function timerOneSecond() {
  
    reincarnateValue = theAmountTotal - (reincarnatePoints * reincarnateMax)
    document.getElementById('reincarnateProgress').setAttribute("value", reincarnateValue)
  
    if (reincarnateValue >= reincarnateMax) {
      reincarnatePoints++;
      document.getElementById('reincarnateProgress').setAttribute("value", 0);
      document.getElementById('reincarnateProgressLabel').innerHTML = "Reincarnate (" + reincarnatePoints + "):";
    }
  
  
    if (theAmountTotal >= 1000 && thousandGot == false) {
      document.getElementById('achievement').innerHTML = "1000 Total Amount Got!";
      thousandGot = true;
      document.getElementById('achievement').innerHTML = await sleep(10000);
      document.getElementById('achievement').innerHTML = "";
    }
  
    if (theAmountTotal >= 100000 && hundredThousandGot == false) {
      document.getElementById('achievement').innerHTML = "100K Total Amount Got!";
      hundredThousandGot = true;
      document.getElementById('achievement').innerHTML = await sleep(10000);
      document.getElementById('achievement').innerHTML = "";
    }
  
  }
  
  setInterval(timerOneSecond, 1000);
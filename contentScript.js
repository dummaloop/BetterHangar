const loanerMatrix = [
  { ship: 'Origin 400i', loaner: '325a'}, //verified
  { ship: '600i Touring', loaner: 'Series	325a'}, //checked against matrix
  { ship: '600i Explorer', loaner: 'Series	325a, Cyclone'}, //checked against matrix
  { ship: '890 JUMP', loaner: '325a, 85x'}, //verified
  { ship: 'Apollo Triage', loaner: 'Cutlass Red'}, //checked against matrix
  { ship: 'Apollo Medivac', loaner: 'Cutlass Red'}, //verified
  { ship: 'Carrack', loaner: 'C8 Pisces, URSA Rover'}, //checked against matrix
  { ship: 'Carrack Expedition', loaner: 'C8 Pisces, URSA Rover'}, //checked against matrix
  { ship: 'Carrack w/C8X', loaner: 'C8X Pisces Expedition, URSA Rover'}, //checked against matrix
  { ship: 'Carrack Expedition w/C8X', loaner: 'C8X Pisces Expedition, URSA Rover'}, //checked against matrix
  { ship: 'Caterpillar', loaner: 'Buccaneer'}, //verified
  { ship: 'Drake Corsair', loaner: 'Constellation Aquila, Buccaneer'}, //verified
  { ship: 'Anvil Crucible', loaner: 'Constellation Andromeda'},  //verified
  { ship: 'Tumbril Cyclone', loaner: 'Aurora MR'},
  { ship: 'Tumbril Cyclone TR', loaner: 'Aurora MR'},
  { ship: 'Tumbril Cyclone RN', loaner: 'Aurora MR'},
  { ship: 'Tumbril Cyclone MT', loaner: 'Aurora MR'},
  { ship: 'Tumbril Cyclone AA', loaner: 'Aurora MR'},
  { ship: 'Tumbril Cyclone RC', loaner: 'Aurora MR'}, //verified
  { ship: 'Drake Dragonfly', loaner: 'Aurora MR'},
  { ship: 'Drake Dragonfly Yellowjacket', loaner: 'Aurora MR'}, //verified
  { ship: 'MISC Endeavor', loaner: 'Starfarer, Cutlass Red'}, //verified
  { ship: 'MISC Expanse', loaner: 'Prospector, Reliant Kore'}, //verified
  { ship: 'Origin G12', loaner: 'Cyclone TR'}, //verified
  { ship: 'Origin G12A', loaner: 'Cyclone AA'},
  { ship: 'Origin G12R', loaner: 'Cyclone RC'},
  { ship: 'Genesis Starliner', loaner: 'Hercules C2'},
  { ship: 'Hull B', loaner: 'Hull A'},
  { ship: 'Hull C', loaner: 'Hull A, Hercules C2'}, //verified
  { ship: 'Hull D', loaner: 'Hull A, Hercules C2'},
  { ship: 'Hull E', loaner: 'Hull A, Hercules C2'}, 
  { ship: 'Anvil Hurricane', loaner: 'F7C-M Super Hornet'}, //verified
  { ship: 'Idris-M Frigate', loaner: 'Hammerhead, Vanguard Harbinger, MPUV Passenger '}, //verified
  { ship: 'Idris-P Frigate', loaner: 'Hammerhead, Vanguard Harbinger, MPUV Passenger '},
  { ship: 'Javelin', loaner: 'Hammerhead, Vanguard Harbinger, MPUV Cargo'},
  { ship: 'Drake Kraken', loaner: 'Hammerhead, Caterpillar, and Buccaneer'},
  { ship: 'Drake Kraken Privateer', loaner: 'Hammerhead, Caterpillar, and Buccaneer'}, //verified
  { ship: 'Anvil Liberator', loaner: 'Hercules M2, F7C-M Super Hornet'}, //verified
  { ship: 'Anvil Legionnaire', loaner: 'Vanguard Hoplite'}, //verified
  { ship: 'Constellation Phoenix', loaner: 'URSA Rover (for Lynx Rover)'},
  { ship: 'Mantis', loaner: 'Aurora LN'}, //verified
  { ship: 'Banu Merchantman', loaner: 'Defender, Hercules C2'}, //verified
  { ship: 'Drake Mule', loaner: 'Aurora MR'}, //verified
  { ship: 'Nautilus', loaner: 'Hammerhead, Avenger Titan'}, //verified
  { ship: 'Tumbril - Nova Tank', loaner: 'Aurora MR'}, 
  { ship: 'Nox', loaner: 'Aurora MR'},
  { ship: 'Nox Kue', loaner: 'Aurora MR'},  //verified
  { ship: 'Odyssey', loaner: 'Carrack, Reliant Kore, Nomad'}, //verified
  { ship: 'RSI Orion', loaner: 'Prospector, Mole'}, //verified
  { ship: 'RSI Perseus', loaner: 'Hammerhead, Vanguard Harbinger'}, //verified
  { ship: 'Consolidated Outland Pioneer', loaner: 'Caterpillar, Nomad'}, //verified
  { ship: 'Polaris', loaner: 'Hammerhead, Vanguard Harbinger'}, //verified
  { ship: 'Gatac Railen', loaner: 'Constellation Taurus, Khartu-al'}, //verified
  { ship: 'Tumbril Ranger CV', loaner: 'Cyclone'}, 
  { ship: 'Tumbril Ranger RC', loaner: 'Cyclone RC'}, //verified
  { ship: 'Tumbril Ranger TR', loaner: 'Cyclone TR'},
  { ship: 'Redeemer', loaner: 'Arrow'}, //verified
  { ship: 'Reliant Kore', loaner: 'Nomad'},
  { ship: 'Reliant Mako - News Van', loaner: 'Nomad'}, //verified
  { ship: 'Reliant Sen - Researcher', loaner: 'Nomad'}, //verified
  { ship: 'Reliant Tana', loaner: 'Nomad'},
  { ship: 'Retaliator Base', loaner: 'Gladiator'},
  { ship: 'Retaliator Bomber', loaner: 'Gladiator'}, //verified
  { ship: 'Greycat Industrial - ROC', loaner: 'Aurora MR'},
  { ship: 'GRIN ROC DS', loaner: 'Aurora MR'},
  { ship: 'San\'Tok.yai', loaner: 'Khartu-al'},  
  { ship: 'Argo SRV', loaner: 'Prospector'}, //verified 
  { ship: 'Terrapin', loaner: 'F7C-M Super Hornet'}, //verified
  { ship: 'Anvil Valkyrie', loaner: 'F7C-M Super Hornet'}, //verified
  { ship: 'AEGIS Vulcan', loaner: 'Starfarer'}, //verified
  { ship: 'Drake Vulture', loaner: 'Prospector, Buccaneer'}, //verified
  { ship: 'Origin X1', loaner: 'Aurora MR, Nox'},
  { ship: 'Origin X1 - FORCE', loaner: 'Aurora MR, Nox'} //verified
]

const init = function() {

  const allTitles = document.getElementsByClassName('title');

  for (var i = 0; i < allTitles.length; i++) {

    let thisItem = allTitles.item(i).innerHTML;

    for(var n = 0; n < loanerMatrix.length; n++) {
      const yourShip = thisItem.replace(/\s/g,'');
      const matrixShip = loanerMatrix[n].ship.replace(/\s/g,'');
      if (yourShip === matrixShip) {
        //console.log(loanerMatrix[n].ship);
        const parentItemBox = allTitles[i].closest('.item');
        const parentItemHasClass = parentItemBox != null;
        if (parentItemHasClass) {
          parentItemBox.classList.add('hasLoaner');
        }
        const parentRow = allTitles[i].closest('.row');
        const parentHasClass = parentRow !== null;
        const parentItem = document.createElement('div');
        if (parentHasClass) {
          parentRow.classList.add('hasLoaner');
        }
        const injectElement = document.createElement('div');
        injectElement.className = 'loaners';
        injectElement.innerHTML = 'Loaners:' + loanerMatrix[n].loaner;

        const parentTextBox = allTitles[i].closest('.text');
        const parentTextHasClass = parentTextBox != null;
        if (parentTextHasClass) {
          parentTextBox.appendChild(injectElement);
        }

      }

    }

  }

}

init();


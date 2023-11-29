
//reset class dropdown on refresh
const classSelect = document.getElementById('class-select');
classSelect.value = 0;

// getting all spells as default option on load
async function fetchAllSpells() {
  try {
    const response = await fetch(`https://www.dnd5eapi.co/api/spells`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const spellNames = data.results.map((spell) => spell.name);


    // put class spells into spell dropdown
    populateDropdown(spellNames);
  } catch (error) {
    console.error(`Error fetching all spells:`, error.message);
  }
}
fetchAllSpells();



// narrowing spells based on class input
async function fetchClassSpells(className) {
  try {

    const response = await fetch(`https://www.dnd5eapi.co/api/classes/${className}/spells`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const spellNames = data.results.map((spell) => spell.name);

    // put class spells into spell dropdown
    populateDropdown(spellNames);

  } catch (error) {
    console.error(`Error fetching ${className} spells:`, error.message);
  }
}

//populating the spell dropdown menu
function populateDropdown(spellNames) {
  const spellSelect = document.getElementById('spell-select');
  // Clear existing options
  spellSelect.innerHTML = '';


  // if no spells are found (this shouldn't occur though)
  if (spellNames.length == 0) {
    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'No spells available for this class.';
    spellSelect.add(defaultOption);

    const spellBox = document.getElementById("spell-info");
    // Clear existing
    spellBox.innerHTML = '';

    const martialText = document.createElement('h3');
    spellBox.appendChild(martialText);
    martialText.textContent = "No spells available for this class.";

  }

  // if spells are found
  else {
    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Select a spell';
    spellSelect.add(defaultOption);

    // Add spell names to the dropdown



    spellNames.forEach((spellName) => {

      const option = document.createElement('option');
      option.text = spellName;
      spellSelect.add(option);

    });
  }
}


// getting spell data
async function fetchSpellDetails(spell) {
  try {
    // format text for url
    spell = spell.replace(/ /g, '-');

    const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spell}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    /// all the pieces of spell data
    const Name = data.name;
    const Desc = data.desc;
    const Range = data.range;
    const Components = data.components;
    const Material = data.material;
    const Ritual = data.ritual;
    const Duration = data.duration;
    const Concentration = data.concentration;
    const CastingTime = data.casting_time;
    const Level = data.level;
    const School = data.school.name;

    //text box
    const spellBox = document.getElementById("spell-info");

    // Clear existing
    spellBox.innerHTML = '';

    // Name
    const spellName = document.createElement('h2');
    spellBox.appendChild(spellName);
    const strongElement = document.createElement('strong');
    strongElement.textContent = Name;
    spellName.appendChild(strongElement);

    // Description
    const spellDesc = document.createElement('h3');

    Desc.forEach((line) => {
      const h = document.createElement('h3');
      h.textContent = line;
      spellBox.appendChild(h);
    })


    // Range
    const spellRange = document.createElement('h3');
    spellBox.appendChild(spellRange);
    spellRange.appendChild(document.createElement('strong')).textContent = 'Range:';
    spellRange.appendChild(document.createTextNode(` ${Range}`));

    // Components
    const spellComponents = document.createElement('h3');
    spellBox.appendChild(spellComponents);
    spellComponents.appendChild(document.createElement('strong')).textContent = 'Components:';
    spellComponents.appendChild(document.createTextNode(` ${Components}`));

    // Material
    const spellMaterial = document.createElement('h3');
    spellBox.appendChild(spellMaterial);
    spellMaterial.appendChild(document.createElement('strong')).textContent = 'Material:';
    spellMaterial.appendChild(document.createTextNode(` ${Material || 'None'}`));

    // Duration
    const spellDuration = document.createElement('h3');
    spellBox.appendChild(spellDuration);
    spellDuration.appendChild(document.createElement('strong')).textContent = 'Duration:';
    spellDuration.appendChild(document.createTextNode(` ${Duration}`));

    // Concentration
    const spellConcentration = document.createElement('h3');
    spellBox.appendChild(spellConcentration);
    spellConcentration.appendChild(document.createElement('strong')).textContent = 'Concentration:';
    spellConcentration.appendChild(document.createTextNode(` ${Concentration ? 'Yes' : 'No'}`));

    // Casting Time
    const spellCastingTime = document.createElement('h3');
    spellBox.appendChild(spellCastingTime);
    spellCastingTime.appendChild(document.createElement('strong')).textContent = 'Casting Time:';
    spellCastingTime.appendChild(document.createTextNode(` ${CastingTime}`));

    // Level
    const spellLevel = document.createElement('h3');
    spellBox.appendChild(spellLevel);
    spellLevel.appendChild(document.createElement('strong')).textContent = 'Level:';
    spellLevel.appendChild(document.createTextNode(` ${Level}`));

    // School
    const spellSchool = document.createElement('h3');
    spellBox.appendChild(spellSchool);
    spellSchool.appendChild(document.createElement('strong')).textContent = 'School:';
    spellSchool.appendChild(document.createTextNode(` ${School}`));

  } catch (error) {
    console.error(`Error fetching ${spell} data:`, error.message);
  }
}

// Event listener for class dropdown change
document.getElementById('class-select').addEventListener('change', async function () {
  const selectedClassName = this.options[this.selectedIndex].textContent.toLowerCase();
  await fetchClassSpells(selectedClassName);
})

// Event listener for spell dropdown change
document.getElementById('spell-select').addEventListener('change', async function () {
  const selectedSpellName = this.value.toLowerCase();
  await fetchSpellDetails(selectedSpellName);
})

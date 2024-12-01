async function fetchAndPopulateDropdowns() 
{
    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,currencies,flags");
      const countries = await response.json();
      const fromDropdown = document.getElementById("from-currency");
      const toDropdown = document.getElementById("to-currency");
  
      countries.forEach(country => {
        if (country.currencies) {
          Object.entries(country.currencies).forEach(([code, details]) => {
            const option = createDropdownOption(country.flags.svg, code, details.name);
            fromDropdown.insertAdjacentHTML("beforeend", option);
            toDropdown.insertAdjacentHTML("beforeend", option);
          });
        }
      });
  
      addDropdownListeners(fromDropdown, toDropdown);
    } catch (error) {
      displayMessage("error", "Failed to load currencies. Please try again later.");
    }
  }
  
  
  function createDropdownOption(flag, code, name) {
    return `
      <div data-value="${code}" data-name="${name}">
        <img src="${flag}" alt="${code} flag">
        ${code} - ${name}
      </div>
    `;
  }
  
  
  function addDropdownListeners(...dropdowns)
   {
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", event => {
        const option = event.target.closest("div[data-value]");
        if (option) {
          const button = dropdown.closest(".dropdown").querySelector(".dropbtn");
          const currencyCode = option.dataset.value;
          const currencyName = option.dataset.name;
  
          
          button.textContent = `${currencyCode} - ${currencyName}`;
          button.dataset.value = currencyCode; 
        }
      });
    });
  }
  
  function displayMessage(type, message) 
  {
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
  
    resultDiv.classList.toggle("hidden", type !== "result");
    errorDiv.classList.toggle("hidden", type !== "error");
  
    if (type === "result") resultDiv.textContent = message;
    else errorDiv.textContent = message;
  
    setTimeout(() => {
      resultDiv.classList.add("hidden");
      errorDiv.classList.add("hidden");
    }, 5000);
  }

  fetchAndPopulateDropdowns();
  document.getElementById("convert").addEventListener("click", convertCurrency);
  
  function convertCurrency() 
  {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.querySelector("#from-dropdown .dropbtn").dataset.value;
    const toCurrency = document.querySelector("#to-dropdown .dropbtn").dataset.value;
  }
  
  
  
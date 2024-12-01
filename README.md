 ## Currency Converter 

A **Currency Converter** that allows users to convert amounts between two currencies using real-time exchange rates. The app features a clean, responsive design, built with semantic HTML, CSS, and JavaScript. It fetches data dynamically from APIs to populate the currency dropdowns and performs live conversions using an Exchange Rate API.

---

### Features
- **Real-Time Exchange Rates**: Uses a live API to fetch up-to-date conversion rates.
- **Dynamic Dropdowns**: Currency options with flags and full names are dynamically populated.
- **Responsive Design**: Fully responsive layout with clean UI elements
- **Error Handling**: Displays error messages for invalid inputs or API issues.
- **Interactive UI**: Highlight effects and shadows make the design visually appealing.

---

### Tasks Implemented
#### **Task 01: Input Field for Amount**
- Added an input field labeled **"Enter Amount"** with:
  - A placeholder value of `100`.
  - The `required` attribute to ensure valid input.

#### **Task 02: Currency Dropdowns**
- Implemented two dropdown menus for selecting currencies:
  - Used placeholder options like `USD - United States Dollar` and `INR - Indian Rupee`.
  - Added a **TO** label between the dropdowns to indicate the conversion direction.
- Below the dropdowns, a **"Convert"** button was added to trigger the calculation.

#### **Task 03: Page Styling**
- Applied the **Lato** font family from Google Fonts.
- Set the background color of the page to `#f4f4f4`.
- Added shadow effects to text and center-aligned all content.

#### **Task 04: Content Section Styling**
- Styled the main content section with:
  - Background color: `#F8D800`.
  - Center-aligned text and auto-adjusting height.
  - Slight shadow and rounded corners.
- Enhanced interactivity by:
  - Highlighting the input field on focus with a border color of `#555`.
  - Styling the **Convert** button with:
    - Blue background: `#007bff`.
    - White text and a shadow effect.

#### **Task 05: Result and Error Messages**
- Styled dynamic result and error messages:
  - **Result Example**: `100 USD = 8,407.52 INR`.
  - **Error Example**: `An error occurred, please try again later`.
  - Result: Centered and bold.
  - Error: Styled in red for attention.
- Result and error messages are hidden initially and displayed dynamically using JavaScript.

#### **Task 06: Country List API Integration**
- Fetched details (currency name, code, flag) from the **Country List API**.
- Populated dropdown menus dynamically with:
  - Currency format: `USD - United States Dollar`.
  - Country flag icons for visual aid.

#### **Task 07: Exchange Rate API Integration**
- Registered on the **ExchangeRate API** and integrated the API key.
- Updated the Currency Conversion API endpoint to include:
  - `fromCurrency` and `toCurrency` variables.
  - API key for authentication.
- On clicking the **Convert** button:
  - Real-time conversion is performed and displayed dynamically.

---

### Technologies Used
- **HTML**: Semantic structure for better readability and SEO.
- **CSS**: Styled with Flexbox and Grid for responsive design.
- **JavaScript**: Fetches data and performs conversion calculations.
- **APIs**:
  - **Country List API**: To fetch country flags and currency names.
  - **ExchangeRate API**: To fetch real-time exchange rates.

---

### Installation Guide
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Akshada-26/Currency-Converter
   cd Currency-Converter
   ```
2. **Install Dependencies**:
   - No additional dependencies are required as the app uses JavaScript.
3. **Run the App**:
   - Open `index.html` in your preferred browser.

---

### Usage Guide
1. Enter an amount in the input field.
2. Select the **From Currency** and **To Currency** from the dropdown menus.
3. Click the **Convert** button.
4. View the converted value dynamically displayed on the screen.
5. Handle any errors or invalid inputs with the styled error messages.

---

### API References
- **Country List API**: [https://restcountries.com/](https://restcountries.com/)
  - Fetched country flags, names, and currency codes.
- **ExchangeRate API**: [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/)
  - Provides real-time currency conversion rates.

---

### Example API Endpoints
1. **Country List API**:
   ```url
   https://restcountries.com/v3.1/all?fields=name,currencies,flags
   ```
2. **Exchange Rate API**:
   ```url
   https://v6.exchangerate-api.com/v6/<yourApiKey>/pair/USD/INR
   ```

---

### Screenshots
#### Input and Dropdowns
- Shows the "Enter Amount" field and currency selection dropdowns with flags and codes.

#### Conversion Result
- Displays formatted result: `100 USD = 8,407.52 INR`.

#### Error Handling
- Displays styled error message: `An error occurred, please try again later`.

---

### License
This project is licensed under the MIT License. See the LICENSE file for details.


### Project Outputs 

![image](https://github.com/user-attachments/assets/eb411d9b-ee23-4e3a-ab12-a03812ee9c94)

![image](https://github.com/user-attachments/assets/1d471101-963e-419e-85b0-6b866219a2f6)

![image](https://github.com/user-attachments/assets/3eeb05d3-13a9-4886-a4f2-fde24e0d0a6b)

![image](https://github.com/user-attachments/assets/7625af05-e632-43c7-98d0-43b03a617251)



/**
 * @param {string[]} countries
 */
 export const getDropdown = (countries) => {
    console.log(countries);
    let htmlValue = `<option value="">Please select</option>`;
    countries.forEach(country => htmlValue += `<option value="${country.toLowerCase()}">${country}</option>`)
   return htmlValue;
}

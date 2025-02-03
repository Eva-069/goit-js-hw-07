const categoriesList = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const categoriesElements = item.querySelectorAll('li')
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesElements.length}`);
    
});




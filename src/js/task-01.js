// F I R S T     T A S K

const countNumberOfCategories = () => {
    const categoriesEl = document.querySelectorAll('.item');
    const numberOfCategoriesEl = categoriesEl.length;
    console.log('Number of categories: ', numberOfCategoriesEl);
}

countNumberOfCategories();



// S E C O N D     T A S K

// First variant: separately for each category
const showTitleAndAmountOfSubparagraphsOfOneCategory = category => {
    const headerOfCategory = category.querySelector('h2');
    const textOfHeader = headerOfCategory.textContent;
    console.log('Category: ', textOfHeader)

    const subparagraphsOfCategory = category.querySelectorAll('li');
    const amountOfSubparagraphs = subparagraphsOfCategory.length;
    console.log('Elements: ', amountOfSubparagraphs);
}

// showTitleAndAmountOfSubparagraphsOfOneCategory(categoriesEl[0]);
// showTitleAndAmountOfSubparagraphsOfOneCategory(categoriesEl[1]);
// showTitleAndAmountOfSubparagraphsOfOneCategory(categoriesEl[2]);


// Second variant: for all categories in the list
const showTitleAndAmountOfSubparagraphs = list => {
    const allCategories = list.querySelectorAll('#categories > li');
    allCategories.forEach((category) => {
        const headerOfCategory = category.querySelector('h2');
        const textOfHeader = headerOfCategory.textContent;
        console.log('Category: ', textOfHeader);

        const subparagraphsOfCategory = category.querySelectorAll('li');
        const amountOfSubparagraphs = subparagraphsOfCategory.length;
        console.log('Elements: ', amountOfSubparagraphs);
    });
}

const mainListEl = document.querySelector('ul#categories');
showTitleAndAmountOfSubparagraphs(mainListEl);
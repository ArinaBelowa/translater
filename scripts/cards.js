//Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
const cardsProject = document.querySelector('.project__list');

// Если такой элемент существует
if (cardsProject) {
//Объявляем переменную priceList и сохраняем в нее элемент с классом price__list, чтобы мы могли добавить новые элементы
        const projectList = cardsProject.querySelector('.project__cardList');

//Создаем объект cardsPriceData, которая содержит данные для трех карточки.
        const cardsProjectData = {
// каждая ссылка содержит level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки).
            project1: {
                naming: 'Переводчик',
                description: 'Он позволит вам переводить слова',
                button: 'Перейти к переводчику',
                link: `translator.html`
            },
            project2: {
                naming: 'Словарь',
                description: 'Он поможет находить слова на разных языках',
                button: 'Перейти к словарю',
                link: `dictionary.html`
            },
        }

//Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки)
        const createCard = (naming, description, link, button) => {
// Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
            const card = `
            <li class="project__card">
                <p class="project__cardName">${naming}</p>
                <p class="project__cardDescription">${description}</p>
                <a class="project__link" href="${link}">${button}</a>
            </li>
        `;
//  Возвращаем значение переменной card
            return card;
        }
// Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
        for (const cardKey in cardsProjectData) {
//Получаем данные одной карточки из объекта cardsPriceData 
            const card = cardsProjectData[cardKey];
//создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
            const cardElement = createCard(card.naming, card.description, card.link, card.button);
// с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
            projectList.insertAdjacentHTML('beforeend', cardElement);
        }
}

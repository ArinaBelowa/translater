const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
        const headerList = headerMenu.querySelector('.menu');

        const menuData = {
            link1: {
                UrlLink: 'index.html',
                title: 'Главная',
            },
            link2: {
                UrlLink: 'translator.html',
                title: 'Переводчик',
            },
            link3: {
                UrlLink: 'dictionary.html',
                title: 'Словарь',
            },
            link4: {
                UrlLink: 'contacts.html',
                title: 'Контакты',
            }
        }

        const createLink = (UrlLink, title) =>{
            const link = `
            <li><a href="${UrlLink}" class="menu__link">${title}</a></li>
            `;
            return link;
        }

        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.UrlLink, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
}

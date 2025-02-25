const HEADER_SEARCH_ADAPTIVE = document.querySelector('.main-header-adaptive__inner');
const HEADER_SEARCH = document.querySelector('.main-header__search');
const MEDIA_QUERY = window.matchMedia('(max-width: 800px)');
const MIN_MEDIA_QUERY = window.matchMedia('(min-width: 800px)');

function adaptiveForm(e) {
    if (e.matches) {
        HEADER_SEARCH_ADAPTIVE.innerHTML = `
                    <button aria-controls="burger-menu" aria-expanded="false" class="main-header-adaptive__menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <form class="main-header__search main-header__search--adaptive">
                        <input type="search" placeholder="Search for products, categories or brands..." class="main-header__search__input" id="main-header__search__input">
                        <label for="main-header__search__input">
                            <img src="/img/icons/search-icon.svg">
                        </label>
                    </form>`;
        HEADER_SEARCH_ADAPTIVE.classList.add('show');
        
// выпадающее меню

        const MENU_OPEN_BTN = document.querySelector('.main-header-adaptive__menu');
        const BURGER_MENU = document.querySelector('.main-header-adaptive__burger-menu');
        const BURGER_MENU_LINKS = document.querySelectorAll('.main-header-adaptive__burger-link');
       
        if (MENU_OPEN_BTN && BURGER_MENU) {
            MENU_OPEN_BTN.addEventListener('click', (e) => {
                BURGER_MENU.classList.toggle('show');

                if (BURGER_MENU.classList.contains('show')) {
                    BURGER_MENU.setAttribute('aria-expanded', 'true')
                    BURGER_MENU.setAttribute('aria-hidden', 'false')
                    BURGER_MENU_LINKS.forEach(link => link.setAttribute('tabindex', '0'))
                } else {
                    BURGER_MENU.setAttribute('aria-expanded', 'false')
                    BURGER_MENU.setAttribute('aria-hidden', 'true')
                    BURGER_MENU_LINKS.forEach(link => link.setAttribute('tabindex', '-1'))
                }
            });
        } else {
                console.error("Header element not found");
        }

        function removeBurgerMenu(mediaQuery) {
            if (!BURGER_MENU) return;

            if(mediaQuery.matches) {
                BURGER_MENU.classList.remove('show');
            }
        }

        removeBurgerMenu(MIN_MEDIA_QUERY);

        MIN_MEDIA_QUERY.addEventListener('change', (e) => removeBurgerMenu(e));

// ====

    } else {
        HEADER_SEARCH.innerHTML = `
            <input type="search" placeholder="Search for products, categories or brands..." class="main-header__search__input" id="main-header__search__input">
            <label for="main-header__search__input">
                <img src="/img/icons/search-icon.svg">
            </label>`;
        HEADER_SEARCH_ADAPTIVE.classList.remove('show');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    if (MEDIA_QUERY && HEADER_SEARCH_ADAPTIVE) {
        MEDIA_QUERY.addEventListener('change', adaptiveForm);
    
        adaptiveForm(MEDIA_QUERY);
    } else {
        console.error("Header element not found");
    }
});

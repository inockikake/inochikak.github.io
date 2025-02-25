export const addProduct = (el, place) => {
    const PRODUCT_HTML = `
        <div class="main__products-item">
            ${el.hasSale && el.salePercent ? `<span class="main__products-item__sale-detail">${el.salePercent}%</span>` : ''}
            <button class="main__products-item__wishlist">
                <img src="/img/icons/heart.svg">
            </button>
            <img class="main__products-item__image" src="${el.img}">
            <a class="main__products-item__title" href="#">${el.name}</a>
            <div class="main__products-item__reviews">
                <img class="main__products-item__reviews-image" src="/img/icons/star/star${el.stars}.svg">
                <span class="main__products-item__reviews__count">${el.reviews}</span>
            </div>
            <p class="main__products-item__price">${el.hasSale ? el.discountPrice : el.price}Kč ${el.hasSale ? `<span>${el.price}Kč</span>` : ''}</p>
            <div class="main__products-item__footer">
                <button class="main__products-item__footer__cart-btn ${el.status ? '' : 'out-of-stock'}">
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1822 0.25H1.07016C0.810156 0.284666 0.59349 0.406 0.420156 0.614C0.246823 0.822001 0.160156 1.056 0.160156 1.316C0.160156 1.576 0.246823 1.81433 0.420156 2.031C0.59349 2.24767 0.810156 2.37333 1.07016 2.408H5.25616L4.50216 12.002V12.184C4.50216 12.7733 4.71449 13.2803 5.13916 13.705C5.56382 14.1297 6.07082 14.342 6.66016 14.342H19.9462C20.4662 14.342 20.9212 14.1817 21.3112 13.861C21.7012 13.5403 21.9482 13.146 22.0522 12.678L24.2882 2.902C24.3228 2.694 24.3402 2.52933 24.3402 2.408C24.3402 1.80133 24.1322 1.29 23.7162 0.874001C23.3002 0.458 22.7888 0.25 22.1822 0.25ZM19.9462 12.158H6.66016L7.41416 2.408H22.1822L19.9462 12.158ZM8.66216 19.75C9.26882 19.75 9.78449 19.5377 10.2092 19.113C10.6338 18.6883 10.8462 18.1727 10.8462 17.566C10.8462 16.9593 10.6338 16.448 10.2092 16.032C9.78449 15.616 9.26882 15.408 8.66216 15.408C8.07282 15.408 7.56582 15.616 7.14116 16.032C6.71649 16.448 6.50416 16.9593 6.50416 17.566C6.50416 18.1727 6.71649 18.6883 7.14116 19.113C7.56582 19.5377 8.07282 19.75 8.66216 19.75ZM18.4122 19.75C19.0188 19.75 19.5345 19.5377 19.9592 19.113C20.3838 18.6883 20.5962 18.1727 20.5962 17.566C20.5962 16.9593 20.3838 16.448 19.9592 16.032C19.5345 15.616 19.0188 15.408 18.4122 15.408C17.8228 15.408 17.3158 15.616 16.8912 16.032C16.4665 16.448 16.2542 16.9593 16.2542 17.566C16.2542 18.1727 16.4665 18.6883 16.8912 19.113C17.3158 19.5377 17.8228 19.75 18.4122 19.75Z" fill="#FFFF"/>
                    </svg>                                        
                </button>
                <span class="main__products-item__footer__status ${el.status ? '' : 'out-of-stock'}">${el.status ? 'in stock' : 'out of stock'}</span>
            </div>
        </div>
    `;

    place.insertAdjacentHTML('beforeend', PRODUCT_HTML);
}


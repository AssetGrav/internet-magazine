export const localStorageBasket = JSON.parse(localStorage.getItem("basket"));

export const addToLocalBasket = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

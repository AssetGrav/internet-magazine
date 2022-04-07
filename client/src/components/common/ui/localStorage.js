export const localBasket = JSON.parse(localStorage.getItem("basket"));
console.log("localBasket", localBasket);

export const addToLocalBasket = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

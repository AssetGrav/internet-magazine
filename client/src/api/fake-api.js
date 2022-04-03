// import { professionsObject as professions } from "./professions.api";
const goods = [
    {
        _id: "67rdcaed471198",
        name: "Солнцезащитный крем SFP 50",
        price: "100",
        photo: "https://static.insales-cdn.com/images/products/1/7950/224722702/450_original.jpg",
        quantity: 3,
        category: "крема",
        unit: "шт"
    },
    {
        _id: "67rdcagee471154",
        name: "Шампунь для жирных волос",
        price: "100",
        photo: "https://volosomagia.ru/wp-content/uploads/2013/03/2-3.jpg",
        quantity: 3,
        category: "шампуни",
        unit: "шт"
    },
    {
        _id: "67rdca3ee471789",
        name: "Корейская маска для лица",
        price: "100",
        photo: "https://maskshop.ru/images/blog/luchshie-tkanevye-maski/mizon-hyaluronic-acid-mask.jpg",
        quantity: 3,
        category: "маски для лица",
        unit: "пачка"
    },
    {
        _id: "67rdca3ee71895",
        name: "Шампунь для восстановления корней",
        price: "100",
        photo: "https://images.wbstatic.net/big/new/15840000/15841621-1.jpg",
        quantity: 3,
        category: "шампуни",
        unit: "шт"
    },
    {
        _id: "67rdcafgee71236",
        name: "Шампунь маска",
        price: "80",
        photo: "https://static2.asna.ru/f0PLFL6CTXy1LW1FVcBhdxAHVXzSjszyq6kZgvpOJRo/fit/500/500/no/1/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2Y5Ny9mOTcwYzIwZDM2ZGY4MTM0MzQ2ZWEzMGQ3MWQ0NWM3Zi80MDk4MjMuanBn.jpg",
        quantity: 3,
        category: "шампуни",
        unit: "бутыль"
    }
];

if (!localStorage.getItem("goods")) {
    localStorage.setItem("goods", JSON.stringify(goods));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("goods")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("goods"));
        const userIndex = users.findIndex((u) => u._id === id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("goods", JSON.stringify(users));
        resolve(users[userIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("goods")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};

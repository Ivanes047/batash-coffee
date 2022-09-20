const dataBase = {
    "coffeeData": [
        {
            "id": 0,
            "imageSrc": "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            "name": "Бразилия Суль де Минас",
            "price": 1690,
            "description": "Интенсивный аромат ореха с тонами темного шоколада, во вкусе ноты лесного ореха и пористого черного шоколада, тело средней плотности с приятным Обволакивающим и чуть вяжущим послевкусием.",
            "acidity": "4/10",
            "bitterness": "5/10",
            "sweetness": "4/10"

        },
        {
            "id": 1,
            "imageSrc": "https://images.unsplash.com/photo-1628236876894-dbde8ff5a944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
            "name": "Бразилия Серрадо",
            "price": 1630,
            "description": "Интенсивный аромат чуть жженной карамели с тонами пряностей и перца, во вкусе темный шоколад и лимонные оттенки,  долгое послевкусие с нотами черного чая и корки лимона.",
            "acidity": "3/10",
            "bitterness": "5/10",
            "sweetness": "5/10"
        },
        {
            "id": 2,
            "imageSrc": "https://images.unsplash.com/photo-1606486544554-164d98da4889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "name": "Эфиопия Сидамо грейд 2",
            "price": 1780,
            "description": "Аромат высокой интенсивности с нотами сладких цветов и пряных трав, во вкусе темная карамель, шоколад и специи, долгое чуть вяжущее и прозрачное послевкусие с тонами свежей сдобы.",
            "acidity": "5/10",
            "bitterness": "5/10",
            "sweetness": "7/10"
        },
        {
            "id": 3,
            "imageSrc": "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            "name": "Колумбия Супремо",
            "price": 2190,
            "description": "Высокий аромат с винными тонами и сладкого варенья, во вкусе ноты светлого шоколада и ванили, послевкусие продолжительное  с тонами чуть перебродившего шоколада.",
            "acidity": "6/10",
            "bitterness": "4/10",
            "sweetness": "7/10"
        },
        {
            "id": 4,
            "imageSrc": "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            "name": "Эфиопия Иргачефф",
            "price": 2300,
            "description": "Обволакивающий аромат с нотами пряных специй и шоколадного маффина, во вкусе черный, сладкий чай ноты грейпфрута и специй, продолжительное послевкусие с тонами сладких фруктов и кожицей зеленного яблока.",
            "acidity": "7/10",
            "bitterness": "5/10",
            "sweetness": "8/10"
        },
        {
            "id": 5,
            "imageSrc": "https://images.unsplash.com/photo-1628236876894-dbde8ff5a944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
            "name": "Эспрессо смесь BATASH COFFEE LC",
            "price": 1410,
            "description": "Профессиональная смесь для автоматического  и полуавтоматического заваривания.",
            "acidity": 0,
            "bitterness": 0,
            "sweetness": 0
        },
        {
            "id": 6,
            "imageSrc": "https://images.unsplash.com/photo-1606486544554-164d98da4889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "name": "Эспрессо смесь BATASH COFFEE CD",
            "price": 1470,
            "description": "Профессиональная смесь для автоматического  и полуавтоматического заваривания.",
            "acidity": 0,
            "bitterness": 0,
            "sweetness": 0
        },
        {
            "id": 7,
            "imageSrc": "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            "name": "Эспрессо смесь BATASH COFFEE GR",
            "price": 1520,
            "description": "Профессиональная смесь для автоматического  и полуавтоматического заваривания.",
            "acidity": 0,
            "bitterness": 0,
            "sweetness": 0
        },
        {
            "id": 8,
            "imageSrc": "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            "name": "Эспрессо смесь BATASH COFFEE RR",
            "price": 1590,
            "description": "Профессиональная смесь подходит для всех видов заваривания.",
            "acidity": 0,
            "bitterness": 0,
            "sweetness": 0
        }
    ]
}

export default dataBase;
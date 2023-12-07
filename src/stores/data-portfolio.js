import { defineStore } from 'pinia'

export const DataPortfolio = defineStore('data-portfolio', {
    state: () => ({

        categoryUl: [
            {
                id: 1,
                title: 'Все',
                quantity: '17'
            },
            {
                id: 2,
                title: 'Аналитика',
                quantity: '5'
            },
            {
                id: 3,
                title: 'Разработка документации',
                quantity: '3'
            },
            {
                id: 4,
                title: 'Разработка сайта',
                quantity: '4'
            },
            {
                id: 5,
                title: 'Заказная разработка',
                quantity: '5'
            },
            {
                id: 6,
                title: 'Разработка продукта',
                quantity: '3'
            },
            {
                id: 7,
                title: 'UI/UX',
                quantity: '4'
            }
        ],

        portfolioExamples: [
            {
                id: 1,
                img: 'src/assets/img/portfolio-example-1.webp',
                title: 'Разработка корпоративного сайта “Охрана труда”',
                categoryOne: 'Разработка сайта',
                categoryTwo: 'Корпоративный сайт'
            },
            {
                id: 2,
                img: 'src/assets/img/portfolio-example-2.webp',
                title: 'Разработка корпоративного сайта “Охрана труда”',
                categoryOne: 'Разработка сайта',
                categoryTwo: 'Корпоративный сайт'
            },
            {
                id: 3,
                img: 'src/assets/img/portfolio-example-2.webp',
                title: 'Разработка корпоративного сайта “Охрана труда”',
                categoryOne: 'Разработка сайта',
                categoryTwo: 'Корпоративный сайт'
            },
            {
                id: 4,
                img: 'src/assets/img/portfolio-example-2.webp',
                title: 'Разработка корпоративного сайта “Охрана труда”',
                categoryOne: 'Разработка сайта',
                categoryTwo: 'Корпоративный сайт'
            },
            {
                id: 5,
                img: 'src/assets/img/portfolio-example-3.webp',
                title: 'Разработка корпоративного сайта “Охрана труда”',
                categoryOne: 'Разработка сайта',
                categoryTwo: 'Корпоративный сайт'
            },
            {
                id: 6,
                img: 'src/assets/img/portfolio-example-1.webp',
                title: 'Разработка корпоративного сайта “Охрана труда”',
                categoryOne: 'Разработка сайта',
                categoryTwo: 'Корпоративный сайт'
            }
        ]

    }) 
})
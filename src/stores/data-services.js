import { defineStore } from 'pinia'

export const DataServices = defineStore('data-services', {
    state: () => ({

        turnkeyDevs: [
            {
                id: 1,
                url: '#',
                title: 'Лендинг',
                description: 'Уникальный дизайн, оптимизированный контент и интуитивно понятная навигация',
                price: '250 000'
            },
            {
                id: 2,
                url: '#',
                title: 'Корпоративный портал',
                description: 'Мы специализируемся на разработке корпоративных порталов с индивидуальным решением для удобной внутренней коммуникации, обмена информацией и координации бизнес-процессов компаний',
                price: '400 000'
            },
            {
                id: 3,
                url: '#',
                title: 'UI/UX',
                description: 'Уникальный дизайн, оптимизированный контент и интуитивно понятная навигация',
                price: '250 000'
            },
            {
                id: 4,
                url: '#',
                title: 'Корпоративный сайт',
                description: 'Функциональный и мощным инструмент для привлечения новых клиентов',
                price: '450 000'
            },
            {
                id: 5,
                url: '#',
                title: 'Сайт - каталог',
                description: 'Функциональный и привлекательный сайт, позволяющий увеличивать вашу конверсию',
                price: '600 000'
            },
            {
                id: 6,
                url: 'development',
                title: 'Разработка продукта',
                description: 'Заинтересовала услуга, один клик и вы узнаете как мы это делаем',
                price: '500 000'
            },
            {
                id: 7,
                url: '#',
                title: 'Интернет-магазин',
                description: 'Современные и удобные интернет-магазины, гарантируя безопасные покупки',
                price: '1 000 000'
            }
        ],

        analyticsDevs: [
            {
                id: 1,
                title: 'Изучение маркетинговых стратегий',
                description: 'Функциональный и привлекательный сайт, позволяющий увеличивать вашу конверсию',
                price: '400 000'
            },
            {
                id: 2,
                title: 'Анализ целевой аудитории',
                description: 'Уникальный дизайн, оптимизированный контент и интуитивно понятная навигация',
                price: '150 000'
            },
            {
                id: 3,
                title: 'Анализ конкурентов',
                description: 'Заинтересовала услуга, один клик и вы узнаете как мы это делаем',
                price: '150 000'
            }
        ],

        documentDevs: [
            {
                id: 1,
                title: 'Сайт',
                description: 'Функциональный и привлекательный сайт, позволяющий увеличивать вашу конверсию',
                price: '400 000'
            },
            {
                id: 2,
                title: 'Продукт',
                description: 'Уникальный дизайн, оптимизированный контент и интуитивно понятная навигация',
                price: '700 000'
            }
        ],

        uiUxDevs: [
            {
                id: 1,
                title: 'Мобильного приложения',
                description: 'Уникальный и интуитивно понятный дизайн мобильных приложений',
                price: '500 000'
            },
            {
                id: 2,
                title: 'Продукта',
                description: 'Создание дизайна продукта, который привлекателен и легко понятен для пользователей',
                price: '1 500 000'
            },
            {
                id: 3,
                title: 'Сайта',
                description: 'Высококачественный и интуитивно понятный дизайн для веб-сайта',
                price: '250 000'
            }
        ],

        orderDevs: [
            {
                id: 1,
                title: 'Проектирование базы-данных',
                description: 'Эффективная и надежная база данных, обеспечивающая оптимальное хранение, управление и доступ к вашей информации',
                price: '250 000'
            },
            {
                id: 2,
                title: 'Бекенд',
                description: 'Надежные и масштабируемые серверные системы для ваших задач',
                price: '600 000'
            },
            {
                id: 3,
                title: 'Фронтенд',
                description: 'Привлекательные и современные пользовательские интерфейсы',
                price: '700 000'
            },
            {
                id: 3,
                title: 'Разработка продукта',
                description: 'Индивидуальные продукты, адаптированные к уникальным потребностям вашего бизнеса',
                price: '1 000 000'
            }
        ]
    })
})
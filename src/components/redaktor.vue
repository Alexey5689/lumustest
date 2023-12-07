footer__divider active-divider


active-footer-light
footer__left-absolute left-absolute-active
footer__left-side active-left-side

active-footer-dark
footer__left-absolute left-absolute-inactive
footer__left-side inactive-left-side



active-footer-dark
footer__right-absolute right-absolute-active
footer__right-side active-right-side

active-footer-light
footer__right-absolute right-absolute-inactive
footer__right-side inactive-right-side


<!-- -------------------------------------------------------------------------------- -->

<template>
    <footer class="footer" @mouseover="addActiveClass" @mouseout="removeActiveClass">
        <div class="wrapper">
            <div class="footer__left-absolute"
                @mouseover="addActiveFooter('left-absolute-active', 'right-absolute-inactive', 'active-footer-light')"
                @mouseout="removeActiveFooter('left-absolute-active', 'right-absolute-inactive', 'active-footer-light')">
                <p class="footer__switcher-left">Зона активного поля <span>навигации</span></p>
            </div>

            <div class="footer__right-absolute"
                @mouseover="addActiveFooter('right-absolute-active', 'left-absolute-inactive', 'active-footer-dark')"
                @mouseout="removeActiveFooter('right-absolute-active', 'left-absolute-inactive', 'active-footer-dark')">
                <p class="footer__switcher-right">Зона активного поля <span>контактов</span></p>
            </div>

            <span class="footer__divider"></span>

            <div class="footer__left-side">
                <nav>
                    <ul>
                        <li>О компании</li>
                        <li>Контакты</li>
                        <li>
                            <RouterLink to="/portfolio">Портфолио</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/services">Услуги</RouterLink>
                        </li>
                    </ul>
                </nav>
                <p class="footer__rights">IT-компания lumos.ru, 2023 © Все права защищены</p>
            </div>

            <div class="footer__right-side">
                <div class="footer__contacts">
                    <p class="footer__phone">+7 (912) 345-67-89</p>
                    <p class="footer__mail">it@lumos.ru</p>
                </div>
                <div class="footer__links">
                    <a href="">ВКонтакте</a>
                    <a href="">Telegram</a>
                    <a href="">Behance</a>
                    <a href="">Dribbble</a>
                </div>
            </div>
        </div>

        <div class="footer__mobile">
            <p class="footer__phone">+7 (912) 345-67-89</p>
            <p class="footer__rights">IT-компания lumos.ru, 2023 © Все права защищены</p>
        </div>
    </footer>
</template>
  
<script>
export default {
    methods: {
        addActiveClass() {
            const divider = this.$el.querySelector('.footer__divider');
            if (divider) {
                divider.classList.add('active-divider');
            }
        },
        removeActiveClass() {
            const divider = this.$el.querySelector('.footer__divider');
            if (divider) {
                divider.classList.remove('active-divider');
            }
        },
        addActiveFooter(activeClass, inactiveClass, footerClass) {
            this.$el.classList.add(footerClass);
            this.$el.querySelector('.footer__left-absolute').classList.add(activeClass);
            this.$el.querySelector('.footer__right-absolute').classList.add(inactiveClass);
        },
        removeActiveFooter(activeClass, inactiveClass, footerClass) {
            this.$el.classList.remove(footerClass);
            this.$el.querySelector('.footer__left-absolute').classList.remove(activeClass);
            this.$el.querySelector('.footer__right-absolute').classList.remove(inactiveClass);
        },
    },
};
</script>
 
  
<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__left-absolute">
                <p class="footer__switcher-left">Зона активного поля <span>навигации</span></p>
            </div>

            <div class="footer__right-absolute">
                <p class="footer__switcher-right">Зона активного поля <span>контактов</span></p>
            </div>
            <span class="footer__divider"></span>
            <div class="footer__left-side">
                <nav>
                    <ul>
                        <li>О компании</li>
                        <li>Контакты</li>
                        <li>Портфолио</li>
                        <li>Услуги</li>
                    </ul>
                </nav>
                <p class="footer__rights">IT-компания lumos.ru, 2023 © Все права защищены</p>

            </div>
            <div class="footer__right-side">
                <div class="footer__contacts">
                    <p class="footer__phone">+7 (912) 345-67-89</p>
                    <p class="footer__mail">it@lumos.ru</p>
                </div>
                <div class="footer__links">
                    <a href="">ВКонтакте</a>
                    <a href="">Telegram</a>
                    <a href="">Behance</a>
                    <a href="">Dribbble</a>
                </div>
            </div>
        </div>
        <div class="footer__mobile">
            <p class="footer__phone">+7 (912) 345-67-89</p>
            <p class="footer__rights">IT-компания lumos.ru, 2023 © Все права защищены</p>
        </div>
    </footer>
</template>
  
  
<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__left-absolute">
                <p class="footer__switcher-left">Зона активного поля <span>навигации</span></p>
            </div>

            <div class="footer__right-absolute">
                <p class="footer__switcher-right">Зона активного поля <span>контактов</span></p>
            </div>
            
        </div>
    </footer>
</template>
  
  

  
  
  
  


  
  
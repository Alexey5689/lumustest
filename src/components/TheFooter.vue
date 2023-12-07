<!-- <script setup>
import { RouterLink } from 'vue-router'
</script> -->

<!-- <template>
    <footer class="footer" @mouseover="addActiveClass" @mouseout="removeActiveClass">
        <div class="wrapper">
            <div class="footer__left-absolute" @mouseover="addActiveFooterLight" @mouseout="removeActiveFooterLight">
                <p class="footer__switcher-left">Зона активного поля <span>навигации</span></p>
            </div>

            <div class="footer__right-absolute" @mouseover="addActiveFooterDark" @mouseout="removeActiveFooterDark">
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
</template> -->

<!-- <script>
export default {
    methods: {
        addActiveClass() {
            const divider = document.querySelector('.footer__divider');
            if (divider) {
                divider.classList.add('active-divider');
            }
        },
        removeActiveClass() {
            const divider = document.querySelector('.footer__divider');
            if (divider) {
                divider.classList.remove('active-divider');
            }
        },


        addActiveFooterLight() {
            this.$el.classList.add('active-footer-light');
        },
        removeActiveFooterLight() {
            this.$el.classList.remove('active-footer-light');
        },
        addActiveFooterDark() {
            this.$el.classList.add('active-footer-dark');
        },
        removeActiveFooterDark() {
            this.$el.classList.remove('active-footer-dark');
        }
    }
};
</script> -->

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- <template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__left-absolute" @mouseover="handleLeftMouseOver" @mouseleave="handleMouseLeave('left')"
                :class="{ 'left-absolute-active': isLeftActive, 'left-absolute-inactive': !isLeftActive }">
                <p class="footer__switcher-left">Зона активного поля <span>навигации</span></p>
            </div>

            <div class="footer__right-absolute" @mouseover="handleRightMouseOver" @mouseleave="handleMouseLeave('right')"
                :class="{ 'right-absolute-active': isRightActive, 'right-absolute-inactive': !isRightActive }">
                <p class="footer__switcher-right">Зона активного поля <span>контактов</span></p>
            </div>
            
        </div>
    </footer>
</template>
  
<script>
export default {
    data() {
        return {
            isLeftActive: false,
            isRightActive: false,
        };
    },
    methods: {
        handleLeftMouseOver() {
            this.isLeftActive = true;
            this.isRightActive = false;
        },
        handleRightMouseOver() {
            this.isRightActive = true;
            this.isLeftActive = false;
        },
        handleMouseLeave(side) {
            if (side === 'left') {
                this.isLeftActive = false;
            } else if (side === 'right') {
                this.isRightActive = false;
            }
        },
    },
};
</script> -->

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<template>
  <footer
    class="footer"
    :class="{
      'active-footer-light': leftAbsoluteActive,
      'active-footer-dark': rightAbsoluteActive,
    }"
  >
    <div class="wrapper">
      <div
        @mouseenter="hoverLeftAbsolute"
        @mouseleave="noHover"
        class="footer__left-absolute"
        :class="{
          'left-absolute-active': leftAbsoluteActive,
          'left-absolute-inactive': leftAbsoluteInactive,
        }"
      >
        <p class="footer__switcher-left">
          Зона активного поля <span>навигации</span>
        </p>
      </div>

      <div
        @mouseenter="hoverRightAbsolute"
        @mouseleave="noHover"
        class="footer__right-absolute"
        :class="{
          'right-absolute-active': rightAbsoluteActive,
          'right-absolute-inactive': rightAbsoluteInactive,
        }"
      >
        <p class="footer__switcher-right">
          Зона активного поля <span>контактов</span>
        </p>
      </div>

      <span
        v-show="!rightAbsoluteActive && !leftAbsoluteActive"
        class="footer__divider"
      ></span>

      <div
        class="footer__left-side"
        :class="{
          'active-left-side': leftAbsoluteActive,
          'inactive-left-side': rightAbsoluteActive,
        }"
      >
        <nav @mouseenter="hoverLeftAbsolute" @mouseleave="noHover">
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
        <p class="footer__rights">
          IT-компания lumos.ru, 2023 © Все права защищены
        </p>
      </div>

      <div
        @mouseenter="hoverRightAbsolute"
        @mouseleave="noHover"
        class="footer__right-side"
        :class="{
          'active-right-side': rightAbsoluteActive,
          'inactive-right-side': leftAbsoluteActive,
        }"
      >
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
  </footer>
</template>

<script>
export default {
  data() {
    return {
      leftAbsoluteActive: false,
      leftAbsoluteInactive: false,
      rightAbsoluteActive: false,
      rightAbsoluteInactive: false,
    };
  },
  methods: {
    hoverLeftAbsolute() {
      this.leftAbsoluteActive = true;
      this.rightAbsoluteInactive = true;
    },
    hoverRightAbsolute() {
      this.rightAbsoluteActive = true;
      this.leftAbsoluteInactive = true;
    },
    noHover() {
      this.leftAbsoluteActive = false;
      this.leftAbsoluteInactive = false;
      this.rightAbsoluteActive = false;
      this.rightAbsoluteInactive = false;
    },
  },
};
</script>

<style scoped>
.footer__left-side li a {
  text-decoration: none;
  color: #1e1e1e;
}
</style>

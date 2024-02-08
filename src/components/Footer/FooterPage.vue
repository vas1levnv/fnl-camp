<template>
  <footer class="footer" :style="{'background-image': 'url(' + footerBg + ')'}">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-sponsors">
          <a href="https://1fnl.ru/" target="_blank" class="footer-logo">
            <fnl-icon/>
          </a>
          <a href="https://hd.kinopoisk.ru/sport/" target="_blank"><img :src="kinopoisk" alt="kinopoisk"></a>
          <a href="https://betboom.ru" target="_blank"><img :src="betboom" alt="betboom"></a>
          <a href="https://www.sportmaster.ru/promo/2149276/" target="_blank"><img :src="sportmaster" alt="sportmaster"></a>
        </div>
        <div class="footer-list">
          <a href="https://t.me/FNL_org" target="_blank">
            <telegram-icon/>
          </a>
          <a href="https://vk.com/fnl_org" target="_blank">
            <vk-icon/>
          </a>
          <a href="https://youtube.com/@fnl_tv?si=QLuaeEaodx7tplwf" target="_blank">
            <youtube-icon/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerBg from '@/assets/img/footer-bg.png'
import FnlIcon from "@/components/icons/FnlIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import VkIcon from "@/components/icons/VkIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import sportmaster from "@/assets/img/footer-sportmaster.png"
import betboom from "@/assets/img/footer-betboom.png"
import kinopoisk from "@/assets/img/footer-kinopoisk.png"

</script>

<style scoped lang="scss">
.footer {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 40vh;
    min-height: 450px;
    padding: 5rem 0;
  }

  &-logo {
    display: block;
    width: 56px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &-sponsors {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  &-list {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .footer {
    &-wrapper {
      min-height: 300px;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      gap: 1rem;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    &-wrapper {
      height: 20vh;
      min-height: 200px;
      padding: 2rem 0;
    }
  }
}

@media (max-width: 576px) {
  .footer {

    &-wrapper {
      height: auto;
    }

    &-sponsors {
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
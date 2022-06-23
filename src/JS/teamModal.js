import * as basicLightbox from 'basiclightbox';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { loadStorage } from './localStorage';

import denysUrl from '../images/team/Den.png';
import denysUrl2 from '../images/team/Den_2x.png';
import denysUrlTab from '../images/team/Den_tab.png';
import denysUrlTab2 from '../images/team/Den_tab_2x.png';
import eduardUrl from '../images/team/Ed.png';
import eduardUrl2 from '../images/team/Ed_2x.png';
import eduardUrlTab from '../images/team/Ed_tab.png';
import eduardUrlTab2 from '../images/team/Ed_tab_2x.png';
import hannaUrl from '../images/team/Hanna.png';
import hannaUrl2 from '../images/team/Hanna_2x.png';
import hannaUrltab from '../images/team/Hanna_tab.png';
import hannaUrltab2 from '../images/team/Hanna_tab_2x.png';
import romanUrl from '../images/team/Roma.png';
import romanUrl2 from '../images/team/Roma_2x.png';
import romanUrlTab from '../images/team/Roma_tab.png';
import romanUrlTab2 from '../images/team/Roma_tab_2x.png';
import vitaliiUrl from '../images/team/Vitaliy.png';
import vitaliiUrl2 from '../images/team/Vitaliy_2x.png';
import vitaliiUrlTab from '../images/team/Vitaliy_tab.png';
import vitaliiUrlTab2 from '../images/team/Vitaliy_tab_2x.png';
import volodymyrUrl from '../images/team/Vova.png';
import volodymyrUrl2 from '../images/team/Vova_2x.png';
import volodymyrUrlTab from '../images/team/Vova_tab.png';
import volodymyrUrlTab2 from '../images/team/Vova_tab_2x.png';
import yakovUrl from '../images/team/Yasha.png';
import yakovUrl2 from '../images/team/Yasha_2x.png';
import yakovUrlTab from '../images/team/Yasha_tab.png';
import yakovUrlTab2 from '../images/team/Yasha_tab_2x.png';
import yuriiUrl from '../images/team/Yra.png';
import yuriiUrl2 from '../images/team/Yra_2x.png';
import yuriiUrlTab from '../images/team/Yra_tab.png';
import yuriiUrlTab2 from '../images/team/Yra_tab_2x.png';
import tetianaUrl from '../images/team/Tanya.png';
import tetianaUrl2 from '../images/team/Tanya_2x.png';
import tetianaUrlTab from '../images/team/Tanya_tab.png';
import tetianaUrlTab2 from '../images/team/Tanya_tab_2x.png';

const scrollUpBtn = document.querySelector('.scroll-process');
const teamLink = document.querySelector('.team__link');
// const htmlEl = document.querySelector('html');
// const bodyel = document.querySelector('body');
teamLink.addEventListener('click', onTeamLinkClick);

const contactLink = {
  github: {
    eduard: 'https://github.com/EduardSergienko',
    hanna: 'https://github.com/Hanna-Pylypenko',
    denys: 'https://github.com/DenysTutov',
    tetiana: 'https://github.com/Tetiana1192',
    vitalii: 'https://github.com/BalVil',
    yurii: 'https://github.com/orogoro',
    volodymyr: 'https://github.com/Volodymyr1974',
    roman: 'https://github.com/rmnmaksimenko',
  },
  email: {
    eduard: 'mailto:katleraster@gmail.com',
    hanna: 'mailto:pilipenkog679@gmail.com',
    denys: 'mailto:tutov1987@gmail.com',
    tetiana: '#',
    vitalii: 'mailto:balutavili@gmail.com',
    yurii: 'mailto:mega_se7en@ukr.net',
    volodymyr: 'mailto:vbzvar@gmail.com',
    roman: 'mailto:romanmaksimenkodev@gmail.com',
  },
  linkedin: {
    eduard: 'https://www.linkedin.com/in/eduard-sergienko-79b443227/',
    hanna: 'https://www.linkedin.com/in/hanna-pylypenko-081857200',
    denys: 'https://www.linkedin.com/in/denys-tutov-1b0449a8/',
    tetiana: '#',
    vitalii: 'https://www.linkedin.com/in/vitalii-baluta-a78065241/',
    yurii:
      'https://www.linkedin.com/in/yurii-dvornichenko-5948a1241/?trk=public-profile-join-page',
    volodymyr: 'https://www.linkedin.com/in/volodymyr-zvarych-246441b1/',
    roman: '#',
  },
};

const teamModal = basicLightbox.create(
  `<div class="modal-team">
  <h2 class="team-modal__title">ILIT team</h2>
  <ul class="team-modal__list">
    <li class="team-modal__item">
      <h3 class="team-modal__name">Eduard Sergienko</h3>
      <p class="team-modal__position">Team Lead</p>
      <picture>
      <source
			srcset="
			${eduardUrlTab} 1x,
			${eduardUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${eduardUrl} 1x,
			${eduardUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${eduardUrl}"
        alt="Eduard"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
      <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.eduard}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.eduard}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.linkedin.eduard}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="team-modal__item">
      <h3 class="team-modal__name">Hanna Pylypenko</h3>
      <p class="team-modal__position">Scrum master</p>
     <picture>
      <source
			srcset="
			${hannaUrltab} 1x,
			${hannaUrltab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${hannaUrl} 1x,
			${hannaUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${hannaUrl}"
        alt="Hanna"
        class="team-modal__img"
        loading="lazy"   
      />
      </picture>
      <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.hanna}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.hanna}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.linkedin.hanna}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="team-modal__item">
      <h3 class="team-modal__name">Denys Tutov</h3>
      <p class="team-modal__position">Developer</p>
      <picture>
      <source
			srcset="
			${denysUrlTab} 1x,
			${denysUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${denysUrl} 1x,
			${denysUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${denysUrl}"
        alt="Denys"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
       <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.denys}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.denys}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.linkedin.denys}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
     <li class="team-modal__item">
      <h3 class="team-modal__name">Roman Maksimenko</h3>
      <p class="team-modal__position">Developer</p>
             <picture>
      <source
			srcset="
			${romanUrlTab} 1x,
			${romanUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${romanUrl} 1x,
			${romanUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${romanUrl}"
        alt="Roman"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
       <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.roman}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.roman}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link disabled" href="${contactLink.linkedin.roman}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z"/>
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
   
    <li class="team-modal__item">
      <h3 class="team-modal__name">Vitalii Baluta</h3>
      <p class="team-modal__position">Developer</p>
      <picture>
      <source
			srcset="
			${vitaliiUrlTab} 1x,
			${vitaliiUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${vitaliiUrl} 1x,
			${vitaliiUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${vitaliiUrl}"
        alt="Vitalii"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
       <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.vitalii}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.vitalii}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.linkedin.vitalii}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="team-modal__item">
      <h3 class="team-modal__name">Volodymyr Zvarych</h3>
      <p class="team-modal__position">Developer</p>
         <picture>
      <source
			srcset="
			${volodymyrUrlTab} 1x,
			${volodymyrUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${volodymyrUrl} 1x,
			${volodymyrUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${volodymyrUrl}"
        alt="Volodymyr"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
      <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.volodymyr}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.volodymyr}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.linkedin.volodymyr}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
    
    <li class="team-modal__item">
      <h3 class="team-modal__name">Yurii Dvornichenko</h3>
      <p class="team-modal__position">Developer</p>
             <picture>
      <source
			srcset="
			${yuriiUrlTab} 1x,
			${yuriiUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${yuriiUrl} 1x,
			${yuriiUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${yuriiUrl}"
        alt="Yurii"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
       <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.yurii}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.email.yurii}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.linkedin.yurii}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="team-modal__item">
      <h3 class="team-modal__name">Tetiana Polyvian</h3>
      <p class="team-modal__position">Developer</p>
      <picture>
      <source
			srcset="
			${tetianaUrlTab} 1x,
			${tetianaUrlTab2} 2x"
			type="image/png"
			media="(max-width: 1023px)" loading="lazy" />
       <source
			srcset="
			${tetianaUrl} 1x,
			${tetianaUrl2} 2x"
			type="image/png"
			media="(min-width: 1024px)" loading="lazy" />
      <img
        src="${tetianaUrl}"
        alt="Tetiana"
        class="team-modal__img"  
        loading="lazy" 
      />
      </picture>
       <div class="social-box">
        <ul class="social-box__list">
          <li class="social-box__item">
            <a class="social-box__link" href="${contactLink.github.tetiana}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.47427 0.955078C3.82488 0.955078 0.0537109 4.72625 0.0537109 9.37563C0.0537109 13.0951 2.48172 16.2464 5.78795 17.3829C6.20123 17.4346 6.35621 17.1763 6.35621 16.9696C6.35621 16.763 6.35621 16.2464 6.35621 15.5232C4.03152 16.0398 3.51492 14.3866 3.51492 14.3866C3.1533 13.4051 2.58504 13.1468 2.58504 13.1468C1.81015 12.6302 2.6367 12.6302 2.6367 12.6302C3.46326 12.6819 3.9282 13.5084 3.9282 13.5084C4.7031 14.7999 5.89127 14.4383 6.35621 14.2317C6.40787 13.6634 6.66617 13.3018 6.87281 13.0951C5.01306 12.8885 3.04998 12.1653 3.04998 8.9107C3.04998 7.98082 3.35994 7.25758 3.9282 6.63766C3.87654 6.48268 3.56658 5.60447 4.03152 4.46795C4.03152 4.46795 4.75476 4.26131 6.35621 5.34617C7.02779 5.13953 7.75103 5.08787 8.47427 5.08787C9.1975 5.08787 9.92074 5.19119 10.5923 5.34617C12.1938 4.26131 12.917 4.46795 12.917 4.46795C13.382 5.60447 13.072 6.48268 13.0203 6.68932C13.5369 7.25758 13.8985 8.03248 13.8985 8.96236C13.8985 12.2169 11.9355 12.8885 10.0757 13.0951C10.3857 13.3534 10.644 13.87 10.644 14.6449C10.644 15.7815 10.644 16.6597 10.644 16.9696C10.644 17.1763 10.799 17.4346 11.2122 17.3829C14.5701 16.2464 16.9465 13.0951 16.9465 9.37563C16.8948 4.72625 13.1237 0.955078 8.47427 0.955078Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link disabled" href="${contactLink.email.tetiana}">
              <svg class="social-box__icon"  viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7775 9.36415C16.7775 8.76522 16.7237 8.18933 16.6239 7.63647H8.66895V10.9037H13.2146C13.0188 11.9595 12.4238 12.854 11.5292 13.453V15.5723H14.2589C15.8561 14.1018 16.7775 11.9365 16.7775 9.36415Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 17.6184C10.9491 17.6184 12.8611 16.8621 14.2586 15.5721L11.5289 13.4528C10.7725 13.9596 9.80504 14.2591 8.66862 14.2591C6.46871 14.2591 4.60667 12.7733 3.94247 10.7769H1.12061V12.9652C2.51042 15.7257 5.36684 17.6184 8.66862 17.6184Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.94267 10.7769C3.77374 10.2701 3.67776 9.7288 3.67776 9.17211C3.67776 8.61541 3.77374 8.07408 3.94267 7.56729V5.37891H1.1208C0.54875 6.51917 0.222412 7.80917 0.222412 9.17211C0.222412 10.5351 0.54875 11.825 1.1208 12.9653L3.94267 10.7769Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66862 4.0852C9.9087 4.0852 11.0221 4.51135 11.8974 5.34832L14.32 2.92573C12.8573 1.56279 10.9453 0.72583 8.66862 0.72583C5.36684 0.72583 2.51042 2.61859 1.12061 5.37903L3.94247 7.56742C4.60667 5.57099 6.46871 4.0852 8.66862 4.0852Z" />
</svg>
            </a>
          </li>
          <li class="social-box__item">
            <a class="social-box__link disabled" href="${contactLink.linkedin.tetiana}" target="_blank">
             <svg class="social-box__icon"  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8346 7.536V12.1948H10.1075V7.82007C10.1075 6.7406 9.70984 6.00202 8.74399 6.00202C8.00541 6.00202 7.55089 6.51334 7.38045 6.96786C7.32363 7.1383 7.26682 7.36556 7.26682 7.64963V12.1948H4.53974C4.53974 12.1948 4.59655 4.80892 4.53974 4.07033H7.26682V5.20662C7.60771 4.63847 8.28948 3.84307 9.70983 3.84307C11.4711 3.84307 12.8346 5.03617 12.8346 7.536ZM1.69902 0.150146C0.789994 0.150146 0.165039 0.775103 0.165039 1.5705C0.165039 2.3659 0.733181 2.99086 1.64221 2.99086C2.60805 2.99086 3.17619 2.3659 3.17619 1.5705C3.23301 0.718289 2.66487 0.150146 1.69902 0.150146ZM0.335481 12.1948H3.06257V4.07033H0.335481V12.1948Z" />
</svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  <button type="button" class="team-modal__close-modal">
  <svg class="team-modal__close-modal-svg" width="30" height="31" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.85889L22 22.8589" stroke-width="2"/>
<path d="M8 22.8589L22 8.85889"  stroke-width="2"/>
</svg>
  </button>
</div>
`,
  {
    className: 'basic-style',
    onShow: () => {
      scrollUpBtn.classList.add('is-hidden');
      // htmlEl.classList.add('hidscroll');
      // bodyel.classList.add('hidscroll');
    },

    onClose: () => {
      window.removeEventListener('keydown', onEscClick), enablePageScroll();
      scrollUpBtn.classList.remove('is-hidden');
    },
  }
);
function onTeamLinkClick(evt) {
  evt.preventDefault();
  teamModal.show();

  const bsLbx = document.querySelector('.basic-style');
  disablePageScroll(bsLbx);

  const boxHolder = document.querySelector('.basicLightbox__placeholder');
  boxHolder.classList.add('modal_centre');

  const closeModal = document.querySelector('.team-modal__close-modal');
  closeModal.addEventListener('click', onCloseModalBtnClick);

  window.addEventListener('keydown', onEscClick);
  // Тёмная тема
  if (loadStorage('Night')) {
    document.querySelector('.modal-team').classList.add('dark-theme');
    document
      .querySelector('.team-modal__close-modal-svg')
      .classList.add('dark-theme');
    const socialIcons = document.querySelectorAll('.social-box__icon');
    for (let i = 0; i < socialIcons.length; i++) {
      socialIcons[i].classList.add('dark-theme');
    }
  } else {
    document.querySelector('.modal-team').classList.remove('dark-theme');
    document
      .querySelector('.team-modal__close-modal-svg')
      .classList.remove('dark-theme');
    const socialIcons = document.querySelectorAll('.social-box__icon');
    for (let i = 0; i < socialIcons.length; i++) {
      socialIcons[i].classList.remove('dark-theme');
    }
  }
}
function onCloseModalBtnClick() {
  teamModal.close();
}
function onEscClick(evt) {
  if (evt.code === 'Escape') {
    teamModal.close();
    enablePageScroll();
  }
}

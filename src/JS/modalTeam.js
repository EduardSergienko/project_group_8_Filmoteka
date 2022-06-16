// import * as basicLightbox from 'basiclightbox';

// import denysUrl from '../images/team/denys-tutov.jpg';

// import eduardUrl from '../images/team/eduard-sergienko.jpg';

// import hannaUrl from '../images/team/hanna-pylypenko.jpg';

// import romanUrl from '../images/team/roman-maksimenko.jpg';

// import vitaliiUrl from '../images/team/vitalii-baluta.jpg';

// import volodymyrUrl from '../images/team/volodymyr-zvarych.jpg';

// import yakovUrl from '../images/team/yakov-yakimenko.jpg';

// import yuriiUrl from '../images/team/yurii-dvornichenko.jpg';

// import tetianaUrl from '../images/team/tetiana-polyvian.jpg';

// const developers = [
//   {
//     nameTeam: 'Eduard',
//     lastName: 'Sergienko',
//     img: `${eduardUrl}`,
//     roleTeam: 'Team-lead',

//   },
//   // 2
//   {
//     nameTeam: 'Tetiana',
//     lastName: 'Polyvian',
//     img: `${tetianaUrl}`,
//     roleTeam: 'Scrum master',
//   },
//   // 3
//   {
//     nameTeam: 'Hanna',
//     lastName: 'Pylypenko',
//     img: `${hannaUrl}`,
//     roleTeam: 'Developer',
//   },
//   // 4
//   {
//     nameTeam: 'Vitalii',
//     lastName: 'Baluta',
//     img: `${vitaliiUrl}`,
//     roleTeam: 'Developer',
//   },
//   // 5
//   {
//     nameTeam: 'Volodymyr',
//     lastName: 'Zvarych',
//     img: `${volodymyrUrl}`,
//     roleTeam: 'Developer',
//   },
//   // 6
//   {
//     nameTeam: 'Roman',
//     lastName: 'Maksimenko',
//     img: `${romanUrl}`,
//     roleTeam: 'Developer',
//   },
//   // 7
//   {
//     nameTeam: 'Denys',
//     lastName: 'Tutov',
//     img: `${denysUrl}`,
//     roleTeam: 'Developer',
//   },
//   // 8
//   {
//    nameTeam: 'Yurii',
//     lastName: 'Dvornichenko',
//     img: `${yuriiUrl}`,
//     roleTeam: 'Developer',
//   },
//   // 9
//   {
//     nameTeam: 'Yakov',
//     lastName: 'Yakimenko',
//     img: `${yakovUrl}`,
//     roleTeam: 'Developer',

//   },
// ];

// const markupTeamArry = developers

//     .map(({ nameTeam, lastName, img, roleTeam, }) => {
//         return `
//     <li class="team-modal__item">
//     <img class="team-modal__img" src="${img}" alt="${nameTeam}">
//     <h3 class="team-modal__text--name">${lastName}<br>${nameTeam}</h3>
//     <p class="team-modal__text--role">${roleTeam}</p>
//     </li>`;
//     })
//     .join('');

// const markupModal = `<h2 class="team-modal__title">Developers</h2>
// <button type="button" class="team-modal__close-btn" data-team-modal-close>
// <svg class="team-modal__icon-close" width="30" height="30"
//  xmlns="http://www.w3.org/2000/svg">
//  <path d="m7.975 8-.699.701 3.149 3.149 3.15 3.15-3.138 3.138L7.3 21.275l.712.713.713.712 3.137-3.137L15 16.425l3.138 3.138 3.137 3.137.713-.712.712-.713-3.137-3.137L16.425 15l3.15-3.15 3.15-3.15-.713-.712-.712-.713-3.15 3.15-3.15 3.15-3.138-3.138C10.137 8.712 8.713 7.3 8.699 7.3c-.014 0-.34.315-.724.7"
// fill-rule="evenodd"/></svg>
// </button>
// < ul class="team-modal__list" >
// ${markupTeamArry}
// </ul>
// </div >`;

// const container = document.querySelector('.developers');

// container.addEventListener('click', openModal);

// const modal = basicLightbox.create(markupModal);

// function openModal(e) {
//   e.preventDefault();
//   modal.show();
//   const body = document.querySelector('body');

//   const closeModalBtn = document.querySelector('[data-team-modal-close]');
//   closeModalBtn.addEventListener('click', closeModal);
//   window.addEventListener('keydown', closeModalHandler);
//   const backdrop = document.querySelector('.basicLightbox');
// backdrop.addEventListener('click', closeBackdrop);

//     function closeModal(e) {
//     modal.close();

//     closeModalBtn.removeEventListener('click', closeModal);
//   }

// function closeModalHandler(e) {
//     if (e.key === 'Escape') {
//       modal.close();

//       window.removeEventListener('keydown', closeModalHandler);
//     }
//   }

//   function closeBackdrop(e) {
//     if (e.target === backdrop) {
//       modal.close();
//       анагпргрро
//       backdrop.removeEventListener('click', closeBackdrop);
//     }
//   }
// }
// ____

import { loadStorage } from './localStorage';

const buttonColorChange = {
  CallButtonColorChange() {
    if (loadStorage('Night')) {
      this.changeButtonColor(true);
    } else {
      this.changeButtonColor(false);
    }
  },
  changeButtonColor(bool) {
    const allPageButtons = document.querySelectorAll('.tui-page-btn');
    if (allPageButtons.length > 0) {
      for (let i = 0; i < allPageButtons.length; i++) {
        this.forArray(allPageButtons, bool);
      }
    }
  },
  forArray(array, bool) {
    for (let i = 0; i < array.length; i++) {
      if (bool) {
        array[i].classList.add('dark-theme');
      } else {
        array[i].classList.remove('dark-theme');
      }
    }
  },
  switchButtonClass(marker, bool) {
    marker = document.querySelector(marker);
    if (marker) {
      if (bool) {
        marker.classList.add('dark-theme');
      } else {
        marker.classList.remove('dark-theme');
      }
    }
  },
};

export default buttonColorChange;

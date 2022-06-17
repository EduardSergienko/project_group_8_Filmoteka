import { loadStorage } from './localStorage';

export default buttonColorChange = {
  CallButtonColorChange() {
    if (loadStorage('Sun')) {
      this.changeButtonColor(true);
    } else {
      this.changeButtonColor(false);
    }
  },
  changeButtonColor(bool) {
    const allPageButtons = document.querySelectorAll(
      '.tui-page-btn.tui-page-number'
    );
    if (allPageButtons.length > 0) {
      for (let i = 0; i < allPageButtons.length; i++) {
        this.forArray(allPageButtons, bool);
      }
    }

    this.switchButtonClass('.tui-page-btn tui-prev-is-ellip', bool);
    this.switchButtonClass('.tui-page-btn.tui-next-is-ellip', bool);
    this.switchButtonClass('.tui-page-btn.tui-prev.custom-prev', bool);
    this.switchButtonClass('.tui-page-btn.tui-next.custom-next', bool);
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

/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'large');

const ignoredA11y = {
  label: { enabled: false },
};

describe('Form-Textarea', () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/default-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-textarea-background-color': '#f2f2f2',
        '--terra-form-textarea-border-color': '#337b33',
        '--terra-form-textarea-border-radius': '0.5rem',
        '--terra-form-textarea-border-style': 'dashed',
        '--terra-form-textarea-border-width': '2px',
        '--terra-form-textarea-color': '#f12233',
        '--terra-form-textarea-cursor': 'auto',
        '--terra-form-textarea-font-size': '1.3rem',
        '--terra-form-textarea-line-height': '1.25',
        '--terra-form-textarea-padding-bottom': '0.5rem',
        '--terra-form-textarea-padding-left': '0.5rem',
        '--terra-form-textarea-padding-right': '0.5rem',
        '--terra-form-textarea-padding-top': '0.5rem',
        '--terra-form-textarea-disabled-background': 'rgba(250, 250, 255, 0.1)',
        '--terra-form-textarea-disabled-border-color': '#3e7795',
        '--terra-form-textarea-disabled-border-style': 'solid',
        '--terra-form-textarea-disabled-border-width': '2px',
        '--terra-form-textarea-disabled-opacity': '0.4',
        '--terra-form-textarea-error-focus-animation-background': 'linear-gradient(to bottom, #ff232a, #ff232a)',
        '--terra-form-textarea-error-border-color': '#ff232a',
        '--terra-form-textarea-error-border-style': 'solid',
        '--terra-form-textarea-error-border-width': '2px',
        '--terra-form-textarea-error-disabled-background': 'rgba(255, 250, 250, 0.1)',
        '--terra-form-textarea-error-disabled-border-color': '#f12233',
        '--terra-form-textarea-error-disabled-border-style': 'solid',
        '--terra-form-textarea-error-disabled-border-width': '2px',
        '--terra-form-textarea-error-opacity': '1',
        '--terra-form-textarea-error-focus-keyboard-animation-size': '100% 2px',
        '--terra-form-textarea-error-focus-keyboard-border-color': '#ff232a',
        '--terra-form-textarea-error-focus-keyboard-border-style': 'solid',
        '--terra-form-textarea-error-focus-keyboard-border-width': '2px',
        '--terra-form-textarea-error-focus-keyboard-box-shadow-ltr': 'none',
        '--terra-form-textarea-error-focus-keyboard-box-shadow-rtl': 'none',
        '--terra-form-textarea-error-focus-keyboard-opacity': '1',
        '--terra-form-textarea-error-hover-border-color': '#ff232a',
        '--terra-form-textarea-error-hover-border-style': 'solid',
        '--terra-form-textarea-error-hover-border-width': '2px',
        '--terra-form-textarea-focus-animation-background': 'linear-gradient(to bottom, #6553e5, #6553e5)',
        '--terra-form-textarea-focus-background-start': '0 2px',
        '--terra-form-textarea-focus-opacity': '1',
        '--terra-form-textarea-focus-transition-duration': '0s',
        '--terra-form-textarea-focus-transition-timing-function': 'none',
        '--terra-form-textarea-focus-keyboard-animation-size': '100% 2px',
        '--terra-form-textarea-focus-keyboard-border-color': '#337b33',
        '--terra-form-textarea-focus-keyboard-border-style': 'solid',
        '--terra-form-textarea-focus-keyboard-border-width': '2px',
        '--terra-form-textarea-focus-keyboard-box-shadow-ltr': 'none',
        '--terra-form-textarea-focus-keyboard-box-shadow-rtl': 'none',
        '--terra-form-textarea-focus-keyboard-opacity': '1',
        '--terra-form-textarea-hover-border-color': '#337b33',
        '--terra-form-textarea-hover-border-style': 'solid',
        '--terra-form-textarea-hover-border-width': '2px',
      },
    });
  });


  describe('Props Populated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/populated-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-textarea-background-color': '#f2f2f2',
        '--terra-form-textarea-border-color': '#337b33',
        '--terra-form-textarea-border-radius': '0.5rem',
        '--terra-form-textarea-border-style': 'dashed',
        '--terra-form-textarea-border-width': '2px',
        '--terra-form-textarea-color': '#f12233',
        '--terra-form-textarea-cursor': 'auto',
        '--terra-form-textarea-font-size': '1.3rem',
        '--terra-form-textarea-line-height': '1.25',
        '--terra-form-textarea-padding-bottom': '0.5rem',
        '--terra-form-textarea-padding-left': '0.5rem',
        '--terra-form-textarea-padding-right': '0.5rem',
        '--terra-form-textarea-padding-top': '0.5rem',
        '--terra-form-textarea-disabled-background': 'rgba(250, 250, 255, 0.1)',
        '--terra-form-textarea-disabled-border-color': '#3e7795',
        '--terra-form-textarea-disabled-border-style': 'solid',
        '--terra-form-textarea-disabled-border-width': '2px',
        '--terra-form-textarea-disabled-opacity': '0.4',
        '--terra-form-textarea-error-focus-animation-background': 'linear-gradient(to bottom, #ff232a, #ff232a)',
        '--terra-form-textarea-error-border-color': '#ff232a',
        '--terra-form-textarea-error-border-style': 'solid',
        '--terra-form-textarea-error-border-width': '2px',
        '--terra-form-textarea-error-disabled-background': 'rgba(255, 250, 250, 0.1)',
        '--terra-form-textarea-error-disabled-border-color': '#f12233',
        '--terra-form-textarea-error-disabled-border-style': 'solid',
        '--terra-form-textarea-error-disabled-border-width': '2px',
        '--terra-form-textarea-error-opacity': '1',
        '--terra-form-textarea-error-focus-keyboard-animation-size': '100% 2px',
        '--terra-form-textarea-error-focus-keyboard-border-color': '#ff232a',
        '--terra-form-textarea-error-focus-keyboard-border-style': 'solid',
        '--terra-form-textarea-error-focus-keyboard-border-width': '2px',
        '--terra-form-textarea-error-focus-keyboard-box-shadow-ltr': 'none',
        '--terra-form-textarea-error-focus-keyboard-box-shadow-rtl': 'none',
        '--terra-form-textarea-error-focus-keyboard-opacity': '1',
        '--terra-form-textarea-error-hover-border-color': '#ff232a',
        '--terra-form-textarea-error-hover-border-style': 'solid',
        '--terra-form-textarea-error-hover-border-width': '2px',
        '--terra-form-textarea-focus-animation-background': 'linear-gradient(to bottom, #6553e5, #6553e5)',
        '--terra-form-textarea-focus-background-start': '0 2px',
        '--terra-form-textarea-focus-opacity': '1',
        '--terra-form-textarea-focus-transition-duration': '0s',
        '--terra-form-textarea-focus-transition-timing-function': 'none',
        '--terra-form-textarea-focus-keyboard-animation-size': '100% 2px',
        '--terra-form-textarea-focus-keyboard-border-color': '#337b33',
        '--terra-form-textarea-focus-keyboard-border-style': 'solid',
        '--terra-form-textarea-focus-keyboard-border-width': '2px',
        '--terra-form-textarea-focus-keyboard-box-shadow-ltr': 'none',
        '--terra-form-textarea-focus-keyboard-box-shadow-rtl': 'none',
        '--terra-form-textarea-focus-keyboard-opacity': '1',
        '--terra-form-textarea-hover-border-color': '#337b33',
        '--terra-form-textarea-hover-border-style': 'solid',
        '--terra-form-textarea-hover-border-width': '2px',
      },
    });
  });

  describe('Invalid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/invalid-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-textarea-background-color': '#f2f2f2',
        '--terra-form-textarea-border-color': '#337b33',
        '--terra-form-textarea-border-radius': '0.5rem',
        '--terra-form-textarea-border-style': 'dashed',
        '--terra-form-textarea-border-width': '2px',
        '--terra-form-textarea-color': '#f12233',
        '--terra-form-textarea-cursor': 'auto',
        '--terra-form-textarea-font-size': '1.3rem',
        '--terra-form-textarea-line-height': '1.25',
        '--terra-form-textarea-padding-bottom': '0.5rem',
        '--terra-form-textarea-padding-left': '0.5rem',
        '--terra-form-textarea-padding-right': '0.5rem',
        '--terra-form-textarea-padding-top': '0.5rem',
        '--terra-form-textarea-disabled-background': 'rgba(250, 250, 255, 0.1)',
        '--terra-form-textarea-disabled-border-color': '#3e7795',
        '--terra-form-textarea-disabled-border-style': 'solid',
        '--terra-form-textarea-disabled-border-width': '2px',
        '--terra-form-textarea-disabled-opacity': '0.4',
        '--terra-form-textarea-error-focus-animation-background': 'linear-gradient(to bottom, #ff232a, #ff232a)',
        '--terra-form-textarea-error-border-color': '#ff232a',
        '--terra-form-textarea-error-border-style': 'solid',
        '--terra-form-textarea-error-border-width': '2px',
        '--terra-form-textarea-error-disabled-background': 'rgba(255, 250, 250, 0.1)',
        '--terra-form-textarea-error-disabled-border-color': '#f12233',
        '--terra-form-textarea-error-disabled-border-style': 'solid',
        '--terra-form-textarea-error-disabled-border-width': '2px',
        '--terra-form-textarea-error-opacity': '1',
        '--terra-form-textarea-error-focus-keyboard-animation-size': '100% 2px',
        '--terra-form-textarea-error-focus-keyboard-border-color': '#ff232a',
        '--terra-form-textarea-error-focus-keyboard-border-style': 'solid',
        '--terra-form-textarea-error-focus-keyboard-border-width': '2px',
        '--terra-form-textarea-error-focus-keyboard-box-shadow-ltr': 'none',
        '--terra-form-textarea-error-focus-keyboard-box-shadow-rtl': 'none',
        '--terra-form-textarea-error-focus-keyboard-opacity': '1',
        '--terra-form-textarea-error-hover-border-color': '#ff232a',
        '--terra-form-textarea-error-hover-border-style': 'solid',
        '--terra-form-textarea-error-hover-border-width': '2px',
        '--terra-form-textarea-focus-animation-background': 'linear-gradient(to bottom, #6553e5, #6553e5)',
        '--terra-form-textarea-focus-background-start': '0 2px',
        '--terra-form-textarea-focus-opacity': '1',
        '--terra-form-textarea-focus-transition-duration': '0s',
        '--terra-form-textarea-focus-transition-timing-function': 'none',
        '--terra-form-textarea-focus-keyboard-animation-size': '100% 2px',
        '--terra-form-textarea-focus-keyboard-border-color': '#337b33',
        '--terra-form-textarea-focus-keyboard-border-style': 'solid',
        '--terra-form-textarea-focus-keyboard-border-width': '2px',
        '--terra-form-textarea-focus-keyboard-box-shadow-ltr': 'none',
        '--terra-form-textarea-focus-keyboard-box-shadow-rtl': 'none',
        '--terra-form-textarea-focus-keyboard-opacity': '1',
        '--terra-form-textarea-hover-border-color': '#337b33',
        '--terra-form-textarea-hover-border-style': 'solid',
        '--terra-form-textarea-hover-border-width': '2px',
      },
    });
  });

  describe('Small Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/small-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Medium Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Large Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/large-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Full Size Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/full-textarea');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });


  describe('AutoResizable Textarea', () => {
    describe('Resizes when given several rows of input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('textarea').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.should.matchScreenshot('1', { viewports });
    });

    describe('Does not resize textareas that are non-resizable', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('textarea').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.should.matchScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when ontouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-on-touch-start');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('textarea').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.should.matchScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when DocumentTouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-document-touch');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('textarea').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.should.matchScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when maxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-max-touch-points');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('textarea').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.should.matchScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when msMaxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-ms-max-touch-points');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('textarea').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.should.matchScreenshot('1', { viewports });
    });
  });

  describe('TextareaField', () => {
    describe('Valid TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
      });

      Terra.should.matchScreenshot({ viewports });
    });

    describe('Invalid TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
        browser.click('#validity-toggle');
      });

      Terra.should.matchScreenshot({ viewports });
    });
  });
});

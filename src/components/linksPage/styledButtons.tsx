
import { FC } from 'react';

interface StyleCombination {
  backgroundColor: string;
  borderRadius: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  buttonFont: string;
  buttonTitle: string;


  displayButtonBackground: string;
  displayButtonFont: string;
  displayButtonFontColor: string;
  displayButtonUnderline: string;

}

interface StyleButtonsProps {
  applyStyles: (styles: StyleCombination) => void;
}

// These are the changes that each button will be making to the page.
// Edit this section in future to ensure updated styling.

const styleCombinations: StyleCombination[] = [
  {
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    buttonBackgroundColor: '#5123D0',
    buttonBorderColor: '#5123D0',
    buttonFont: 'VT323',
    buttonTitle: 'Vaporwave',

    displayButtonBackground: '/links-button-bg/bg-vaporwave.svg',
    displayButtonFont: 'Times New Roman',
    displayButtonFontColor: '#DDB62B',
    displayButtonUnderline: 'underline',
  },

  {
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    buttonBackgroundColor: '#eaeaea',
    buttonBorderColor: '#5123D0',
    buttonFont: 'Times New Roman',
    buttonTitle: 'Presentation',

    displayButtonBackground: '/links-button-bg/bg-presentation.svg',
    displayButtonFont: 'Times New Roman',
    displayButtonFontColor: '#ffffff',
    displayButtonUnderline: 'none',

  },

  {
    backgroundColor: '#e0e0e0',
    borderRadius: '0px',
    buttonBackgroundColor: '#333333',
    buttonBorderColor: '#5123D0',
    buttonFont: 'Caveat Brush',
    buttonTitle: 'Paint',
    
    displayButtonBackground: '/links-button-bg/bg-paint.svg',
    displayButtonFont: 'Times New Roman',
    displayButtonFontColor: '#ffffff',
    displayButtonUnderline: 'none',

  },

  {
    backgroundColor: '#d0d0d0',
    borderRadius: '50%',
    buttonBackgroundColor: '#ff6347',
    buttonBorderColor: '#5123D0',
    buttonFont: 'DejaVu Serif',
    buttonTitle: 'Retreat',
    
    displayButtonBackground: '/links-button-bg/bg-retreat.svg',
    displayButtonFont: 'Times New Roman',
    displayButtonFontColor: '#ffffff',
    displayButtonUnderline: 'none',

  },
  
  {
    backgroundColor: '#d0d0d0',
    borderRadius: '0px',
    buttonBackgroundColor: '#ff6347',
    buttonBorderColor: '#5123D0',
    buttonFont: 'Times New Roman',
    buttonTitle: 'Computer Lab',
    
    displayButtonBackground: '/links-button-bg/bg-computerlab.svg',
    displayButtonFont: 'Times New Roman',
    displayButtonFontColor: '#000000',
    displayButtonUnderline: 'none',

  },

  {
    backgroundColor: '#d0d0d0',
    borderRadius: '50%',
    buttonBackgroundColor: '#ff6347',
    buttonBorderColor: '#5123D0',
    buttonFont: 'Times New Roman',
    buttonTitle: 'Y2K',
    
    displayButtonBackground: '/links-button-bg/bg-y2k.svg',
    displayButtonFont: 'Times New Roman',
    displayButtonFontColor: '#ffffff',
    displayButtonUnderline: 'none',

  },

];



  const StyleButtons: FC<StyleButtonsProps> = ({ applyStyles }) => {
    return (
      <div className="grid grid-cols-2 pb-10 px-8 -pt-8 gap-7 self-center w-full h-full ">
        {styleCombinations.map((styles, index) => (
          <button
            key={index}
            className={`p-4 bg-contain bg-center bg-no-repeat w-[100%] h-[200%] hover:bg-opacity-70`}
            style={{
              backgroundImage: `url(${styles.displayButtonBackground})`,
              color: styles.displayButtonFontColor,
              font: styles.displayButtonFont || 'inherit',
              textDecoration: styles.displayButtonUnderline,
            }}
            onClick={() => applyStyles(styles)}
          >
            {styles.buttonTitle}
          </button>
        ))}
      </div>
    );
  };
  
  export default StyleButtons;
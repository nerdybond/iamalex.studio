
export interface LightDarkSwitchCombinations {
  backgroundColor: string;
  textColor: string;
  maskImage: string;
  maskPosition: string;
  heroCarouselWords: string[];
  skillCarouselWords: string[];

  heroText: string;
  textMaskURL: string;
  freeSpaceText: string;

  aboutUsTitle: string;
  aboutUsText: string;
}



export const LightDarkSwitchCombinations = [
{
    backgroundColor: '#ffffff',
    textColor: '#000000',
    maskImage: 'url(/svg-mask/i-am-alex.svg)',
    maskPosition: '52.5% 15%',
    heroCarouselWords: ['inspire', 'thrive', 'surprise'],
    skillCarouselWords: [ 'Prototypes', 'Web Design', 'Research and Strategy', 'Visual Identity', 'Channel Strategy', 'Web Development', 'Product Design', 'Brand Development', 'Visual Identity', 'Print Design', 'App Development', 'Brand Strategy'],

    heroText: 'A group of web designers and devs who',
    textMaskURL: './i-am-alex.svg',
    freeSpaceText: 'Free Space',

    aboutUsTitle: 'Content is ever changing. So should we.',
    aboutUsText: 'I wanted to start this studio to show you both what is involved with running your own creative studio, and to show the wealth of experience I have amassed through years of committed work.',
},

{
    backgroundColor: '#212830',
    textColor: '#ffffff',
    maskImage: 'url(/svg-mask/capitalism.svg)',
    maskPosition: '48% 59.75%',
    heroCarouselWords: ['slayyy', 'boots the house down', 'knocks ya socks off'],
    skillCarouselWords: [ 'Memes', 'Memes', 'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes',  'Memes'],

    heroText: 'A completely generic studio run by a bunch of nerds who',
    textMaskURL: './capitalism.svg',
    freeSpaceText: 'Free Shit',

    aboutUsTitle: 'Never stop never stopping.',
    aboutUsText: 'We are nerds who missed MySpace and thought we were all natural-born comedians. \n\n We love to make art, memes, websites, and expand our horizons into new tech and improving our collaborations with our clients, and finding new ways to reach new connections with customers.  \n\n We do try to be respectful and well-meaning when creating content and products, so we do apologise if anything does cross the line.',
 }

  ];
  
  
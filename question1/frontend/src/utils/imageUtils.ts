const randomImages: string[] = [
    'https://source.unsplash.com/random/200x200',
    'https://source.unsplash.com/random/300x200',
    'https://source.unsplash.com/random/250x250',
  ];
  
  export const getRandomImage = (): string => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };
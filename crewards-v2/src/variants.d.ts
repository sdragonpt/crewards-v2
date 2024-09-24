declare module '../variants' {
    type Direction = 'up' | 'down' | 'left' | 'right';
  
    interface FadeInAnimation {
      hidden: {
        y: number;
        x: number;
      };
      show: {
        y: number;
        x: number;
        opacity: number;
        transition: {
          type: string;
          duration: number;
          delay: number;
          ease: number[];
        };
      };
    }
  
    export const fadeIn: (direction: Direction, delay: number) => FadeInAnimation;
  }
  
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: string;

    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
  
      grey: string,
      bold_grey: string,
      
      primary_text: string,
      secondary_text: string
    }
  }
}
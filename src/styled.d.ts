// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    // Primary
    primary_100?: string;
    primary_200?: string;
    primary_300?: string;
    primary_400?: string;
    primary_500?: string;
    primary_600?: string;
    primary_700?: string;
    primary_800?: string;
    primary_900?: string;
    // Neutral
    neutral_100?: string;
    neutral_200?: string;
    neutral_300?: string;
    neutral_400?: string;
    neutral_500?: string;
    neutral_600?: string;
    neutral_700?: string;
    neutral_800?: string;
    neutral_900?: string;
    neutral_white?: string;
    neutral_black?: string;
    // Secondary
    secondary_100?: string;
    secondary_200?: string;
    secondary_300?: string;
    secondary_400?: string;
    secondary_500?: string;
    secondary_600?: string;
    secondary_700?: string;
    secondary_800?: string;
    secondary_900?: string;
    // Warning
    warning_100?: string;
    warning_200?: string;
    warning_300?: string;
    warning_400?: string;
    warning_500?: string;
    warning_600?: string;
    warning_700?: string;
    warning_800?: string;
    warning_900?: string;
  }
}

export interface ButtonThemePropertyType {
  active: string;
  disabled: string;
}

interface ButtonThemeType {
  primary: ButtonThemePropertyType;
  primaryOutlined: ButtonThemePropertyType;
  secondary: ButtonThemePropertyType;
  secondaryOutlined: ButtonThemePropertyType;
  tertiary: ButtonThemePropertyType;
  tertiaryOutlined: ButtonThemePropertyType;
  facebook: ButtonThemePropertyType;
  google: ButtonThemePropertyType;
  cancelable: ButtonThemePropertyType;
  text: ButtonThemePropertyType;
}

interface InputThemeType {
  label: string;
  background: string;
  text: {
    default: string;
    valid: string;
    invalid: string;
  };
  placeholder: string;
  icon: {
    default: string;
    valid: string;
  };
  border: {
    empty: string;
    typing: string;
    complete: string;
    error: string;
  };
}

// FIXME: this type must be refined. Not sure if all this information should be put here.
export interface ThemeType {
  input: InputThemeType;
  button: {
    background: ButtonThemeType;
    title: ButtonThemeType;
    border: ButtonThemeType;
  };
  primary: {
    [key: string]: string;
  };
  alerts: {
    [key: string]: string;
  };
  monochromatic: {
    [key: string]: string;
  };
  transparent: string;
  barStyle: 'light-content' | 'default' | 'dark-content';
  background: {
    light: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    base: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    elevated: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
}

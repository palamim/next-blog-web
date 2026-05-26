export enum BrandColor {
  Orange = '#C2410C',
  DarkOrange = '#932A00',
  LightOrange = '#FFE0B2',
}

export class Color {
  public static readonly Primary = BrandColor.Orange;

  public static readonly DarkOrange = BrandColor.DarkOrange;
  public static readonly LightOrange = BrandColor.LightOrange;

  public static readonly Accessory = '#EEC1FD';

  public static readonly Black = '#0c0c0c';
  public static readonly White = '#FFFFFF';

  public static readonly GrayXDark = '#222';
  public static readonly GrayDark = '#555';
  public static readonly Gray = '#BDBDBD';
  public static readonly GrayLight = '#E0E0E0';
  public static readonly GrayXLight = '#F9F9F9';

  public static readonly Background = '#FFFFFF80';
  public static readonly DarkBackground = '#121212';
}

export const Border = {
  Color: Color.GrayXLight,
  Width: '1px',
  Radius: '4px',
  RadiusLarge: '24px',
};

export const MAX_CONTENT_WIDTH = '720px';

export enum Breakpoint {
  Mobile = '576px',
  Tablet = '768px',
  Desktop = '992px',
}

export enum FontFamily {
  Primary = 'Lora',
}

export enum FontWeight {
  Lighter = 300,
  Regular = 400,
  Medium = 600,
  Bold = 900,
}

export enum FontSize {
  XXSmall = '1rem',
  XSmall = '1.2rem',
  Small = '1.4rem',
  Medium = '1.6rem',
  Large = '2rem',
  XLarge = '2.5rem',
  XXLarge = '3.8rem',
}

export const HEADER_MENU_HEIGHT = '64px';
export const FOOTER_HEIGHT = '200px';

export const ICON_SIZE = 24;

export enum LineHeight {
  Medium = '1.7',
  Large = '2',
}

export enum Radius {
  XXSmall = '2px',
  XSmall = '8px',
  Small = '10px',
  Large = '20px',
}

export const Shadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';

export enum Spacing {
  XXSmall = '2px',
  XSmall = '4px',
  Small = '12px',
  Medium = '16px',
  Large = '48px',
  XLarge = '80px',
  XXLarge = '160px',
}

export enum Transition {
  Fast = '0.3s',
  Slow = '1s',
}

export const ThumbnailSize = {
  xsmall: { width: '24px', height: '24px' },
  small: { width: '48px', height: '48px' },
  medium: { width: '72px', height: '72px' },
  large: { width: '120px', height: '120px' },
  xlarge: { width: '160px', height: '160px' },
  rectangle: { width: '64px', height: '48px' },
  default: { width: '100%', height: '72px' },
};

export const PictureSize = {
  xsmall: { width: '320px', height: '240px' },
  small: { width: '640px', height: '480px' },
  medium: { width: '960px', height: '720px' },
  large: { width: '1280px', height: '960px' },
  xlarge: { width: '1600px', height: '1280px' },
  rectangle: { width: '400px', height: '300px' },
};

export enum ZIndex {
  Ground = 0,
  First = 1,
  Second = 2,
  Third = 3,
  Top = 4,
  Modal = 5,
}

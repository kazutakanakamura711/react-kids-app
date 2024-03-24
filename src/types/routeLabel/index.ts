export const RouteLabelType = {
  Top: 'Top',
  Home: 'Home',
} as const;

export type RouteLabelType =
  (typeof RouteLabelType)[keyof typeof RouteLabelType];

export const RouteLabelTypeDisplay = {
  [RouteLabelType.Top]: 'Top',
  [RouteLabelType.Home]: 'Home',
};

export const parseRouteLabelType = (
  value: string,
): RouteLabelType | undefined => {
  switch (value) {
    case RouteLabelType.Top:
      return RouteLabelType.Top;
    case RouteLabelType.Home:
      return RouteLabelType.Home;
    default:
      return undefined;
  }
};

export const getRouteLabelTypeDisplay = (value: string) => {
  switch (value) {
    case RouteLabelType.Top:
      return RouteLabelTypeDisplay[RouteLabelType.Top];
    case RouteLabelType.Home:
      return RouteLabelTypeDisplay[RouteLabelType.Home];
    default:
      return undefined;
  }
};

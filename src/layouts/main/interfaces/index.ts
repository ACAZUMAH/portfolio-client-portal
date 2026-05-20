export interface MainHeaderProps {
  headerRef: React.RefObject<HTMLElement | null>;
  toggle: () => void;
  opened: boolean;
}

export interface MainDrawerProps {
  opened: boolean;
  close: () => void;
}

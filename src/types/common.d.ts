interface Statistic {
  key: string;
  value: string;
  description: string;
}

interface Menu {
  key: string;
  label: string;
  href: string;
  items?: Menu[];
}

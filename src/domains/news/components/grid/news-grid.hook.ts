import { useState } from "react";

import type { NewsGridProps } from "./news-grid";

const useNewsGrid = (props: NewsGridProps) => {
  const [category, setCategory] = useState("all");

  return { category, setCategory };
};

export { useNewsGrid };

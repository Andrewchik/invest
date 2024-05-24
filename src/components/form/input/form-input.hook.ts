import { useState, useMemo } from "react";

import type { FormInputProps } from "./form-input";

const useFormInput = (props: FormInputProps) => {
  const [hidden, setHidden] = useState(false);

  const type = useMemo(() => {
    if (hidden) return "text";

    return props.type;
  }, [hidden, props.type]);

  return { type, hidden, setHidden };
};

export { useFormInput };

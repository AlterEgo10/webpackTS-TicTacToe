import { useState } from "react";


export default function useInput(defaultValue = '',
  name = '',
  required = false,
) {
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState<string | null>(null);
  return {
    id: name,
    name,
    value,
    error,
    onBlur: (event:  React.FocusEvent<HTMLInputElement>) => {
      setError(!event.target.value && required ? 'Поле обязательно для заполнения': null
      )
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
  };
}

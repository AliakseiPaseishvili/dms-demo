import { useCallback, useState } from "react"

export const useToggleWork = () => {
  const [isWorking, setWork] = useState<boolean>(false);

  const toggleWork = useCallback(() => setWork(prevValue => !prevValue) ,[setWork])

  return {
    isWorking,
    toggleWork,
  }
}
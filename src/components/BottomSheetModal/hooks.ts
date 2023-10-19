import { useCallback, useState } from "react";

export const useBottomSheetControllers = () => {
  const [isOpened, toggleOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => toggleOpen(true), [toggleOpen]);
  const onClose = useCallback(() => toggleOpen(false), [toggleOpen]);

  return {
    isOpened,
    onOpen,
    onClose,
  };
};

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, FC, useEffect } from "react";
import { ReactChildren } from "../../types";

type BottomSheetModalComponentProps = ReactChildren & {
  isOpened: boolean;
  onClose: () => void;
};

export const BottomSheetModalComponent: FC<BottomSheetModalComponentProps> = ({
  children,
  isOpened,
  onClose,
}) => {
  const ref = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (isOpened) {
      ref?.current?.present();
    } else {
      ref?.current?.dismiss();
    }
  }, [isOpened, ref]);

  return (
    <BottomSheetModal
      ref={ref}
      onDismiss={onClose}
      snapPoints={["25%", "50%"]}
      index={0}
    >
      {children}
    </BottomSheetModal>
  );
};

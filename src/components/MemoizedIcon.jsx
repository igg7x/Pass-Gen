import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utiliza React.memo para memorizar el componente FontAwesomeIcon
const MemoizedFontAwesomeIcon = memo(({ icon, size }) => {
  return <FontAwesomeIcon size={size} icon={icon} />;
});

export default MemoizedFontAwesomeIcon;

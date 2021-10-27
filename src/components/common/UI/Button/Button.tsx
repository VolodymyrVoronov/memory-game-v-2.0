import { memo, ReactElement } from "react";
import { motion } from "framer-motion";

import { ButtonContainer } from "./Button.styled";

interface ButtonProps {
  buttonText: string;
  mt?: number;
  onClick: () => void;
}

const Button = ({ buttonText, mt, onClick }: ButtonProps): ReactElement => {
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
      <ButtonContainer onClick={onClick} type="button" mt={mt}>
        {buttonText}
      </ButtonContainer>
    </motion.div>
  );
};

export default memo(Button);

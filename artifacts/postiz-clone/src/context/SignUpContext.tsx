import { createContext, useContext, useState, type ReactNode } from "react";
import SignUpModal from "@/components/SignUpModal";

interface SignUpContextType {
  openSignUp: (source?: string) => void;
  closeSignUp: () => void;
}

const SignUpContext = createContext<SignUpContextType>({
  openSignUp: () => {},
  closeSignUp: () => {},
});

export function SignUpProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("website");

  const openSignUp = (src = "website") => {
    setSource(src);
    setIsOpen(true);
  };

  const closeSignUp = () => setIsOpen(false);

  return (
    <SignUpContext.Provider value={{ openSignUp, closeSignUp }}>
      {children}
      <SignUpModal isOpen={isOpen} onClose={closeSignUp} source={source} />
    </SignUpContext.Provider>
  );
}

export function useSignUp() {
  return useContext(SignUpContext);
}

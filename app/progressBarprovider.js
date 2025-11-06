'use client';
import { AppProgressBar } from "next-nprogress-bar";
const Providers = ({ children }) => {
  // console.log("ProgressBar");
  return (
    <>
      <AppProgressBar
        height="3px"
        color="#09143f"
        options={{ showSpinner: false }}
        shallowRouting={false}
      />
      {children}
    </>
  );
};

export default Providers;
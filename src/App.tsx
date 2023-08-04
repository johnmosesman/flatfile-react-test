import { useSpace, ISpace, makeTheme } from "@flatfile/react";
import { config } from "./config";
// import { listener } from './listener.ts'
import { useState } from "react";

export const ExampleApp = () => {
  const [showSpace, setShowSpace] = useState(false);

  const space = useSpace({
    name: "Embedded Space",
    publishableKey: "pk_wKvKqHLnAO1AmYuadICn3EH7e7TnfEDU",
    environmentId: "us_env_bbNzVTCo",
    workbook: config,
    // listener: listener,
    closeSpace: {
      operation: "contacts:submit",
      onClose: () => setShowSpace(false),
    },
  });

  return (
    <div style={{ padding: "16px" }}>
      <button
        onClick={() => {
          setShowSpace(!showSpace);
        }}
      >
        {showSpace === true ? "Close" : "Open"} space
      </button>
      {showSpace && space}
    </div>
  );
};

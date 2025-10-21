"use client";

import { useEffect } from "react";

export default function CallPage() {
  useEffect(() => {
    const loadSophiieScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn-dev.sophiie.ai/call/bundle.mjs";
      script.type = "module";
      script.onload = () => {
        // Load and initialize the component once the script is loaded
        const targetElement = document.getElementById(
          "sophiie-custom-target-call-frame"
        );
        // @ts-ignore
        window?.sophiie?.call.load({
          orgId: "org_3qVtWHNHpBeMxh3345uBbSsCQQZa", // Replace with your Organization ID
          environment: "development",
          render: {
            mode: "dialog",
            target: targetElement,
          },
          customization: {
            buttonVariant: "primary",
            buttonText: "Call Now",
          },
        });
      };
      document.body.appendChild(script);
    };

    loadSophiieScript();

    return () => {
      // Cleanup if needed when the component unmounts
      const script = document.querySelector(
        'script[src="https://cdn-dev.sophiie.ai/call/bundle.mjs"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <p>test call now</p>
      <div id="sophiie-custom-target-call-frame"></div>
      <div
        id="sophiie-call-now-error"
        style={{
          color: "red",
          fontSize: "16px",
        }}
      ></div>
    </div>
  );
}

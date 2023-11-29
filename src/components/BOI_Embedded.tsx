import React from "react";
import { WebView } from "react-native-webview";

interface BOIEmbeddedProps {
  apiUrl: string;
}

const BOIEmbedded: React.FC<BOIEmbeddedProps> = ({ apiUrl }) => {
  const htmlContent = `
    <div id="gwsEmbeddedForm" data-365-id="{USER_HASHED_365ID}"></div>
    <script>
      (function (u, t) {
        const root = document.getElementById(t);
        const init = (scripts) => scripts.map((s) => {
          const e = document.createElement('script');
          ['src', 'nomodule'].forEach((a) => s[a] && e.setAttribute(a, s[a]));
          root.parentNode.insertBefore(e, root.nextSibling);
        });
        const x = new XMLHttpRequest();
        x.onreadystatechange = function () {
          try {
            if (this.readyState == this.DONE && this.status == 200) {
              init(JSON.parse(x.responseText));
            }
          } catch (error) {
            console.error(error);
            root.innerHTML = "Sorry there was a problem loading this page.";
          }
        };
        x.open('GET', u, true);
        x.send();
      })(\`${apiUrl}\`, 'gwsEmbeddedForm');
    </script>
  `;

  return (
    <WebView
      source={{ html: htmlContent }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      scalesPageToFit={true}
    />
  );
};

export default BOIEmbedded;

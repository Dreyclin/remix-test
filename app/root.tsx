import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import "./root.css";
import Layout from "./modules/Layout";
import '@atlaskit/css-reset';

export default function App() {
  return (
      <html>
      <head>
        <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>

      <Layout>
          <Outlet />
      </Layout>

      <Scripts />
      </body>
      </html>
  );
}
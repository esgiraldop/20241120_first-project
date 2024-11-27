import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import { Form } from "./components/form.component";
import { Layout } from "./components/layout";
import { theme } from "./theme/app.theme";

function App() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Form />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;

import './App.css';
import { HeaderBar } from './common/components/headerbar';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './routes/routes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <HeaderBar />
          <AppRouter />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

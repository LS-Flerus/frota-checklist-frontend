import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Provider } from './components/ui/provider';
import { PublicRoutes } from './routes/Router';

function App() {
  const router = createBrowserRouter([
    ...PublicRoutes,
    {
      path: "*",
      element: (
        <Navigate
          to={"/login/"}
        />
      ),
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 15000,
      },
    },
  });

  return (
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
  )
}

export default App

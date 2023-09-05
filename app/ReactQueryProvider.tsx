'use client';
import { PropsWithChildren } from '@/types/Props';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ReactQueryProviderProps {
  
}

const ReactQueryProvider = ({ children }: PropsWithChildren<ReactQueryProviderProps>): ReactElement => {

    const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
        { children }
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
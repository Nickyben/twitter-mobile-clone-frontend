import React from "react";
import { ScreenError } from "../constants/error/types";
import { useIsMounted } from "usehooks-ts";

interface IReturn {
  error: ScreenError;
  isLoading: boolean;
  isSuccessful: boolean;
  result: unknown;
  processAsync: (processFunction: ProcessFunction) => Promise<void>;
}

type ProcessFunction = () => unknown;

export const useProcessAsync = (): IReturn => {
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = React.useState<boolean>(false);
  const [error, setError] = React.useState<ScreenError>(null);
  const [result, setResult] = React.useState<unknown>();

  const processAsync = React.useCallback(
    async (processFunction: ProcessFunction) => {
      setIsLoading(true);
      setError(null);
      setIsSuccessful(false);
      try {
        const result = await processFunction();
        setIsLoading(false);
        setError(null);
        setIsSuccessful(true);
        setResult(result);
      } catch (error) {
        if (isMounted()) {
          setIsLoading(false);
          setIsSuccessful(false);
          setError({...error, message:error.message, data:error.data});
        }
      }
    },
    [isMounted]
  );

  return {
    isLoading,
    error,
    isSuccessful,
    result,
    processAsync,
  };
};

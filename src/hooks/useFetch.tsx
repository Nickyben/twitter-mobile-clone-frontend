import React from "react";

interface IReturn {
  error: Error | Array<Error> | string;
  loading: boolean;
  data: any;
}
export const useFetch = (
  fetchFunction?: (...any) => void,
  fetchUrl?: string
): IReturn => {
  React.useEffect(() => {
    async function exec() {
      if (fetchFunction) {
        try {
          await fetchFunction();
        } catch (error) {
          throw Error;
        }
      }
    }
  }, []);

  return {
    loading: true,
    error: new Error(),
    data: {},
  };
};

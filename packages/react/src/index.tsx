import { sendTransaction, type SendTransactionParams } from '@aa-kit/core';
import { useState } from 'react';

/**
 * React hook for sending AA transactions
 */
export function useAATransaction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hash, setHash] = useState<string | null>(null);

  const send = async (params: SendTransactionParams) => {
    try {
      setLoading(true);
      setError(null);
      const txHash = await sendTransaction(params);
      setHash(txHash);
      return txHash;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    send,
    loading,
    error,
    hash,
    reset: () => {
      setError(null);
      setHash(null);
    },
  };
}

export default {
  useAATransaction,
};
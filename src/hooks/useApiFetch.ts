import { useState, useRef, useCallback } from 'react'
import axios, { CancelTokenSource, AxiosError } from 'axios'

import { getToken } from '../utils/auth'

function getHeaders(): Record<string, string> {
  const token = getToken()
  const headers = { 'Content-Type': 'application/json' }
  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers
}

function getUrl(endpoint: string): string {
  return `${process.env.REACT_APP_API_ENDPOINT}${endpoint}`
}

function parseValidationErrors(
  error: Error | AxiosError
): null | Record<string, string> {
  if (!axios.isAxiosError(error)) {
    return null
  }

  const { name, errors } = error?.response?.data
  let output = null
  if (['VALIDATION_ERROR', 'AJV_VALIDATION_ERROR'].includes(name)) {
    output = errors.reduce(
      (
        acc: Record<string, string>,
        curr: { message: string; dataPath: string }
      ) => ({
        ...acc,
        [curr.dataPath.substr(1)]: curr.message,
      }),
      {}
    )
  }
  return output
}

export default function useApiFetch<TResponseData, TData = null>(args: {
  endpoint: string
  method: 'get' | 'post'
  onValidationError?: (errors: Record<string, string>) => void
  onSuccess?: (data: TResponseData) => void
  onError?: (err: AxiosError) => void
}): {
  data: TResponseData | null
  loading: boolean
  error: Error | null
  call: (config?: { data?: TData; params?: Record<string, string> }) => void
  cancel: () => void
} {
  const { endpoint, method, onValidationError, onError, onSuccess } = args
  const [data, setData] = useState<TResponseData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const cancelTokenSource = useRef<CancelTokenSource>()

  const cancel = useCallback(() => {
    if (cancelTokenSource.current) {
      cancelTokenSource.current.cancel()
    }
  }, [])

  const call = useCallback(
    ({ data, params } = {}) => {
      setLoading(true)
      setData(null)
      setError(null)
      cancelTokenSource.current = axios.CancelToken.source()
      axios({
        method,
        data,
        params,
        cancelToken: cancelTokenSource.current.token,
        url: getUrl(endpoint),
        headers: getHeaders(),
      })
        .then((res) => {
          setLoading(false)
          setData(res.data)
          if (onSuccess) {
            onSuccess(res.data)
          }
        })
        .catch((err) => {
          setLoading(false)
          setError(err)
          const hasErrors = parseValidationErrors(err)
          if (hasErrors && onValidationError) {
            onValidationError(hasErrors)
          }

          if (!hasErrors && onError) {
            onError(err)
          }
        })
    },
    [method, endpoint, onValidationError, onError, onSuccess]
  )

  return { data, loading, error, call, cancel }
}

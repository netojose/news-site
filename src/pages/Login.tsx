import React, { useState, useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import AppContext from '../contexts/app'
import PageTitle from '../components/PageTitle'
import Alert from '../components/Alert'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Button from '../components/Form/Button'

import useApiFetch from '../hooks/useApiFetch'
import { AuthResponse } from '../utils/types'

interface Inputs {
  email: string
  password: string
}

export default function Login(): React.ReactElement {
  const history = useHistory()
  const { setContextData } = useContext(AppContext)
  const { register, handleSubmit } = useForm<Inputs>()
  const [errors, setErrors] = useState<Partial<Inputs>>({})
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false)

  const { call } = useApiFetch<AuthResponse, Inputs>({
    endpoint: 'auth/login',
    method: 'post',
    onValidationError: setErrors,
    onSuccess: (data) => {
      window.localStorage.setItem('token', data.token)
      setContextData({ user: data.user })
      history.push('/')
    },
    onError: (error) => {
      setWrongCredentials(error.response?.status === 401)
    },
  })

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      setWrongCredentials(false)
      call({ data })
    },
    [call]
  )
  return (
    <>
      <PageTitle text="Login" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Alert show={wrongCredentials} message="Wrong credentials, try again" />
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="john.doe@company.com"
          autocomplete="username"
          register={register}
          errors={errors}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="******"
          register={register}
          autocomplete="current-password"
          errors={errors}
        />
        <Button text="Login" />
      </Form>
    </>
  )
}

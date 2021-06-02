import React, { useCallback, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import AppContext from '../contexts/app'
import PageTitle from '../components/PageTitle'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Button from '../components/Form/Button'

import useApiFetch from '../hooks/useApiFetch'
import { AuthResponse } from '../utils/types'

interface Inputs {
  name: string
  email: string
  password: string
}

export default function Register(): React.ReactElement {
  const { setContextData } = useContext(AppContext)
  const history = useHistory()
  const [errors, setErrors] = useState<Partial<Inputs>>({})
  const { call, loading } = useApiFetch<AuthResponse, Inputs>({
    endpoint: 'auth/register',
    method: 'post',
    onValidationError: setErrors,
    onSuccess: (data) => {
      window.localStorage.setItem('token', data.token)
      setContextData({ user: data.user })
      history.push('/')
    },
  })

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      call({ data })
    },
    [call]
  )

  return (
    <>
      <PageTitle text="Register" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Full name"
          name="name"
          placeholder="John Doe"
          register={register}
          errors={errors}
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="john.doe@company.com"
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
        <Button text="Create account" disabled={loading} />
      </Form>
    </>
  )
}

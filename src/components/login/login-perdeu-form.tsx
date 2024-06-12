"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Enviar Email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="email / Usuário" name="login" type="text" />
        <input
          type="hidden"
          name="url"
          value={`${window.location.href.replace("perdeu", "resetar")}`}
        />

        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email Enviado.</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}

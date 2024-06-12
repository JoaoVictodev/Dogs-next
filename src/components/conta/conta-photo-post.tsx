"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "./conta-photo-post.module.css";
import photoPost from "@/actions/photo-post";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Enviar</Button>
      )}
    </>
  );
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImage] = React.useState("");

  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) setImage(URL.createObjectURL(target.files[0]));
  }

  return (
    <>
      <section className={`animeLeft ${styles.photoPost}`}>
        <form action={action}>
          <Input label="Nome" name="nome" type="text" />
          <Input label="Peso" name="peso" type="number" />
          <Input label="Idade" name="idade" type="number" />
          <input
            onChange={handleImageChange}
            type="file"
            name="img"
            id="img"
            className={styles.file}
          />
          <ErrorMessage error={state.error} />
          <FormButton />
        </form>
        <div>
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </section>
    </>
  );
}

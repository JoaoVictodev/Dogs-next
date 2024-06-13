"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./photo-comments-form.module.css";
import EnviarIcon from "@/icons/enviar-Icon";
import ErrorMessage from "../helper/error-message";
import commentPost from "@/actions/comment-post";
import React from "react";
import { Comment } from "@/actions/photo-get";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <EnviarIcon />
    </button>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: "",
  });

  React.useEffect(() => {
    if (state.ok && state.data) {
      // Ensure the new comment is of type Comment
      const newComment = state.data as unknown as Comment;
      setComments((comments) => [...comments, newComment]);
      setComment("");
    }
  }, [state, setComments]);

  const [comment, setComment] = React.useState("");

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}

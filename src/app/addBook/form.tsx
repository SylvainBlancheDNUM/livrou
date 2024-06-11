"use client";

import insertBook from "./insertBook";
import { FC } from "react";
import { useFormState } from "react-dom";

type FormState = {
  errors?: Record<string, string>;
  message?: string;
};

const initialState: FormState = {};

const NewBookForm: FC = () => {
  const [state, formAction] = useFormState(insertBook, initialState);

  return (
      <div className="mx-auto w-[400px]">
        <form action={formAction}>
          <div className="flex w-full flex-col">
            {state && state.message && <span>{state.message}</span>}
            <div className="flex w-full flex-col">
              <div className="flex flex-col w-full">
                <label>Titre</label>
                <input className={"bg-amber-700"} type="text" name="title"/>
                {state && state.errors && state.errors.title && (
                    <span className="text-red-700">{state.errors?.title}</span>
                )}
              </div>
              <div className="flex flex-col w-full mt-4">
                <label>Résumé</label>
                <textarea name="summary" className={"bg-amber-700"}/>
                {state && state.errors && state.errors.summary && (
                    <span className="text-red-700">{state.errors?.summary}</span>
                )}
              </div>
              <button type="submit">Publier</button>
            </div>
          </div>
        </form>
      </div>
);
};

export default NewBookForm;

'use client'

import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export function Dialog () {
  const { open, toggle } = useContext(DialogContext)

  return (
    <>
    { open && (
      <div className="w-10 h-10 bg-red-600">
        Dialog
      </div>
    )}
    <button onClick={toggle}>Click me</button>
    </>
  )
}
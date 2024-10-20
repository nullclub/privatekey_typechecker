"use client";

import toast from "react-hot-toast";

export function Notify() {
  toast.dismiss();
  toast.success(
    "Auth is not here yet just click on the button below to start exploring"
  );
}

import Image from "next/image";

export default function ToastNotification({ toastAction, toastMessage }) {
  return (
    <button className={`toast ${toastAction}`}>
      <Image
        src="/images/iconDone.svg"
        height={20}
        width={20}
        alt="IconDone"
      ></Image>
      {toastMessage}
    </button>
  );
}

import { StyledForm } from "./ContactUsForm.styled";
import { StyledButton } from "../Button/Button.styled";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsForm() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    toast.success("Your message was sent!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Contact us</h2>
        <label htmlFor="name">
          *Name:
          <br />
          <input type="text" id="name" name="name" required />
        </label>
        <label htmlFor="email">
          *Email:
          <br />
          <input type="email" id="email" name="email" required />
        </label>
        <label htmlFor="message">
          *Message:
          <br />
          <textarea
            id="message"
            name="message"
            rows="8"
            cols="40"
            placeholder="Write your message here..."
          />
        </label>
        <div>
          <StyledButton type="submit">Send</StyledButton>
          <StyledButton type="button" onClick={() => router.push("/")}>
            ← Home
          </StyledButton>
        </div>
      </StyledForm>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

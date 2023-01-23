import Header from "../../components/Header";
import ContactUsForm from "../../components/ContactUsForm";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→<Link href="">Contact us</Link>
      </p>
      <ContactUsForm />
    </>
  );
}

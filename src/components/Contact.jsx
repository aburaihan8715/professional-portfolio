import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 px-4">
      <div className="max-w-6xl mx-auto py-14">
        <div className="h-auto sm:min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div data-aos="zoom-in">
            <div className="p-8">
              <img className="w-full opacity-70" src="https://i.ibb.co/sFNLjCd/email.png" alt="" />
            </div>
          </div>

          <div className="">
            <div className="max-w-md mx-auto">
              <div className="space-y-5 mb-5">
                <h2 className="text-5xl font-semibold">Hire Me</h2>
                <p>I am available for freelance work. Connect with me via phone:</p>
                <p>
                  <span className="text-primary">+088 01718562225 </span>
                  <span>or email </span>
                  <span className="text-primary">aburaihan3331@gmail.com</span>
                </p>
              </div>
              {/* form */}
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// contact form
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //  alert for empty inputs
    if (!form.current[0].value || !form.current[1].value || !form.current[2].value) return toast.error("Name, Email and Message are required!");

    emailjs.sendForm("service_3ligvku", "template_6c2fgql", form.current, "iF2sH_wv3oxbN5Gx4").then(
      (result) => {
        toast.success("Message sent successfully!!");
        console.log(result.text);
      },
      (error) => {
        alert(`Something wrong | ${error.text}`);
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-6">
        {/* name input */}
        <input type="text" name="user_name" placeholder="Your name *" className="input input-bordered" />

        {/* email input */}
        <input type="email" name="user_email" placeholder="Your email *" className="input input-bordered" />

        {/* subject input */}
        {/* <input type="text" name="" placeholder="Write a subject" className="input input-bordered" /> */}

        {/* message input */}
        <textarea name="user_message" className="textarea textarea-bordered" placeholder="Write your message"></textarea>

        {/* contact actions */}
        <div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </form>
  );
};

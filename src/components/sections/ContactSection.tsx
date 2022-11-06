import Button from "@components/Button";
import { useNotification } from "@components/notifications";
import Timeline from "@components/timeline/Timeline";
import style from "@styles/contact.module.css";
import { useTranslation } from "next-i18next";
import React from "react";

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  error?: boolean;
}

const TextInput = ({
  name,
  type,
  placeholder,
  required = true,
  className = "",
}: Props) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        className={`px-6 py-3 w-full ${style.input} bg-color-3 outline-none text-color-2 placeholder:text-gray relative`}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={name} className={`${style.label}`} />
    </div>
  );
};

const TextArea = ({
  name,
  placeholder,
  required = true,
  className = "",
}: Props) => {
  return (
    <div className={`relative ${className}`}>
      <textarea
        className={`px-6 py-3 w-full ${style.input} bg-color-3 outline-none text-color-2 placeholder:text-gray relative`}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={4}
      />
      <label htmlFor={name} className={`${style.label}`} />
    </div>
  );
};

export default function ContactSection() {
  const { t } = useTranslation("contact");
  const { addNotification } = useNotification();
  const formRef = React.useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elems: any = e.currentTarget.elements;
    const data = {
      name: elems.name.value,
      email: elems.email.value,
      message: elems.message.value,
      subject: elems.subject.value,
      company: elems.company.value,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          formRef.current?.reset();
          addNotification({
            title: "Success ❤️",
            message: "Your message has been sent successfully",
            type: "success",
          });
        } else {
          addNotification({
            title: "Error 😢",
            message: (
              <span>
                Something went wrong, please try again later!
                <br /> Or you can contact me directly via email at:
                <br />
                renauddeleiris@gmail.com
              </span>
            ),
            type: "error",
          });
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        addNotification({
          title: "Error 😢",
          message: (
            <span>
              Something went wrong, please try again later!
              <br /> Or you can contact me directly via email at:
              renauddeleiris@gmail.com
            </span>
          ),
          type: "error",
        });
      });
  };

  return (
    <section id="contact" className="w-full pt-24 relative overflow-x-hidden">
      <div className="row px-4 relative md:px-12 mb-8">
        <h2 className="col text-4xl md:text-6xl font-bold text-color-1 z-[2]">
          <span className="text-primary-1">{t`title`},</span>
          <p className="text-base mt-8 font-normal pl-4">
            <span className="text-color">{t`description`}</span>
          </p>
        </h2>
      </div>
      <div className="row px-4 relative md:px-12 items-center justify-around w-full">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="w-full px-8 md:px-0 md:w-1/2 col gap-2"
        >
          <div className="row gap-2 w-full">
            <TextInput
              name="name"
              type="text"
              placeholder={"Name"}
              className="w-1/2"
              error={true}
            />
            <TextInput
              name="email"
              type="email"
              placeholder={"Email"}
              className="w-1/2"
            />
          </div>
          <TextInput
            name="company"
            type="text"
            placeholder={"Company"}
            className="w-full"
            required={false}
          />
          <TextInput
            name="subject"
            type="text"
            placeholder={"Subject"}
            className="w-full"
          />
          <TextArea name="message" placeholder={"Message"} className="w-full" />
          <Button type="submit" className="w-1/2 self-end">
            Send
          </Button>
        </form>
        <img
          src="/images/r.gif"
          alt="R"
          className="w-1/2 hidden md:block z-10"
        />
      </div>
      <span className="absolute top-28 right-0 dark:text-neutral-700 text-neutral-300 hidden xs:block text-[180px] md:text-[250px] lg:text-[350px] opacity-60 select-none leading-none">
        @
      </span>
    </section>
  );
}

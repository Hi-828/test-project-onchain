"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="bg-[#190F01] flex flex-col items-center text-[#c86c00] mt-20 md:mt-0">
      <a className="mt-8 mb-8 font-medium dark:font-bold text-center capitalize text-lg">
        Footer
      </a>

    </footer>
  );
};

export default Footer;

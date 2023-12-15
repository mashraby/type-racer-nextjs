"use client";

import { Textarea } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";

export const Typer = () => {
  let text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
    consequatur a quos saepe suscipit excepturi laboriosam exercitationem
    ipsum iusto eaque, dolores laborum quia labore! Natus quibusdam quaerat
    laboriosam dolorum dolore.`;
  const [content, setContent] = useState(text);
  const [value, setValue] = useState("");
  const [errorIndices, setErrorIndices] = useState<number[]>([]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    for (let i = 0; i < Math.min(content.length, val.length); i++) {
      if (content[i] !== value[i]) {
        // Harfni almashtirish va natijani qaytarish
        setValue(
          val.slice(0, i) +
            `<span className="text-red-500">${content[i]}</span>` +
            val.slice(i + 1)
        );
      }
    }
    setValue(val);
  };

  return (
    <div className="relative mt-20">
      <p className="absolute text-neutral-500 text-2xl">
        {content.split("").map((char, index) => (
          <span
            key={index}
            className={errorIndices.includes(index) ? "text-red-500" : ""}
          >
            {char}
          </span>
        ))}
      </p>
      <div className="relative z-50">
        <textarea
          onChange={handleChange}
          value={value}
          className="absolute bg-transparent w-full h-[80vh] text-2xl text-transparent caret-green-400 stroke-3 outline-none"
        ></textarea>
        <p
          className="absolute text-2xl text-green-400"
          dangerouslySetInnerHTML={{ __html: value }}
        >
          {/* {value.split("").map((char, index) => (
            <span
              key={index}
              className={
                errorIndices.includes(index) ? "text-red-500" : "text-green-400"
              }
            >
              {char}
            </span>
          ))} */}
        </p>
      </div>
    </div>
  );
};

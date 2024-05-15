"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++/C#</li>
        <li>Java</li>
        <li>SQL</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>I.S. Masullo-Theti</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>PON Informaticando 2022 - MIUR, I.S. Masullo-Theti</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <br />
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Informazioni su di me</h2>
          <p className="text-base lg:text-lg">
            Mi chiamo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Daniele Simeone</span>, ho 18 anni e sono uno studente del quinto anno presso l'I.S. Masullo-Theti, con un'attenzione speciale per l'Informatica.
            Sono appassionato dello sviluppo, mi dedico alla creazione di applicazioni web interattive e reattive, ma anche applicazioni software,
            ho competenze in C/C++, Java, HTML, CSS, React, Javascript, Node.js, SQL, PHP. Sono un veloce apprendista e sono sempre alla ricerca di nuove conoscenze
            e abilità, mi piace lavorare in team e sono entusiasta di collaborare con gli altri per creare applicazioni straordinarie,
            come dimostra anche la realizzazione di questo portfolio assieme al mio collega <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Scala Fabio</span>. Oltre a ciò, mi piace l'astronomia portandomi a scrutare
            il cielo notturno in cerca di meraviglie coscmiche, trovando ispirazione e riflessione tra le stelle e i pianeti, amo anche catturare momenti attraverso
            la fotografia, e trovo relax nei videogiochi, nei film/serie-tv e anime, leggere manga e quando il ritmo della vita diventa troppo frenetico,
            trovo la mia calma dietro la batteria, lasciandomi trasportare dalla magia della musica. Grazie di aver visitato il mio portfolio, spero che possa
            catturare un po' della mia essenza in ogni pagina.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Competenze{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Istruzione{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificazioni{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

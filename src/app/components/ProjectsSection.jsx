"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NexaBus",
    description: "Un software all'avanguardia dedicato alla gestione precisa degli spostamenti dei bus. Questa soluzione è stata progettata per ottimizzare, migliorare e semplificare l'intero processo, offrendo un controllo efficiente e affidabile sui movimenti del trasporto pubblico dei Bus.",
    image: "/images/projects/1.png",
    tag: ["Tutti", "Web"],
    gitUrl: "https://nexabus12.000webhostapp.com/index.html",
    previewUrl: "https://online.fliphtml5.com/kcncz/epbc/",
  },
  {
    id: 2,
    title: "P.C.T.O.",
    description: "Il PCTO ha rappresentato un'opportunità unica di esplorare il mondo della tecnologia e della sicurezza informatica. Attraverso tre anni di impegno e collaborazione, abbiamo acquisito competenze pratiche nel montaggio e nella configurazione di sistemi informatici, nonché una solida comprensione dei concetti fondamentali delle reti e della sicurezza informatica. Il nostro viaggio è stato arricchente e formativo, preparandoci per le sfide del mondo tecnologico in continua evoluzione.",
    image: "/images/projects/2.png",
    tag: ["Tutti", "Tutti"],
    gitUrl: "/PCTO.7z",
    previewUrl: "https://view.genial.ly/663d189844a98f001413f9c4/presentation-pcto",
  },
  {
    id: 3,
    title: "Dino Run 3D",
    description: "Dino Run 3D è il nostro omaggio al gioco Chrome Dino, ma ora in 3D! Attraverso semplici meccaniche di corsa e salti, esplora un mondo tridimensionale e divertiti nel superare gli ostacoli, realizzato con una grafica semplice e un gameplay intuitivo, questo progetto è stato creato con passione da due principianti. Speriamo che questa creazione sia di vostra gratitudine!",
    image: "/images/projects/3.png",
    tag: ["Tutti", "Software"],
    gitUrl: "https://github.com/DedSec-error/dino-run-3d",
    previewUrl: "https://youtu.be/XnvGGV-bhVY?si=HOKCRTL6T1_z05ps",
  },
  {
    id: 4,
    title: "IP Geolocator",
    description: "IP Geolocator è un'applicazione in C# che utilizza l'API di 'https://ipinfo.io/' per ottenere informazioni dettagliate su un indirizzo IP specifico. Fornisce dati come la posizione geografica (paese, città, coordinate), il codice postale, la regione e il provider di servizi Internet (ISP). Include anche un link diretto a Google Maps per visualizzare le coordinate geografiche sulle mappe. È uno strumento rapido e intuitivo per esplorare informazioni sugli indirizzi IP.",
    image: "/images/projects/4.png",
    tag: ["Tutti", "Software"],
    gitUrl: "https://github.com/DedSec-error/ip-geolocator",
    previewUrl: "./ipGeolocator.pdf",
  },
  {
    id: 5,
    title: "--",
    description: "--",
    image: "/images/projects/5.png",
    tag: ["Tutti", "Tutti"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "--",
    description: "--",
    image: "/images/projects/6.png",
    tag: ["Tutti", "Tutti"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tutti");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        I miei progetti
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tutti"
          isSelected={tag === "Tutti"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
